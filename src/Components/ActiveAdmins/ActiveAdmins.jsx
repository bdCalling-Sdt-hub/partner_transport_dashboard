import React from 'react'
import ActiveAdminsTable from '../ActiveAdminsTable/ActiveAdminsTable'
import { Link } from 'react-router-dom';
import img from '../../assets/images/conver1.png'
const ActiveAdmins = () => {
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
    <div className='bg-white p-4 mt-4 rounded-md' >
        <div className='flex justify-between items-center px-4 text-xl'>
            <p>Active Admins</p>
            <Link to={'/active-admins'} className='text-blue-500'>View all</Link>
        </div>
        <ActiveAdminsTable dataSource={dataSource} pagination={false} />
    </div>
  )
}

export default ActiveAdmins