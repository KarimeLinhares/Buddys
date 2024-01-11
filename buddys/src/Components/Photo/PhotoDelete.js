import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
	const { loading, request } = useFetch();

	async function handleClick() {
		const confirm = window.confirm('Are you sure you want to delete?');
		if (confirm) {
			const { url, options } = PHOTO_DELETE(id);
			const { response } = await request(url, options);
			if (response.ok) window.location.reload();
		}
	}

	return (
		<>
			{loading ? (
				<button disabled className={styles.delButton}>
					Delete
				</button>
			) : (
				<button onClick={handleClick} className={styles.delButton}>
					Delete
				</button>
			)}
		</>
	);
};

export default PhotoDelete;
