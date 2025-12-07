class Converter {
    static toAscii(hex) {
        let asciiString = '';
        for (let i = 0; i < hex.length; i += 2) {
          const hexByte = hex.substring(i, i + 2);
          const numValue = parseInt(hexByte, 16);
          asciiString += String.fromCharCode(numValue);
  }
  return asciiString;
    }
    static toHex(ascii) {
        let hexString = '';
        for (let i = 0; i < ascii.length; i++) {
          const asciiValue = ascii.charCodeAt(i);
          let hexChar = asciiValue.toString(16);
          if (hexChar.length === 1) {
              hexChar = '0' + hexChar;
          }
          hexString += hexChar;
      }
      return hexString;
    }
}
// Description:
// Write a pair of functions that convert from ASCII to hexadecimal and the other way around.

// To make the conversion well defined, each ASCII character is represented by exactly two hex digits, left-padding with a 0 if needed.

// The conversion from ascii to hex should produce lowercase strings (i.e. f6 instead of F6).

// Example
// ascii to hex: "Look mom, no hands" => "4c6f6f6b206d6f6d2c206e6f2068616e6473"

// hex to ascii: "4c6f6f6b206d6f6d2c206e6f2068616e6473" => "Look mom, no hands"