import { Modal, Switch, Table } from 'antd'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img1 from "../../assets/images/user1.png"
import img2 from "../../assets/images/user2.png"
import { IoEyeOutline } from 'react-icons/io5'
import { BsChatLeftText } from 'react-icons/bs'
import { CgNotes } from 'react-icons/cg'
import TextArea from 'antd/es/input/TextArea'
import ConversationModal from '../../Components/ConversationModal/ConversationModal'
const PartnerManagement = () => {
  const [isActive, setIsActive] = useState(true)
  
  const [openModal, setOpenModal] = useState(false)

  const [openConversationModal, setOpenConversationModal] = useState(false)
  const onChange = (checked) => {
    console.log(checked);
    setIsActive(checked)
  }
  const columns = [
    {
      title: "SL no",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "User's Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <div className="flex items-center gap-2">
            <img
              src={record?.img}
              className="w-[40px] h-[40px] rounded-[8px]"
              alt=""
            />
            <p className="font-medium">{record?.name}</p>
          </div>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Wallet Balance",
      dataIndex: "walletBalance",
      key: "walletBalance",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div className='flex items-center gap-2'>
          <Switch size='small' defaultChecked onChange={onChange} />
          {/* <p>{isActive ? 'Activate' : 'Deactivate'}</p>
           */}
           <p>Active</p>
        </div>
      ),
    },
    {
      title: "View Details",
      dataIndex: "viewDetails",
      key: "viewDetails",
      render: (_, record) => (
        <div className='flex items-center '>
          <Link to={`/partner-management/:id`} style={{ color: "white" }} className=' cursor-pointer bg-blue-500 text-white p-2 rounded-md'><IoEyeOutline size={20} /></Link>
        </div>
      ),
    },
    {
      title: "Notice",
      dataIndex: "notice",
      key: "notice",
      render: (_, record) => (
        <div className='flex items-center '>
          <div style={{ color: "white" }} onClick={() => {
            setOpenModal(true)
          }} className=' cursor-pointer bg-[#FF5454] text-white p-2 rounded-md'><CgNotes size={20} /></div>
        </div>
      ),
    },
    {
      title: "Chat",
      dataIndex: "chat",
      key: "chat",
      render: (_, record) => (
        <div className='flex items-center '>
          <div style={{ color: "white" }} onClick={() => {
            setOpenConversationModal(true)
          }} className=' cursor-pointer bg-[#F2AA00] text-white p-2 rounded-md'><BsChatLeftText size={20} /></div>
        </div>
      ),
    },
  ];


  const dataSource = [
    {
      key: "#12333",
      name: "Kathryn Murphy",
      img: img1,
      email: "bockely@att.com",
      contactNumber: "(201) 555-0124",
      location: "West Greenwich, RI7",
      accountHolderName: "Dianne Rusell",
      HolderType: "Personal",
      accountNumber: '12234547545',
      routing: '65412345477',
      dob: '23/06/2000',
      walletBalance: '$24.00',
      businessName: 'Governance structures',
      website: 'www.google.com',
      line: '2115 Ash Dr. san jose',
      city: 'Sab Juan',
      state: 'In-progress',
      postalCode: '3466'
    },
    {
      key: "#12334",
      name: "Devon Lane",
      img: img2,
      email: "csilvers@rizon.com",
      contactNumber: "(219) 555-0114",
      location: "Jericho, NY 11753",
      accountHolderName: "Dianne Rusell",
      HolderType: "Personal",
      accountNumber: '12234547545',
      routing: '65412345477',
      dob: '23/06/2000',
      walletBalance: '$24.00',
      businessName: 'Governance structures',
      website: 'www.google.com',
      line: '2115 Ash Dr. san jose',
      city: 'Sab Juan',
      state: 'In-progress',
      postalCode: '3466'
    },
    {
      key: "#12335",
      name: "Foysal Rahman",
      img: img1,
      email: "qamaho@gmail.com",
      contactNumber: "(316) 555-0116",
      walletBalance: '$24.00',
      location: "Aurora, OR 97002",
    },
    {
      key: "#12336",
      name: "Hari Danang",
      img: img1,
      email: "xterris@gmail.com",
      contactNumber: "(907) 555-0101",
      walletBalance: '$24.00',
      location: "Midland Park, NJ 072",
    },
    {
      key: "#12337",
      name: "Floyd Miles",
      img: img1,
      email: "xterris@gmail.com",
      contactNumber: "(505) 555-0125",
      walletBalance: '$24.00',
      location: "Saint Cloud, FL 349",
    },

  ];

  return (
    <div className='p-5 bg-white rounded-md'>

      <div className="flex justify-between item-center ">
        <div className="flex items-center gap-2">
          <Link to={-1}><FaArrowLeft size={18} className='text-[var(--primary-color)] ' /></Link>
          <span className='font-semibold text-[20px]'>Partner Management</span></div>
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


      {/* User Management table */}
      <div className='mt-5'>
        <Table dataSource={dataSource} columns={columns} className="custom-pagination" pagination={{
          pageSize: 5,
          showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
          locale: {
            items_per_page: '',
            prev_page: 'Previous',
            next_page: 'Next',
          },
        }} />
      </div>

      <Modal centered open={openModal} footer={false} onCancel={() => setOpenModal(false)} >
        <p className='text-center text-2xl'>Important Notice</p>
        <p className='mt-5  font-medium mb-2'>Important Notice</p>
        <TextArea placeholder='Write here...' style={{resize: 'none', height:"250px"}}  />
        <div className='flex items-center justify-center mt-5'>
          <button className='px-8 py-2 rounded-full text-white bg-black w-full'>Send</button>
        </div>
      </Modal>
      <ConversationModal setOpenConversationModal={setOpenConversationModal} openConversationModal={openConversationModal} />
    </div>
  )
}

export default PartnerManagement