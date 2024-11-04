import React, { useState } from 'react'
import PageName from '../../Components/Shared/PageName'
import { Select, Table } from 'antd'
import user from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import { IoEyeOutline } from 'react-icons/io5'
import { MdModeEdit, MdOutlineMessage } from 'react-icons/md'
import { Link } from 'react-router-dom'
import RefundModal from '../../Components/RefundModal/RefundModal'
import ConversationModal from '../../Components/ConversationModal/ConversationModal'
import { CiSearch } from 'react-icons/ci'

const AuctionManagement = () => {
    const [auctionStatus, setAuctionStatus] = useState('move')
    const [openRefundModal, setRefundModal] = useState(false)
    const [openConversationModal, setOpenConversationModal] = useState(false)

    const columns = [
        {
            title: "Sl No",
            dataIndex: 'slno',
            key: 'slno'
        },
        {
            title: "Date", dataIndex: 'date', key: 'date'
        },
        {
            title: 'User', dataIndex: 'user', render: (text, record) => {
                return (
                    <div className='flex items-center gap-2'>
                        <img src={record?.userImg} style={{ width: 60, height: 60 }} alt="" />
                        <p className='font-medium'>{record?.userName}</p>
                    </div>

                )
            }
        },
        {
            title: 'Assigned Partner', dataIndex: 'partner', render: (text, record) => {
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
            title: "Action", dataIndex: 'actionRefund', key: 'actionRefund', render: (text, record) => {
                return (
                    <div onClick={() => handleRefund()} className={`border  rounded-full text-center  px-2 py-1 ${record?.actionRefund ? "text-red-500 cursor-pointer border-red-500" : "text-gray-600 border-gray-600 cursor-not-allowed "}`}>Refund</div>
                )
            }
        },
        {
            title: "Status", dataIndex: 'status', key: 'status', render: (text, record) => {
                return (
                    <div className={` text-center border rounded-full py-1 
                        ${record?.status === 'Complete' ? ' border-[#2AB9A4] text-[#2AB9A4]' : record?.status === 'Assigned' ? "border-[#338BFF] text-[#338BFF]" : record?.status === 'Claimed' ? "border-red-500 text-red-500" : 'border-yellow-400 text-yellow-400'}`}>{record?.status}</div>
                )
            }
        },
        {
            title: "Action", dataIndex: 'key', key: 'key', render: (_, record) => {
                return (
                    <div className='flex items-center '>
                        <Link to={`auction-details/${record?.id}`} className='bg-[var(--secondary-color)] text-white p-2 rounded-md '><IoEyeOutline size={20} /></Link>
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
            slno: '1',
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
            slno: '1',
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
            slno: '1',
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
            slno: '1',
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
        <div>
            <div className=' justify-between flex'>
                <PageName name={'Auction Management'} />
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

            {/* search auction */}
            <div className='flex items-center mt-5 justify-between'>
                <div className='flex items-center gap-2  px-2'>
                    <div onClick={() => setAuctionStatus('all')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${auctionStatus === 'all' ? "bg-black text-white" : ""}`}>All</div>
                    <div onClick={() => setAuctionStatus('move')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${auctionStatus === 'move' ? "bg-black text-white" : ""}`}>Move</div>
                    <div onClick={() => setAuctionStatus('sell')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${auctionStatus === 'sell' ? "bg-black text-white" : ""}`}>Sell</div>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <p className='mb-2'>Item Type</p>
                        <Select
                            defaultValue="All"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Category</p>
                        <Select
                            defaultValue="All"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Status</p>
                        <Select
                            defaultValue="All"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </div>
                </div>
            </div>

            {/* Auction Table data */}
            <div className='mt-8'>
                <Table columns={columns} dataSource={data} pagination={false} />
            </div>
            <RefundModal openRefundModal={openRefundModal} setRefundModal={setRefundModal} />
            <ConversationModal setOpenConversationModal={setOpenConversationModal} openConversationModal={openConversationModal} />
        </div>
    )
}

export default AuctionManagement