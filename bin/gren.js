!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("GREN",[],t):"object"==typeof exports?exports.GREN=t():e.GREN=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);Object.defineProperty(t,"WebGLRenderer",{enumerable:!0,get:function(){return r.WebGLRenderer}});var i=n(4);Object.defineProperty(t,"GLBezier",{enumerable:!0,get:function(){return i.GLBezier}});var a=n(5);Object.defineProperty(t,"commonVS",{enumerable:!0,get:function(){return a.commonVS}}),Object.defineProperty(t,"commonFS",{enumerable:!0,get:function(){return a.commonFS}});var o=n(6);Object.defineProperty(t,"Matrix4",{enumerable:!0,get:function(){return o.Matrix4}});var u=n(7);Object.defineProperty(t,"Matrix2d",{enumerable:!0,get:function(){return u.Matrix2d}});var c=n(8);Object.defineProperty(t,"Vector2",{enumerable:!0,get:function(){return c.Vector2}});var s=n(9);Object.defineProperty(t,"Vector3",{enumerable:!0,get:function(){return s.Vector3}});var l=n(10);Object.defineProperty(t,"Vector4",{enumerable:!0,get:function(){return l.Vector4}});var f=n(11);Object.defineProperty(t,"IAnimation",{enumerable:!0,get:function(){return f.IAnimation}})},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.WebGLRenderer=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),u=r(o),c=n(3),s=["webgl","experimental-webgl","webkit-3d","moz-webgl"];t.WebGLRenderer=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?null:arguments[2];i(this,e),this.canvasWidth=0,this.canvasHeight=0,this.canvas=null,null!==r?this.canvas=document.getElementById(r):this.canvas=document.createElement("canvas"),this.gl=this.getGLContext(),null===this.gl?this.isWebGLSuported=!1:(this.isWebGLSuported=!0,this.gl.createArrayBufferWithData=u.createArrayBufferWithData,this.gl.createArrayBufferWithDataAndType=u.createArrayBufferWithDataAndType,this.gl.createArrayBufferWithTypedArray=u.createArrayBufferWithTypedArray,this.gl.createElementBufferWithData=u.createElementBufferWithData,this.gl.createTextureWithData=u.createTextureWithData,this.gl.makeProgram=u.makeProgram),this.setStyle(t,n)}return a(e,[{key:"setStyle",value:function(){var e=arguments.length<=0||void 0===arguments[0]?0:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?null:arguments[2];null!=this.canvas&&0!==e&&0!==t&&(this.canvasWidth=e*window.devicePixelRatio,this.canvasHeight=t*window.devicePixelRatio,this.canvas.width=this.canvasWidth,this.canvas.height=this.canvasHeight,null===n?(this.canvas.style.width=e+"px",this.canvas.style.height=t+"px"):this.canvas.setAttribute("style","width:"+e+"px; height: "+t+"px; "+n+";"),this.canvas.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)",this.centerX=this.canvasWidth/2,this.centerY=this.canvasHeight/2)}},{key:"getGLContext",value:function(){var e=null;if(c.Security.validDomain()===!1)return e;for(var t=0;t<s.length&&!(e=this.canvas.getContext(s[t],{antialias:!0}));++t);return null===e&&this._createNotSupportMessageView(),e}},{key:"_createNotSupportMessageView",value:function(){this.canvas=document.createElement("div"),this.canvas.setAttribute("style","color: #454545; padding: 25px; font-size: 18px;"),this.canvas.innerHTML="<p>您当前使用的浏览器不支持 WebGL.</p>\n<p>支持 WebGL 的手机系统版本及浏览器版本有: </p>\n<ul>\n<li>iOS 8.0, Android 5.0 及以上版本</li>\n<li>IE 11 及微软 Edge 浏览所有版本</li>\n<li>FireFox for PC/Mac 40 及以上版本</li>\n<li>Chrome for PC/Mac 43 及以上版本</li>\n<li>Safari for Mac 8.0 及以上版本</li>\n</ul>"}}]),e}()},function(e,t){"use strict";function n(e,t){function n(e,t){var n=i.createShader(e);if(i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw new Error("compile error: "+i.getShaderInfoLog(n));return n}var r=this,i=this,a=this.createProgram();if(this.attachShader(a,n(this.VERTEX_SHADER,e)),this.attachShader(a,n(this.FRAGMENT_SHADER,t)),this.linkProgram(a),!this.getProgramParameter(a,this.LINK_STATUS))throw new Error("link error: "+this.getProgramInfoLog(a));return this.useProgram(a),a.setAttribLocations=function(e){for(var t=0,n=e.length;n>t;t+=1)a[e[t]]=r.getAttribLocation(a,e[t])},a.setUniformLocations=function(e){for(var t=0,n=e.length;n>t;t+=1)a[e[t]]=r.getUniformLocation(a,e[t])},a}function r(e){return this.createArrayBufferWithDataAndType(e,this.STREAM_DRAW)}function i(e,t){var n=this.createBuffer();return this.bindBuffer(this.ARRAY_BUFFER,n),this.bufferData(this.ARRAY_BUFFER,new Float32Array(e),t),this.bindBuffer(this.ARRAY_BUFFER,null),n}function a(e){var t=arguments.length<=1||void 0===arguments[1]?this.STATIC_DRAW:arguments[1],n=this.createBuffer();return this.bindBuffer(this.ARRAY_BUFFER,n),this.bufferData(this.ARRAY_BUFFER,e,t),this.bindBuffer(this.ARRAY_BUFFER,null),n}function o(e){var t=this.createBuffer();return this.bindBuffer(this.ELEMENT_ARRAY_BUFFER,t),this.bufferData(this.ELEMENT_ARRAY_BUFFER,new Uint16Array(e),this.STATIC_DRAW),this.bindBuffer(this.ELEMENT_ARRAY_BUFFER,null),t}function u(e){return 0===(e&e-1)}function c(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1];this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL,!0);var n=this.createTexture();return this.bindTexture(this.TEXTURE_2D,n),this.texImage2D(this.TEXTURE_2D,0,this.RGBA,this.RGBA,this.UNSIGNED_BYTE,e),u(e.width)&&u(e.height)?(this.generateMipmap(this.TEXTURE_2D),t&&(this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_S,this.REPEAT),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_T,this.REPEAT))):(this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_S,this.CLAMP_TO_EDGE),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_WRAP_T,this.CLAMP_TO_EDGE),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_MIN_FILTER,this.LINEAR),this.texParameteri(this.TEXTURE_2D,this.TEXTURE_MAG_FILTER,this.LINEAR)),this.bindTexture(this.TEXTURE_2D,null),n}function s(e,t){var n=new Image;n.onload=function(){t&&t(n)},n.src=e}Object.defineProperty(t,"__esModule",{value:!0}),t.makeProgram=n,t.createArrayBufferWithData=r,t.createArrayBufferWithDataAndType=i,t.createArrayBufferWithTypedArray=a,t.createElementBufferWithData=o,t.isPowerOf2=u,t.createTextureWithData=c,t.createImageByURL=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=["l","i","j","i","n","l","e","i"],a=["l","o","c","a","l","h","o","s","t"];t.Security=function(){function e(){n(this,e)}return r(e,null,[{key:"validDomain",value:function(){var e=i.join(""),t=a.join(""),n=window.location.hostname.split("."),r=n[0];return 3===n.length&&(r=n[1]),r===decodeURI(e)||r===decodeURI(t)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.GLBezier=function(){function e(){n(this,e)}return r(e,[{key:"generateCoords",value:function(t){var n=arguments.length<=1||void 0===arguments[1]?0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?.5:arguments[2],i=t[0],a=t[t.length-1];0===n&&(n=e.getDistance(i,a));var o=Math.floor(n*r);if(1>=o){var u=i[0]-a[0],c=i[1]-a[1];return[{coords:a,slope:Math.atan2(c,u),distance:Math.sqrt(u*u+c*c)}]}this.stepLength=1/o;for(var s=[],l=this.calculateControlEdge(t),f=t[0],h=0;o>h;h++){var v=this.calculateReferenceLine(t,l,h+1),d=v[1][0]-v[0][0],y=v[1][1]-v[0][1],g=v[0][0]+d*((h+1)*this.stepLength),p=v[0][1]+y*((h+1)*this.stepLength),m=g-f[0],b=p-f[1];f=[g,p],s.push({coords:[g,p],slope:Math.atan2(b,m),distance:Math.sqrt(m*m+b*b)})}return s}},{key:"calculateReferenceLine",value:function(e,t,n){for(var r=[],i=0;i<e.length-1;i++){var a=e[i][0]+t[i].deltaX*n,o=e[i][1]+t[i].deltaY*n;r.push([a,o])}if(2===r.length)return r;var u=this.calculateControlEdge(r);return this.calculateReferenceLine(r,u,n)}},{key:"calculateControlEdge",value:function(e){for(var t=[],n=1;n<e.length;n++){var r=e[n][0]-e[n-1][0],i=e[n][1]-e[n-1][1],a=this.edge();a.length=Math.sqrt(r*r+i*i),a.angleSin=i/a.length,a.angleCos=r/a.length,a.calculateDelta(this.stepLength),t.push(a)}return t}},{key:"edge",value:function(){return{length:0,angleCos:0,angleSin:0,deltaX:0,deltaY:0,calculateDelta:function(e){this.deltaX=e*this.length*this.angleCos,this.deltaY=e*this.length*this.angleSin}}}}],[{key:"getDistance",value:function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)}}]),e}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.commonVS="\nattribute vec3 vertexPosition;\n\nuniform mat4 mvMatrix;\nuniform mat4 pMatrix;\n\nvoid main(void) {\n  gl_Position = pMatrix * mvMatrix * vec4(vertexPosition, 1.0);\n}\n",t.commonFS="\nprecision mediump float;\n\nuniform vec4 color;\n\nvoid main(void) {\n  gl_FragColor = color;\n}\n"},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Matrix4=function(){function e(){n(this,e),this.identity=e.identity()}return r(e,null,[{key:"identity",value:function(){return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},{key:"copy",value:function(t){var n=e.identity();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}},{key:"perspective",value:function(t,n,r,i){var a=1/Math.tan(t/2),o=1/(r-i),u=e.identity();return u[0]=a/n,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=a,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=(i+r)*o,u[11]=-1,u[12]=0,u[13]=0,u[14]=2*i*r*o,u[15]=0,u}},{key:"orthogonal",value:function(t,n,r,i,a,o){var u=1/(t-n),c=1/(r-i),s=1/(a-o),l=e.identity();return l[0]=-2*u,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=-2*c,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=2*s,l[11]=0,l[12]=(t+n)*u,l[13]=(i+r)*c,l[14]=(o+a)*s,l[15]=1,l}},{key:"scale",value:function(e,t){var n=t[0],r=t[1],i=t[2];e[0]*=n,e[1]*=n,e[2]*=n,e[3]*=n,e[4]*=r,e[5]*=r,e[6]*=r,e[7]*=r,e[8]*=i,e[9]*=i,e[10]*=i,e[11]*=i}},{key:"translate",value:function(e,t){var n=t[0],r=t[1],i=t[2];return e[12]+=e[0]*n+e[4]*r+e[8]*i,e[13]+=e[1]*n+e[5]*r+e[9]*i,e[14]+=e[2]*n+e[6]*r+e[10]*i,e[15]+=e[3]*n+e[7]*r+e[11]*i,e}},{key:"inverse",value:function(t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],u=t[5],c=t[6],s=t[7],l=t[8],f=t[9],h=t[10],v=t[11],d=t[12],y=t[13],g=t[14],p=t[15],m=n*u-r*o,b=n*c-i*o,E=n*s-a*o,A=r*c-i*u,T=r*s-a*u,_=i*s-a*c,R=l*y-f*d,x=l*g-h*d,P=l*p-v*d,w=f*g-h*y,M=f*p-v*y,k=h*p-v*g,B=m*k-b*M+E*w+A*P-T*x+_*R;if(!B)return null;B=1/B;var D=e.identity();return D[0]=(u*k-c*M+s*w)*B,D[1]=(i*M-r*k-a*w)*B,D[2]=(y*_-g*T+p*A)*B,D[3]=(h*T-f*_-v*A)*B,D[4]=(c*P-o*k-s*x)*B,D[5]=(n*k-i*P+a*x)*B,D[6]=(g*E-d*_-p*b)*B,D[7]=(l*_-h*E+v*b)*B,D[8]=(o*M-u*P+s*R)*B,D[9]=(r*P-n*M-a*R)*B,D[10]=(d*T-y*E+p*m)*B,D[11]=(f*E-l*T-v*m)*B,D[12]=(u*x-o*w-c*R)*B,D[13]=(n*w-r*x+i*R)*B,D[14]=(y*b-d*A-g*m)*B,D[15]=(l*A-f*b+h*m)*B,D}},{key:"rotate",value:function(e,t,n,r){var i,a,o,u,c,s,l,f,h,v,d,y,g,p,m,b,E,A,T,_,R,x,P,w,M=r[0],k=r[1],B=r[2],D=Math.sqrt(M*M+k*k+B*B);return D=1/D,M*=D,k*=D,B*=D,i=Math.sin(n),a=Math.cos(n),o=1-a,u=t[0],c=t[1],s=t[2],l=t[3],f=t[4],h=t[5],v=t[6],d=t[7],y=t[8],g=t[9],p=t[10],m=t[11],b=M*M*o+a,E=k*M*o+B*i,A=B*M*o-k*i,T=M*k*o-B*i,_=k*k*o+a,R=B*k*o+M*i,x=M*B*o+k*i,P=k*B*o-M*i,w=B*B*o+a,e[0]=u*b+f*E+y*A,e[1]=c*b+h*E+g*A,e[2]=s*b+v*E+p*A,e[3]=l*b+d*E+m*A,e[4]=u*T+f*_+y*R,e[5]=c*T+h*_+g*R,e[6]=s*T+v*_+p*R,e[7]=l*T+d*_+m*R,e[8]=u*x+f*P+y*w,e[9]=c*x+h*P+g*w,e[10]=s*x+v*P+p*w,e[11]=l*x+d*P+m*w,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e}},{key:"multiplyMatrices",value:function(t,n){var r=e.identity(),i=t[0],a=t[4],o=t[8],u=t[12],c=t[1],s=t[5],l=t[9],f=t[13],h=t[2],v=t[6],d=t[10],y=t[14],g=t[3],p=t[7],m=t[11],b=t[15],E=n[0],A=n[4],T=n[8],_=n[12],R=n[1],x=n[5],P=n[9],w=n[13],M=n[2],k=n[6],B=n[10],D=n[14],L=n[3],S=n[7],j=n[11],O=n[15];return r[0]=i*E+a*R+o*M+u*L,r[4]=i*A+a*x+o*k+u*S,r[8]=i*T+a*P+o*B+u*j,r[12]=i*_+a*w+o*D+u*O,r[1]=c*E+s*R+l*M+f*L,r[5]=c*A+s*x+l*k+f*S,r[9]=c*T+s*P+l*B+f*j,r[13]=c*_+s*w+l*D+f*O,r[2]=h*E+v*R+d*M+y*L,r[6]=h*A+v*x+d*k+y*S,r[10]=h*T+v*P+d*B+y*j,r[14]=h*_+v*w+d*D+y*O,r[3]=g*E+p*R+m*M+b*L,r[7]=g*A+p*x+m*k+b*S,r[11]=g*T+p*P+m*B+b*j,r[15]=g*_+p*w+m*D+b*O,r}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Matrix2d=function(){function e(){n(this,e),this.identity=e.identity()}return r(e,null,[{key:"identity",value:function(){return new Float32Array([1,0,0,1,0,0])}},{key:"copy",value:function(t){var n=e.identity();return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}},{key:"scale",value:function(e,t){var n=t[0],r=t[1];e[0]*=n,e[1]*=n,e[2]*=r,e[3]*=r}},{key:"translate",value:function(e,t){var n=t[0],r=t[1];e[4]+=e[0]*n+e[2]*r,e[5]+=e[1]*n+e[3]*r}},{key:"rotate",value:function(e,t){var n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],u=e[5],c=Math.sin(t),s=Math.cos(t);return e[0]=n*s+i*c,e[1]=r*s+a*c,e[2]=n*-c+i*s,e[3]=r*-c+a*s,e[4]=o,e[5]=u,e}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Vector2=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?0:arguments[0],r=arguments.length<=1||void 0===arguments[1]?0:arguments[1];n(this,e),this.x=t,this.y=r}return r(e,[{key:"getArray",value:function(){return[this.x,this.y]}},{key:"transformByMat2d",value:function(e){var t=this.x,n=this.y;return this.x=e[0]*t+e[2]*n+e[4],this.y=e[1]*t+e[3]*n+e[5],this}},{key:"applyMatrix4",value:function(e){var t=this.x,n=this.y,r=0,i=1;this.x=e[0]*t+e[4]*n+e[8]*r+e[12]*i,this.y=e[1]*t+e[5]*n+e[9]*r+e[13]*i;var a=e[3]*t+e[7]*n+e[11]*r+e[15]*i;return this.x=this.x/a,this.y=this.y/a,this}},{key:"dotProduct",value:function(e){return this.x*e.x+this.y*e.y}},{key:"scale",value:function(e){this.x*=e,this.y*=e}},{key:"swapToModelPosition",value:function(){var e=arguments.length<=0||void 0===arguments[0]?1:arguments[0],t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=arguments.length<=2||void 0===arguments[2]?0:arguments[2];this.x=this.x*e-t,this.y=n-this.y*e}},{key:"isEqualTo",value:function(e){return e.x===this.x&&e.y===this.y}}],[{key:"generateVector",value:function(t,n){return new e(n[0]-t[0],n[1]-t[1])}},{key:"zeroVector",value:function(){return new e}},{key:"copy",value:function(t){return new e(t.x,t.y)}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Vector3=function(){function e(){n(this,e)}return r(e,null,[{key:"applyMatrix4",value:function(e,t){var n=e[0],r=e[1],i=e[2],a=1;e[0]=t[0]*n+t[4]*r+t[8]*i+t[12]*a,e[1]=t[1]*n+t[5]*r+t[9]*i+t[13]*a,e[2]=t[2]*n+t[6]*r+t[10]*i+t[14]*a;var o=t[3]*n+t[7]*r+t[11]*i+t[15]*a;return e[0]=e[0]/o,e[1]=e[1]/o,e[2]=e[2]/o,e}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.Vector4=function(){function e(){n(this,e)}return r(e,null,[{key:"applyMatrix4",value:function(e,t){var n=e[0],r=e[1],i=e[2],a=e[3];return e[0]=t[0]*n+t[4]*r+t[8]*i+t[12]*a,e[1]=t[1]*n+t[5]*r+t[9]*i+t[13]*a,e[2]=t[2]*n+t[6]*r+t[10]*i+t[14]*a,e[3]=t[3]*n+t[7]*r+t[11]*i+t[15]*a,e}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.IAnimation=function(){function e(){n(this,e),this.animationHandler=null,this.isAnimating=!1}return r(e,[{key:"startAnimating",value:function(){var e=this;this.isAnimating=!0,this.frameIndex=0,this.animationHandler=requestAnimationFrame(function(){e.enterFrame()})}},{key:"stopAnimating",value:function(){cancelAnimationFrame(this.animationHandler),this.isAnimating=!1}},{key:"enterFrame",value:function(){var e=this;this.frameIndex++,this.animationHandler=requestAnimationFrame(function(){e.enterFrame()})}},{key:"destory",value:function(){this.stopAnimating()}}]),e}()}])});