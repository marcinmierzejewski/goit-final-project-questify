import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ redirectPath = '/' }) => {
  const token = useSelector(state => state.token);

  return token ? <Navigate to={redirectPath} /> : <Outlet />;
};

PublicRoute.propTypes = {
  redirectPath: PropTypes.string,
};

export default PublicRoute;
