import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {PieChart, Pie, Tooltip, Legend, Cell} from 'recharts';

// eslint-disable-next-line consistent-return
const date = new Date();
const year = date.getFullYear();
const zero = '0';
const a = zero + String(1 + date.getMonth()).slice(-2);
const b = zero + String(date.getDate() - 1).slice(-2);
const todaydate = year + a + b;
console.log(todaydate);
const Test1 = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        axios
            .get('http://localhost:8000/graphapi/')
            .then((res) => setData(res.data));
        console.log('데이터', data);
    }, []);

    return (
        <PieChart width={800} height={600}>
            <Pie
                dataKey="audiCnt"
                data={data}
                nameKey="name"
                isAnimationActive={false}
                cx="50%"
                cy="50%"
                outerRadius={200}
                fill="#8884d8"
                label="name"
            >
                <Cell key="{cell-1}" fill="#0000CC" />
                <Cell key="{cell-2}" fill="#0066CC" />
                <Cell key="{cell-3}" fill="#00CCCC" />
                <Cell key="{cell-4}" fill="#00CC66" />
                <Cell key="{cell-5}" fill="#00CC00" />
                <Cell key="{cell-6}" fill="#404040" />
                <Cell key="{cell-7}" fill="#606060" />
                <Cell key="{cell-8}" fill="#808080" />
                <Cell key="{cell-9}" fill="#A0A0A0" />
                <Cell key="{cell-10}" fill="#C0C0C0" />
            </Pie>
            <Tooltip />
            <Legend
                iconSize={10}
                width={200}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                align="left"
            />
        </PieChart>
    );
};

export default Test1;
