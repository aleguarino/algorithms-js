/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

*/

// TO DO an array from string and change it

let isSubsequence = (s, t) => {
    if (s.length > t.length) return false

    let arr = Array.from(s);
    for (let i = 0; i <= t.length; i++) {
        if (arr[0] == t[i])
            arr.splice(0, 1)

        if (arr.length == 0)
            return true
    }
    return false

    `
        let subsequence = 0;
        for (let i = 0; i < t.length; i++) {
            if (s[subsequence] === t[i]) subsequence++;
        }
        return subsequence === s.length;
    `
}

console.log(isSubsequence('abc', 'ahbgdc'))