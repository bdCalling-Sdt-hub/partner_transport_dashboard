import React from 'react'
import { Link } from 'react-router-dom'
import { Cell, Pie, PieChart } from 'recharts'
import { Select } from 'antd'
import MostCreateEventUserTable from '../../Components/MostCreateEventUserTable/MostCreateEventUserTable'
import img from '../../assets/images/slider.png'
import MostTaskCompleteAdminTable from '../../Components/MostTaskCompleteAdminTable/MostTaskCompleteAdminTable'
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
            user: { name: "Jacob Jones", avatar: img },
            email: "binhan628@gmail.com",
            eventsCreated: 46,
        },
        {
            key: "2",
            slNo: "#12333",
            user: { name: "Darlene Robertson", avatar: img },
            email: "tranthuy.nute@gmail.com",
            eventsCreated: 42,
        },
        {
            key: "3",
            slNo: "#12333",
            user: { name: "Brooklyn Simmons", avatar: img },
            email: "trungkienspktnd@gamail.com",
            eventsCreated: 38,
        },
    ]

    const dataSource1 = [
        {
          key: "1",
          slNo: "#12333",
          admin: { name: "Jacob Jones", avatar: img },
          email: "binhan628@gmail.com",
          ticketsAttended: 45,
          complaintsAttended: 25,
          totalTasksCompleted: 245,
        },
        {
          key: "2",
          slNo: "#12333",
          admin: { name: "Darlene Robertson", avatar: img},
          email: "tranthuy.nute@gmail.com",
          ticketsAttended: 34,
          complaintsAttended: 24,
          totalTasksCompleted: 234,
        },
        {
          key: "3",
          slNo: "#12333",
          admin: { name: "Brooklyn Simmons", avatar: img },
          email: "trungkienspktnd@gmail.com",
          ticketsAttended: 12,
          complaintsAttended: 22,
          totalTasksCompleted: 212,
        },
        {
          key: "4",
          slNo: "#12333",
          admin: { name: "Leslie Alexander", avatar: img },
          email: "nvt.isst.nute@gmail.com",
          ticketsAttended: 21,
          complaintsAttended: 20,
          totalTasksCompleted: 201,
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
                            <Link to={'/most-event-create-users'} className='text-blue-500'>View All</Link>
                        </div>
                        <MostCreateEventUserTable dataSource={dataSource} pagination={false} />
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
            <div className='bg-white p-4 mt-4 rounded-md' >
                <div className='flex justify-between items-center px-4 text-xl'>
                    <p>Most Tasks Completed By Admins</p>
                    <Link to={'/most-task-complete-admins'} className='text-blue-500'>View all</Link>
                </div>

                <MostTaskCompleteAdminTable dataSource={dataSource1}  pagination={false} />
            </div>

        </div>
    )
}

export default AuditDashboard