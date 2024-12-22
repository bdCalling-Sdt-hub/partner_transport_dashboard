import React, { useEffect, useState } from 'react'
import ActiveAdminsTable from '../ActiveAdminsTable/ActiveAdminsTable'
import { Link } from 'react-router-dom';
import img from '../../assets/images/conver1.png'
import { useGetAdminProfileQuery } from '../../redux/api/authApi';
import { io } from 'socket.io-client';
import { imageUrl } from '../../redux/api/baseApi';
const ActiveAdmins = () => {
  const [activeAdmin, setActiveAdmin] = useState([])
  const { data: getAdmins } = useGetAdminProfileQuery()
  useEffect(() => {
    const socket = io("http://103.145.138.200:5052", {
      query: {
        id: getAdmins?.data?._id,
      },
      transports: ["websocket"],
    });
    socket.on("active-admin", (data) => {
      setActiveAdmin(data);
    });

    return () => {
      socket.disconnect();
    };

  }, [getAdmins?.data?._id])


  const dataSource = activeAdmin?.map(((admin, i) => {
    return (
      {
        key: i+1,
        slNo: i + 1,
        admin: { name: admin?.name, avatar: `${imageUrl}${admin?.profile_image}`, online: true },
        email: admin?.email,
        activity: admin?.phone_number,
        tasksCompleted: admin?.todayCompletedTasks,
      }
    )
  }))
 

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