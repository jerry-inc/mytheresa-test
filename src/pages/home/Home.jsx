import React from 'react';
import { CarouselBox as Carousel } from '../../components/carousel/CarouselBox';
import { MOVIE_TYPES } from '../../utilities/constants';
import './home.sass';
import { TextNormalize } from '../../utilities/fn';

export const Home = () => {
	return (
		<div className="content">
			{MOVIE_TYPES.map((type, i) => (
				<div key={`carousel-div-${i}`}>
					<div className="carousel-title">Category: {TextNormalize(type)}</div>
					<Carousel type={type} />
				</div>
			))}
		</div>
	);
};
