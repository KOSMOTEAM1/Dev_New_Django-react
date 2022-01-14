import React from 'react';
import MovieChart from '../components/rechart-DB/MovieChart';

const Charts = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-6">
                    <MovieChart />
                </div>
            </div>
        </div>
    );
};

export default Charts;
