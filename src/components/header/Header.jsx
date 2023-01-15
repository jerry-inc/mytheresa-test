import React from 'react';
import { NavLink } from 'react-router-dom';
import WishButton from '../wishButton/WishButton';
import { useWish } from '../../context/wishContext';
import './header.sass';

const Header = () => {
	const { getTotalItems, openWishList } = useWish();

	const wishBtnClick = () => {
		openWishList();
	};
	return (
		<div className="header">
			<div className="nav-bar">
				<img
					className="logo"
					src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20230110T111841"
				/>
				<NavLink to={'/'}>Home</NavLink>
				<NavLink to={'/about'}>About</NavLink>
			</div>
			{getTotalItems() > 0 && (
				<WishButton onClick={wishBtnClick} count={getTotalItems()} />
			)}
		</div>
	);
};

export default Header;
