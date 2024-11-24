import { Input } from 'antd'
import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div className='bg-white p-4 rounded-md min-h-[85vh]'>
            <Link to={-1} className='flex items-center  gap-1 text-xl font-medium'> <IoArrowBackSharp />Contact Us</Link>
            <div className='flex mt-10 max-w-[50%] mx-auto gap-2'>
                <div className='flex items-center'>
                    <p className='mr-2 text-xl font-medium'>Mobile Number:</p>
                    <Input className='w-[500px] py-2' placeholder='Input here...' />
                </div>
                <button className='bg-black text-white px-8 py-2 rounded-full'>Save</button>
            </div>
        </div>
    )
}

export default ContactUs