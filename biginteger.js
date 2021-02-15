var JSBigInt=function(){"use strict";var t={};function e(r,i,s){if(s!==t)return r instanceof e?r:void 0===r?n:e.parse(r);for(r=r||[];r.length&&!r[r.length-1];)--r.length;this._d=r,this._s=r.length?i||1:0}e._construct=function(r,n){return new e(r,n,t)};var r=1e7;e.base=r,e.base_log10=7;var n=new e([],0,t);e.ZERO=n;var i=new e([1],1,t);e.ONE=i;var s=new e(i._d,-1,t);e.M_ONE=s,e._0=n,e._1=i,e.small=[n,i,new e([2],1,t),new e([3],1,t),new e([4],1,t),new e([5],1,t),new e([6],1,t),new e([7],1,t),new e([8],1,t),new e([9],1,t),new e([10],1,t),new e([11],1,t),new e([12],1,t),new e([13],1,t),new e([14],1,t),new e([15],1,t),new e([16],1,t),new e([17],1,t),new e([18],1,t),new e([19],1,t),new e([20],1,t),new e([21],1,t),new e([22],1,t),new e([23],1,t),new e([24],1,t),new e([25],1,t),new e([26],1,t),new e([27],1,t),new e([28],1,t),new e([29],1,t),new e([30],1,t),new e([31],1,t),new e([32],1,t),new e([33],1,t),new e([34],1,t),new e([35],1,t),new e([36],1,t)],e.digits="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e.prototype.toString=function(t){if((t=+t||10)<2||t>36)throw new Error("illegal radix "+t+".");if(0===this._s)return"0";if(10===t){var r=this._s<0?"-":"";r+=this._d[this._d.length-1].toString();for(var n=this._d.length-2;n>=0;n--){for(var i=this._d[n].toString();i.length<7;)i="0"+i;r+=i}return r}var s=e.digits;t=e.small[t];for(var o,a=this._s,h=this.abs(),u=[];0!==h._s;){var f=h.divRem(t);h=f[0],o=f[1],u.push(s[o.valueOf()])}return(a<0?"-":"")+u.reverse().join("")},e.radixRegex=[/^$/,/^$/,/^[01]*$/,/^[012]*$/,/^[0-3]*$/,/^[0-4]*$/,/^[0-5]*$/,/^[0-6]*$/,/^[0-7]*$/,/^[0-8]*$/,/^[0-9]*$/,/^[0-9aA]*$/,/^[0-9abAB]*$/,/^[0-9abcABC]*$/,/^[0-9a-dA-D]*$/,/^[0-9a-eA-E]*$/,/^[0-9a-fA-F]*$/,/^[0-9a-gA-G]*$/,/^[0-9a-hA-H]*$/,/^[0-9a-iA-I]*$/,/^[0-9a-jA-J]*$/,/^[0-9a-kA-K]*$/,/^[0-9a-lA-L]*$/,/^[0-9a-mA-M]*$/,/^[0-9a-nA-N]*$/,/^[0-9a-oA-O]*$/,/^[0-9a-pA-P]*$/,/^[0-9a-qA-Q]*$/,/^[0-9a-rA-R]*$/,/^[0-9a-sA-S]*$/,/^[0-9a-tA-T]*$/,/^[0-9a-uA-U]*$/,/^[0-9a-vA-V]*$/,/^[0-9a-wA-W]*$/,/^[0-9a-xA-X]*$/,/^[0-9a-yA-Y]*$/,/^[0-9a-zA-Z]*$/],e.parse=function(r,i){r=r.toString(),void 0!==i&&10!=+i||(r=r.replace(/\s*[*xX]\s*10\s*(\^|\*\*)\s*/,"e").replace(/^([+\-])?(\d+)\.?(\d*)[eE]([+\-]?\d+)$/,(function(t,e,r,n,i){var s=(i=+i)<0,o=r.length+i;t=(s?r:n).length,i=(i=Math.abs(i))>=t?i-t+s:0;var a=new Array(i+1).join("0"),h=r+n;return(e||"")+(s?h=a+h:h+=a).substr(0,o+=s?a.length:0)+(o<h.length?"."+h.substr(o):"")})));var s=new RegExp("^([+\\-]?)("+(void 0===i?"0[xcb]":16==i?"0x":8==i?"0c":2==i?"0b":"")+")?([0-9a-z]*)(?:\\.\\d*)?$","i").exec(r);if(s){var o=s[1]||"+",a=s[2]||"",h=s[3]||"";if(void 0===i)i="0x"===a||"0X"===a?16:"0c"===a||"0C"===a?8:"0b"===a||"0B"===a?2:10;else if(i<2||i>36)throw new Error("Illegal radix "+i+".");if(i=+i,!e.radixRegex[i].test(h))throw new Error("Bad digit for radix "+i);if(0===(h=h.replace(/^0+/,"").split("")).length)return n;if(o="-"===o?-1:1,10==i){for(var u=[];h.length>=7;)u.push(parseInt(h.splice(h.length-e.base_log10,e.base_log10).join(""),10));return u.push(parseInt(h.join(""),10)),new e(u,o,t)}u=n,i=e.small[i];for(var f=e.small,l=0;l<h.length;l++)u=u.multiply(i).add(f[parseInt(h[l],36)]);return new e(u._d,o,t)}throw new Error("Invalid BigInteger format: "+r)},e.prototype.add=function(n){if(0===this._s)return e(n);if(0===(n=e(n))._s)return this;if(this._s!==n._s)return n=n.negate(),this.subtract(n);for(var i,s=this._d,o=n._d,a=s.length,h=o.length,u=new Array(Math.max(a,h)+1),f=Math.min(a,h),l=0,_=0;_<f;_++)i=s[_]+o[_]+l,u[_]=i%r,l=i/r|0;for(h>a&&(s=o,a=h),_=f;l&&_<a;_++)i=s[_]+l,u[_]=i%r,l=i/r|0;for(l&&(u[_]=l);_<a;_++)u[_]=s[_];return new e(u,this._s,t)},e.prototype.negate=function(){return new e(this._d,0|-this._s,t)},e.prototype.abs=function(){return this._s<0?this.negate():this},e.prototype.subtract=function(i){if(0===this._s)return e(i).negate();if(0===(i=e(i))._s)return this;if(this._s!==i._s)return i=i.negate(),this.add(i);var s=this;this._s<0&&(s=new e(i._d,1,t),i=new e(this._d,1,t));var o=s.compareAbs(i);if(0===o)return n;if(o<0){var a=i;i=s,s=a}var h,u,f=s._d,l=i._d,_=f.length,p=l.length,d=new Array(_),w=0;for(h=0;h<p;h++)(u=f[h]-w-l[h])<0?(u+=r,w=1):w=0,d[h]=u;for(h=p;h<_;h++){if(!((u=f[h]-w)<0)){d[h++]=u;break}u+=r,d[h]=u}for(;h<_;h++)d[h]=f[h];return new e(d,o,t)},function(){function n(n,i){for(var s=n._d,o=s.slice(),a=0;;){var h=(s[a]||0)+1;if(o[a]=h%r,h<=9999999)break;++a}return new e(o,i,t)}function o(n,i){for(var s=n._d,o=s.slice(),a=0;;){var h=(s[a]||0)-1;if(!(h<0)){o[a]=h;break}o[a]=h+r,++a}return new e(o,i,t)}e.prototype.next=function(){switch(this._s){case 0:return i;case-1:return o(this,-1);default:return n(this,1)}},e.prototype.prev=function(){switch(this._s){case 0:return s;case-1:return n(this,-1);default:return o(this,1)}}}(),e.prototype.compareAbs=function(t){if(this===t)return 0;if(!(t instanceof e)){if(!isFinite(t))return isNaN(t)?t:-1;t=e(t)}if(0===this._s)return 0!==t._s?-1:0;if(0===t._s)return 1;var r=this._d.length,n=t._d.length;if(r<n)return-1;if(r>n)return 1;for(var i=this._d,s=t._d,o=r-1;o>=0;o--)if(i[o]!==s[o])return i[o]<s[o]?-1:1;return 0},e.prototype.compare=function(t){return this===t?0:(t=e(t),0===this._s?-t._s:this._s===t._s?this.compareAbs(t)*this._s:this._s)},e.prototype.isUnit=function(){return this===i||this===s||1===this._d.length&&1===this._d[0]},e.prototype.multiply=function(i){if(0===this._s)return n;if(0===(i=e(i))._s)return n;if(this.isUnit())return this._s<0?i.negate():i;if(i.isUnit())return i._s<0?this.negate():this;if(this===i)return this.square();var s,o=this._d.length>=i._d.length,a=(o?this:i)._d,h=(o?i:this)._d,u=a.length,f=h.length,l=u+f,_=new Array(l);for(s=0;s<l;s++)_[s]=0;for(s=0;s<f;s++){for(var p,d=0,w=h[s],g=u+s,c=s;c<g;c++)d=(p=_[c]+w*a[c-s]+d)/r|0,_[c]=p%r|0;d&&(d=(p=_[c]+d)/r|0,_[c]=p%r)}return new e(_,this._s*i._s,t)},e.prototype.multiplySingleDigit=function(i){if(0===i||0===this._s)return n;if(1===i)return this;var s;if(1===this._d.length)return new e((s=this._d[0]*i)>=r?[s%r|0,s/r|0]:[s],1,t);if(2===i)return this.add(this);if(this.isUnit())return new e([i],1,t);for(var o=this._d,a=o.length,h=a+1,u=new Array(h),f=0;f<h;f++)u[f]=0;for(var l=0,_=0;_<a;_++)l=(s=i*o[_]+l)/r|0,u[_]=s%r|0;return l&&(u[_]=l),new e(u,1,t)},e.prototype.square=function(){if(0===this._s)return n;if(this.isUnit())return i;var s,o,a,h,u=this._d,f=u.length,l=new Array(f+f+1);for(h=0;h<f;h++)a=2*h,o=(s=u[h]*u[h])/r|0,l[a]=s%r,l[a+1]=o;for(h=0;h<f;h++){o=0,a=2*h+1;for(var _=h+1;_<f;_++,a++)o=(s=u[_]*u[h]*2+l[a]+o)/r|0,l[a]=s%r;var p=o+l[a=f+h];o=p/r|0,l[a]=p%r,l[a+1]+=o}return new e(l,1,t)},e.prototype.quotient=function(t){return this.divRem(t)[0]},e.prototype.divide=e.prototype.quotient,e.prototype.remainder=function(t){return this.divRem(t)[1]},e.prototype.divRem=function(o){if(0===(o=e(o))._s)throw new Error("Divide by zero");if(0===this._s)return[n,n];if(1===o._d.length)return this.divRemSmall(o._s*o._d[0]);switch(this.compareAbs(o)){case 0:return[this._s===o._s?i:s,n];case-1:return[n,this]}var a,h=this._s*o._s,u=o.abs(),f=this._d,l=f.length,_=(o._d.length,[]),p=new e([],0,t);for(p._s=1;l;)if(p._d.unshift(f[--l]),p.compareAbs(o)<0)_.push(0);else{if(0===p._s)a=0;else{var d=p._d.length,w=u._d.length,g=p._d[d-1]*r+p._d[d-2],c=u._d[w-1]*r+u._d[w-2];p._d.length>u._d.length&&(g=(g+1)*r),a=Math.ceil(g/c)}do{var v=u.multiplySingleDigit(a);if(v.compareAbs(p)<=0)break;a--}while(a);if(_.push(a),a){var y=p.subtract(v);p._d=y._d.slice(),0===p._d.length&&(p._s=0)}}return[new e(_.reverse(),h,t),new e(p._d,this._s,t)]},e.prototype.divRemSmall=function(i){var s;if(0==(i=+i))throw new Error("Divide by zero");var o=i<0?-1:1,a=this._s*o;if((i=Math.abs(i))<1||i>=r)throw new Error("Argument out of range");if(0===this._s)return[n,n];if(1===i||-1===i)return[1===a?this.abs():new e(this._d,a,t),n];if(1===this._d.length){var h=new e([this._d[0]/i|0],1,t);return s=new e([this._d[0]%i|0],1,t),a<0&&(h=h.negate()),this._s<0&&(s=s.negate()),[h,s]}for(var u,f=this._d.slice(),l=new Array(f.length),_=0,p=0,d=0;f.length;)(_=_*r+f[f.length-1])<i?(l[d++]=0,f.pop(),p=r*p+_):(p=_-i*(u=0===_?0:_/i|0),l[d++]=u,u?(f.pop(),_=p):f.pop());return s=new e([p],1,t),this._s<0&&(s=s.negate()),[new e(l.reverse(),a,t),s]},e.prototype.isEven=function(){var t=this._d;return 0===this._s||0===t.length||t[0]%2==0},e.prototype.isOdd=function(){return!this.isEven()},e.prototype.sign=function(){return this._s},e.prototype.isPositive=function(){return this._s>0},e.prototype.isNegative=function(){return this._s<0},e.prototype.isZero=function(){return 0===this._s},e.prototype.exp10=function(r){if(0==(r=+r))return this;if(Math.abs(r)>Number(o))throw new Error("exponent too large in BigInteger.exp10");if(r>0){for(var i=new e(this._d.slice(),this._s,t);r>=7;r-=7)i._d.unshift(0);return 0==r?i:(i._s=1,i=i.multiplySingleDigit(Math.pow(10,r)),this._s<0?i.negate():i)}if(-r>=7*this._d.length)return n;for(i=new e(this._d.slice(),this._s,t),r=-r;r>=7;r-=7)i._d.shift();return 0==r?i:i.divRemSmall(Math.pow(10,r))[0]},e.prototype.pow=function(t){if(this.isUnit())return this._s>0||e(t).isOdd()?this:this.negate();if(0===(t=e(t))._s)return i;if(t._s<0){if(0===this._s)throw new Error("Divide by zero");return n}if(0===this._s)return n;if(t.isUnit())return this;if(t.compareAbs(o)>0)throw new Error("exponent too large in BigInteger.pow");for(var r=this,s=i,a=e.small[2];t.isPositive();){if(t.isOdd()&&(s=s.multiply(r),t.isUnit()))return s;r=r.square(),t=t.quotient(a)}return s},e.prototype.modPow=function(t,r){for(var n=i,s=this;t.isPositive();)t.isOdd()&&(n=n.multiply(s).remainder(r)),(t=t.quotient(e.small[2])).isPositive()&&(s=s.square().remainder(r));return n},e.prototype.log=function(){switch(this._s){case 0:return-1/0;case-1:return NaN}var n=this._d.length;if(7*n<30)return Math.log(this.valueOf());var i=Math.ceil(30/7),s=this._d.slice(n-i);return Math.log(new e(s,1,t).valueOf())+(n-i)*Math.log(r)},e.prototype.valueOf=function(){return parseInt(this.toString(),10)},e.prototype.toJSValue=function(){return parseInt(this.toString(),10)},e.prototype.lowVal=function(){return this._d[0]||0};var o=e(2147483647);return e.MAX_EXP=o,function(){function t(t){return function(r){return t.call(e(r))}}function r(t){return function(r,n){return t.call(e(r),e(n))}}function n(t){return function(r,n,i){return t.call(e(r),e(n),e(i))}}!function(){var i,s,o="toJSValue,isEven,isOdd,sign,isZero,isNegative,abs,isUnit,square,negate,isPositive,toString,next,prev,log".split(","),a="compare,remainder,divRem,subtract,add,quotient,divide,multiply,pow,compareAbs".split(","),h=["modPow"];for(i=0;i<o.length;i++)e[s=o[i]]=t(e.prototype[s]);for(i=0;i<a.length;i++)e[s=a[i]]=r(e.prototype[s]);for(i=0;i<h.length;i++)e[s=h[i]]=n(e.prototype[s]);e.exp10=function(t,r){return e(t).exp10(r)}}()}(),e}();