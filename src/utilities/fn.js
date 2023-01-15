export const TextNormalize = (text) => {
	let modified = text.split('_');
	modified = modified.map((item) => {
		return item.charAt(0).toUpperCase() + item.slice(1);
	});
	return modified.join(' ');
};
