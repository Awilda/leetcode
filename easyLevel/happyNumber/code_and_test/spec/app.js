describe('addSquaresToBucket', function() {

	it ('should return the sum of all numbers', function(){
		var num1 = addSquaresToBucket(19);
		var num2 = addSquaresToBucket(88);
		var num3 = addSquaresToBucket(875321);

			expect(num1).toBe(82);
			expect(num2).toBe(128);
			expect(num3).toBe(152);
	});
});

describe('addDigits', function() {

	it ('should return a single digit after all digits have been summed up', function(){
		var num1 = addDigits(56);
		var num2 = addDigits(19);
		var num3 = addDigits(79);

			expect(num1).toBe(4);
			expect(num2).toBe(1);
			expect(num3).toBe(1);
	});
});

describe('squareNumber', function() {

	it ('should return the square of a number', function(){
		var num1 = squareNumber(3);
		var num2 = squareNumber(9);
		var num3 = squareNumber(12);

			expect(num1).toBe(9);
			expect(num2).toBe(81);
			expect(num3).toBe(144);
	});
});

describe('isHappy', function() {

	it ('should return true or false', function(){
		var num1 = isHappy(19);
		var num2 = isHappy(56);
		var num3 = isHappy(79);
		var num3 = isHappy(7);

			expect(num1).toEqual(true);
			expect(num2).toEqual(false);
			expect(num3).toEqual(true);
			expect(num3).toEqual(true);
	});
});