import React from 'react'
import AdminTaskTable from '../../Components/AdminTaskTable/AdminTaskTable'
import img from '../../assets/images/conver1.png'
import { Link } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
const CompletedTask = () => {

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
        <div className='bg-white rounded-md p-4'>
            <div className='flex items-center justify-between'>
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
            <AdminTaskTable dataSource={dataSource} />
        </div>
    )
}

export default CompletedTask