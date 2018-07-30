var dict = require('./dict.js');

var chinesecharacter= {
    dict:dict,
    chars:{"&":"&amp;"," ":"&nbsp;",'"':'&quot;',"'":"&apos;","“":"&ldquo;","”":"&rdquo;","‘":"&lsquo;","’":"&rsquo;","·":"&middot;","©":"&copy;","↑":"&uarr;","€":"&euro;","²":"&sup2;","½":"&frac12;","♥":"&hearts;","©":"&copy;","®":"&reg;","™":"&trade;","«":"&laquo;","»":"&raquo;","‹":"&lsaquo;","›":"&rsaquo;","§":"&sect;","¶":"&para;","•":"&bull;","·":"&middot;","…":"&hellip;","¦":"&brvbar;","–":"&ndash;","—":"&mdash;","¤":"&curren;","¢":"&cent;","£":"&pound;","¥":"&yen;","€":"&euro;","<":"&lt;",">":"&gt;","≤":"&le;","≥":"&ge;","×":"&times;","÷":"&divide;","−":"&minus;","±":"&plusmn;","≠":"&ne;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","½":"&frac12;","¼":"&frac14;","¾":"&frac34;","‰":"&permil;","°":"&deg;","√":"&radic;","∞":"&infin;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;","◊":"&loz;","†":"&dagger;","‡":"&Dagger;","¡":"&iexcl;","¿":"&iquest;","￠":"&cent;","£":"&pound;","¥":"&yen;","§":"&sect;","©":"&copy;","®":"&reg;","×":"&times;","÷":"&divide;","Α":"&Alpha;","Β":"&Beta;","Γ":"&Gamma;","Δ":"&Delta;","Ε":"&Epsilon;","Ζ":"&Zeta;","Η":"&Eta;","Θ":"&Theta;","Ι":"&Iota;","Κ":"&Kappa;","Λ":"&Lambda;","Μ":"&Mu;","Ν":"&Nu;","Ξ":"&Xi;","Ο":"&Omicron;","Π":"&Pi;","Ρ":"&Rho;","Σ":"&Sigma;","Τ":"&Tau;","Υ":"&Upsilon;","Φ":"&Phi;","Χ":"&Chi;","Ψ":"&Psi;","Ω":"&Omega;","α":"&alpha;","β":"&beta;","γ":"&gamma;","δ":"&delta;","ε":"&epsilon;","ζ":"&zeta;","η":"&eta;","θ":"&theta;","ι":"&iota;","κ":"&kappa;","λ":"&lambda;","μ":"&mu;","ν":"&nu;","ξ":"&xi;","ο":"&omicron;","π":"&pi;","ρ":"&rho;","ς":"&sigmaf;","σ":"&sigma;","τ":"&tau;","υ":"&upsilon;","φ":"&phi;","χ":"&chi;","ψ":"&psi;","ω":"&omega;","ϑ":"&thetasym;","ϒ":"&upsih;","ϖ":"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;","ℑ":"&image;","ℜ":"&real;","™":"&trade;","ℵ":"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;","ª":"&ordf;","«":"&laquo;","¬":"&not;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;","µ":"&micro;"},
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
            var arr=[];
            for(var i=0;i<list.length;i++){
                var obj={};
                if(key){
                    var word=list[i][key];
                }else{
                    var word=list[i];
                }
                obj['first']= this.first(word);
                obj['data']=list[i];
                arr.push(obj);
            }
            arr.sort(function (a,b){
                if (a.first > b.first) {
                    return 1;
                }else if (a.first < b.first){
                    return -1;
                }else{
                    return 0;
                }
            }); 
            var result=[];
            for(var j=0;j<arr.length;j++){
                result.push(arr[j]['data']);
            }
            return result;
    },
    firstGroupSort:function(list,key){
            var obj={};
            for(var i=0;i<list.length;i++){
                if(key){
                    var word=this.first(list[i][key]);
                }else{
                    var word=this.first(list[i]);
                }
                if(obj[word]){
                     obj[word].push(list[i]);
                }else{
                     obj[word]=[];
                     obj[word].push(list[i]);
                }
            }
            var result=[];
            for(var x in obj){
                var o={};
                o.first=x;
                o.data=obj[x];
                result.push(o);
            }
            result.sort(function(a,b){
                if (a.first > b.first){
                    return 1;
                }else if (a.first < b.first){
                    return -1;
                }else{
                    return 0;
                }
            }); 
            return result;
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
    html_encode:function (str){
         for(var key in this.chars){
                var value=this.chars[key];
                var reg=new RegExp(key,"gi"); 
                str=str.replace(reg,value);
         }
         return str;
    }, 
    html_decode:function (str){
         for(var key in this.chars){
                var value=this.chars[key];
                var reg=new RegExp(value,"gi");
                str=str.replace(reg,key);
         }
         return str;
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
