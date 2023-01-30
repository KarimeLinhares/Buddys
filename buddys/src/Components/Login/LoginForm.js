import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Buttons from '../Forms/Buttons';
import Inputs from '../Forms/Inputs';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import stylesBtn from '../Forms/Buttons.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
	const username = useForm();
	const password = useForm();
	const { userLogin, error, loading } = React.useContext(UserContext);

	async function handleSubmit(event) {
		event.preventDefault();

		if (username.validate() && password.validate()) {
			userLogin(username.value, password.value);
		}
	}

	return (
		<section className='animeLeft'>
			<Head title='Login' />
			<h1 className='title'>Login</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Inputs label='User Name' type='text' name='username' {...username} />
				<Inputs
					label='Password'
					type='password'
					name='password'
					{...password}
				/>
				{loading ? (
					<Buttons disabled>Loading...</Buttons>
				) : (
					<Buttons>Log In</Buttons>
				)}
				<Error error={error} />
			</form>
			<Link className={styles.lost} to='/login/passwordLost'>
				Lost your password?
			</Link>
			<div className={styles.signUp}>
				<h2 className={styles.subtitle}>New Account</h2>
				<p>Don't have an Account? Register for this site</p>
			</div>
			<Link className={stylesBtn.button} to='/login/signUp'>
				Sign Up
			</Link>
		</section>
	);
};

export default LoginForm;
