import React from 'react';

const types = {
	email: {
		regex:
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		message: 'Invalid data',
	},
	password: {
		regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
		message:
			'Password should contain at least 1 digit, 1 lower case, 1 upper case, and at least 8 from the mentioned characters',
	},
	number: {
		regex: /^\d+$/,
		message: 'Numbers only',
	},
};

const useForm = (type) => {
	const [value, setValue] = React.useState('');
	const [error, setError] = React.useState('');

	function validate(value) {
		if (type === false) return true;
		if (value.length === 0) {
			setError('Cannot be empty');
			return false;
		} else if (types[type] && !types[type].regex.test(value)) {
			setError(types[type].message);
			return false;
		} else {
			setError(null);
			return true;
		}
	}

	function onChange({ target }) {
		if (error) validate(target.value);
		setValue(target.value);
	}

	return {
		value,
		setValue,
		onChange,
		error,
		validate: () => validate(value),
		onBlur: () => validate(value),
	};
};

export default useForm;
