import React from 'react';
import Inputs from '../Forms/Inputs';
import Buttons from '../Forms/Buttons';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../Api';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginLost = () => {
	const login = useForm();
	const { data, loading, error, request } = useFetch();

	console.log(window.location);
	async function handleSubmit(event) {
		event.preventDefault();
		if (login.validate()) {
			const { url, options } = PASSWORD_LOST({
				login: login.value,
				url: window.location.href.replace('passwordLost', 'passwordReset'),
			});
			const { json } = await request(url, options);
			console.log(json);
		}
	}

	return (
		<section>
			<Head title='Lost Password' />
			<h1 className='title'>Lost Your Password?</h1>
			{data ? (
				<p style={{ color: '#4c1' }}>{data}</p>
			) : (
				<form onSubmit={handleSubmit}>
					<Inputs
						label='User Name / Email '
						type='text'
						name='login'
						{...login}
					/>
					{loading ? (
						<Buttons disabled>Sending...</Buttons>
					) : (
						<Buttons>Send Email</Buttons>
					)}
				</form>
			)}

			<Error error={error} />
		</section>
	);
};

export default LoginLost;
