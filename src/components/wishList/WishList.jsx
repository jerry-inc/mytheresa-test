import React from 'react';
import './wishlist.sass';
import Modal from '../modal/Modal';
import { useWish } from '../../context/wishContext';

export const WishList = ({ isOpen, wishList }) => {
	const { closeWishList, removeFromWishList } = useWish();
	return (
		<>
			{isOpen && (
				<Modal title={'My Wishlist'} onClose={closeWishList}>
					<div className="wishlist-container">
						{wishList.map((item) => (
							<div className="wis-row" key={item.id}>
								<img src={item.img} className="list-img" />
								<div className="list-name">{item.name}</div>
								<button
									className="list-del-btn"
									type="button"
									onClick={() => removeFromWishList(item.id)}
								>
									Remove
								</button>
							</div>
						))}
					</div>
				</Modal>
			)}
		</>
	);
};
