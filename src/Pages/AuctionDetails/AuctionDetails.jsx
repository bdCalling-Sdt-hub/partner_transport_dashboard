import React from 'react'
import PageName from '../../Components/Shared/PageName'
import img1 from '../../assets/images/prod1.png'
import img2 from '../../assets/images/prod2.png'
import img3 from '../../assets/images/prod3.png'
import img4 from '../../assets/images/prod4.png'


  
const AuctionDetails = () => {
  return (
    <div className='bg-white rounded-md p-5'>
        <PageName name={'Auction Details'} />

        <div className='max-w-4xl mx-auto mt-10'>
            <div className='flex items-center justify-between'>
                <p className='font-medium'>User Name : </p>
                <p>Robert Smith</p>
            </div>
            <div>
                <p>Items Image</p>
                <div className='flex items-center  justify-between mt-5 gap-5 '>
                    <img src={img1} className='w-full  object-contain' alt="" />
                    <img src={img2} className='w-full object-contain' alt="" />
                    <img src={img3} className='w-full object-contain' alt="" />
                    <img src={img4} className='w-full object-contain' alt="" />
                </div>
            </div>
            <div className='mt-5 space-y-2'>
           
                <p className='flex items-center justify-between '><span className='font-medium'>Date : </span> <span>12/08/24</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Category : </span> <span>Electronics Goods</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Amount : </span> <span>4 pc</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Measurement: </span> <span>24 mts</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Weight: </span> <span>10 kg</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Loading Floor: </span> <span>2nd Floor</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Unloading Floor: </span> <span>5nd Floor</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Loading Address: </span> <span>52 Preston Rd. Inglewood, Maine, 6786</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Unloading Address: </span> <span>19 Thornridge C. Shiloh, Hawaii, 4567</span> </p>
                <p className='flex items-center justify-between'><span className='font-medium'>Distance: </span> <span>1.5 km</span> </p>
                <p className='flex  justify-between gap-5'><span className='font-medium'>Description: </span> <span>The Samsung 32 Y1 Y Series 32-Inch Android TV is Give your eyes pleasure with the 16M Display colors. You can connect anything with the Samsung TV Y series, very useful connections.</span> </p>
                <p className='flex  justify-between gap-5'><span className='font-medium'> Auction Deadline</span> <span>12/08/24 at 10 PM</span> </p>
                <p className='flex  justify-between gap-5'><span className='font-medium'>Service Date</span> <span>12/08/24 at 10 PM</span> </p>
                <p className='flex  justify-between gap-5'><span className='font-medium'>Minimum Price</span> <span>$25</span> </p>
                <p className='flex  justify-between gap-5'><span className='font-medium'>Maximum Price</span> <span>$65</span> </p>
                <p className='flex  justify-between gap-5'><span className='font-medium'>Status</span> <span>In Progress</span> </p>
            </div>
        </div>

    </div>
  )
}

export default AuctionDetails