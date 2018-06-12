/* 
Frankie Ta 
	
Spotify New York City Technology Fellowship Program

Technical Question 

Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

function sortByStrings(s, t) {
  var s = s.split('');
  var t = t.split('');
  var result = [];

  for (var i = 0; i < t.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (s[j] == t[i]) result.push(s[j]);
    }
  }

  return result.join('');
}