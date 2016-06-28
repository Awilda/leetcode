/**
 * @param {number} n
 * @return {boolean}
 */
var squareNumber = function(n){
	return n * n;
};
 
var addSquaresToBucket = function(num) {
	var numToString = num.toString(); // "19"
  var splitString = numToString.split(""); // ["1", "9"]
  var bucket = 0;
  	
  	while (splitString.length > 0) {
    	bucket += parseInt(squareNumber(splitString.pop()));
    }
    	return bucket;
};

var addDigits = function(num) {
	while (num >= 2) {
		num = addSquaresToBucket(num);
	}
	return num;
};

var isHappy = function(n) {
  if (addDigits(n) === 1) {
  	return true;
  }  else {
  	return false;
  }
};
