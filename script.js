function isSameType(value1, value2) {
  //your js code here
	
	 if (value1 !== value1 && value2 !== value2) {
    return true; // Both are NaN
  }

  // Attempt to compare types indirectly:
  return (value1 + "") === (value2 + "");
	return false
	
   
}
	

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
