import React from 'react'
import PageName from '../../Components/Shared/PageName'
import img from '../../assets/images/conver.png'
import img1 from '../../assets/images/conver1.png'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const messages = [
  { id: 1, sender: 'other', text: 'Hi, How are you?', time: '11:15 AM' },
  { id: 2, sender: 'self', text: "Hey! 🤘 I saw your post about going on a road trip next week. Where are you headed?", time: '11:05 AM' },
  { id: 3, sender: 'other', text: "That's going to be epic! Don't forget to check out Crater Lake. I went there last year, and the views were insane! 😍", time: '11:15 AM' },
  { id: 4, sender: 'self', text: "Hey! Yeah, I'm super excited! 😊 We're driving up the coast, starting in San Francisco and ending in Seattle. It's been on my bucket list forever!", time: '11:05 AM' },
  { id: 5, sender: 'other', text: "Yeah, I did it a couple of years ago. Let me know if you want any other recommendations!", time: '11:15 AM' },
  { id: 6, sender: 'self', text: "About a week! We're planning to stop in a few places along the way, like Portland and some national parks. Hopefully, we'll get some good hiking in too.", time: '11:05 AM' },
  { id: 5, sender: 'other', text: "Yeah, I did it a couple of years ago. Let me know if you want any other recommendations!", time: '11:15 AM' },

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
      <div className={`flex flex-col max-w-xs ${isSelf ? 'bg-black text-white' : 'bg-[#5C5C5C] text-white'} p-3 rounded-lg`}>
        <p className="whitespace-pre-wrap">{message.text}</p>
        <span className={`text-xs ${isSelf ? 'text-gray-400' : 'text-white'}`}>{message.time}</span>
      </div>
    </div>
  );
};

const ReviewConversation = () => {
  return (
    <div className='bg-white p-5 rounded-md h-[86vh]'>
      <div className="flex justify-between item-center pb-5">
        <div className="flex items-center gap-2">
          <Link to={-1}><FaArrowLeft size={18} className='text-[var(--primary-color)] ' /></Link>
          <span className='font-semibold text-[20px]'>User Management</span>
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-1 rounded-md border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 "
            />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <CiSearch />
            </span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-2 h-full'>
        {/* Left Sidebar - Conversation List */}
        <div className='col-span-3 mt-2 max-h-[80vh] overflow-y-auto'>
          <p className='bg-[#f2f2f2] border-b font-medium text-xl p-2'>Conversation Betweens</p>
          <div className='flex items-center gap-5 py-4 border p-2 shadow-md'>
            <div className='flex'>
              <img src={img} alt="" />
              <img className='ml-[-10px]' src={img1} alt="" />
            </div>
            <p>John Smith & Mike Bonds</p>
          </div>
          <div className='flex items-center gap-5 bg-[#f2f2f2] py-4 pl-2 border-b'>
            <div className='flex'>
              <img src={img} alt="" />
              <img className='ml-[-10px]' src={img1} alt="" />
            </div>
            <p>John Smith & Mike Bond</p>
          </div>
          {
            Array.from({length : 4}).map(item => (
              <div className='flex items-center gap-5 border-b bg-[#f2f2f2] py-4 pl-2'>
                <div className='flex'>
                  <img src={img} alt="" />
                  <img className='ml-[-10px]' src={img1} alt="" />
                </div>
                <p>John Smith & Mike Bonds</p>
              </div>
            ))
          }

        </div>

        {/* Right Sidebar - Conversation Overview */}
        <div className='col-span-9 max-h-[77vh] overflow-y-auto'>
          <div className='text-xl font-medium border-b pb-2'>Conversation Overview</div>
          <div className="p-6 bg-white rounded-lg space-y-4">
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewConversation;
