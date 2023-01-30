import React from 'react';
import Inputs from '../Forms/Inputs';
import Button from '../Forms/Buttons';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import { UserContext } from '../../UserContext';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';

const LoginCreate = () => {
	const username = useForm();
	const email = useForm('email');
	const password = useForm();
	// validate with regex
	// const password = useForm('password');

	const { userLogin } = React.useContext(UserContext);
	const { loading, error, request } = useFetch();

	async function handleSubmit(event) {
		event.preventDefault();
		const { url, options } = USER_POST({
			username: username.value,
			email: email.value,
			password: password.value,
		});
		const { response } = await request(url, options);
		if (response.ok) userLogin(username.value, password.value);
	}

	return (
		<section className='animeLeft'>
			<Head title='Create Account' />
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
				{loading ? (
					<Button disabled>Registering...</Button>
				) : (
					<Button>Register</Button>
				)}
				<Error error={error} />
			</form>
		</section>
	);
};

export default LoginCreate;
