!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("GREN")):"function"==typeof define&&define.amd?define("EFFECT",["GREN"],e):"object"==typeof exports?exports.EFFECT=e(require("GREN")):t.EFFECT=e(t.GREN)}(this,function(t){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(1);Object.keys(i).forEach(function(t){"default"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return i[t]}})})},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.PSSoundWave=void 0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),o=function u(t,e,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(void 0===i){var n=Object.getPrototypeOf(t);return null===n?void 0:u(n,e,r)}if("value"in i)return i.value;var a=i.get;if(void 0!==a)return a.call(r)},l=r(2),c=r(3);e.PSSoundWave=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?300:arguments[0],r=arguments.length<=1||void 0===arguments[1]?100:arguments[1];i(this,e);var a=n(this,Object.getPrototypeOf(e).call(this));a.renderer=new c.WebGLRenderer,a.renderer.setStyle(t,r,"margin:0px; position:absolute; z-index:1;"),a.gl=a.renderer.gl,a.domElement=a.renderer.canvas,a.colors=[[1,1,1,1],[1,1,1,.4],[1,1,1,.3],[1,1,1,.2],[1,1,1,.1]],a.mvMatrixList=[];var s=a.renderer.canvasHeight/2,o=c.Matrix4.identity();c.Matrix4.translate(o,[0,s,0]),a.mvMatrixList.push(o);var u=c.Matrix4.identity();c.Matrix4.translate(u,[0,s,0]),c.Matrix4.scale(u,[1,.9,1]),a.mvMatrixList.push(u);var h=c.Matrix4.identity();c.Matrix4.translate(h,[0,s,0]),c.Matrix4.scale(h,[1,.7,1]),a.mvMatrixList.push(h);var f=c.Matrix4.identity();c.Matrix4.translate(f,[0,s,0]),c.Matrix4.scale(f,[1,.3,1]),a.mvMatrixList.push(f);var v=c.Matrix4.identity();return c.Matrix4.translate(v,[0,s,0]),c.Matrix4.scale(v,[1,.5,1]),c.Matrix4.rotate(v,v,Math.PI,[0,0,1]),a.mvMatrixList.push(v),a.pMatrix=c.Matrix4.orthogonal(0,a.renderer.canvasWidth,0,a.renderer.canvasHeight,-5e3,5e3),a._initProgram(),a.wave=new l.Wave(a.gl,a.prg,a.renderer.canvasWidth,0,function(){a.startAnimating()}),a}return a(e,t),s(e,[{key:"_interactVertice",value:function(){this.vertices=[];for(var t=void 0,e=void 0,r=void 0,i=void 0,n=0;n<this.amplitudes.length;n++){var a=this.amplitudes[n],s=4*n;t=this.vertexVectors[s],e=this.vertexVectors[s+1],r=this.vertexVectors[s+2],i=this.vertexVectors[s+3],this.vertices=this.vertices.concat([t.x,t.y+a,e.x,e.y+a,i.x,i.y+a,r.x,i.y+a])}}},{key:"_initProgram",value:function(){this.prg=this.gl.makeProgram(c.commonVS,c.commonFS),this.prg&&(this.prg.setAttribLocations(["vertexPosition"]),this.prg.setUniformLocations(["pMatrix","mvMatrix","color"]),this.gl.uniformMatrix4fv(this.prg.pMatrix,!1,this.pMatrix))}},{key:"enterFrame",value:function(){o(Object.getPrototypeOf(e.prototype),"enterFrame",this).call(this),this.gl.clearColor(0,0,0,0),this.gl.viewport(0,0,this.renderer.canvasWidth,this.renderer.canvasHeight),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this.wave.generateAWave(),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);for(var t=this.mvMatrixList.length-1;t>=0;t--)this.gl.uniform4fv(this.prg.color,this.colors[t]),this.gl.uniformMatrix4fv(this.prg.mvMatrix,!1,this.mvMatrixList[t]),this.wave.draw()}}]),e}(c.IAnimation)},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}();r(3),e.Wave=function(){function t(e,r,n,a,s){i(this,t),this.gl=e,this.prg=r,this.callBack=s,this.vertices=[],this.indices=[],this.worker=new Worker("../bin/effects_webworker.js"),this.worker.onmessage=this.handleMessage.bind(this),this.worker.postMessage({effectType:"soundwave",params:{drawWidth:n,positionY:a,devicePixelRatio:window.devicePixelRatio}})}return n(t,[{key:"handleMessage",value:function(t){0===this.indices.length?(this.indices=t.data,this.indexBuffer=this.gl.createElementBufferWithData(this.indices),this.generateAWave()):(this.vertices=t.data,this.callBack&&(this.callBack(),this.callBack=null))}},{key:"generateAWave",value:function(){this.worker.postMessage(null)}},{key:"draw",value:function(){this.vertexBuffer=this.gl.createArrayBufferWithData(this.vertices),this.gl.enableVertexAttribArray(this.prg.vertexPosition),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.vertexBuffer),this.gl.vertexAttribPointer(this.prg.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer),this.gl.drawElements(this.gl.TRIANGLES,this.indices.length,this.gl.UNSIGNED_SHORT,0)}}]),t}()},function(e,r){e.exports=t}])});