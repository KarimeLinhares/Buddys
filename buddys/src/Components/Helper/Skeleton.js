import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = ({ alt, ...props }) => {
	const [skeleton, setSkeleton] = React.useState(true);

	function handleLoad({ target }) {
		setSkeleton(false);
		target.style.opacity = 1;
	}

	return (
		<div className={styles.wrapper}>
			{skeleton && <div className={styles.skeleton}></div>}
			<img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
		</div>
	);
};

export default Skeleton;
