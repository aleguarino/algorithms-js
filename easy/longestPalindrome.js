/*

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

*/

let longestPalindrome = (s) => {
    let chars = new Set();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (chars.has(s[i])) {
            count += 2;
            chars.delete(s[i])
        }
        else {
            chars.add(s[i])
        }
    }
    if (chars.size > 0) count++;
    return count;
}

console.log(longestPalindrome("abc"))