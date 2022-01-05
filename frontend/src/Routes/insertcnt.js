import Insertcnt from "../components/Graph/insertcnt";
//import { useMemo, useEffect, useState } from "react";
//import axios from "axios";
//import faker from "faker/locale/ko";

//faker.seed(100);
function insertcnt() {
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8">
                  <div className="section-title">
                    <h4>This is Community</h4>
                    <Insertcnt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default insertcnt;
