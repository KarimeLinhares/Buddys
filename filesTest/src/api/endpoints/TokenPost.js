import React from 'react';

// validação de usuário com token
const TokenPost = () => {
	// estado reativo do formulário
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [token, setToken] = React.useState('');

	// fetch da api
	function handleSubmit(event) {
		event.preventDefault();
		fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((json) => {
				console.log(json);
				setToken(json.token);
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
			{/* senha */}
			<input
				type='text'
				placeholder='Password'
				value={password}
				onChange={({ target }) => setPassword(target.value)}
			/>
			<button>Send</button>
			<p style={{ wordBreak: 'break-all' }}>{token}</p>
		</form>
	);
};

export default TokenPost;
