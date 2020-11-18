/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const memo = []
  
  const openChar = {
      '(': true,
      '[': true,
      '{': true,
  }
  const closeOpenPair = {
      ')': '(',
      ']': '[',
      '}': '{',
  }
  
  for (let i = 0; i < s.length; i++) {
      const char = s[i]
      
      if (openChar[char]) {
          memo.push(char)
      } else if (memo.length === 0 || memo.pop() !== closeOpenPair[char]) {
          return false
      }
  }
  
  return memo.length === 0
};