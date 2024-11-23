import React from 'react'
import { PieChart, Pie, Cell, Legend } from "recharts";
import AdminTaskTable from '../../Components/AdminTaskTable/AdminTaskTable';
import img from '../../assets/images/conver.png'
import { Link } from 'react-router-dom';

const SupervisionDashboard = () => {
    const data = [
        { name: "Completed", value: 80 }, // Adjust values as needed
        { name: "Ongoing", value: 20 },
    ];

    // Colors for the chart
    const COLORS = ["#0088FE", "#FFBB28"];

    const dataSource = [
        {
            key: "1",
            slNo: "#12333",
            task: "Reviewing user payment dispute",
            admin: {
                name: "Jacob Jones",
                avatar: img,
            },
            status: "Resolved",
        },
        {
            key: "2",
            slNo: "#12333",
            task: "User management activity",
            admin: {
                name: "Darlene Robertson",
                avatar: img,
            },
            status: "Resolved",
        },
        {
            key: "3",
            slNo: "#12333",
            task: "User management activity",
            admin: {
                name: "Brooklyn Simmons",
                avatar: img,
            },
            status: "Resolved",
        },
        {
            key: "3",
            slNo: "#12333",
            task: "User management activity",
            admin: {
                name: "Brooklyn Simmons",
                avatar: img,
            },
            status: "Resolved",
        }
    ]
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

            <div className='grid grid-cols-12 gap-5 mt-5'>
                <div className='col-span-8 bg-white rounded-md '>
                    <div className='flex items-center justify-between px-5'>
                        <div className='mt-2 ml-2 text-2xl font-medium'>Task Completed</div>
                        <Link to={'/task-completed'} className='text-blue-500'>View All</Link>
                    </div>
                    <AdminTaskTable dataSource={dataSource} />
                </div>
                <div className='bg-white  col-span-4 rounded-md flex flex-col items-center justify-center ' style={{ textAlign: "center" }}>
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
                    <div className='flex items-center justify-center '>
                        <span className='bg-[#0088FE]  h-3 w-3 mr-1'></span>
                        <p>Complete</p>

                        <span className='bg-[#FFBB28]  h-3 w-3 ml-10 mr-1'></span>
                        <p><span className=''></span>Ongoing</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SupervisionDashboard