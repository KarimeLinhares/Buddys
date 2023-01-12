import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginLost from './LoginLost';
import LoginReset from './LoginReset';

const Login = () => {
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
