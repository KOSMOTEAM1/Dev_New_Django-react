import React, { Component } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class floatingPopulationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseFPList: "",
      append_FPList: "",
    };
  }

  componentDidMount() {
    this.callFloatPopulListApi();
  }

  callFloatPopulListApi = async () => {
    axios
      .get("https://api.coinpaprika.com/v1/tags", {})
      // alert("메롱")
      .then((response) => {
        try {
          this.setState({ responseFPList: response });
          // this.setState({ append_FPList: this.FloatPopulListAppend() });
        } catch (error) {
          alert(error);
        }
      })
      .catch((error) => {
        alert(error);
        return false;
      });
  };

  // FloatPopulListAppend = () => {
  //     // let result = []
  //     // var FPList = this.state.responseFPList.data
  //     // for(let i=0; i<FPList.length; i++){
  //     //     var data = FPList[i]
  //     //     var idx = i+1
  //     //     result.push(
  //     //         <tr class="hidden_type">
  //     //             <td>{idx}</td>
  //     //             <td>{data.movieNm}</td>
  //     //             <td>{data.rank}</td>
  //     //         </tr>
  //     //     )
  //     // }
  //     // return result
  // }

  render() {
    return (
      // <ResponsiveContainer width="100%" height="100%">
      //     <BarChart width={150} height={40} data={data}>
      //         <Bar dataKey="uv" fill="#8884d8" />
      //         </BarChart>
      // </ResponsiveContainer>
      <div
        style={{
          paddingBottom: "56.25%" /* 16:9 */,
          position: "relative",
          //height: 200,
          //width: 500,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <ResponsiveContainer>
            <LineChart
              data={this.state.responseFPList.data}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis dataKey="coin_counter" />
              <Tooltip />
              <Legend />
              <Line
                dataKey="coin_counter"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default floatingPopulationList;
