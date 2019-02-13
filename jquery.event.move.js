!function(e){"function"==typeof define&&define.amd?define([],e):"undefined"!=typeof module&&null!==module&&module.exports?module.exports=e:e()}(function(){var i=Object.assign||window.jQuery&&jQuery.extend,p=8,a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){return window.setTimeout(function(){e()},25)};!function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}();var o={textarea:!0,input:!0,select:!0,button:!0},u={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},r={move:"touchmove",cancel:"touchend",end:"touchend"},d=/\s+/,c={bubbles:!0,cancelable:!0},t="function"==typeof Symbol?Symbol("events"):{};function m(e){return e[t]||(e[t]={})}function v(e,t,n,o,i){t=t.split(d);var a,c=m(e),u=t.length;function r(e){n(e,o)}for(;u--;)(c[a=t[u]]||(c[a]=[])).push([n,r]),e.addEventListener(a,r)}function f(e,t,n,o){t=t.split(d);var i,a,c,u=m(e),r=t.length;if(u)for(;r--;)if(a=u[i=t[r]])for(c=a.length;c--;)a[c][0]===n&&(e.removeEventListener(i,a[c][1]),a.splice(c,1))}function g(e,t,n){var o=new CustomEvent(t,c);n&&i(o,n),e.dispatchEvent(o)}function n(e){var n=e,o=!1,i=!1;function t(e){o?(n(),a(t),o=!(i=!0)):i=!1}this.kick=function(e){o=!0,i||t()},this.end=function(e){var t=n;e&&(i?(n=o?function(){t(),e()}:e,o=!0):e())}}function h(){}function s(e){e.preventDefault()}function l(e,t){var n,o;if(e.identifiedTouch)return e.identifiedTouch(t);for(n=-1,o=e.length;++n<o;)if(e[n].identifier===t)return e[n]}function X(e,t){var n=l(e.changedTouches,t.identifier);if(n&&(n.pageX!==t.pageX||n.pageY!==t.pageY))return n}function Y(e,t){T(e,t,e,w)}function y(e,t){w()}function w(){f(document,u.move,Y),f(document,u.cancel,y)}function b(e){f(document,r.move,e.touchmove),f(document,r.cancel,e.touchend)}function T(e,t,n,o){var i,a,c,u,r,d,m,v,f,s=n.pageX-t.pageX,l=n.pageY-t.pageY;s*s+l*l<p*p||(a=t,c=n,u=s,r=l,d=o,m=(i=e).targetTouches,v=i.timeStamp-a.timeStamp,f={altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,startX:a.pageX,startY:a.pageY,distX:u,distY:r,deltaX:u,deltaY:r,pageX:c.pageX,pageY:c.pageY,velocityX:u/v,velocityY:r/v,identifier:a.identifier,targetTouches:m,finger:m?m.length:1,enableMove:function(){this.moveEnabled=!0,this.enableMove=h,i.preventDefault()}},g(a.target,"movestart",f),d(a))}function E(e,t){var n=t.timer;t.touch=e,t.timeStamp=e.timeStamp,n.kick()}function S(e,t){var n=t.target,o=t.event,i=t.timer;f(document,u.move,E),f(document,u.end,S),K(n,o,i,function(){setTimeout(function(){f(n,"click",s)},0)})}function k(e,t){var n,o=t.target,i=t.event,a=t.timer;l(e.changedTouches,i.identifier)&&(n=t,f(document,r.move,n.activeTouchmove),f(document,r.end,n.activeTouchend),K(o,i,a))}function K(e,t,n,o){n.end(function(){return g(e,"moveend",t),o&&o()})}if(v(document,"mousedown",function(e){var t;1!==(t=e).which||t.ctrlKey||t.altKey||o[e.target.tagName.toLowerCase()]||(v(document,u.move,Y,e),v(document,u.cancel,y,e))}),v(document,"touchstart",function(e){if(!o[e.target.tagName.toLowerCase()]){var t=e.changedTouches[0],n={target:t.target,pageX:t.pageX,pageY:t.pageY,identifier:t.identifier,touchmove:function(e,t){var n,o,i;(i=X(n=e,o=t))&&T(n,o,i,b)},touchend:function(e,t){var n;n=t,l(e.changedTouches,n.identifier)&&b(n)}};v(document,r.move,n.touchmove,n),v(document,r.cancel,n.touchend,n)}}),v(document,"movestart",function(e){if(!e.defaultPrevented&&e.moveEnabled){var a={startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger},c={target:e.target,event:a,timer:new n(function(e){var t,n,o,i;t=a,n=c.touch,o=c.timeStamp,i=o-t.timeStamp,t.distX=n.pageX-t.startX,t.distY=n.pageY-t.startY,t.deltaX=n.pageX-t.pageX,t.deltaY=n.pageY-t.pageY,t.velocityX=.3*t.velocityX+.7*t.deltaX/i,t.velocityY=.3*t.velocityY+.7*t.deltaY/i,t.pageX=n.pageX,t.pageY=n.pageY,g(c.target,"move",a)}),touch:void 0,timeStamp:e.timeStamp};void 0===e.identifier?(v(e.target,"click",s),v(document,u.move,E,c),v(document,u.end,S,c)):(c.activeTouchmove=function(e,t){var n,o,i,a,c;n=e,i=(o=t).event,a=o.timer,(c=X(n,i))&&(n.preventDefault(),i.targetTouches=n.targetTouches,o.touch=c,o.timeStamp=n.timeStamp,a.kick())},c.activeTouchend=function(e,t){k(e,t)},v(document,r.move,c.activeTouchmove,c),v(document,r.end,c.activeTouchend,c))}}),window.jQuery){var j="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");jQuery.event.special.movestart={setup:function(){return v(this,"movestart",e),!1},teardown:function(){return f(this,"movestart",e),!1},add:q},jQuery.event.special.move={setup:function(){return v(this,"movestart",C),!1},teardown:function(){return f(this,"movestart",C),!1},add:q},jQuery.event.special.moveend={setup:function(){return v(this,"movestart",Q),!1},teardown:function(){return f(this,"movestart",Q),!1},add:q}}function e(e){e.enableMove()}function C(e){e.enableMove()}function Q(e){e.enableMove()}function q(e){var o=e.handler;e.handler=function(e){for(var t,n=j.length;n--;)e[t=j[n]]=e.originalEvent[t];o.apply(this,arguments)}}});
