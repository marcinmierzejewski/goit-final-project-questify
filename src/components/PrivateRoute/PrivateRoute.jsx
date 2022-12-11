import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ redirectPath = '/landing' }) => {
  const token = useSelector(state => state.token);
  
  return token ? <Outlet /> : <Navigate to={redirectPath} replace/>
};

PrivateRoute.propTypes = {
  redirectPath: PropTypes.string,
};

export default PrivateRoute;
