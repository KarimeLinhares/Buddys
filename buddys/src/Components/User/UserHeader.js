import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
	const [title, setTitle] = React.useState('');
	const location = useLocation();

	React.useEffect(() => {
		const { pathname } = location;
		switch (pathname) {
			case '/account/post':
				setTitle('Upload');
				break;
			case '/account/statistics':
				setTitle('My Statistics');
				break;
			default:
				setTitle('My Account');
		}
	}, [location]);

	return (
		<header className={styles.header}>
			<h1 className='title'>{title}</h1>
			<UserHeaderNav />
		</header>
	);
};

export default UserHeader;
