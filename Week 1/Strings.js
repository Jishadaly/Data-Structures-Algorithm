// String functions

const str = "hello world ";

console.log("char At : ", str.charAt(2));

console.log("index of : ", str.indexOf("world"));

console.log("subString : ", str.substring(3));

console.log("split : ", str.split("h"));

console.log("match : ", str.match("ll"));

console.log("length : ", str.length);

console.log("toUpperCase : ", str.toUpperCase());

console.log("toLowerCase : ", str.toLowerCase());

console.log("replace : ", str.replace("world", "there"));

console.log("trim : ", str.trim());

console.log("startsWith : ", str.startsWith("hello"));

console.log("endsWith : ", str.endsWith("world"));

console.log("concat : ", str.concat(" This is a concatenated string."));

console.log("includes : ", str.includes("lo"));

console.log("repeat : ", str.repeat(3));

console.log("charAt (last): ", str.charAt(str.length - 1));

console.log("lastIndexOf : ", str.lastIndexOf("l"));

console.log("slice : ", str.slice(3, 8));

console.log("padStart : ", str.padStart(15, "*"));

console.log("padEnd : ", str.padEnd(15, "*"));

console.log("startsWith (with index) : ", str.startsWith("world", 6));

console.log("endsWith (with index) : ", str.endsWith("hello", 5));





/*
Original String Functions:

Uses charAt to get the character at a specific index.
Uses indexOf to find the index of a specified substring.
Uses substring to extract a substring from a given index.
Uses split to split the string into an array based on a specified delimiter.
Uses match to find the first occurrence of a specified pattern.
Additional String Functions:
Uses length to get the length of the string.

Uses toUpperCase to convert the string to uppercase.
Uses toLowerCase to convert the string to lowercase.
Uses replace to replace a specified substring with another string.
Uses trim to remove whitespaces from both ends of the string.
Uses startsWith to check if the string starts with a specified substring.
Uses endsWith to check if the string ends with a specified substring.
Uses concat to concatenate two strings.
Uses includes to check if the string contains a specified substring.
Uses repeat to repeat the string a specified number of times.
More String Functions:
16. Uses charAt with the last index to get the last character of the string.

Uses lastIndexOf to find the last occurrence index of a specified substring.
Uses slice to extract a portion of the string.
Uses padStart to pad the start of the string with a specified character.
Uses padEnd to pad the end of the string with a specified character.
Uses startsWith with an index to check if the string starts with a substring at a specific index.
Uses endsWith with an index to check if the string ends with a substring at a specific index.

*/