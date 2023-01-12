import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../api';
import useForm from '../../Hooks/useForm';
import Buttons from '../Forms/Buttons';
import Inputs from '../Forms/Inputs';

const LoginForm = () => {
	const username = useForm();
	const password = useForm();

	//puxa apenas uma vez o token que já esteja salvo no local storage
	//serve para pegar um usuário que ja esteja logado
	React.useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (token) {
			getUser(token);
		}
	}, []);

	// função que puxa o usuário após o token ir para o local storage
	async function getUser(token) {
		const { url, options } = USER_GET(token);
		const response = await fetch(url, options);
		const json = await response.json();
		console.log(json);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			const { url, options } = TOKEN_POST({
				username: username.value,
				password: password.value,
			});

			const response = await fetch(url, options);
			const json = await response.json();
			window.localStorage.setItem('token', json.token);
			getUser(json.token);
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
