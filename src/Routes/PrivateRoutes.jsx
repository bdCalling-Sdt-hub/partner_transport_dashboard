
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useGetAdminProfileQuery } from '../redux/api/authApi';
import { Skeleton } from 'antd';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {data :  getAdminProfile , isError, isLoading } = useGetAdminProfileQuery() 
    console.log(getAdminProfile?.data?.authId?.role);
    if(isLoading){
        return <div className="flex items-center justify-center"><Skeleton active /></div>
    }
    if(isError || getAdminProfile?.data?.authId?.role !== "ADMIN" ){
        return <Navigate to={'/auth/login'} state={{from  : location}} />
    }
  return ( <>{children}</>);
}

export default PrivateRoutes;
