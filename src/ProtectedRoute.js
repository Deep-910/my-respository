import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const adminData = JSON.parse(localStorage.getItem('adminData'));

  // If no admin data or the role doesn't match, redirect to the login page
  if (!adminData || !requiredRole.includes(adminData.role)) {
    return <Navigate to="/AdminLogin" />;
  }
  if (requiredRole === 'Main' && adminData === 'admin_waltzer@gmail.com') {
   
    return <Navigate to="/NavAfterLog" />;
  }
  else if (requiredRole === 'Category' && adminData === 'admin_category@gmail.com') {
    // Redirect if user is not Category admin
    return <Navigate to="/newcategory" />;
  }
  else if (requiredRole === 'Products' && adminData === 'admin_products@gmail.com') {
    // Redirect if user is not Category admin
    return <Navigate to="/addproducts" />;
  }
  else if (requiredRole === 'reviews_rating' && adminData === 'admin_reviews@gmail.com') {
    // Redirect if user is not Category admin
    return <Navigate to="/review" />;
  }
  else if (requiredRole === 'Userlist' && adminData === 'admin_userlist@gmail.com') {
    // Redirect if user is not Category admin
    return <Navigate to="/userlist" />;
  }
  
  // If the role matches, render the children components
  return children;
};

export default ProtectedRoute;






