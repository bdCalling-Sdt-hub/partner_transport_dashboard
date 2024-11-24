import React from 'react'
import AdminTaskTable from '../../Components/AdminTaskTable/AdminTaskTable'
import { Link } from 'react-router-dom'
import { Cell, Pie, PieChart } from 'recharts'
import ActiveAdmins from '../../Components/ActiveAdmins/ActiveAdmins'
import img from '../../assets/images/conver.png'
import { Select } from 'antd'

const AuditDashboard = () => {
    const data = [
        { name: "Completed", value: 20 }, // Adjust values as needed
        { name: "Ongoing", value: 20 },
        { name: 'Waste', value: 20 },
        { name: 'second-hand', value: 20 },
    ];

    // Colors for the chart
    const COLORS = ["#0088FE", "#F2AA00", "#BF0000", "#00DF00"];
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
    ]
    return (
        <div className=' p-4 rounded-md'>


            <div className='grid grid-cols-12 gap-5 mt-5'>
                <div className='col-span-8  rounded-md '>
                    <div className='flex items-center justify-between gap-5'>

                        <div className='bg-white w-full py-8 rounded-md text-center '>
                            <p className='text-2xl'>Total Number of Event</p>
                            <p className='text-2xl font-semibold'>650</p>
                        </div>
                        <div className='bg-white w-full py-8 rounded-md text-center '>
                            <p className='text-2xl'>Most Common Event Type</p>
                            <p className='text-2xl font-semibold'>Goods</p>
                        </div>
                    </div>
                    <div className='bg-white mt-5 rounded-md'>
                        <div className='flex items-center justify-between px-5'>
                            <div className='mt-2 ml-2 text-xl font-medium'>Most Event Created By Users</div>
                            <Link to={'/task-completed'} className='text-blue-500'>View All</Link>
                        </div>
                        <AdminTaskTable dataSource={dataSource} />
                    </div>
                </div>
                <div className='bg-white  col-span-4 rounded-md flex flex-col items-center justify-center ' style={{ textAlign: "center" }}>
                    <div className='flex items-center justify-center gap-5'>
                        <h3 className='text-2xl font-semibold py-2'>Event Creation Rate</h3>
                        <Select
                            defaultValue="daily"
                            style={{ width: 80 }}
                            // onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Monthly' },
                                { value: 'lucy', label: 'Yearly' },
                            ]}
                        />
                    </div>
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
                        <p>Goods</p>

                        <span className='bg-[#F2AA00]  h-3 w-3 ml-10 mr-1'></span>
                        <p><span className=''></span>Recyclable Materials</p>
                    </div>
                    <div className='flex items-center justify-center py-2 '>
                        <span className='bg-[#BF0000]  h-3 w-3 mr-1'></span>
                        <p>Waste</p>

                        <span className='bg-[#00DF00]  h-3 w-3 ml-10 mr-1'></span>
                        <p><span className=''></span>Second-hand items</p>
                    </div>
                </div>
            </div>
            <ActiveAdmins />

        </div>
    )
}

export default AuditDashboard