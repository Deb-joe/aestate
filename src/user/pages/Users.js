import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
	const USERS = [{id: 'u1', name: 'Masimo', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/michele-morrone-attends-the-bar-giuseppe-red-carpet-during-news-photo-1592521999.jpg?crop=1.00xw:0.667xh;0,0.0658xh&resize=640:*', places: 3}];
  return <UsersList items={USERS} />;
};

export default Users;
