import { Select } from 'antd';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DailyOverViewChart = () => {
    const data = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sept',
            uv: 1340,
            pv: 3430,
            amt: 2100,
        },
        {
            name: 'Oct',
            uv: 1740,
            pv: 1430,
            amt: 2100,
        },
        {
            name: 'Nov',
            uv: 5740,
            pv: 3430,
            amt: 2100,
        },
        {
            name: 'Dec',
            uv: 4740,
            pv: 8430,
            amt: 2100,
        },
    ]
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const items = [
        {
            label: 2023,
            key: "2023",
        },
        {
            label: 2024,
            key: "2024",
        },
        {
            label: 2025,
            key: "2025",
        },
        {
            label: 2026,
            key: "2026",
        },
    ];
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='ml-6'>
                    <p className='text-2xl font-semibold  '>Daily Overview</p>
                    <div className='flex items-center gap-5 my-2'>
                        <div>
                            <p>Yearly Growth</p>
                            <p className='font-medium'>78.18%</p>
                        </div>
                        <div>
                            <p>Monthly</p>
                            <p className='font-medium'>82.00%</p>
                        </div>
                        <div>
                            <p>Daily</p>
                            <p className='font-medium'>89.80%</p>
                        </div>
                    </div>
                </div>
                <Select
                    defaultValue="2024"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={items}
                />
            </div>
            <div className='w-full h-[400px]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={300}
                        height={500}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="uv" stackId="a" fill="#2AB9A4" barSize={25} radius={[20, 20, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default DailyOverViewChart