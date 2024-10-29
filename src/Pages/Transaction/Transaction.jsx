import { Table } from 'antd'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import user from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import { MdOutlineMessage } from 'react-icons/md'
import { IoEyeOutline } from 'react-icons/io5'
import ConversationModal from '../../Components/ConversationModal/ConversationModal'
const Transaction = () => {
  const [openConversationModal, setOpenConversationModal] = useState(false)
  const columns = [
    {
      title: "Order ID",
      dataIndex: 'orderId',
      key: 'orderId'
    },
    {
      title: "Date", dataIndex: 'date', key: 'date'
    },
    {
      title: 'Sender', dataIndex: 'user', render: (text, record) => {
        return (
          <div className='flex items-center gap-2'>
            <img src={record?.userImg} style={{ width: 60, height: 60 }} alt="" />
            <p className='font-medium'>{record?.userName}</p>
          </div>

        )
      }
    },
    {
      title: 'Receiver', dataIndex: 'partner', render: (text, record) => {
        return (
          <div className='flex items-center gap-2'>
            <img src={record?.partnerImage} style={{ width: 60, height: 60 }} alt="" />
            <p className='font-medium'>{record?.partnerName}</p>
          </div>

        )
      }
    },
    {
      title: "Item Type", dataIndex: 'itemType', key: 'itemType'
    },
    {
      title: "Category", dataIndex: 'category', key: 'category'
    },
    {
      title: "Win Bid", dataIndex: 'winBid', key: 'winBid'
    },
  
    {
      title: "Payment Status", dataIndex: 'status', key: 'status'
    },
    {
      title: <div style={{ textAlign: 'end', fontWeight: 'bold' }}>Details</div>, dataIndex: 'key', key: 'key', render: (_, record) => {
        return (
          <div className='flex items-center justify-end  '>
            <Link to={`/transaction/${record?.id}`} className='bg-[var(--secondary-color)] text-white p-2 rounded-md '><IoEyeOutline size={20} /></Link>
          </div>
        )
      }
    },
    {
      title: "Chat", dataIndex: 'key', key: 'key', render: (_, record) => {
        return (
          <div className='flex items-center '>
            <div style={{ color: "white" }} onClick={() => setOpenConversationModal(true)} className=' cursor-pointer bg-yellow-500 text-white p-2 rounded-md'><MdOutlineMessage size={20} /></div>
          </div>
        )
      }
    },

  ]

  const data = [
    {
      id: '1',
      orderId: '#1244',
      date: '12/24/12',
      userImg: user,
      userName: 'Jhon Smith',
      partnerName: 'Harry potter',
      partnerImage: user2,
      itemType: 'Goods',
      category: "Furniture",
      winBid: '$24.00',
      actionRefund: false,
      status: 'In-progress',

    },
    {
      id: '2',
      orderId: '#1244',
      date: '12/24/12',
      userImg: user,
      userName: 'Jhon Smith',
      partnerName: 'Harry potter',
      partnerImage: user2,
      itemType: 'Goods',
      category: "Furniture",
      winBid: '$24.00',
      actionRefund: true,
      status: 'Assigned',

    },
    {
      id: '2',
      orderId: '#1244',
      date: '12/24/12',
      userImg: user,
      userName: 'Jhon Smith',
      partnerName: 'Harry potter',
      partnerImage: user2,
      itemType: 'Goods',
      category: "Furniture",
      winBid: '$24.00',
      actionRefund: false,
      status: 'Claimed',

    },
    {
      id: '2',
      orderId: '#1244',
      date: '12/24/12',
      userImg: user,
      userName: 'Jhon Smith',
      partnerName: 'Harry potter',
      partnerImage: user2,
      itemType: 'Goods',
      category: "Furniture",
      winBid: '$24.00',
      actionRefund: true,
      status: 'Complete',

    }
  ]


  const handleRefund = () => {
    setRefundModal(true)
  }



  /** item category and status search functionality */
  const handleChange = (value) => {
    console.log(value);
  }

  return (
    <div className='p-5 bg-white rounded-md'>

      <div className="flex justify-between item-center ">
        <div className="flex items-center gap-2">
          <Link to={-1}><FaArrowLeft size={18} className='text-[var(--primary-color)] ' /></Link>
          <span className='font-semibold text-[20px]'>Transaction</span></div>
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


      <div className='mt-5'>
        <Table title={() => (
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '16px' }}>
          
        </div>
      )} className="custom-pagination" columns={columns} dataSource={data} pagination={{
          pageSize : 5, showTotal : (total, range)=> `Showing ${range[0]}-${range[1]} out of ${total}`, locale: {
            items_per_page: '',
            prev_page: 'Previous',
            next_page: 'Next',
          },
        }} />
      </div>

    <ConversationModal setOpenConversationModal={setOpenConversationModal} openConversationModal={openConversationModal} />
    </div>
  )
}

export default Transaction