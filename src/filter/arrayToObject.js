Vue.filter('arrayToObject', function (value, key) {
	const initialValue = {};

	return value.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		};
	}, initialValue);
});
