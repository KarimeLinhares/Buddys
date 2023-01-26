import React from 'react';
import { COMMENT_POST } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import { ReactComponent as Send } from '../../Assets/enviar.svg';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
	const [comment, setComment] = React.useState('');
	const { request, error } = useFetch();

	async function handleSubmit(event) {
		event.preventDefault();
		const { url, options } = COMMENT_POST(id, { comment });
		const { response, json } = await request(url, options);
		if (response.ok) {
			setComment('');
			setComments((comments) => [...comments, json]);
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea
				className={styles.textarea}
				value={comment}
				id='comment'
				name='comment'
				placeholder='Give a comment'
				onChange={({ target }) => setComment(target.value)}
			/>
			<button className={styles.button}>
				<Send />
			</button>
			<Error error={error} />
		</form>
	);
};

export default PhotoCommentsForm;
