/* 
Frankie Ta 
	
Spotify New York City Technology Fellowship Program

Technical Question 

Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

decodeString(s){
  let stack = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  if (stack.pop() === ']') {
    while (stack[stack.length - 1] !== '[') {
      result.push(stack.pop());
    }
    result = result.reverse().join('');
    stack.pop();
    result = result.repeat(parseInt(stack.pop()));
  }

  return result;
}