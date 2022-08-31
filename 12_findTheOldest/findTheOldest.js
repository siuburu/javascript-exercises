const findTheOldest = function (people) {
	function getAge(yearOfBirth, yearOfDeath) {
		if (yearOfDeath === undefined)
			return new Date().getFullYear() - yearOfBirth;
		else {
			return yearOfDeath - yearOfBirth;
		}
	}
	let oldest = people.reduce((a, b) =>
		getAge(a["yearOfBirth"], a["yearOfDeath"]) >
		getAge(b["yearOfBirth"], b["yearOfDeath"])
			? a
			: b
	);
	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
