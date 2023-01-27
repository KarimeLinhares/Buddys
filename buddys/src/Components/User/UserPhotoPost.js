import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Inputs';
import Button from '../Forms/Buttons';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../Api';
import styles from './UserPhotoPost.module.css';

const UserPhotoPost = () => {
	const nome = useForm();
	const peso = useForm('number');
	const idade = useForm('number');
	const [img, setImg] = React.useState({});
	const { data, error, loading, request } = useFetch();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (data) navigate('/account');
	}, [data, navigate]);

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData();
		formData.append('img', img.raw);
		formData.append('nome', nome.value);
		formData.append('peso', peso.value);
		formData.append('idade', idade.value);

		const token = window.localStorage.getItem('token');
		const { url, options } = PHOTO_POST(formData, token);
		request(url, options);
	}

	function handleImgChange({ target }) {
		setImg({
			preview: URL.createObjectURL(target.files[0]),
			raw: target.files[0],
		});
	}

	return (
		<>
			<h3 className={styles.photoTitle}>Post Your Pet's Photo</h3>
			<section className={`${styles.photoPost} animeLeft`}>
				<form onSubmit={handleSubmit}>
					<Input label='Name' type='text' name='nome' {...nome} />
					<Input label='Weight' type='number' name='peso' {...peso} />
					<Input label='Age' type='number' name='idade' {...idade} />
					<input
						className={styles.file}
						type='file'
						name='img'
						id='img'
						onChange={handleImgChange}
					/>
					{loading ? (
						<Button disabled>Uploading...</Button>
					) : (
						<Button>Upload</Button>
					)}
					<Error error={error} />
				</form>
				<div>
					{img.preview && (
						<div
							className={styles.preview}
							style={{ backgroundImage: `url('${img.preview}')` }}></div>
					)}
				</div>
			</section>
		</>
	);
};

export default UserPhotoPost;
