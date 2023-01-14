import React from 'react';
import { NavLink } from 'react-router-dom';
import WishButton from '../wishButton/WishButton';
import { useWish } from '../../context/wishContext';

const wishBtnClick = () => {
	alert('Wish Button');
};

const Header = () => {
	const { getTotalItems } = useWish();
	return (
		<div className="header" style={{ display: 'flex' }}>
			<div className="nav-bar" style={{ marginRight: 'auto' }}>
				<NavLink to={'/'}>Home</NavLink>
				<NavLink to={'/about'}>About</NavLink>
			</div>
			<WishButton onClick={wishBtnClick} count={getTotalItems()} />
		</div>
	);
};

export default Header;
