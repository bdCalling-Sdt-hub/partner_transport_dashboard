import React, { useState } from 'react'
import PageName from '../../Components/Shared/PageName'
import { Select } from 'antd'


const AuctionManagement = () => {
    const [auctionStatus, setAuctionStatus] = useState('move')


    const handleChange =(value)=>{
        console.log(value);
    }
    return (
        <div>
            <PageName name={'Auction Management'} />

            <div className='flex items-center mt-5 justify-between'>
                <div className='flex items-center gap-2  px-2'>
                    <div onClick={() => setAuctionStatus('all')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${auctionStatus === 'all' ? "bg-black text-white" : ""}`}>All</div>
                    <div onClick={() => setAuctionStatus('move')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${auctionStatus === 'move' ? "bg-black text-white" : ""}`}>Move</div>
                    <div onClick={() => setAuctionStatus('sell')} className={`border px-8 py-1 border-black rounded-full cursor-pointer ${auctionStatus === 'sell' ? "bg-black text-white" : ""}`}>Sell</div>
                </div>
                <div className='flex gap-5'>
                    <div>
                        <p className='mb-2'>Item Type</p>
                        <Select
                            defaultValue="All"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Category</p>
                        <Select
                            defaultValue="All"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Status</p>
                        <Select
                            defaultValue="All"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Jack' },
                                { value: 'lucy', label: 'Lucy' },
                                { value: 'Yiminghe', label: 'yiminghe' },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctionManagement