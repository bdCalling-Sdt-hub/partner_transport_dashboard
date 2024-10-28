import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../../assets/images/user1.png'
import car from '../../assets/images/car1.png'
import car2 from '../../assets/images/car2.png'
import car3 from '../../assets/images/car3.png'
import plate from '../../assets/images/num.png'
import ins1 from '../../assets/images/ins.png'
import ins2 from '../../assets/images/ins2.png'
import driving from '../../assets/images/driving.png'

const PartnerDetails = () => {
    const [basicInfo, setBasicInfo] = useState(true)
  return (
    <div className=' bg-white p-5 rounded-md'>
        <div className='flex  items-center gap-2 '>
            <Link to={-1}><FaArrowLeft size={20} className='text-blue-600' /></Link>
            <p className='font-semibold text-[20px]'>Partner Details</p>
        </div>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img src={img} className='h-16 w-16 rounded-full object-cover' alt="" />
                <p className='text-xl font-medium mt-2'>Robert Smith</p>
            </div>

            <div className='flex items-center justify-center gap-5 mt-5'>
                
                <p onClick={()=> setBasicInfo(true)} className={ ` cursor-pointer font-medium ${basicInfo ? 'text-blue-600  border-b border-b-blue-600' : ''}`}>Basic Info</p>
                <p onClick={()=> setBasicInfo(false)} className={ ` cursor-pointer font-medium ${!basicInfo ? 'text-blue-600 border-b border-b-blue-600' : ''}`}>Bank Info</p>
            </div>
           {
            basicInfo ?  <div className='max-w-lg mx-auto mt-10 space-y-3'>
            <p className='flex items-center justify-between'><span className='font-medium'>Email:</span> <span className='text-gray-500'>Shukumar@gmail.com</span></p>
            <p className='flex items-center justify-between'><span className='font-medium'>Phone Number:</span> <span className='text-gray-500'>+880187299</span></p>
            <p className='flex items-center justify-between'><span className='font-medium'>Location:</span> <span className='text-gray-500'>1910 Thirbridge</span></p>
        
            <div>
                <p>Vehicle Photos: </p>
                <div className='mt-5 flex  justify-between'>
                    <img src={car} alt="" />
                    <img src={car2} alt="" />
                    <img src={car3} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                <div className='w-full my-2 '>
                    <p className='my-2 font-medium text-xl'>Vehicle license plate:</p>
                    <img className='w-full' src={plate} alt="" />
                    <p className='my-5 font-medium text-xl'>Vehicle insurance photo:</p>
                    <img className='w-full' src={ins1} alt="" />

                </div>
                <div className='w-full my-2'>
                    <p className='my-2 font-medium text-xl'>Vehicle license plate:</p>
                    <img className='w-[100%]' src={driving} alt="" />
                    <p className='my-5 font-medium text-xl'>Vehicle insurance photo:</p>
                    <img className='w-full' src={ins2} alt="" />

                </div>
            </div>
        </div> : <div className='max-w-lg mx-auto mt-10 space-y-3'>
        <p className='flex items-center justify-between'><span className=''>Account Holder Name:</span> <span className='text-gray-500'>Dianne Russell</span></p>
        <p className='flex items-center justify-between'><span className=''>Account Holder Type:</span> <span className='text-gray-500'>Personal</span></p>
        <p className='flex items-center justify-between'><span className=''>Account Number:</span> <span className='text-gray-500'>Dianne Russell</span></p>
        <p className='flex items-center justify-between'><span className=''>Routing Number:</span> <span className='text-gray-500'>567458954</span></p>
        <p className='flex items-center justify-between'><span className=''>Phone Number:</span> <span className='text-gray-500'>56-7458954</span></p>

        <p className='flex items-center justify-between'><span className=''>Date of Birth:</span> <span className='text-gray-500'>23/06/2000</span></p>
        <p className='flex items-center justify-between'><span className=''>Business Name:</span> <span className='text-gray-500'>Governance Structure</span></p>
        <p className='flex items-center justify-between'><span className=''>Website:</span> <span className='text-gray-500'>www.google.com</span></p>
        <p>Address </p>
        <p className='flex items-center justify-between'><span className=''>Line 1 :</span> <span className='text-gray-500'>2715 Ash Dr. san jose</span></p>
        <p className='flex items-center justify-between'><span className=''>City :</span> <span className='text-gray-500'>Dr. san jose</span></p>
        <p className='flex items-center justify-between'><span className=''>State :</span> <span className='text-gray-500'>In-progress</span></p>
        <p className='flex items-center justify-between'><span className=''>Postal Code :</span> <span className='text-gray-500'>3466</span></p>
        </div>
           }
        </div>
    </div>
  )
}

export default PartnerDetails