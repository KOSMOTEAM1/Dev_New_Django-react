import {useTable} from 'react-table';
import React, {useMemo, useEffect, useState} from 'react';

function ReactTable({columns, data}) {
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} =
        useTable({columns, data});
    return (
        <section>
            <article>
                <div>
                    <div>
                        <h2>This is where Table will come</h2>
                    </div>
                </div>
                <div>
                    <table {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {rows.map((row) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>
                                                {cell.render('Cell')}
                                            </td>
                                        ))}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    );
}

function Table() {
    const columns = useMemo(() => [
        {
            Header: 'ORGAN',
            accessor: 'ORGAN_NM'
        },
        {
            Header: 'TRANSMIT',
            accessor: 'TRANSMIT_SERVER_NO'
        },
        {
            Header: 'DATA',
            accessor: 'DATA_NO'
        },
        {
            Header: 'COLUMN0',
            accessor: 'COLUMN0'
        },

        {
            Header: 'COLUMN1',
            accessor: 'COLUMN1'
        },
        {
            Header: 'COLUMN2',
            accessor: 'COLUMN2'
        },
        {
            Header: 'COLUMN3',
            accessor: 'COLUMN3'
        }
    ]);

    const [peopleData, setdata] = useState([]);
    const getData = async () => {
        console.log('1');
        const json = await (console.log('2-2'),
        await fetch(
            `http://openapi.seoul.go.kr:8088/746b4762786170703430676e6e4678/json/IotVdata018/1/5/`
        )).json();
        console.log('2-3');
        setdata(json.IotVdata018.row);
        console.log('2');
    };

    useEffect(() => {
        getData();
    }, [{}]);

    console.log('3');

    return <ReactTable columns={columns} data={peopleData} />;
}
export default Table;
