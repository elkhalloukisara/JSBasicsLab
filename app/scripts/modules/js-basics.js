(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
        // i will be an integer.
        // Return true if it's even, and false if it isn't.
	if(i%2 === 0 && typeof(i) === "number")
		return true;
	else
		return false;
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
	var varStr=str.split('.');
	if(typeof(str)==='string'){
		if(varStr.length > 1)
			return varStr[varStr.length -1];
		else
			return false;
	}
    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
        // Return the longest string in the array
	var longeString= "";
	for(var j=0; j< arr.length; j++)
		if(typeof arr[j] ==='string')
			if(arr[j].length > longeString.length)
				longeString= arr[j];

	return longeString;
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
	if(typeof str ==='string')
		var reverString = str.split('').reverse().join('');
	return reverString;
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
	
	if(typeof str ==='string')
	{
	   str = str.toUpperCase();
	   var palindrome= JS_BASICS.reverseString(str);
	   if(str.charCodeAt(0) > 127) {
		for(var j=0; j< str.length; j++)
		  if((str.charCodeAt(str.length-1-j) == 32) && (str.charCodeAt(j+1) == 32) && (str.charCodeAt(j) != str.charCodeAt(str.length-1) && (j+1<str.length)))
			str = str.slice(0,j) + str.slice(j+ 1, str.length);
	    palindrome= JS_BASICS.reverseString(str);
		  
	   }
	  if(palindrome == str)
	     return true;
	  else
	     return false;
	}		
    };
    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.

	var Somme = 0;
        if (Array.isArray(arr)){
       	   for (var j = 0; j < arr.length; j++) {
       		if (Array.isArray(arr[j])) 
            	   Somme += JS_BASICS.nestedSum(arr[j]);	            			else if (typeof arr[j] === 'number') 
            	   Somme += arr[j];
         		
       	    }
    	}
        return Somme;
     };

    global.JS_BASICS = JS_BASICS;
}(this));
