import React from 'react';

const UserPost = () => {
	// estado reativo do formulário
	const [username, setUsername] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	// fetch da api
	function handleSubmit(event) {
		event.preventDefault();
		fetch('https://dogsapi.origamid.dev/json/api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((json) => {
				console.log(json);
				return json;
			});
	}

	return (
		<form onSubmit={handleSubmit}>
			{/* nome de usuário */}
			<input
				type='text'
				placeholder='User Name'
				value={username}
				onChange={({ target }) => setUsername(target.value)}
			/>
			{/* email */}
			<input
				type='text'
				placeholder='Email'
				value={email}
				onChange={({ target }) => setEmail(target.value)}
			/>
			{/* senha */}
			<input
				type='text'
				placeholder='Password'
				value={password}
				onChange={({ target }) => setPassword(target.value)}
			/>
			<button>Send</button>
		</form>
	);
};

export default UserPost;
