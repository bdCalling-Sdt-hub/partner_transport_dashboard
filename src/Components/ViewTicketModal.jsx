import { Modal } from 'antd';
import React from 'react';

const ViewTicketModal = ({openViewTicket, setOpenViewTicket}) => {
  return (
    <Modal footer={false}  centered open={openViewTicket}  onCancel={()=> setOpenViewTicket(false)}>
       <div>
            <h1 className='text-xl font-medium text-center'>Complain Details</h1>
            <p className='flex justify-between items-center mt-2'><span className='font-medium'>Complain ID : </span> <span>#326548</span></p>
            <p className='flex justify-between items-center mt-2'><span className='font-medium'>Date : </span> <span>12/08/24</span></p>
            <p className='flex justify-between items-center mt-2'><span className='font-medium'>User/Partner Name : </span> <span>Devon Lane</span></p>
            <p className='flex justify-between items-center mt-2'><span className='font-medium'>User/Partner Name : </span> <span>Devon Lane</span></p>
            <p className='flex justify-between items-center mt-2'><span className='font-medium'>Email : </span> <span>Robet@gmail.com</span></p>
            <p className='flex justify-between items-center mt-2'><span className='font-medium'>Phone : </span> <span>555-0124</span></p>
            <p className='flex justify-between items-center mt-2'><span className='font-medium'>Status: </span> <span>Pending</span></p>
            <p className='font-medium mt-5'>
                Description of issue : </p>
            <p >I am writing to express my dissatisfaction with the service provided by XYZ Transport on October 10, 2024. I had scheduled a pickup for my household goods to be transported to my new residence. Unfortunately, the service was far below my expectations.</p>
            
        </div>
    </Modal>
  );
}

export default ViewTicketModal;
