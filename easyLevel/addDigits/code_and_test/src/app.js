/**
 * @param {number} num
 * @return {number}
 */
var addToBucket = function(num){
	var numToString = num.toString();
    var splitString = numToString.split("");
  	var bucket = 0;

    while (splitString.length > 0) {
    	bucket += parseInt(splitString.pop());
    }
    	return bucket;
	
};

var addDigits = function(num) {
	while (num > 9) {
		num = addToBucket(num);
	}
	return num;
};

