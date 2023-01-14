import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL, API_KEY } from '../../utilities/constants';
import './details.sass';
import { useWish } from '../../context/wishContext';

export const Detail = () => {
	const { theme, id } = useParams();

	const { addToWishList } = useWish();

	const [moveDetail, setMovieDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (id) {
			(async () => {
				await getMovieDetails(id);
			})();
		}
	}, [id]);

	const getMovieDetails = async (id) => {
		try {
			setLoading(true);
			let res = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}`);
			res = await res.json();
			setMovieDetail(res);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			return false;
		}
	};

	return (
		<div>
			{moveDetail && (
				<div className="movieWrapper">
					<section className="imageMovie ">
						<figure className="addWishlist">
							<img
								style={{ width: '50vw' }}
								src={`http://image.tmdb.org/t/p/original${moveDetail.backdrop_path}`}
							/>
							<figcaption>
								<h2>Add to my Wishlist</h2>
								<a href="#" onClick={() => addToWishList(moveDetail.id)}></a>
							</figcaption>
						</figure>
						<a href="#" onClick={() => addToWishList(moveDetail.id)}>
							Add to my wishlist
						</a>
					</section>
					<section className={`descriptionMovie movie-${theme}`}>
						<ul>
							<li>
								<h3>{moveDetail.original_title}</h3>
							</li>
							<li>{moveDetail.overview}</li>
							<li>{moveDetail.popularity}</li>
							<li className="tagsMovie">{moveDetail.genres[0].name}</li>
						</ul>
					</section>
					<section className={`infoMovie movie-${theme}`}>
						<ul>
							<li>
								Production company: {moveDetail.production_companies[0].name}
							</li>
							<li>
								<p>
									Country: {moveDetail.production_companies[0].origin_country}
								</p>
							</li>
							<li>
								<a href={moveDetail.homepage}>Movie's original link</a>
							</li>
						</ul>
					</section>
				</div>
			)}
		</div>
	);
};
