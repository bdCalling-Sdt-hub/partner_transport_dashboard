import React from 'react'
import PageName from '../../Components/Shared/PageName'
import { CiSearch } from 'react-icons/ci'
import MostTaskCompleteAdminTable from '../../Components/MostTaskCompleteAdminTable/MostTaskCompleteAdminTable'
import img from '../../assets/images/slider2.png'
const MostTaskCompleteAdmins = () => {
    const dataSource = [
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
          admin: { name: "Darlene Robertson", avatar:img },
          email: "tranthuy.nute@gmail.com",
          ticketsAttended: 34,
          complaintsAttended: 24,
          totalTasksCompleted: 234,
        },
        {
          key: "3",
          slNo: "#12333",
          admin: { name: "Brooklyn Simmons", avatar: img},
          email: "trungkienspktnd@gmail.com",
          ticketsAttended: 12,
          complaintsAttended: 22,
          totalTasksCompleted: 212,
        },
        {
          key: "4",
          slNo: "#12333",
          admin: { name: "Leslie Alexander", avatar:img },
          email: "nvt.isst.nute@gmail.com",
          ticketsAttended: 21,
          complaintsAttended: 20,
          totalTasksCompleted: 201,
        },
    ]
    return (
        <div className='bg-white p-4  rounded-md'>
            <div className=' justify-between flex'>
                <PageName name={'Most Tasks Completed By Admins'} />
                <div>
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
            </div>
            <MostTaskCompleteAdminTable dataSource={dataSource} pagination={true}  />
        </div>
    )
}

export default MostTaskCompleteAdmins