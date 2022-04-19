

// TASK 2
const bankCredit = function(money) {
return (money * 17 / 100) * 5;
}

console.log(bankCredit(10));

// TASK 3
const trimString = function(string, cutFrom, cutTo) {
	return string.slice(cutFrom, cutTo);
	}

	console.log(trimString('ooohehooo', 1, 6));

// TASK 4

const getSumNumbers = function(num) {
	num = num.toString();
	let sum = 0;
	for (let i = 0; i <= num.length; i++) {
		sum += +num.charAt(i);
	}
	return sum;
	}

	console.log(getSumNumbers(2021));
