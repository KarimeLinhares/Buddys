import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

const Login = () => {
	const { login } = React.useContext(UserContext);

	if (login === true) return <Navigate to='/account' />;

	return (
		<div>
			<Routes>
				<Route path='/' element={<LoginForm />} />
				<Route path='signUp' element={<LoginCreate />} />
				<Route path='passwordReset' element={<LoginReset />} />
				<Route path='passwordlost' element={<LoginLost />} />
			</Routes>
		</div>
	);
};

export default Login;
