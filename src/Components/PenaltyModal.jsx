import { Input, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

const PenaltyModal = ({ openPenaltyModal, setOpenPenaltyModal }) => {
    return (
        <Modal open={openPenaltyModal} onCancel={() => setOpenPenaltyModal(false)} centered footer={false}>
            <div>
                <h1 className='text-center font-medium text-xl'>Penalty</h1>
                <p className='py-2 '>User/Partner Name</p>
                <Input />
                <p className='py-2 '>penalty Percentage</p>
                <Input />
                <p className='py-2 '>Reason of penalty</p>
                
                <TextArea rows={4} />
                <button className='bg-black text-white w-full mt-2 rounded-full py-2'>Submit</button>
            </div>
        </Modal>
    )
}

export default PenaltyModal