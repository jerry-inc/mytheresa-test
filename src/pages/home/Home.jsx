import React from 'react';
import { CarouselBox as Carousel } from '../../components/carousel/CarouselBox';
import { MOVIE_TYPES } from '../../utilities/constants';
export const Home = () => {
	return (
		<div className="content">
			{MOVIE_TYPES.map((type, i) => (
				<Carousel type={type} key={`carousel-${i}`} />
			))}
		</div>
	);
};
