import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Buttons from '../Forms/Buttons';
import Inputs from '../Forms/Inputs';

const LoginForm = () => {
	const username = useForm();
	const password = useForm();

	function handleSubmit(event) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(),
			})
				.then((response) => {
					console.log(response);
					return response.json();
				})
				.then((json) => {
					console.log(json);
				});
		}
	}

	return (
		<section>
			<h1>Login</h1>
			<form action='' onSubmit={handleSubmit}>
				<Inputs label='User Name' type='text' name='username' {...username} />
				<Inputs
					label='Password'
					type='password'
					name='password'
					{...password}
				/>
				<Buttons>Log In</Buttons>
			</form>
			<Link to='/login/signUp'>Sign Up</Link>
		</section>
	);
};

export default LoginForm;
