import React from 'react';
import Inputs from '../Forms/Inputs';
import Buttons from '../Forms/Buttons';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../Api';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const LoginReset = () => {
	const [login, setLogin] = React.useState('');
	const [key, setKey] = React.useState('');
	const password = useForm();
	const { error, loading, request } = useFetch();
	const navigate = useNavigate();

	React.useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const key = params.get('key');
		const login = params.get('login');
		if (key) setKey(key);
		if (login) setLogin(login);
	}, []);

	async function handleSubmit(event) {
		event.preventDefault();
		if (password.validate()) {
			const { url, options } = PASSWORD_RESET({
				login,
				key,
				password: password.value,
			});
			const { response } = await request(url, options);
			if (response.ok) navigate('/login');
		}
	}

	return (
		<div>
			<Head title='Reset Password' />
			<h1 className='title'>Redefine your Password</h1>
			<form onSubmit={handleSubmit}>
				<Inputs
					label='New Password'
					type='password'
					name='password'
					{...password}
				/>
				{loading ? (
					<Buttons disabled>Redefining...</Buttons>
				) : (
					<Buttons>Redefine</Buttons>
				)}
			</form>
			<Error error={error} />
		</div>
	);
};

export default LoginReset;
