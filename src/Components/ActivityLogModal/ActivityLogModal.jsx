import { Modal } from 'antd'
import React from 'react'

const ActivityLogModal = ({openModal , setOpenModal}) => {
  return (
    <Modal centered footer={false} open={openModal} onCancel={()=> setOpenModal(false)}  >
        <p className='text-xl text-center font-semibold' >Activity Log Details</p>
        <div className='flex flex-col items-center justify-center mt-5 space-y-2'>
            <p className='flex justify-between w-full text-[18px]'><span>Timestamp:</span> <span>12/06/24 at 2:46PM(GMT+6)</span></p>
            <p className='flex justify-between w-full text-[18px]'><span>ID:</span> <span>4625345641</span></p>
            <p className='flex justify-between w-full text-[18px]'><span>Name:</span> <span>Shukumar Ghosh</span></p>
            <p className='flex justify-between w-full text-[18px]'><span>Email:</span> <span>shukumar542@gamil.com</span></p>
            <p className='flex justify-between w-full text-[18px]'><span>Action Type:</span> <span>Editing</span></p>
            <p className='flex justify-between w-full text-[18px]'><span>Action Description:</span> <span>Partner Fast Track Deliveries</span></p>
            <p className='flex justify-between w-full text-[18px]'><span>Result:</span> <span>Success</span></p>
        </div>
    </Modal>
  )
}

export default ActivityLogModal