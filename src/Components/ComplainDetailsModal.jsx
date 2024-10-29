import { Modal } from 'antd'
import React from 'react'
import img  from  '../assets/images/mob1.png'
import img2  from  '../assets/images/mob2.png'
import img3 from  '../assets/images/mob3.png'

const ComplainDetailsModal = ({openComplainModal, setOpenComplainModal}) => {
  return (
    <Modal centered footer={false} open={openComplainModal} onCancel={()=>setOpenComplainModal(false)}>
        <div>
            <h1 className='text-xl font-medium text-center'>Complain Details</h1>
            <p className='flex justify-between items-center mt-5'><span className='font-medium'>Complain ID : </span> <span>#326548</span></p>
            <p className='flex justify-between items-center mt-5'><span className='font-medium'>Date : </span> <span>12/08/24</span></p>
            <p className='flex justify-between items-center mt-5'><span className='font-medium'>User/Partner Name : </span> <span>Devon Lane</span></p>
            <p className='flex justify-between items-center mt-5'><span className='font-medium'>Complain Against : </span> <span>Robet smith</span></p>
            <p className='flex justify-between items-center mt-5'><span className='font-medium'>Status: </span> <span>Pending</span></p>
            <p className='font-medium mt-5'>Complain : </p>
            <p >I am writing to express my dissatisfaction with the service provided by XYZ Transport on October 10, 2024. I had scheduled a pickup for my household goods to be transported to my new residence. Unfortunately, the service was far below my expectations.</p>
            <p className='font-medium mt-5'>Evidence : </p>
            <div className='flex items-center gap-2'>
                <img src={img} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </div>
    </Modal>
  )
}

export default ComplainDetailsModal