import React, { useContext, createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useWish = () => {
	return useContext(WishContext);
};

const WishContext = createContext({});

export const WishProvider = ({ children }) => {
	const [wishList, setWishList] = useLocalStorage('wishlist', []);
	const [isOpen, setIsOpen] = useState(false);

	const getTotalItems = () => {
		return wishList.length;
	};

	const addToWishList = (id) => {
		setWishList((currList) => {
			if (currList.find((item) => item.id === id)) {
				return currList;
			} else {
				return [...currList, { id }];
			}
		});
	};

	const removeFromWishList = (id) => {
		setWishList((currList) => currList.filter((item) => item.id !== id));
	};

	const openWishList = () => setIsOpen(true);

	const closeWishList = () => setIsOpen(false);

	return (
		<WishContext.Provider
			value={{
				getTotalItems,
				addToWishList,
				removeFromWishList,
				openWishList,
				closeWishList,
			}}
		>
			{children}
		</WishContext.Provider>
	);
};
