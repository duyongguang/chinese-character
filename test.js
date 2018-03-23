var chinese = require('./index.js');

var str=chinese.string_to_unicode('中文');
console.log(str);
var str=chinese.unicode_to_string('\u4e2d\u6587');
console.log(str);
console.log('--------------------');


var str=chinese.string_to_unicode10('中文');
console.log(str); 
var str=chinese.unicode10_to_string('&#20013;&#25991;');
console.log(str); 
console.log('--------------------');

var str=chinese.string_to_unicode16('中文');
console.log(str); 
var str=chinese.unicode16_to_string('&#x4E2D;&#x6587;');
console.log(str); 

var str=chinese.html_encode('\'< >"&');
console.log(str); 
var str=chinese.html_decode('&apos;&lt;&nbsp;&gt;&quot;&amp;');
console.log(str); 
console.log('--------------------');


var str=chinese.first('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.pin('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.yin('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.diao('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.ju('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.ju('國家对抗',true);
console.log(str); 
console.log('--------------------');
var str=chinese.ju('國家对抗',false,true);
console.log(str); 
console.log('--------------------');