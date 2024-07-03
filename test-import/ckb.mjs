import { remove0x } from 'rgbpp/ckb';

/*const hex = serializeScript({
  codeHash: '0x' + '0'.repeat(64),
  hashType: 'data',
  args: '0x01'
});
console.log(hex);*/

const x = remove0x('0x0001');
console.log(x);
