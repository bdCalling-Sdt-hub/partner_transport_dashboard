import React from 'react'
import PageName from '../../Components/Shared/PageName'
import { CiSearch } from 'react-icons/ci'
import MostCreateEventUserTable from '../../Components/MostCreateEventUserTable/MostCreateEventUserTable'
import img from '../../assets/images/slider.png'
import img1 from '../../assets/images/slider2.png'
const MostEventCreateUser = () => {
    const dataSource = [
        {
            key: "1",
            slNo: "#12333",
            user: { name: "Jacob Jones", avatar: img },
            email: "binhan628@gmail.com",
            eventsCreated: 46,
        },
        {
            key: "2",
            slNo: "#12333",
            user: { name: "Darlene Robertson", avatar: img },
            email: "tranthuy.nute@gmail.com",
            eventsCreated: 42,
        },
        {
            key: "3",
            slNo: "#12333",
            user: { name: "Brooklyn Simmons", avatar: img },
            email: "trungkienspktnd@gamail.com",
            eventsCreated: 38,
        },
        {
            key: "4",
            slNo: "#12333",
            user: { name: "Leslie Alexander", avatar: img1 },
            email: "nvt.isst.nute@gmail.com",
            eventsCreated: 35,
        },
        {
            key: "5",
            slNo: "#12333",
            user: { name: "Leslie Alexander", avatar: img },
            email: "manhhachkt08@gmail.com",
            eventsCreated: 35,
        },
        {
            key: "6",
            slNo: "#12333",
            user: { name: "Leslie Alexander", avatar: img1},
            email: "tienlapspktnd@gmail.com",
            eventsCreated: 32,
        },
        {
            key: "7",
            slNo: "#12333",
            user: { name: "Leslie Alexander", avatar: img},
            email: "danghoang87hl@gmail.com",
            eventsCreated: 30,
        },
      
    ];
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className=' justify-between flex px-5 py-2'>
                <PageName name={'Most Events Created By Users'} />
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
            <MostCreateEventUserTable dataSource={dataSource}  pagination={true} />
        </div>
    )
}

export default MostEventCreateUser