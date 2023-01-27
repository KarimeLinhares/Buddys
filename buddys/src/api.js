export const API_URL = 'https://dogsapi.origamid.dev/json';

// validação do token
export function TOKEN_POST(body) {
	return {
		url: API_URL + '/jwt-auth/v1/token',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

export function TOKEN_VALIDATE_POST(token) {
	return {
		url: API_URL + '/jwt-auth/v1/token/validate',
		options: {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		},
	};
}

// puxar usuário
export function USER_GET(token) {
	return {
		url: API_URL + '/api/user',
		options: {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + token,
			},
		},
	};
}

// novo usuário
export function USER_POST(body) {
	return {
		url: API_URL + '/api/user',
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		},
	};
}

// postar foto
export function PHOTO_POST(formData, token) {
	return {
		url: API_URL + '/api/photo',
		options: {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + token,
			},
			body: formData,
		},
	};
}

// puxar foto específica
export function PHOTO_GET(id) {
	return {
		url: `${API_URL}/api/photo/${id}`,
		options: {
			method: 'GET',
			cache: 'no-store',
		},
	};
}

// puxar fotos
export function PHOTOS_GET({ page, total, user }) {
	return {
		url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
		options: {
			method: 'GET',
			cache: 'no-store',
		},
	};
}

// postar comentário
export function COMMENT_POST(id, body) {
	return {
		url: `${API_URL}/api/comment/${id}`,
		options: {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + window.localStorage.getItem('token'),
			},
			body: JSON.stringify(body),
		},
	};
}

// deletar uma foto do usuário
export function PHOTO_DELETE(id) {
	return {
		url: `${API_URL}/api/photo/${id}`,
		options: {
			method: 'DELETE',
			headers: {
				Authorization: 'Bearer ' + window.localStorage.getItem('token'),
			},
		},
	};
}
