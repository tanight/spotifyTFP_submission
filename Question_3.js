/* 
Frankie Ta 
	
Spotify New York City Technology Fellowship Program

Technical Question 

Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

changePossibilities(amount, demo){
  var counts = new Array(amount + 1).fill(0);
  counts[0] = 1;

  demo.forEach((coin) => {
    for (let i = coin; i <= amount; i++) {
      let remainder = i - coin;
      counts[i] += counts[remainder];
      console.log(counts);
    }
  });
  return counts[counts.length - 1];
}