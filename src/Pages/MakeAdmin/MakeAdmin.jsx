import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Table, Avatar, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import img from '../../assets/images/user1.png'
import img2 from '../../assets/images/user2.png'
import MakeAdminModal from '../../Components/MakeAdminModal'
import { useDeleteAdminMutation, useGetAllAdminQuery } from '../../redux/api/makeAdminApi'
import { toast } from 'sonner'



const MakeAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(searchTerm);

  const { data: getAllAdmin } = useGetAllAdminQuery(searchTerm)
  const [deleteAdmin] = useDeleteAdminMutation()
  // console.log(getAllAdmin);

  const data = getAllAdmin?.data?.data?.map((admin, i) => {
    return (
      {
        key: i + 1,
        slNo: i + 1,
        adminName: admin?.name,
        email: admin?.email,
        contactNumber: admin?.phone_number,
        // access: 'User Management , user , loewntfsagoknsdgsdaiab , asdgjaseodhg , lsdhgkjsd, ',
        avatar: img,
      }
    )
  })

  const [openModal, setOpenModal] = useState(false)


  const handleDeleteAdmin = (email) => {
    deleteAdmin(email).unwrap()
      .then((payload) => toast.success(payload?.message))
      .catch((error) => toast.error(error?.data?.message));
  }
  const columns = [
    {
      title: 'SL no.',
      dataIndex: 'slNo',
      key: 'slNo',
    },
    {
      title: 'Admin Name',
      dataIndex: 'adminName',
      key: 'adminName',
      render: (text, record) => (
        <Space>
          <Avatar src={record.avatar} />
          <span>{text}</span>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
    },
    // {
    //   title: 'Has Access to',
    //   dataIndex: 'access',
    //   key: 'access',
    // },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => setOpenModal(true)} type="primary" icon={<EditOutlined />} />
          <Button onClick={() => handleDeleteAdmin(record?.email)} type="primary" danger icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  return (
    <div className='bg-white p-5 rounded-md'>
      <div className="flex justify-between item-center ">
        <div className="flex items-center gap-2">
          <Link to={-1}><FaArrowLeft size={18} className='text-[var(--primary-color)] ' /></Link>
          <span className='font-semibold text-[20px]'>Make Admin</span></div>
        <div>
          <div className="relative">
            <input
            onChange={(e)=> setSearchTerm(e.target.value)}
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
      <div>
        <button onClick={() => setOpenModal(true)} className='bg-black text-white rounded-full flex items-center gap-2 p-2 px-8 mt-5'><IoIosAdd /><span>Make Admin</span></button>

        <Table
          columns={columns}
          dataSource={data}
          className="custom-pagination"
          pagination={{
            showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
          }}
          rowKey="key"
        />
      </div>
      <MakeAdminModal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default MakeAdmin