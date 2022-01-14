import axios from "axios";
import React, { Component } from "react";
import "./new.css";

class CoinListClass extends Component {
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
      .get(
        "http://openapi.seoul.go.kr:8088/746b4762786170703430676e6e4678/json/IotVdata018/1/5/",
        {}
      )
      .then((response) => {
        try {
          this.setState({ responseFPList: response });
          this.setState({ append_FPList: this.FloatPopulListAppend() });
        } catch (error) {
          alert(error);
        }
      })
      .catch((error) => {
        alert(error);
        return false;
      });
  };
  FloatPopulListAppend = () => {
    let result = [];
    var FPList = this.state.responseFPList.data;
    var jsonString = JSON.stringify(FPList);
    //jsonString = jsonString.replace(/\(1시간단위\)/g, '')
    //jsonString = jsonString.replace(/\(10세단위\)/g, '')
    var json = JSON.parse(jsonString);

    for (let i = 0; i < json.IotVdata018.row.length; i++) {
      var data = json.IotVdata018.row[i];
      var idx = i + 1;
      result.push(
        <tr class="hidden_type">
          <td>{idx}</td>
          <td>{data.REGIST_DT}</td>
          <td>{data.ORGAN_NM}</td>
          <td>{data.TRNSMIT_SERVER_NO}</td>
          <td>{data.DATA_NO}</td>
          <td>{data.COLUMN0}</td>
          <td>{data.COLUMN1}</td>
          <td>{data.COLUMN6}</td>
        </tr>
      );
    }
    return result;
  };
  render() {
    return (
      <section class="sub_wrap">
        <article class="s_cnt mp_pro_li ct1 mp_pro_li_admin">
          <div class="li_top">
            <h2 class="s_tit1">서울시 유동인구 데이터 - 19년 11월</h2>
          </div>
          <div class="list_cont list_cont_admin">
            <table class="table_ty1 fp_tlist">
              <tr>
                <th>Row</th>
                <th>일자</th>
                <th>시간</th>
                <th>연령대</th>
                <th>성별</th>
                <th>시</th>
                <th>군구</th>
                <th>유동인구수</th>
              </tr>
            </table>
            <table class="table_ty2 fp_tlist">{this.state.append_FPList}</table>
          </div>
        </article>
      </section>
    );
  }
}

export default CoinListClass;
