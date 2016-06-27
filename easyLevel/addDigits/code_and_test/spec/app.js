describe('addToBucket', function() {

	it ('should return the sum of all numbers', function(){
		var num1 = addToBucket(56);
		var num2 = addToBucket(157);
		var num3 = addToBucket(875321);

			expect(num1).toBe(11);
			expect(num2).toBe(13);
			expect(num3).toBe(26);
	});
});

describe('addDigits', function() {

	it ('should return a single digit after all digits have been summed up', function(){
		var num1 = addDigits(56);
		var num2 = addDigits(157);
		var num3 = addDigits(875321);

			expect(num1).toBe(2);
			expect(num2).toBe(4);
			expect(num3).toBe(8);
	});
});