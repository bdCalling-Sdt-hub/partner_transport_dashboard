import income from './assets/images/profit.png'
import profileUser from './assets/images/profileuser.png'
import deliveryMan from './assets/images/deliveryman.png'
import deliver from './assets/images/auction.png'
import DailyOverViewChart from './Components/DailyOverViewChart/DailyOverViewChart'
import IncomeOverview from './Components/IncomeOverview/IncomeOverview'
import { Link } from 'react-router-dom'
import ProfileUpdateRequest from './Components/ProfileUpdateRequest/ProfileUpdateRequest'
import './app.css'
import img1 from './assets/images/user1.png'
import img2 from './assets/images/user2.png'
import img3 from './assets/images/driving.png'
import img4 from './assets/images/vichel.png'
function App() {

  // 
  const data = [
    {
      title: 'Total Income',
      icon: income,
      count: "$8250",
    },
    {
      title: 'Total User',
      icon: profileUser,
      count: "852,650",
    },
    {
      title: 'Total Partner',
      icon: deliveryMan,
      count: "52,650",
    },
    {
      title: 'Total Auction',
      icon: deliver,
      count: "82,650",
    }
  ]



  // table data 
  const dataSource = [
    {
      key: "#12333",
      name: "Devon Lane",
      img: img1,
      email: "gmail@gmail.com",
      contact: 324189454648487,
      vichelType: 'car',
      vichelNumber: "A 23445355",
      drivingLicense: img3,
      vichelImg: img4,
      passport: 759175632578,
      location: "xyz road, y house",
    },
    {
      key: "#12333",
      name: "Kathryn Murphy",
      img: img2,
      vichelType: 'car',
      vichelNumber: "A 23445355",
      drivingLicense: img3,
      vichelImg: img4,
      contact: 324189454648487,
      passport: 759175632578,
      email: "gmail@gmail.com",
      location: "xyz road, y house",
    },
    {
      key: "#12333",
      name: "Devon Lane",
      img: img1,
      vichelType: 'car',
      vichelNumber: "A 23445355",
      drivingLicense: img3,
      vichelImg: img4,
      contact: 324189454648487,
      passport: 759175632578,
      email: "gmail@gmail.com",
      location: "xyz road, y house",
    },

  ];

  return (
    <div>

      {/*  statistics card for dashboard home page */}
      <div className="grid grid-cols-4 justify-center items-center gap-5">
        {
          data?.map((item, index) => <div className='w-full h-full flex justify-center items-center  flex-col gap-3 py-7 bg-[#FEFEFE] p-2 rounded-md' key={index}>
            <p className='text-2xl font-medium'>{item?.title}</p>
            <img src={item?.icon} className='my-[5px]' />
            <p className='text-3xl font-semibold'>{item?.count}</p>
          </div>)
        }
      </div>

      {/* Chart */}
      <div className='grid grid-cols-2 mt-5 gap-5'>
        <div className='w-full h-full bg-white p-4 rounded-md'>
          <IncomeOverview />

        </div>
        <div className='w-full h-full bg-white p-4 rounded-md'>
          <DailyOverViewChart />

        </div>
      </div>


      {/* Profile update request section */}
      <div className="mt-5 bg-[white] p-5 rounded-md">

        <div className='flex justify-between items-center gap-2 mb-3 p-5'>
          <p className='text-xl font-semibold'>Partner Registration/ Update Request</p> <Link to={`/profile-update-request`}>
            View all
          </Link>
        </div>

        <ProfileUpdateRequest dataSource={dataSource} />
      </div>


    </div>
  )
}

export default App
