import React, { useContext, createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { WishList } from '../components/wishList/WishList';

export const useWish = () => {
	return useContext(WishContext);
};

const WishContext = createContext({});

export const WishProvider = ({ children }) => {
	const [wishList, setWishList] = useLocalStorage('wishlist', []);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (wishList.length === 0) {
			closeWishList();
		}
	}, [wishList]);

	const getTotalItems = () => {
		return wishList.length;
	};

	const addToWishList = ({ id, name, img }) => {
		setWishList((currList) => {
			if (currList.find((item) => item.id === id)) {
				return currList;
			} else {
				return [...currList, { id, name, img }];
			}
		});
	};

	const removeFromWishList = (id) => {
		setWishList((currList) => currList.filter((item) => item.id !== id));
	};

	const checkIfAlreadyOnList = (id) => {
		return wishList.find((item) => item.id === id);
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
				checkIfAlreadyOnList,
			}}
		>
			{children}
			<WishList isOpen={isOpen} wishList={wishList} />
		</WishContext.Provider>
	);
};
