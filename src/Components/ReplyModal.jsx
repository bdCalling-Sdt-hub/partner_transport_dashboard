import { Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const ReplyModal = ({ openReplyModal, setOpenReplyModal }) => {
    return (
        <Modal open={openReplyModal} onCancel={() => { setOpenReplyModal(false) }} footer={false} centered>
            <div className='mt-10'>
                <p className='py-2 text-xl'>Reply of the issue</p>
                <TextArea rows={4} />
                <button className='bg-black text-white w-full mt-2 rounded-full py-2'>Submit</button>
            </div>
        </Modal>
    )
}

export default ReplyModal