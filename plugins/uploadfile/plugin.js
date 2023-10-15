/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://texteditor.com/license
*/
(function(){TEXTEDITOR.plugins.add("uploadfile",{requires:"uploadwidget,link",init:function(a){if(TEXTEDITOR.plugins.clipboard.isFileApiSupported){var b=TEXTEDITOR.fileTools;b.getUploadUrl(a.config)?b.addUploadWidget(a,"uploadfile",{uploadUrl:b.getUploadUrl(a.config),fileToElement:function(c){var a=new TEXTEDITOR.dom.element("a");a.setText(c.name);a.setAttribute("href","#");return a},onUploaded:function(a){this.replaceWith('\x3ca href\x3d"'+a.url+'" target\x3d"_blank"\x3e'+a.fileName+"\x3c/a\x3e")}}):TEXTEDITOR.error("uploadfile-config")}}})})();