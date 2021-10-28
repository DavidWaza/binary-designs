import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <>
      <h1>
        Hello and welcome {user.name}, your email address is: {user.email}
      </h1>
    </>
  );
};

export default Dashboard;
