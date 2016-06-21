describe('reverseString', function() {

	it ('should return a reversed string', function(){
		var color1 = reverseString("red");
		var color2 = reverseString("yellow");

			expect(color1).toEqual("der");
			expect(color2).toBe("wolley");
	});
});