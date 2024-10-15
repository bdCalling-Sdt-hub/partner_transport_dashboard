import { Table } from 'antd'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/user1.png'
import img2 from '../../assets/images/user2.png'
import { FaArrowLeft } from 'react-icons/fa'
import TransactionCard from '../../Components/TransactionCard/TransactionCard'

const Transaction = () => {
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
      title: "Delivery Fee",
      dataIndex: "deliveryFee",
      key: "deliveryFee  ",
    },
    {
      title: "Delivery Date",
      dataIndex: "deliveryDate",
      key: "deliveryDate  ",
    },

    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },

    {
      title: "Paid Amount",
      dataIndex: "paidAmount",
      key: "paidAmount",
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
    },
    {
      title: "Income",
      dataIndex: "income",
      key: "income",
    },



  ];


  const dataSource = [
    {
      key: "#12333",
      name: "Kathryn Murphy",
      img: img1,
      deliveryFee: "$24.00",
      deliveryDate: "12/06/24",
      userName: "Cameron Williamson",
      paidAmount: "$24.00",
      paymentType: "Online Payment",
      income: "$4.00",
    },
    {
      key: "#12334",
      name: "Devon Lane",
      img: img2,
      deliveryFee: "$20.00",
      deliveryDate: "10/06/24",
      userName: "Jerome Bell",
      paidAmount: "$20.00",
      paymentType: "Online Payment",
      income: "$6.00",
    },
    {
      key: "#12335",
      name: "Foysal Rahman",
      img: img1,
      deliveryFee: "$45.00",
      deliveryDate: "10/06/24",
      userName: "Theresa Webb",
      paidAmount: "$45.00",
      paymentType: "Online Payment",
      income: "$4.00",
    },
    {
      key: "#12336",
      name: "Hari Danang",
      img: img2,
      deliveryFee: "$35.00",
      deliveryDate: "05/06/24",
      userName: "Wade Warren",
      paidAmount: "$35.00",
      paymentType: "Online Payment",
      income: "$8.00",
    },
    {
      key: "#12337",
      name: "Floyd Miles",
      img: img1,
      deliveryFee: "$15.00",
      deliveryDate: "04/06/24",
      userName: "Darlene Robertson",
      paidAmount: "$15.00",
      paymentType: "Online Payment",
      income: "$5.00",
    },


  ];

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

      <div>
        <TransactionCard />
      </div>
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


    </div>
  )
}

export default Transaction