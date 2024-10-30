import React, { useState } from 'react'
import ProfileUpdateRequest from '../../Components/ProfileUpdateRequest/ProfileUpdateRequest';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import img1 from '../../assets/images/user1.png'
import img2 from '../../assets/images/user2.png'
import img3 from '../../assets/images/driving.png'
import img4 from '../../assets/images/vichel.png'
const ProfileUpdatePage = () => {
    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
        setCurrent(page);
    };

    const dataSource = [
        {
            key: "#12333",
            name: "Kathryn Murphy",
            img: img1,
            vichelType : 'car',
            vichelNumber: "A 23445355",
            drivingLicense: img3,
            vichelImg : img4,
            email: "gmail@gmail.com",
            contact: 324189454648487,
            passport: 759175632578,
            location: "xyz road, y house",
        },
        {
            key: "#12333",
            name: "Hari Danang",
            img: img2,
            vichelType : 'car',
            vichelNumber: "A 23445355",
            drivingLicense: img3,
            vichelImg : img4,
            contact: 324189454648487,
            passport: 759175632578,
            email: "gmail@gmail.com",
            location: "xyz road, y house",
        },
        {
            key: "#12333",
            name: "Floyd Miles",
            img: img2,
            vichelType : 'car',
            vichelNumber: "A 23445355",
            drivingLicense: img3,
            vichelImg : img4,
            contact: 324189454648487,
            passport: 759175632578,
            email: "gmail@gmail.com",
            location: "xyz road, y house",
        },
        {
            key: "#12333",
            name: "Eleanor Pena",
            img:img1,
            vichelType : 'car',
            vichelNumber: "A 23445355",
            drivingLicense: img3,
            vichelImg : img4,
            contact: 324189454648487,
            passport: 759175632578,
            email: "gmail@gmail.com",
            location: "xyz road, y house",
        },
    ];

    return (
        <div className='bg-white rounded-md p-5'>
            <div className='flex items-center gap-2 py-2'>
                <Link to={-1}><FaArrowLeft className='text-[var(--primary-color)]' size={20} /></Link>
                <p className='font-semibold '>Partner Registration/ Update Request</p>
            </div>
            <ProfileUpdateRequest dataSource={dataSource} />
            <div className='mt-2 flex items-center justify-center'>
                <Pagination current={current}
                    onChange={onChange}
                    total={11}
                    pageSize={1} 
                    showSizeChanger={false}
                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} out of ${total}`} />
            </div>
        </div>
    )
}

export default ProfileUpdatePage