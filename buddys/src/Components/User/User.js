import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Feed from '../Feed/Feed';
import Head from '../Helper/Head';
import NotFound from '../NotFound';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStatistics from './UserStatistics';

const User = () => {
	const { data } = React.useContext(UserContext);

	return (
		<section className='container'>
			<Head title='My Account' />
			<UserHeader />
			<Routes>
				<Route path='/' element={<Feed user={data.id} />} />
				<Route path='post' element={<UserPhotoPost />} />
				<Route path='statistics' element={<UserStatistics />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</section>
	);
};

export default User;
