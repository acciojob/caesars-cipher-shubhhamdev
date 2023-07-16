const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Store the decoded characters

  // Iterate over each character in the encoded string
  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    const decodedChar = lookup[char] || char; // Lookup the decoded character or keep non-alphabetic characters as is
    decodedArr.push(decodedChar);
  }

  const decodedStr = decodedArr.join(""); // Join the decoded characters to form the decoded string
  return decodedStr;
}

// Example usage:
console.log(rot13("SERR YBIR? NPPVBWBO")); // Output: "FREE LOVE? CAICOVOB"
