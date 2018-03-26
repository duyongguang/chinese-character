# chinese-character

操作中文字符串

## 安装

npm install chinese-character

## 用法

```js
var chinese = require('chinese-character');

//unicode 编码，类似 \u4e2d\u6587 的相互转换，
var str=chinese.string_to_unicode('中文');
console.log(str);
var str=chinese.unicode_to_string('\u4e2d\u6587');
console.log(str);


//unicode10 编码，类似 &#20013;&#25991; 的相互转换，
var str=chinese.string_to_unicode10('中文');
console.log(str); 
var str=chinese.unicode10_to_string('&#20013;&#25991;');
console.log(str); 


//unicode16 编码，类似 &#x4E2D;&#x6587; 的相互转换，
var str=chinese.string_to_unicode16('中文');
console.log(str); 
var str=chinese.unicode16_to_string('&#x4E2D;&#x6587;');
console.log(str); 


//html 编码，类似  &apos;&lt;&nbsp;&gt;&quot;&amp; 的相互转换，
var str=chinese.html_encode('\'< >"&');
console.log(str); 
var str=chinese.html_decode('&apos;&lt;&nbsp;&gt;&quot;&amp;');
console.log(str); 


//字符串首字母
var str=chinese.first('國家对抗');
console.log(str); 
//返回 g


//字符串首字母连接
var str=chinese.firstAll('國家对抗');
console.log(str); 
//返回 gjdk


//字符串首字母数组
var str=chinese.firstAll('國家对抗',join=false);
console.log(str); 
//返回[ 'g', 'j', 'd', 'k' ]


//字符串首字母的拼音
var str=chinese.pin('國家对抗');
console.log(str); 
//返回guo


//字符串首字母的拼音连接
var str=chinese.pinAll('國家对抗');
console.log(str); 
//返回guojiaduikang


//字符串首字母的拼音数组
var str=chinese.pinAll('國家对抗',join=false);
console.log(str); 
//返回[ 'guo', 'jia', 'dui', 'kang' ]


//字符串首字母的声调拼音
var str=chinese.yin('國家对抗');
console.log(str); 
//返回guó


//字符串首字母的声调拼音连接
var str=chinese.yinAll('國家对抗');
console.log(str); 
//返回guójiāduìkàng


//字符串首字母的声调拼音数组
var str=chinese.yinAll('國家对抗',join=false);
console.log(str); 
//返回[ 'guó', 'jiā', 'duì', 'kàng' ]


//字符串首字母的声调
var str=chinese.diao('國家对抗');
console.log(str); 
//返回2


//字符串首字母的声调连接
var str=chinese.diaoAll('國家对抗');
console.log(str); 
//返回2144


//字符串首字母的声调数组
var str=chinese.diaoAll('國家对抗',join=false);
console.log(str); 
//返回[ 2, 1, 4, 4 ]


//字符串内中文字数，默认不含标点符号
var str=chinese.count('國家，对抗');
console.log(str); 
//返回4


//字符串内中文字数，含标点符号
var str=chinese.count('國家，对抗',punc=true);
console.log(str); 
//返回5


//数组内对象的中文属性排序
var str=chinese.firstSort([{'title':'世界'},{'title':'你好'},{'title':'时间'},{'title':'白天'},{'title':'宁静'},{'title':'闪电'}], 'title');
console.log(str); 
/*返回
[ { title: '白天' },
  { title: '你好' },
  { title: '宁静' },
  { title: '世界' },
  { title: '时间' },
  { title: '闪电' } ]
*/


//数组内中文排序
var str=chinese.firstSort(['世界','你好','时间','白天','宁静','闪电']);
console.log(str); 
//返回 [ '白天', '你好', '宁静', '世界', '时间', '闪电' ]


//数组内对象的中文属性排序后分组
var str=chinese.firstGroupSort([{'title':'世界'},{'title':'你好'},{'title':'时间'},{'title':'白天'},{'title':'宁静'},{'title':'闪电'}], 'title');
console.log(str); 
/* 返回
[ { first: 'b', data: [ [Object] ] },
  { first: 'n', data: [ [Object], [Object] ] },
  { first: 's', data: [ [Object], [Object], [Object] ] } ]
*/


//数组内中文排序后分组
var str=chinese.firstGroupSort(['世界','你好','时间','白天','宁静','闪电']);
console.log(str); 
/* 返回
[ { first: 'b', data: [ '白天' ] },
  { first: 'n', data: [ '你好', '宁静' ] },
  { first: 's', data: [ '世界', '时间', '闪电' ] } ]
*/

```
