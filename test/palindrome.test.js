import test from 'ava';
import palindrome from '../index.js';

test('Handle one word palindromes', t => {
  let tests = [
    {input: "Lagerregal", expect: true},
    {input: "Anna", expect: true},
    {input: "err", expect: false},
    {input: "okay", expect: false},
    {input: "Kanakanak", expect: true},
    {input: "kayak", expect: true},
    {input: "Fruit", expect: false},
    {input: "Hannah", expect: true},
    {input: "deified", expect: true},
    {input: "Otto", expect: true},
    {input: "Mom", expect: true},
    {input: "noon", expect: true},
  ];

  tests.map( test => {
    let result = palindrome(test.input);
    t.is(test.expect, result);
  });
});

test('Handle palindrome sentences', t => {
  let tests = [
    {input: "Amy, must I jujitsu my ma?", expect: true},
    {input: "Are Mac 'n' Oliver ever evil on camera?", expect: true},
    {input: "Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.", expect: true},
    {input: "This is not a palindrome!", expect: false},
    {input: "Anne, I vote more cars race Rome to Vienna.", expect: true},
    {input: "Flee to me, remote elf.", expect: true},
    {input: "UFO tofu.", expect: true},
    {input: "On a clover, if alive, erupts a vast, pure evil; a fire volcano.", expect: true},
    {input: "Kanakanak", expect: true},
    {input: "Hey, Roy! Am I mayor? Yeh!", expect: true},
    {input: "I'm a lasagna hog, go hang a salami.", expect: true},
    {input: "Olson is in Oslo.", expect: true},
  ];

  tests.map( test => {
    let result = palindrome(test.input);
    t.is(test.expect, result);
  });
});

test('Handle wrong input', t => {
  let tests = [
    {input: undefined, expect: false},
    {input: null, expect: false},
    {input: false, expect: false},
    {input: true, expect: false},

    {input: 1, expect: false},
    {input: -13, expect: false},

    {input: /[a-zA-Z]/g, expect: false},

    {input: NaN, expect: false},
    {input: Infinity, expect: false},

    {input: function() {}, expect: false},
    {input: new Date(), expect: false},
    {input: new Map(), expect: false},
    {input: new Set(), expect: false},
    {input: new Error(), expect: false},
  ];

  tests.map( test => {
    let result = palindrome(test.input);
    t.is(test.expect, result);
  });
});
