import React, { useState } from 'react';
import PageName from '../../Components/Shared/PageName';
import { Table } from 'antd';
import { IoEyeOutline } from 'react-icons/io5';
import img1 from "../../assets/images/user1.png"
import img2 from "../../assets/images/user2.png"
import UserOpenModal from '../../Components/userOpenModal/userOpenModal';

const BankTransfer = () => {
  const [singleUser, setSingleUser] = useState()
  const [openUserModal, setUserOpenModal] = useState(false)
  const [openBankTransferModal, setOpenBankTransferModal] = useState(false)
  console.log(openBankTransferModal);
  const dataSource = [
    {
      key: "#12333",
      name: "Kathryn Murphy",
      role: "Partner",
      img: img1,
      email: "bockely@att.com",
      contactNumber: "(201) 555-0124",
      location: "West Greenwich, RI7",
      accountHolderName: "Dianne Rusell",
      HolderType: "Personal",
      accountNumber: '12234547545',
      routing: '65412345477',
      dob: '23/06/2000',
      businessName: 'Governance structures',
      website: 'www.google.com',
      line: '2115 Ash Dr. san jose',
      city: 'Sab Juan',
      state: 'In-progress',
      postalCode: '3466',
      requestAmount: '$20.00',
      totalBalance: '$24.00',
      accountNo: '4256875521',
      status: 'Pending'

    },
    {
      key: "#12334",
      name: "Devon Lane",
      img: img2,
      role: "Partner",
      email: "csilvers@rizon.com",
      contactNumber: "(219) 555-0114",
      location: "Jericho, NY 11753",
      accountHolderName: "Dianne Rusell",
      HolderType: "Personal",
      accountNumber: '12234547545',
      routing: '65412345477',
      dob: '23/06/2000',
      businessName: 'Governance structures',
      website: 'www.google.com',
      line: '2115 Ash Dr. san jose',
      city: 'Sab Juan',
      state: 'In-progress',
      requestAmount: '$20.00',
      totalBalance: '$24.00',
      accountNo: '4256875521',
      postalCode: '3466',
      status: 'Complete'
    },
    {
      key: "#12335",
      name: "Foysal Rahman",
      img: img1,
      email: "qamaho@gmail.com",
      contactNumber: "(316) 555-0116",
      role: "User",
      location: "Aurora, OR 97002",
      requestAmount: '$20.00',
      totalBalance: '$24.00',
      accountNo: '4256875521',
      status: 'Pending'

    },
    {
      key: "#12336",
      name: "Hari Danang",
      img: img1,
      email: "xterris@gmail.com",
      contactNumber: "(907) 555-0101",
      role: "Partner",
      location: "Midland Park, NJ 072",
      requestAmount: '$20.00',
      totalBalance: '$24.00',
      accountNo: '4256875521',
      status: 'Complete'

    },
    {
      key: "#12337",
      name: "Floyd Miles",
      img: img1,
      email: "xterris@gmail.com",
      contactNumber: "(505) 555-0125",
      role: "Partner",
      requestAmount: '$20.00',
      location: "Saint Cloud, FL 349",
      totalBalance: '$24.00',
      accountNo: '4256875521',
      status: 'Pending'
    },

  ];

  const columns = [

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
      title: 'Role', dataIndex: 'role', key: 'role'
    },
    {
      title: "Request Amount",
      dataIndex: "requestAmount",
      key: "requestAmount",
    },
    {
      title: "Total Balance",
      dataIndex: "totalBalance",
      key: "totalBalance",
    },

    {
      title: "Account No.",
      dataIndex: "accountNo",
      key: "accountNo",
    },
    {
      title: "Status", dataIndex: 'status', key: 'status', render: (text, record) => {
        return (
          <>
          {
            record?.status === "Complete" ? (<div className={` text-center border rounded-full py-1 ${record?.status === 'Complete' ? ' border-[#2AB9A4] text-[#2AB9A4]'  : ""}`}>{record?.status}</div>) : (<button onClick={()=>setOpenBankTransferModal(true)}  className='border-[#338BFF] text-[#338BFF] text-center border rounded-full py-1 w-full'>{record?.status}</button>)
          }
            
          </>
        )
      }
    },

    {
      title: "View Details",
      dataIndex: "viewDetails",
      key: "viewDetails",
      render: (_, record) => (
        <div className='flex items-center '>
          <div style={{ color: "white" }} onClick={() => {
            setUserOpenModal(true)
            setSingleUser(record)
          }} className=' cursor-pointer bg-blue-500 text-white p-2 rounded-md'><IoEyeOutline size={20} /></div>
        </div>
      ),
    },
  ];
  return (
    <div className='p-2 bg-white rounded-md'>
      <PageName name={'Bank Transfer'} />
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

      <UserOpenModal singleUser={singleUser} setUserOpenModal={setUserOpenModal} openUserModal={openUserModal} />

    </div>
  );
}

export default BankTransfer;
