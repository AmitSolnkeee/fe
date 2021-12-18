import React from 'react';
import { Navigate} from 'react-router';
import { useSelector } from 'react-redux';

const PrivateProtectedRoute = ({element}) => {
    const store = useSelector(state => state?.users)
    const {userAuth} = store;
    return  (userAuth ? element :  <Navigate to='/login'/> )
}
export default PrivateProtectedRoute
