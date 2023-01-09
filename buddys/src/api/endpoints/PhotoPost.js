import React from 'react';

// postagem com usuário validado
const PhotoPost = () => {
	// estado reativo do formulário
	const [token, setToken] = React.useState('');
	const [nome, setNome] = React.useState('');
	const [peso, setPeso] = React.useState('');
	const [idade, setIdade] = React.useState('');
	const [img, setImg] = React.useState('');

	// fetch da api
	function handleSubmit(event) {
		event.preventDefault();

		// form data de postagem
		const formData = new FormData();
		formData.append('img', img);
		formData.append('nome', nome);
		formData.append('peso', peso);
		formData.append('idade', idade);

		fetch('https://dogsapi.origamid.dev/json/api/photo', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
			body: formData,
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
			{/* token */}
			<input
				type='text'
				placeholder='token'
				value={token}
				onChange={({ target }) => setToken(target.value)}
			/>
			{/* nome */}
			<input
				type='text'
				placeholder='nome'
				value={nome}
				onChange={({ target }) => setNome(target.value)}
			/>
			{/* peso */}
			<input
				type='text'
				placeholder='peso'
				value={peso}
				onChange={({ target }) => setPeso(target.value)}
			/>
			{/* idade */}
			<input
				type='text'
				placeholder='idade'
				value={idade}
				onChange={({ target }) => setIdade(target.value)}
			/>
			{/* imagem */}
			<input type='file' onChange={({ target }) => setImg(target.files[0])} />
			<button>Send</button>
		</form>
	);
};

export default PhotoPost;
