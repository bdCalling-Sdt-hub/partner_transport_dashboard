import React from 'react'
import { PieChart, Pie, Cell, Legend } from "recharts";
const SupervisionDashboard = () => {
    const data = [
        { name: "Completed", value: 80 }, // Adjust values as needed
        { name: "Ongoing", value: 20 },
    ];

    // Colors for the chart
    const COLORS = ["#0088FE", "#FFBB28"];
    return (
        <div className=' p-4 rounded-md'>
            <div className='flex items-center justify-between gap-10'>
                <div className='bg-white w-full py-8 rounded-md text-center '>
                    <p className='text-2xl'>Active Admins</p>
                    <p className='text-2xl font-semibold'>82</p>
                </div>
                <div className='bg-white w-full py-8 rounded-md text-center '>
                    <p className='text-2xl'>Total Tasks</p>
                    <p className='text-2xl font-semibold'>852</p>
                </div>
                <div className='bg-white w-full py-8 rounded-md text-center '>
                    <p className='text-2xl'>Complete Tasks</p>
                    <p className='text-2xl font-semibold'>650</p>
                </div>
                <div className='bg-white w-full py-8 rounded-md text-center '>
                    <p className='text-2xl'>Tasks in Progress</p>
                    <p className='text-2xl font-semibold'>345</p>
                </div>
            </div>

            <div className='grid grid-cols-12 gap-2'>
                <div className='col-span-8'>

                </div>
                <div className='bg-white mt-5 col-span-4 rounded-md ' style={{ textAlign: "center" }}>
                    <h3 className='text-2xl font-semibold py-2'>Task Completion Rate</h3>
                    <PieChart width={200} height={200} className='mx-auto'>
                        {/* Create the Pie */}
                        <Pie
                            data={data}
                            cx="50%" // Center X
                            cy="50%" // Center Y
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {/* Map colors to the segments */}
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        {/* Add a Legend */}

                    </PieChart>
                </div>
            </div>

        </div>
    )
}

export default SupervisionDashboard