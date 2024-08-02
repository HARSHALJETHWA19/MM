import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWebsites } from '../redux/actions/websiteActions';
// import { fetchWebsites } from '../redux/actions/websiteActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const websites = useSelector(state => state.websites.websites);

  useEffect(() => {
    dispatch(fetchWebsites());
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {websites.map(website => (
          <li key={website.id}>{website.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
