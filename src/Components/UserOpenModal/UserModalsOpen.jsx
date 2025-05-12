import { Modal } from 'antd'
import React from 'react'

const UserOpenModals = ({ openUserModal, setUserOpenModals, singleUser }) => {
    console.log(singleUser);
    return (
        <Modal open={openUserModal} onCancel={() => setUserOpenModals(false)} footer={false} centered>
            <div className=''>
                <div className='flex flex-col justify-center items-center mt-2 '>
                    <img  className='rounded-full h-16 w-16 object-cover' src={singleUser?.img} alt="" />
                    <h1 className='font-medium'>{singleUser?.name}</h1>
                    <p>{singleUser?.email}</p>
                </div>
                <div className='space-y-2'>
                    {/* <p className='flex justify-between '><span>Phone Number:</span><span>{singleUser?.contactNumber}</span></p> */}
                    <p className='flex justify-between '><span>Location:</span><span>{singleUser?.location},{singleUser?.city}{singleUser?.country}</span></p>
                    <p className='flex justify-between '><span>Wallet Balance:</span><span>{singleUser?.balance}</span></p>
                    <p className='font-medium'>Bank Info</p>
                    <p className='flex justify-between '><span>Bank Name:</span><span>{singleUser?.bankName}</span></p>
                    <p className='flex justify-between '><span>Account Holder Name:</span><span>{singleUser?.accountHolderName}</span></p>
                    {/* <p className='flex justify-between '><span>Account Holder Type:</span><span>{singleUser?.HolderType}</span></p> */}
                    <p className='flex justify-between '><span>Account Number:</span><span>{singleUser?.accountNumber}</span></p>
                    <p className='flex justify-between '><span>Routing Number:</span><span>{singleUser?.routing}</span></p>
                    {/* <p className='flex justify-between '><span>Phone Number:</span><span>{singleUser?.dob}</span></p> */}
                    {/* <p className='flex justify-between '><span>Business Name:</span><span>{singleUser?.businessName}</span></p> */}
                    {/* <p className='flex justify-between '><span>Website:</span><span>{singleUser?.website}</span></p> */}
                    {/* <p className='flex justify-between '><span>Line1:</span><span>{singleUser?.line}</span></p> */}
                    <p className='flex justify-between '><span>City:</span><span>{singleUser?.city}</span></p>
                    <p className='flex justify-between '><span>State:</span><span>{singleUser?.state}</span></p>
                    <p className='flex justify-between '><span>Postal Code:</span><span>{singleUser?.postalCode}</span></p>

                </div>
            </div>
        </Modal>
    )
}

export default UserOpenModals