import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../Forms/Buttons';
import Inputs from '../Forms/Inputs';

const LoginForm = () => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	function handleSubmit(event) {
		event.preventDefault();
		fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((json) => {
				console.log(json);
			});
	}

	return (
		<section>
			<h1>Login</h1>
			<form action='' onSubmit={handleSubmit}>
				<Inputs label='User Name' type='text' name='username' />
				<Inputs label='Password' type='password' name='password' />
				<Buttons>Log In</Buttons>
			</form>
			<Link to='/login/signUp'>Sign Up</Link>
		</section>
	);
};

export default LoginForm;
