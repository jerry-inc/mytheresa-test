import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
	const [value, setValue] = useState(() => {
		const json = localStorage.getItem(key);
		if (json !== null) {
			return JSON.parse(json);
		} else if (typeof initialValue === 'function') {
			return initialValue();
		} else {
			return initialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
