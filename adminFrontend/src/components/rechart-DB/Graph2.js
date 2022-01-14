import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from 'recharts';

const date = new Date();
const year = date.getFullYear();
const zero = '0';
const a = zero + String(1 + date.getMonth()).slice(-2);
const b = zero + String(date.getDate() - 7).slice(-2);
const todaydate = year + a + b;
const BarChart1 = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        axios
            .get(
                `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&weekGb=0&targetDt=${todaydate}`
            )
            .then((res) =>
                setData(res.data.boxOfficeResult.weeklyBoxOfficeList)
            );
        // console.log(data);
    }, []);

    return (
        <div>
            <LineChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="movieNm"
                    interval={0}
                    angle={15}
                    dx={0}
                    fontSize={13}
                />
                <YAxis domain={[-10, 50]} />
                <Tooltip />
                <ReferenceLine y={0} stroke="#FF0000" />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="rankInten"
                    name="전주 대비 순위 변화"
                    stroke="#8884d8"
                    activeDot={{r: 8}}
                />
            </LineChart>
        </div>
    );
};

export default BarChart1;
