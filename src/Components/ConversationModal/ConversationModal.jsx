import { Modal } from 'antd'
import React from 'react'

const ConversationModal = ({openConversationModal , setOpenConversationModal}) => {
  return (
    <div>
        <Modal onCancel={()=>setOpenConversationModal(false)} open={openConversationModal} centered footer={false} >
            <div className='text-center text-xl font-medium border-b pb-2'>Conversation Overview</div>
            
        </Modal>
    </div>
  )
}

export default ConversationModal