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

var str=chinese.html_encode('\'< >"&©±“”');
console.log(str); 
var str=chinese.html_decode('&apos;&lt;&nbsp;&gt;&quot;&amp;&copy;&plusmn;&ldquo;&rdquo;');
console.log(str); 
console.log('--------------------');


var str=chinese.first('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.firstAll('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.firstAll('國家对抗',join=false);
console.log(str); 
console.log('--------------------');

var str=chinese.pin('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.pinAll('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.pinAll('國家对抗',join=false);
console.log(str); 
console.log('--------------------');


var str=chinese.yin('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.yinAll('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.yinAll('國家对抗',join=false);
console.log(str); 
console.log('--------------------');



var str=chinese.diao('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.diaoAll('國家对抗');
console.log(str); 
console.log('--------------------');
var str=chinese.diaoAll('國家对抗',join=false);
console.log(str); 
console.log('--------------------');



var str=chinese.count('國家。，、；：？！“”╗╚┐└（）…—《》〈〉·.%()[]{};:"?对抗');
console.log(str); 
console.log('--------------------');

var str=chinese.count('國家。，、；：？！“”╗╚┐└（）…—《》〈〉·.%()[]{};:"?对抗',punc=true);
console.log(str); 
console.log('--------------------');

var str=chinese.firstSort([{'title':'世界'},{'title':'你好'},{'title':'时间'},{'title':'白天'},{'title':'宁静'},{'title':'闪电'}], 'title');
console.log(str); 
console.log('--------------------');

var str=chinese.firstSort(['世界','你好','时间','白天','宁静','闪电']);
console.log(str); 
console.log('--------------------');

var str=chinese.firstGroupSort([{'title':'世界'},{'title':'你好'},{'title':'时间'},{'title':'白天'},{'title':'宁静'},{'title':'闪电'}], 'title');
console.log(str); 
console.log('--------------------');

var str=chinese.firstGroupSort(['世界','你好','时间','白天','宁静','闪电']);
console.log(str); 
console.log('--------------------');