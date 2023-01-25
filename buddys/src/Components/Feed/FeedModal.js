import React from 'react';
import { PHOTO_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import useFetch from '../../Hooks/useFetch';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo }) => {
	const { data, error, loading, request } = useFetch();

	React.useEffect(() => {
		const { url, options } = PHOTO_GET(photo.id);
		request(url, options);
	}, [photo, request]);

	return (
		<div className={styles.modal}>
			{error && <Error error={error} />}
			{loading && <Loading />}
			{data && <PhotoContent data={data} />}
		</div>
	);
};

export default FeedModal;
