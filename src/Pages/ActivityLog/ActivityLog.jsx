import { Select } from 'antd'
import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ActivityLogTable from '../../Components/ActivityLogTable/ActivityLogTable';
import img from '../../assets/images/user1.png'
import img1 from '../../assets/images/user2.png'

const ActivityLog = () => {
    const dataSource = [
        {
          key: "1",
          timestamp: "12/06/24 at 2:46 PM (GMT+6)",
          id: "456457947",
          admin: { name: "Kathryn Murphy", avatar:img },
          actionType: "Editing",
          actionDescription: "User profile #123 was updated",
          result: "Error",
        },
        {
          key: "2",
          timestamp: "12/06/24 at 2:12 PM (GMT+6)",
          id: "677676597",
          admin: { name: "Devon Lane", avatar: img1 },
          actionType: "Creation",
          actionDescription: "Admin Sofia Ramirez corrected user issue",
          result: "Success",
        },
        {
          key: "3",
          timestamp: "12/06/24 at 1:05 PM (GMT+6)",
          id: "675675667",
          admin: { name: "Foysal Rahman", avatar: img },
          actionType: "Deletion",
          actionDescription: "Admin Samuel Roberts reassigned project",
          result: "Error",
        },
        // Add more rows as necessary
      ];
    /** item category and status search functionality */
    const handleChange = (value) => {
        console.log(value);
    }
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className="flex justify-between item-center pb-5 ">
                <div className="flex items-center gap-2">
                    <Link to={-1}><FaArrowLeft size={18} className='text-[var(--primary-color)] ' /></Link>
                    <span className='font-semibold text-[20px]'>Activity Log</span></div>
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
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <div>
                        <p className='mb-2'>Date</p>
                        <Select
                            defaultValue="12/06/24"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: '12/06/24' },
                                { value: 'lucy', label: '12/06/24' },
                                { value: 'Yiminghe', label: '12/06/24' },
                            ]}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Admin Name</p>
                        <Select
                            defaultValue="Devon Lane"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Devon Lane' },
                                { value: 'lucy', label: 'Devon Lane' },
                                { value: 'Yiminghe', label: 'Devon Lane' },
                            ]}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Action Type</p>
                        <Select
                            defaultValue="Editing"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Editing' },
                                { value: 'lucy', label: 'Deletion' },
                                { value: 'Yiminghe', label: 'Creating' },
                            ]}
                        />
                    </div>
                    <div>
                        <p className='mb-2'>Action Type</p>
                        <Select
                            defaultValue="Success"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                                { value: 'jack', label: 'Error' },
                            ]}
                        />
                    </div>
                </div>
                <div>
                    <button className='flex items-center gap-2 bg-black rounded-full text-white px-4 py-2'><MdOutlineFileDownload />Download CSV</button>
                </div>
            </div>
            <div>
                <ActivityLogTable dataSource={dataSource} />
            </div>
        </div>
    )
}

export default ActivityLog