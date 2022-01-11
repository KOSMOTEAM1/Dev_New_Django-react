import { useTable } from "react-table";
import React, { useMemo, useEffect, useState } from "react";

//import axios from "axios";
//import faker from "faker/locale/ko";
import "./new.css";

function ReactTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      <div class="li_top">
        <h3 class="s_tit1">실시간 검색어</h3>
      </div>
      <div>
        <table class="table_ty2" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody class="table_ty2 fp_tlist" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

function Table() {
  const columns = useMemo(() => [
    {
      Header: "순위",
      accessor: "ORGAN_NM",
    },

    {
      Header: "영화제목",
      accessor: "COLUMN2",
    },
  ]);

  const [peopleData, setdata] = useState([]);
  const getData = async () => {
    console.log("1");
    const json = await (console.log("2-2"),
    await fetch(
      `http://openapi.seoul.go.kr:8088/746b4762786170703430676e6e4678/json/IotVdata018/1/5/`
    )).json();
    console.log("2-3");
    setdata(json.IotVdata018.row);
    console.log("2");
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("3");

  return <ReactTable columns={columns} data={peopleData} />;
}
export default Table;
