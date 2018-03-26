var dict = require('./dict.js');

var chinesecharacter= {
    dict:dict,
    
    first:function(str){
         var key=str.substr(0,1);
         if(this.dict[key]){
            return this.dict[key][0];
         }else{
            return '';
         }
    },
    firstAll:function(str,join){
         var list=str.split("");
         var result=[];
         for(var i=0;i<list.length;i++){
                var word=list[i];
                result.push(this.first(word));
         }
         if(join===false){
            return result;
         }else{
            return result.join("");
         }
    },
    firstSort:function(list,key){
        if(key){
                for(var i=0;i<list.length;i++){
                    var word=list[i][key];
                    list[i]['_f']= this.first(word);
                }
                list.sort(function(a,b){
                    if (a._f > b._f){
                        return 1;
                    }else if (a._f < b._f){
                        return -1;
                    }else{
                        return 0;
                    }
                });
                for(var j=0;j<list.length;j++){
                    delete(list[j]['_f']);
                }
                return list; 
        }else{
                var arr=[];
                for(var i=0;i<list.length;i++){
                    var obj={};
                    var word=list[i];
                    obj['value']=word;
                    obj['_f']= this.first(word);
                    arr.push(obj);
                }
                arr.sort(function (a,b){
                    if (a._f > b._f) {
                        return 1;
                    }else if (a._f < b._f){
                        return -1;
                    }else{
                        return 0;
                    }
                }); 
                var result=[];
                for(var j=0;j<arr.length;j++){
                    result.push(arr[j]['value']);
                }
                return result; 
        }
    },
    pin:function(str){
         var key=str.substr(0,1);
         if(this.dict[key]){
            return this.dict[key][1];
         }else{
            return '';
         }
    },
    pinAll:function(str,join){
         var list=str.split("");
         var result=[];
         for(var i=0;i<list.length;i++){
                var word=list[i];
                result.push(this.pin(word));
         }
         if(join===false){
            return result;
         }else{
            return result.join("");
         }
    },
    yin:function(str){
         var key=str.substr(0,1);
         if(this.dict[key]){
            return this.dict[key][3];
         }else{
            return '';
         }
    },
    yinAll:function(str,join){
         var list=str.split("");
         var result=[];
         for(var i=0;i<list.length;i++){
                var word=list[i];
                result.push(this.yin(word));
         }
         if(join===false){
            return result;
         }else{
            return result.join("");
         }
    },
    diao:function(str){
         var key=str.substr(0,1);
         if(this.dict[key]){
            return this.dict[key][2];
         }else{
            return '';
         }
    },
    diaoAll:function(str,join){
         var list=str.split("");
         var result=[];
         for(var i=0;i<list.length;i++){
                var word=list[i];
                result.push(this.diao(word));
         }
         if(join===false){
            return result;
         }else{
            return result.join("");
         }
    },
    count:function(str,punc){
        if(punc){
            var reg = /[\u4E00-\u9FA5\uf900-\ufa2d\。\，\、\；\：\？\！\“\”\‘\'\╗\╚\┐\└\（\）\…\—\《\》\〈\〉\·\.\%\(\)\[\]\{\}\;\:\"\'\,\?]/ig;
        }else{
            var reg = /[\u4E00-\u9FA5\uf900-\ufa2d]/ig;
        } 
        var words = str.match(reg);
        if(words){
            var wordcount=words.length;
        }else{
            var wordcount=0;
        }
        return wordcount;
    },
    html_encode:function (str){ // &lt;&nbsp;&gt;&quot;&amp;&apos;
         return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/ /g,'&nbsp;').replace(/\'/g,'&apos;').replace(/\"/g,'&quot;');
    }, 
    html_decode:function (str){ // &lt;&nbsp;&gt;&quot;&amp;&apos;
         return str.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&nbsp;/g,' ').replace(/&apos;/g,"'").replace(/&quot;/g,'"');
    },
	string_to_unicode:function(str){ //\u4e2d\u6587
			return escape(str).replace(/%/g,function(){
                return "\\";
            }).toLowerCase();
	},
	unicode_to_string:function(str){ //\u4e2d\u6587
			return unescape(str);
	},
	string_to_unicode10:function(str){ //&#20013;&#25991;
          return str.replace(/./g, function($0){
              var c = $0.charCodeAt(0);
              c = (c == 0x20) ? 0xA0 : c;
              return '&#'+c+';';
          });
    },
    unicode10_to_string:function(str){ //&#20013;&#25991;
        return str.replace(/&#\d{1,};/g , function($0){
              var m = $0.match(/\d{1,}/);
              var cc = m[0];
              cc = (cc == 160) ? 32: cc;
              var c = String.fromCharCode(cc);
              return c;
        });
    },
	string_to_unicode16:function(str){ //&#x4E2D;&#x6587;
          return str.replace(/[^\u0000-\u00FF]/g,function(a){
                return escape(a).replace(/(%u)(\w{4})/gi,"&#x$2;")
          })
    },
    unicode16_to_string:function(str){ //&#x4E2D;&#x6587;
        return str.replace(/&#x[\d\w]{1,};/g , function($0){ 
              return unescape($0.replace(/&#x/g,'%u').replace(/;/g,''));
        });
    }
}

module.exports = chinesecharacter;
