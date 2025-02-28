import React from 'react';
import LineChart from './line-chart';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
        {LineChart()}
        </div>
    );
};

export default Dashboard;