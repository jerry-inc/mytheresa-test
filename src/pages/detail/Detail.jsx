import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { URL, API_KEY, IMG_BASE_URL } from '../../utilities/constants';
import './details.sass';
import { useWish } from '../../context/WishContext';

export const Detail = () => {
	const { theme, id } = useParams();

	const { addToWishList, checkIfAlreadyOnList } = useWish();

	const [detail, setDetail] = useState(null);
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
			setDetail(res);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			return false;
		}
	};

	const handleWishBtnClick = () => {
		const data = {
			id: detail.id,
			name: detail.original_title,
			img: `${IMG_BASE_URL}/w92/${detail.poster_path}`,
		};
		addToWishList(data);
	};

	return (
		<div className="content">
			{!loading && detail && (
				<div className="detailContainer">
					<section className="image-section ">
						<div className="poster">
							<img
								className="poster-image"
								src={`${IMG_BASE_URL}/original${detail.backdrop_path}`}
							/>
						</div>
					</section>
					<section className={`description-section item-${theme}`}>
						<div className={`item-title item-${theme}`}>
							{detail.original_title}
						</div>
						<div className={`item-description item-${theme}`}>
							{detail.overview}
						</div>
						<div className="item-genre">
							{detail.genres.map((item) => item.name).join(', ')}
						</div>
						<button
							type="button"
							className={`wishlist-add-btn item-${theme}`}
							onClick={handleWishBtnClick}
						>
							{checkIfAlreadyOnList(detail.id)
								? 'Added to List'
								: 'Add to wishlist'}
						</button>
					</section>
					<section className={`other-info item-${theme}`}>
						<div className="info-box">
							<div>{detail.production_companies[0].name}</div>
							<div>
								Country: {detail.production_companies[0].origin_country}
							</div>
							<div>
								<a href={detail.homepage}>Movie Page</a>
							</div>
						</div>
					</section>
				</div>
			)}
		</div>
	);
};
