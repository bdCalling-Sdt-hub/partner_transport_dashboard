import { Modal, Table } from 'antd';
import React, { useState } from 'react'
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProfileUpdateRequest = ({ dataSource }) => {
    // console.log(pagination)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [requestUser, setRequestuser] = useState({})

    const handleShowRequestUserDelails = (data) => {
        setIsModalOpen(true)
        setRequestuser(data)
    }
    console.log(requestUser);

    const columns = [
        {
            title: "SL no.",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "Name",
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
            key: "email  ",
        },

        {
            title: "Contact Number",
            dataIndex: "contact",
            key: "contact  ",
        },
        {
            title: "NID/Passport No",
            dataIndex: "passport",
            key: "contact  ",
        },

        {
            title: "Actions",
            dataIndex: "key",
            key: "key",
            render: (_, record) => {
                return (
                    <div className="flex items-center justify-center gap-1">
                        <button onClick={() => handleShowRequestUserDelails(record)} className="px-2 py-2 rounded-md text-black font-semibold bg-[var(--secondary-color)]   ">

                            <IoEyeOutline size={25} className='text-white' />
                        </button>
                    </div>
                );
            },
            align: 'center'
        },
        {
            title: "Verification",
            dataIndex: "key",
            key: "key",

            render: (_, record) => {
                return (
                    <div className="flex items-center justify-center gap-1">
                        <button className="px-6 py-2 rounded-3xl text-green-500 font-semibold bg-transparent border border-green-500 hover:bg-green-500 hover:text-white">
                            <Link to={`/single-user-details/id`} className='hover:text-white'>
                                Approved
                            </Link>
                        </button>
                        <button className="px-6 py-2 rounded-3xl text-red-600 font-semibold bg-transparent border border-red-600 hover:bg-red-600 hover:text-white">
                            <Link to={`/single-user-details/id`} className='hover:text-white'>
                                Decline
                            </Link>
                        </button>
                    </div>
                );
            },
            align: "center",
        },
    ];
    return (
        <div className=''>
            <Table dataSource={dataSource} columns={columns} className="custom-pagination" pagination={false} />
            <Modal open={isModalOpen} centered footer={false} onCancel={() => setIsModalOpen(false)}>
                <div className='flex flex-col items-center justify-center '>
                    <img src={requestUser.img} className='w-[80px] h-[80px] rounded-full' alt="" />
                    <p className='mt-5 font-semibold text-2xl'>{requestUser?.name}</p>
                    <p>{requestUser?.email}</p>
                    <div className='w-full'>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold mt-5'>Phone Number:</p>
                            <p>{requestUser?.contact}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold mt-5'>National ID/ Passport No:</p>
                            <p>{requestUser?.passport}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold mt-5'>Vehicle Type:</p>
                            <p>{requestUser?.vichelType}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold mt-5'>Vehicle Number:</p>
                            <p>{requestUser?.vichelNumber}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='font-semibold mt-5'>Location:</p>
                            <p>{requestUser?.location}</p>
                        </div>
                        <div className=''>
                            <p className='font-semibold mt-5'>Driving License:</p>
                            <img src={requestUser?.drivingLicense} className='mx-auto mt-5' alt="" />
                        </div>
                        <div className=''>
                            <p className='font-semibold mt-5'>Vehicle Photo:</p>
                            <img src={requestUser?.vichelImg} className='mx-auto mt-5' alt="" />
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default ProfileUpdateRequest