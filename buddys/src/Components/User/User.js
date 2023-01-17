import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStatistics from './UserStatistics';

const User = () => {
	return (
		<section className='container'>
			<UserHeader />
			<Routes>
				<Route path='/' element={<Feed />} />
				<Route path='post' element={<UserPhotoPost />} />
				<Route path='statistics' element={<UserStatistics />} />
			</Routes>
		</section>
	);
};

export default User;
