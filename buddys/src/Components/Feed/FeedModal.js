import React from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import useFetch from '../../Hooks/useFetch';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }) => {
	const { data, error, loading, request } = useFetch();

	React.useEffect(() => {
		const { url, options } = PHOTO_GET(photo.id);
		request(url, options);
	}, [photo, request]);

	// fecha o modal de foto ao clicar na área de fora do modal
	function handleOutsideClick(event) {
		if (event.target === event.currentTarget) setModalPhoto(null);
	}

	return (
		<div className={styles.modal} onClick={handleOutsideClick}>
			{error && <Error error={error} />}
			{loading && <Loading />}
			{data && <PhotoContent data={data} />}
		</div>
	);
};

export default FeedModal;
