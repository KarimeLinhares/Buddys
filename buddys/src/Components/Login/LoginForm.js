import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Buttons from '../Forms/Buttons';
import Inputs from '../Forms/Inputs';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
	const username = useForm();
	const password = useForm();
	const { userLogin } = React.useContext(UserContext);

	async function handleSubmit(event) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value);
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
