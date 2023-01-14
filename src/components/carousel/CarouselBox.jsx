import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { URL, API_KEY, IMG_BASE_URL } from '../../utilities/constants';
import { Link } from 'react-router-dom';

export const CarouselBox = ({ type }) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		getMovies(type);
	}, []);

	const getMovies = async (movieType) => {
		try {
			let res = await fetch(`${URL}/movie/${movieType}?api_key=${API_KEY}`);
			res = await res.json();
			if (res.results) {
				setMovies(res.results);
				setLoading(false);
			}
		} catch (error) {
			setError('An error occurred in loading Movies data');
			return false;
		}
	};

	return (
		<div>
			{loading && (
				<div style={{ height: 300, width: 500, backgroundColor: '#ccc' }}>
					Loading ...
				</div>
			)}

			{error && (
				<div style={{ height: 300, width: 500, backgroundColor: '#ccc' }}>
					{error}
				</div>
			)}

			{!loading && !error && (
				<Carousel showThumbs={false} width={500}>
					{movies.length &&
						movies.map((movie, i) => (
							<div key={`${type}-slide-${i}`}>
								<img
									style={{ width: 500, objectFit: 'contain' }}
									src={`${IMG_BASE_URL}/w500/${movie.backdrop_path}`}
								/>

								<Link className="legend" to={`/detail/${type}/${movie.id}`}>
									{movie.original_title}
								</Link>
							</div>
						))}
				</Carousel>
			)}
		</div>
	);
};
