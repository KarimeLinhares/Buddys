import React from 'react';

// puxa a informação da API
const PhotoGet = () => {
	function handleSubmit(event) {
		event.preventDefault();
		fetch('https:/dogsapi.origamid.dev/json/api/photo')
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
			<input type='text' />
			<button>Send</button>
		</form>
	);
};

export default PhotoGet;
