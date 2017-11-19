/**
 * Checks if a string is a palindrome.
 * Returns false for strings which are not palindromes or if the input is wrong.
 * @param s String
 * @ return boolean
*/
function palipali(s) {
  if (typeof s != "string" || !s) {
    return false;
  }

  let a = s.toLowerCase();
  let b = a.replace(/[^a-zA-Z]/g, '');
  let c = b.split('').reverse('').join('');

  return c == b;
}

(function(root, factory) {
    if (typeof module !== 'undefined' && typeof exports === 'object') {
      module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else {
      root.myModule = factory;
    }
}(this, palipali));
