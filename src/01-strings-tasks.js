/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  if (!(typeof value1 === 'string') || !(typeof value2 === 'string')) {
    throw new Error('Not implemented');
  } else {
    return value1 + value2;
  }
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  if (!(typeof value === 'string')) {
    throw new Error('Not implemented');
  } else {
    return value.split('').length;
  }
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  if (!(typeof firstName === 'string') || !(typeof lastName === 'string')) {
    throw new Error('Not implemented');
  } else {
    return `Hello, ${firstName} ${lastName}!`;
  }
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  if (!(typeof value === 'string')) {
    throw new Error('Not implemented');
  } else {
    return value.slice(7, value.length - 1);
  }
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  if (!(typeof value === 'string')) {
    throw new Error('Not implemented');
  } else {
    return value[0];
  }
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(/* value */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  if (!(typeof value === 'string')) {
    throw new Error('Not implemented');
  } else {
    let result = '';
    for (let i = 0; i < count; i += 1) {
      result = result.concat(value);
    }
    return result;
  }
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  if (!(typeof str === 'string')) {
    throw new Error('Not implemented');
  } else {
    return str.replace(value, '');
  }
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  if (!(typeof str === 'string')) {
    throw new Error('Not implemented');
  } else {
    return str.slice(1, str.length - 1);
  }
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  if (!(typeof str === 'string')) {
    throw new Error('Not implemented');
  } else {
    return str.toUpperCase();
  }
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   '  '
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  if (!(typeof str === 'string')) {
    throw new Error('Not implemented');
  }

  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const upLeft = '┌';
  const upRight = '┐';
  const downLeft = '└';
  const downRight = '┘';
  const horiz = '─';
  const vert = '│';
  const end = '\n';
  const space = ' ';

  let result = '';

  for (let i = 0; i < height; i += 1) {
    let str = '';

    if (i === 0) {
      str = str.concat(upLeft);
      str = str.concat(horiz.repeat(width - 2));
      str = str.concat(upRight);
      str = str.concat(end);
      result = result.concat(str);
    }

    if (i === height - 1) {
      str = str.concat(downLeft);
      str = str.concat(horiz.repeat(width - 2));
      str = str.concat(downRight);
      str = str.concat(end);
      result = result.concat(str);
    }

    if (i > 0 && i < height - 1) {
      str = str.concat(vert);
      str = str.concat(space.repeat(width - 2));
      str = str.concat(vert);
      str = str.concat(end);
      result = result.concat(str);
    }
  }

  return result;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const array = str.split('');

  const newArray = [];

  array.forEach((el) => {
    let newEl = el;
    const code = el.charCodeAt();

    if (code >= 65 && code <= 90) {
      let newCode = code + 13;
      if (newCode > 90) newCode -= 26;
      newEl = String.fromCharCode(newCode);
      newArray.push(newEl);
    }

    if (code >= 97 && code <= 122) {
      let newCode = code + 13;
      if (newCode > 122) newCode -= 26;
      newEl = String.fromCharCode(newCode);
      newArray.push(newEl);
    }

    if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) newArray.push(el);
  });
  return newArray.join('');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  if (typeof value === 'string' || value instanceof String) {
    return true;
  }
  return false;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  let count = 0;

  if (value.indexOf('♣') !== -1) count -= 1;
  if (value.indexOf('♦') !== -1) count += 12;
  if (value.indexOf('♥') !== -1) count += 25;
  if (value.indexOf('♠') !== -1) count += 38;

  if (value[0] === 'A') count += 1;
  if (value[0] === '2') count += 2;
  if (value[0] === '3') count += 3;
  if (value[0] === '4') count += 4;
  if (value[0] === '5') count += 5;
  if (value[0] === '6') count += 6;
  if (value[0] === '7') count += 7;
  if (value[0] === '8') count += 8;
  if (value[0] === '9') count += 9;
  if (value.indexOf('10') !== -1) count += 10;
  if (value[0] === 'J') count += 11;
  if (value[0] === 'Q') count += 12;
  if (value[0] === 'K') count += 13;

  return count;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
