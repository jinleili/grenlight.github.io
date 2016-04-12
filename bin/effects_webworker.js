!function(e){function t(i){if(r[i])return r[i].exports;var a=r[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function i(e,t){"soundwave"===e&&(n=new a.WaveCalculater(t))}var a=r(1);importScripts("gren.js");var n=null;onmessage=function(e){if(null===n)i(e.data.effectType,e.data.params),postMessage(n.getPreparationData());else{var t=n.next();postMessage(t.buffer,[t.buffer])}}},function(e,t,r){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.WaveCalculater=void 0;var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}(),o=r(2);t.WaveCalculater=function(e){function t(e){i(this,t);var r=a(this,Object.getPrototypeOf(t).call(this));return r.positionY=e.positionY,r.drawWidth=e.drawWidth,r.devicePixelRatio=e.devicePixelRatio,r.padding=10,r.vertexVectors=[],r.indices=[],r.amplitudes=[],r.waveLengthArr=[],r.amplitudesArr=[],r.amplitudesIndex=0,r.maxAmplitedesIndex=0,r.needBack=!1,r.startAngle=0,r._generateVerticesData(),r}return n(t,e),s(t,[{key:"_generateVerticesData",value:function(){for(var e=2,t=60,r=5,i=0,a=new GREN.GLBezier,n=Math.sqrt(t*t+r*r),s=a.generateCoords([[0,0],[t,0],[t,r]],n,1),o=[],d=0;d<s.length;d++)o.push(s[d].coords[1]);for(var h=this.positionY,u=1.5*this.devicePixelRatio,c=this.drawWidth/2,l=Math.floor(this.drawWidth/2),p=this.drawWidth/6,f=(l-p)/c,v=this.drawWidth/e,x=Math.PI/(v-this.padding-t),m=0,g=0;g<=this.drawWidth;g+=e){var y=new GREN.Vector2(g,h-u),w=new GREN.Vector2(g,h+u);this.vertexVectors=this.vertexVectors.concat([y,w]),g>0&&(this.indices=this.indices.concat([m,m+1,m+2,m,m+2,m+3]),m+=2);var b=2*this.padding;if(g>=this.padding&&g<=this.drawWidth-this.padding){var A=c>g?g:this.drawWidth-g;b=p+f*A}this.waveLengthArr.push(b)}for(var I=1;60>I;I++){for(var W=0,P=I/1.8*this.devicePixelRatio,k=[],M=0;M<=this.drawWidth;M+=e)M>=this.padding&&M<=this.drawWidth-this.padding?M<this.padding+t?(i+=2,k.push(o[i-1])):M>this.drawWidth-this.padding-t?(k.push(o[i-1]),i-=2):(W+=x,k.push(r+Math.sin(W)*P)):k.push(0);this.amplitudesArr.push(k)}}},{key:"generateWave",value:function(){var e=this.amplitudesArr[this.amplitudesIndex];this.needBack===!0?(this.amplitudesIndex--,this.amplitudesIndex<=0&&(this.amplitudesIndex=0,this.maxAmplitedesIndex++,80===this.maxAmplitedesIndex&&(this.maxAmplitedesIndex=0,this.needBack=!1))):this.amplitudesIndex<this.amplitudesArr.length-1?(this.amplitudesIndex++,this.maxAmplitedesIndex=0):(this.maxAmplitedesIndex++,300===this.maxAmplitedesIndex&&(this.maxAmplitedesIndex=0,this.needBack=!0)),this.vertexArray=new Float32Array(8*e.length);var t=void 0,r=void 0,i=this.startAngle,a=Math.PI/200;this.startAngle+=8*a;for(var n=0;n<e.length;n++){var s=2*n;t=this.vertexVectors[s],r=this.vertexVectors[s+1];var o=Math.sin(i)*e[n];i-=2*Math.PI/this.waveLengthArr[n];var d=4*n;this.vertexArray[d]=t.x,this.vertexArray[d+1]=t.y+o,this.vertexArray[d+2]=r.x,this.vertexArray[d+3]=r.y+o}}},{key:"getPreparationData",value:function(){return this.indices}},{key:"next",value:function(){return this.generateWave(),this.vertexArray}}]),t}(o.IWorkerCalculater)},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();t.IWorkerCalculater=function(){function e(t){r(this,e)}return i(e,[{key:"getPreparationData",value:function(){}},{key:"next",value:function(){}}]),e}()}]);