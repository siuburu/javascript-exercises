const ftoc = function (cTemp) {
	return Math.round((cTemp - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (fTemp) {
	return Math.round((fTemp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
