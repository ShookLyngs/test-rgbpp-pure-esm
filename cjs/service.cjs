const { BtcAssetsApi } = require('rgbpp/service');

const service = BtcAssetsApi.fromToken('', '', '');
console.log(service);
