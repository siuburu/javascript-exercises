const palindromes = function (sentence) {
	let temp = sentence.split("").reverse().join("");
	let isPalindrome;
	for (let i = 0; i < temp.length; i++) {
		if (temp.charAt(i) == sentence.charAt(i)) isPalindrome = true;
		else isPalindrome = false;

		return isPalindrome;
	}
};

// Do not edit below this line
module.exports = palindromes;
