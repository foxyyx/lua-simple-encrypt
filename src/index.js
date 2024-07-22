import {readAsByteArray} from './LocalFileLoader';
import luaSimpleXorEncrypt from './LuaSimpleXorEncrypt';
import {saveAs} from 'file-saver';

t = (f, k) => {
    let options = {
      isGG: false,
      isLua52: false
    };
    readAsByteArray(f, function (bytes, file) {
      let encrypted = luaSimpleXorEncrypt(bytes, k, {isGG: false, isLua52: false});
      let blob = new Blob([encrypted], {type: 'application/octet-stream'});
      saveAs(blob, file.name);
    });
}  

t('test.lua', '1234');
