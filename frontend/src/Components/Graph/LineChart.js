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
      <LineChart
        width={1000}
        height={600}
        data={this.state.responseFPList.data}
        margin={{
          top: 30,
          right: 60,
          left: 40,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="coin_counter" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="coin_counter"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  }
}

export default floatingPopulationList;
