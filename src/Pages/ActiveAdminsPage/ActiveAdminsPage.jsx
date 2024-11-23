import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ActiveAdminsTable from '../../Components/ActiveAdminsTable/ActiveAdminsTable'
import img from '../../assets/images/conver1.png'

const ActiveAdminsPage = () => {
    const dataSource = [
        {
          key: "1",
          slNo: "#12333",
          admin: { name: "Jacob Jones", avatar: img, online: true },
          email: "bockely@att.com",
          activity: "Reviewing user payment dispute",
          tasksCompleted: 45,
        },
        {
          key: "2",
          slNo: "#12333",
          admin: { name: "Darlene Robertson", avatar: img, online: true },
          email: "csilvers@rizon.com",
          activity: "User management activity",
          tasksCompleted: 53,
        },
        {
          key: "3",
          slNo: "#12333",
          admin: { name: "Brooklyn Simmons", avatar: img, online: true },
          email: "csilvers@rizon.com",
          activity: "User management activity",
          tasksCompleted: 53,
        },
        // Add more rows as needed
      ];
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between px-2'>
                <div className='flex items-center gap-1 text-xl'>
                    <Link to={-1}><IoArrowBack /></Link>
                    <p>Task Completed</p>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 "
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">

                        <CiSearch />
                    </span>
                </div>
            </div>
            <ActiveAdminsTable dataSource={dataSource} />
        </div>
    )
}

export default ActiveAdminsPage