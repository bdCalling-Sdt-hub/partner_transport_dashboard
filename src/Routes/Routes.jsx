import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import App from "../App";
import DeliveryDetails from "../Pages/DeliveryDetails/DeliveryDetails";
import Transaction from "../Pages/Transaction/Transaction";
import UserManagement from "../Pages/UserManagement/UserMangment";
import Profile from "../Pages/Profile/Profile";
import TremsCondition from "../Pages/TremsCondition/TremsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import Drivers from "../Pages/Drivers/Drivers";
import FAQ from "../Pages/FAQ/FAQ";
import ProfileUpdatePage from "../Pages/ProfileUpdatePage/ProfileUpdatePage";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Otp from "../Pages/Otp/Otp";
import UpdatePassword from "../Pages/UpdatePassword/UpdatePassword";
import Notification from "../Pages/Notification/Notification";
import AuctionManagement from "../Pages/AuctionManagement/AuctionManagement";
import AuctionDetails from "../Pages/AuctionDetails/AuctionDetails";
import PartnerManagement from "../Pages/PartnerManagement/PartnerManagement";
import CategoryManagement from "../Pages/CategoryManagement/CategoryManagement";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/delivery-details',
                element: <DeliveryDetails />
            },
            {
                path: '/auction-management',
                element: <AuctionManagement />
            },
            {
                path: '/auction-management/auction-details/:id',
                element: <AuctionDetails />
            },
            {
                path: '/transaction',
                element: <Transaction />
            },
            {
                path: '/user-management',
                element: <UserManagement />
            },
            {
                path: '/partner-management',
                element: <PartnerManagement />
            },
            {
                path: '/category-management',
                element: <CategoryManagement />
            },

            {
                path: '/delivery-details',
                element: <DeliveryDetails />
            },
            {
                path: '/delivery-details',
                element: <DeliveryDetails />
            },
            {
                path: '/drivers',
                element: <Drivers />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/terms-condition',
                element: <TremsCondition />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/profile-update-request',
                element: <ProfileUpdatePage />
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />
            },
            {
                path : "/notification",
                element : <Notification/>
            }


        ],


    },
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/auth/forgot-password',
        element: <ForgetPassword />
    },
    {
        path: '/auth/otp',
        element: <Otp />
    },
    {
        path: '/auth/update-password',
        element: <UpdatePassword />
    },
    
])