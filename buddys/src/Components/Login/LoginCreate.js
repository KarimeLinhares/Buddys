import React from 'react';
import Inputs from '../Forms/Inputs';
import Button from '../Forms/Buttons';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';

const LoginCreate = () => {
	const username = useForm();
	const email = useForm('email');
	const password = useForm();
	// validate with regex
	// const password = useForm('password');

	const { userLogin } = React.useContext(UserContext);

	async function handleSubmit(event) {
		event.preventDefault();
		const { url, options } = USER_POST({
			username: username.value,
			email: email.value,
			password: password.value,
		});
		const response = await fetch(url, options);
		if (response.ok) userLogin(username.value, password.value);
	}

	return (
		<section className='animeLeft'>
			<h1 className='title'>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<Inputs label='User' type='text' name='username' {...username} />
				<Inputs label='Email' type='email' name='email' {...email} />
				<Inputs
					label='Password'
					type='password'
					name='password'
					{...password}
				/>
				<Button>Register</Button>
			</form>
		</section>
	);
};

export default LoginCreate;
