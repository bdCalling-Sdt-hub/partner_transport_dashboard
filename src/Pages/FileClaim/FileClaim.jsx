import { Avatar, Button, Space, Table, Tag } from 'antd'
import React, { useState } from 'react'
import { CiEdit, CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import user from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import { MdOutlineMessage } from 'react-icons/md'
import { IoEyeOutline } from 'react-icons/io5'
import ConversationModal from '../../Components/ConversationModal/ConversationModal'
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import PenaltyModal from '../../Components/PenaltyModal'
import ComplainDetailsModal from '../../Components/ComplainDetailsModal'
const FileClaim = () => {

    const [openPenaltyModal, setOpenPenaltyModal] = useState(false)
    const [openComplainModal, setOpenComplainModal] = useState(false)
    const data = [
        {
          key: '1',
          complainId: '#12333',
          orderId: '#12333',
          date: '12/06/24',
          userName: 'Hari Danang',
          userAvatar: <img src={user} alt="" />, 
          complain: 'No-show at scheduled...',
          complainAgainst: 'Kathryn Murphy',
          complainAgainstAvatar: <img src={user2} alt="" />,
          status: 'Pending',
        },
        {
          key: '2',
          complainId: '#12333',
          orderId: '#12333',
          date: '10/06/24',
          userName: 'Hari Danang',
          userAvatar: <img src={user2} alt="" />,
          complain: 'No-show at scheduled...',
          complainAgainst: 'Devon Lane',
          complainAgainstAvatar: <img src={user} alt="" />,
          status: 'Resolved',
        },
        // Add more entries here following the same structure
      ];
      
      const columns = [
        {
          title: 'Complain ID',
          dataIndex: 'complainId',
          key: 'complainId',
        },
        {
          title: 'Order ID',
          dataIndex: 'orderId',
          key: 'orderId',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'User/Partner Name',
          key: 'user',
          render: (text, record) => (
            <Space>
              <Avatar src={record.userAvatar} />
              {record.userName}
            </Space>
          ),
        },
        {
          title: 'Complain',
          dataIndex: 'complain',
          key: 'complain',
        },
        {
          title: 'Complain Against',
          key: 'complainAgainst',
          render: (text, record) => (
            <Space>

              <Avatar src={record.complainAgainstAvatar} />
              {record.complainAgainst}
            </Space>
          ),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (status) => {
            let color = '';
            switch (status) {
              case 'Pending':
                color = 'blue';
                break;
              case 'Resolved':
                color = 'green';
                break;
              case 'In-progress':
                color = 'orange';
                break;
              default:
                color = 'gray';
            }
            return <Tag className='rounded-full px-5 py-2' color={color}>{status}</Tag>;
          },
        },
        {
          title: 'View',
          key: 'view',
          render: () => (
            <Button onClick={()=>setOpenComplainModal(true)}  type="primary"  icon={<EyeOutlined />} />
          ),
        },
        {
          title: 'Penalty',
          key: 'penalty',
          render: () => (
            <Button onClick={()=>setOpenPenaltyModal(true)} className='bg-red-500 text-white' type="danger" icon={<CiEdit size={20} />} />
          ),
        },
      ];
  return (
    <div className='p-5 bg-white rounded-md'>

    <div className="flex justify-between item-center ">
      <div className="flex items-center gap-2">
        <Link to={-1}><FaArrowLeft size={18} className='text-[var(--primary-color)] ' /></Link>
        <span className='font-semibold text-[20px]'>Support</span></div>
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
    
      <Table columns={columns} dataSource={data} className="custom-pagination" pagination={{
          pageSize: 5,
          showTotal: (total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`,
          locale: {
            items_per_page: '',
            prev_page: 'Previous',
            next_page: 'Next',
          },
        }} />
    </div>

  <PenaltyModal setOpenPenaltyModal={setOpenPenaltyModal} openPenaltyModal={openPenaltyModal} />
  <ComplainDetailsModal openComplainModal={openComplainModal} setOpenComplainModal={setOpenComplainModal} />
  </div>
  )
}

export default FileClaim