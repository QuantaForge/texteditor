﻿/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://texteditor.com/license
*/
(function(){function f(a){a=a.getElementsByTag("*");for(var c=a.count(),b,d=0;d<c;d++)b=a.getItem(d),function(a){for(var b=0;b<l.length;b++)(function(b){var d=a.getAttribute("on"+b);a.hasAttribute("on"+b)&&(a.removeAttribute("on"+b),a.on(b,function(b){var c=/(return\s*)?TEXTEDITOR\.tools\.callFunction\(([^)]+)\)/.exec(d),k=c&&c[1],e=c&&c[2].split(","),c=/return false;/.test(d);if(e){for(var m=e.length,h,g=0;g<m;g++){e[g]=h=TEXTEDITOR.tools.trim(e[g]);var f=h.match(/^(["'])([^"']*?)\1$/);if(f)e[g]=f[2];
else if(h.match(/\d+/))e[g]=parseInt(h,10);else switch(h){case "this":e[g]=a.$;break;case "event":e[g]=b.data.$;break;case "null":e[g]=null}}e=TEXTEDITOR.tools.callFunction.apply(window,e);k&&!1===e&&(c=1)}c&&b.data.preventDefault()}))})(l[b])}(b)}var l="click keydown mousedown keypress mouseover mouseout".split(" ");TEXTEDITOR.plugins.add("adobeair",{onLoad:function(){TEXTEDITOR.env.air&&(TEXTEDITOR.dom.document.prototype.write=TEXTEDITOR.tools.override(TEXTEDITOR.dom.document.prototype.write,function(a){function c(b,
a,c,k){a=b.append(a);(c=TEXTEDITOR.htmlParser.fragment.fromHtml(c).children[0].attributes)&&a.setAttributes(c);k&&a.append(b.getDocument().createText(k))}return function(b){if(this.getBody()){var d=this,f=this.getHead();b=b.replace(/(<style[^>]*>)([\s\S]*?)<\/style>/gi,function(a,b,d){c(f,"style",b,d);return""});b=b.replace(/<base\b[^>]*\/>/i,function(b){c(f,"base",b);return""});b=b.replace(/<title>([\s\S]*)<\/title>/i,function(b,a){d.$.title=a;return""});b=b.replace(/<head>([\s\S]*)<\/head>/i,function(b){var a=
new TEXTEDITOR.dom.element("div",d);a.setHtml(b);a.moveChildren(f);return""});b.replace(/(<body[^>]*>)([\s\S]*)(?=$|<\/body>)/i,function(b,a,c){d.getBody().setHtml(c);(b=TEXTEDITOR.htmlParser.fragment.fromHtml(a).children[0].attributes)&&d.getBody().setAttributes(b)})}else a.apply(this,arguments)}}),TEXTEDITOR.addCss("body.cke_editable { padding: 8px }"),TEXTEDITOR.ui.on("ready",function(a){a=a.data;if(a._.panel){var c=a._.panel._.panel,b;(function(){c.isLoaded?(b=c._.holder,f(b)):setTimeout(arguments.callee,
30)})()}else a instanceof TEXTEDITOR.dialog&&f(a._.element)}))},init:function(a){TEXTEDITOR.env.air&&(a.on("uiReady",function(){f(a.container);a.on("elementsPathUpdate",function(a){f(a.data.space)})}),a.on("contentDom",function(){a.document.on("click",function(a){a.data.preventDefault(!0)})}))}})})();