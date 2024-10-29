import { Modal } from 'antd'
import React from 'react'
import img from '../../assets/images/conver.png'
import img1 from '../../assets/images/conver1.png'

const messages = [
  { id: 1, sender: 'other', text: 'Hi, How are you?', time: '11:15 AM' },
  { id: 2, sender: 'self', text: "Hey! 🤘 I saw your post about going on a road trip next week. Where are you headed?", time: '11:05 AM' },
  { id: 3, sender: 'other', text: "That's going to be epic! Don't forget to check out Crater Lake. I went there last year, and the views were insane! 😍", time: '11:15 AM' },
  { id: 4, sender: 'self', text: "Hey! Yeah, I'm super excited! 😊 We're driving up the coast, starting in San Francisco and ending in Seattle. It's been on my bucket list forever!", time: '11:05 AM' },
  { id: 5, sender: 'other', text: "Yeah, I did it a couple of years ago. Let me know if you want any other recommendations!", time: '11:15 AM' },
  { id: 6, sender: 'self', text: "About a week! We're planning to stop in a few places along the way, like Portland and some national parks. Hopefully, we'll get some good hiking in too.", time: '11:05 AM' }
];
const ChatBubble = ({ message }) => {
  const isSelf = message.sender === 'self';
  return (
    <div className={`flex items-start space-x-2 ${isSelf ? 'flex-row-reverse text-right' : ''} mb-4`}>
      <img
        src={`${isSelf ? img : img1}`}
        size="large"
        className={isSelf ? 'ml-2' : 'mr-2'}
      />
      <div className={`flex flex-col max-w-xs ${isSelf ? 'bg-gray-800 text-white' : 'bg-[#5C5C5C] text-white'} p-3 rounded-lg`}>
        <p className="whitespace-pre-wrap">{message.text}</p>
        <span className={`text-xs ${isSelf ? 'text-gray-400' : 'text-white'}`}>{message.time}</span>
      </div>
    </div>
  );
};

const ConversationModal = ({ openConversationModal, setOpenConversationModal }) => {

  return (
    <div>
      <Modal onCancel={() => setOpenConversationModal(false)} open={openConversationModal} centered footer={false} width={800} >
        <div className='text-center text-xl font-medium border-b pb-2'>Conversation Overview</div>

        <div className="p-6  mx-auto bg-white rounded-lg space-y-4">
      {messages.map((msg) => (
        <ChatBubble key={msg.id} message={msg} />
      ))}
    </div>
  
      </Modal>
    </div>
  )
}

export default ConversationModal