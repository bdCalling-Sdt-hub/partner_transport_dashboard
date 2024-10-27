import { Modal } from 'antd'
import React from 'react'

const RefundModal = ({ openRefundModal, setRefundModal }) => {
    return (
        <Modal open={openRefundModal} centered footer={false} onCancel={() => setRefundModal(false)}>
            <div className='text-center'>
                <h1 className='text-xl font-medium '>Are you sure want to Refund?</h1>
                <p className='mt-5'>Win Bid amount will be refund tot the user/partner</p>
                <div className='space-x-5 mt-5'>
                    <button className='bg-black text-white rounded-full px-8 py-2'>Refund</button>
                    <button className='border rounded-full px-8 py-2' onClick={() => setRefundModal(false)}>cancel</button>
                </div>
            </div>
        </Modal>
    )
}

export default RefundModal