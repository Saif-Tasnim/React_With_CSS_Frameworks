import React from 'react';
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {

    const students = [
        {
            id: 1,
            name: "John",
            physics: 92,
            chemistry: 85,
            math: 78
        },
        {
            id: 2,
            name: "Emily",
            physics: 76,
            chemistry: 90,
            math: 83
        },
        {
            id: 3,
            name: "Michael",
            physics: 89,
            chemistry: 81,
            math: 92
        },
        {
            id: 4,
            name: "Sarah",
            physics: 94,
            chemistry: 88,
            math: 79
        },
        {
            id: 5,
            name: "David",
            physics: 82,
            chemistry: 93,
            math: 87
        },
        {
            id: 6,
            name: "Emma",
            physics: 88,
            chemistry: 76,
            math: 91
        },
        {
            id: 7,
            name: "Daniel",
            physics: 77,
            chemistry: 84,
            math: 95
        },
        {
            id: 8,
            name: "Olivia",
            physics: 83,
            chemistry: 92,
            math: 80
        },
        {
            id: 9,
            name: "James",
            physics: 90,
            chemistry: 79,
            math: 86
        },
        {
            id: 10,
            name: "Sophia",
            physics: 79,
            chemistry: 87,
            math: 94
        },
        {
            id: 11,
            name: "Liam",
            physics: 85,
            chemistry: 91,
            math: 77
        },
        {
            id: 12,
            name: "Ava",
            physics: 93,
            chemistry: 78,
            math: 84
        }
    ];


    return (
        <div>
            <LineChart
                width={1000}
                height={600}
                data={students}
            >
                <Line dataKey='physics' stroke='indigo'> </Line>
                <Line dataKey='chemistry' stroke='red'> </Line>
                <Line dataKey='math'> </Line>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

            </LineChart>

        </div>
    );
};

export default Dashboard;