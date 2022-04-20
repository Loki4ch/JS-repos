// NORMAL LVL

// TASK 1
const getSummary = function(parameter) {
	let sum = 0;
	for (let i = 0; i <= parameter; i++) {
		sum = sum + i;
	}
	return sum;
}

console.log(getSummary(+prompt('Enter a number')));

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

// TASK 5

const getSum = function(a, b) {
	let i;
	let lim;
	let sum = 0;
	if(a === b) {
		return a;
	} else if (a > b) {
		i = b;
		lim = a
	} else {
		i = a;
		lim = b;
	};
	for (;i <= lim; i++){
		sum += + i;
	}
return sum;
}

console.log(getSum(-1,2));


//TASK 6
const foo = function() { 
	return console.log('foo');
}
const boo = function() { 
	return console.log('boo');
}

const fooboo = function(bool, func1, func2) { 
	if(bool) {
		func1();
	} else {
		func2();
	}
}
fooboo(true,foo,boo);


// ADVANCED LVL 

// TASK 1

const triangle = function(a, b, c) { 
if (a < b + c && b < a + c && c < a + b) {
	return true;
} else {
	return false;
}
	}
console.log(triangle(3,15,17));

// TASK 2
const choco = function(n, m) { 
	if (n > 0 && m > 0) {
		return (n * m) - 1;
	} else {
		return 0;
	}
		}
	console.log(choco(4,6));

// TASK 3
const taxPercent = 10;
const telPrice = 100;
const acsPrice = 50;
const balance = 300;
let currency = '$';
let canAfford = true;

const totalPriceCalcRaw = function(telPrice, acsPrice) {
	return telPrice + acsPrice;
}
const totalPriceTaxCalc = function(totalPriceRaw, taxPercent) {
	let taxSum = totalPriceRaw * taxPercent / 100;
	return totalPriceRaw + taxSum;
}
const totalPriceConvertDigits = function(price) {
	return parseFloat(price).toFixed(2);
}
const totalPriceConvertCurrency = function(price, currency) {
	return price + currency;
}



if (balance < totalPrice)
while (canAfford) {



	if (balance >= totalPrice) {
		balance = balance - totalPrice; 
	} else {
		alert("You dont have enough money");
		canAfford = false;
	}
}


console.log(totalPriceConvertCurrency(totalPriceConvertDigits(taxCalc(totalPrice,tax)), currency));

