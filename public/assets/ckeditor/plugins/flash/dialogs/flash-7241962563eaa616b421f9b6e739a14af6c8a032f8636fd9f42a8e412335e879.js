/*
 Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
!function(){function e(e,t,l){var i=a[this.id];if(i)for(var n=this instanceof CKEDITOR.ui.dialog.checkbox,o=0;o<i.length;o++){var s=i[o];switch(s.type){case 1:if(!e)continue;if(null!==e.getAttribute(s.name))return e=e.getAttribute(s.name),void(n?this.setValue("true"==e.toLowerCase()):this.setValue(e));n&&this.setValue(!!s["default"]);break;case 2:if(!e)continue;if(s.name in l)return e=l[s.name],void(n?this.setValue("true"==e.toLowerCase()):this.setValue(e));n&&this.setValue(!!s["default"]);break;case 4:if(!t)continue;if(t.getAttribute(s.name))return e=t.getAttribute(s.name),void(n?this.setValue("true"==e.toLowerCase()):this.setValue(e));n&&this.setValue(!!s["default"])}}}function t(e,t,l){var i=a[this.id];if(i)for(var n=""===this.getValue(),o=this instanceof CKEDITOR.ui.dialog.checkbox,s=0;s<i.length;s++){var m=i[s];switch(m.type){case 1:if(!e||"data"==m.name&&t&&!e.hasAttribute("data"))continue;var d=this.getValue();n||o&&d===m["default"]?e.removeAttribute(m.name):e.setAttribute(m.name,d);break;case 2:if(!e)continue;if(d=this.getValue(),n||o&&d===m["default"])m.name in l&&l[m.name].remove();else if(m.name in l)l[m.name].setAttribute("value",d);else{var c=CKEDITOR.dom.element.createFromHtml("<cke:param></cke:param>",e.getDocument());c.setAttributes({name:m.name,value:d}),1>e.getChildCount()?c.appendTo(e):c.insertBefore(e.getFirst())}break;case 4:if(!t)continue;d=this.getValue(),n||o&&d===m["default"]?t.removeAttribute(m.name):t.setAttribute(m.name,d)}}}for(var a={id:[{type:1,name:"id"}],classid:[{type:1,name:"classid"}],codebase:[{type:1,name:"codebase"}],pluginspage:[{type:4,name:"pluginspage"}],src:[{type:2,name:"movie"},{type:4,name:"src"},{type:1,name:"data"}],name:[{type:4,name:"name"}],align:[{type:1,name:"align"}],"class":[{type:1,name:"class"},{type:4,name:"class"}],width:[{type:1,name:"width"},{type:4,name:"width"}],height:[{type:1,name:"height"},{type:4,name:"height"}],hSpace:[{type:1,name:"hSpace"},{type:4,name:"hSpace"}],vSpace:[{type:1,name:"vSpace"},{type:4,name:"vSpace"}],style:[{type:1,name:"style"},{type:4,name:"style"}],type:[{type:4,name:"type"}]},l="play loop menu quality scale salign wmode bgcolor base flashvars allowScriptAccess allowFullScreen".split(" "),i=0;i<l.length;i++)a[l[i]]=[{type:4,name:l[i]},{type:2,name:l[i]}];for(l=["play","loop","menu"],i=0;i<l.length;i++)a[l[i]][0]["default"]=a[l[i]][1]["default"]=!0;CKEDITOR.dialog.add("flash",function(a){var l,i=!a.config.flashEmbedTagOnly,n=a.config.flashAddEmbedTag||a.config.flashEmbedTagOnly,o="<div>"+CKEDITOR.tools.htmlEncode(a.lang.common.preview)+'<br><div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div><div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';return{title:a.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){this.fakeImage=this.objectNode=this.embedNode=null,l=new CKEDITOR.dom.element("embed",a.document);var e=this.getSelectedElement();if(e&&e.data("cke-real-element-type")&&"flash"==e.data("cke-real-element-type")){this.fakeImage=e;var t=a.restoreRealElement(e),i=null,n=null,o={};if("cke:object"==t.getName()){i=t,t=i.getElementsByTag("embed","cke"),0<t.count()&&(n=t.getItem(0));for(var t=i.getElementsByTag("param","cke"),s=0,m=t.count();s<m;s++){var d=t.getItem(s),c=d.getAttribute("name"),d=d.getAttribute("value");o[c]=d}}else"cke:embed"==t.getName()&&(n=t);this.objectNode=i,this.embedNode=n,this.setupContent(i,n,o,e)}},onOk:function(){var e=null,t=null,l=null;if(this.fakeImage?(e=this.objectNode,t=this.embedNode):(i&&(e=CKEDITOR.dom.element.createFromHtml("<cke:object></cke:object>",a.document),e.setAttributes({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"})),n&&(t=CKEDITOR.dom.element.createFromHtml("<cke:embed></cke:embed>",a.document),t.setAttributes({type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer"}),e&&t.appendTo(e))),e)for(var l={},o=e.getElementsByTag("param","cke"),s=0,m=o.count();s<m;s++)l[o.getItem(s).getAttribute("name")]=o.getItem(s);o={},s={},this.commitContent(e,t,l,o,s),e=a.createFakeElement(e||t,"cke_flash","flash",!0),e.setAttributes(s),e.setStyles(o),this.fakeImage?(e.replace(this.fakeImage),a.getSelection().selectElement(e)):a.insertElement(e)},onHide:function(){this.preview&&this.preview.setHtml("")},contents:[{id:"info",label:a.lang.common.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",className:"cke_dialog_flash_url",children:[{id:"src",type:"text",label:a.lang.common.url,required:!0,validate:CKEDITOR.dialog.validate.notEmpty(a.lang.flash.validateSrc),setup:e,commit:t,onLoad:function(){var e=this.getDialog(),t=function(t){l.setAttribute("src",t),e.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(l.getAttribute("src"))+'" type="application/x-shockwave-flash"></embed>')};e.preview=e.getContentElement("info","preview").getElement().getChild(3),this.on("change",function(e){e.data&&e.data.value&&t(e.data.value)}),this.getInputElement().on("change",function(){t(this.getValue())},this)}},{type:"button",id:"browse",filebrowser:"info:src",hidden:!0,style:"display:inline-block;margin-top:14px;",label:a.lang.common.browseServer}]}]},{type:"hbox",widths:["25%","25%","25%","25%","25%"],children:[{type:"text",id:"width",requiredContent:"embed[width]",style:"width:95px",label:a.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(a.lang.common.invalidHtmlLength.replace("%1",a.lang.common.width)),setup:e,commit:t},{type:"text",id:"height",requiredContent:"embed[height]",style:"width:95px",label:a.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(a.lang.common.invalidHtmlLength.replace("%1",a.lang.common.height)),setup:e,commit:t},{type:"text",id:"hSpace",requiredContent:"embed[hspace]",style:"width:95px",label:a.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(a.lang.flash.validateHSpace),setup:e,commit:t},{type:"text",id:"vSpace",requiredContent:"embed[vspace]",style:"width:95px",label:a.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(a.lang.flash.validateVSpace),setup:e,commit:t}]},{type:"vbox",children:[{type:"html",id:"preview",style:"width:95%;",html:o}]}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:a.lang.common.upload,elements:[{type:"file",id:"upload",label:a.lang.common.upload,size:38},{type:"fileButton",id:"uploadButton",label:a.lang.common.uploadSubmit,filebrowser:"info:src","for":["Upload","upload"]}]},{id:"properties",label:a.lang.flash.propertiesTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"scale",type:"select",requiredContent:"embed[scale]",label:a.lang.flash.scale,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.scaleAll,"showall"],[a.lang.flash.scaleNoBorder,"noborder"],[a.lang.flash.scaleFit,"exactfit"]],setup:e,commit:t},{id:"allowScriptAccess",type:"select",requiredContent:"embed[allowscriptaccess]",label:a.lang.flash.access,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.accessAlways,"always"],[a.lang.flash.accessSameDomain,"samedomain"],[a.lang.flash.accessNever,"never"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"wmode",type:"select",requiredContent:"embed[wmode]",label:a.lang.flash.windowMode,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.windowModeWindow,"window"],[a.lang.flash.windowModeOpaque,"opaque"],[a.lang.flash.windowModeTransparent,"transparent"]],setup:e,commit:t},{id:"quality",type:"select",requiredContent:"embed[quality]",label:a.lang.flash.quality,"default":"high",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.flash.qualityBest,"best"],[a.lang.flash.qualityHigh,"high"],[a.lang.flash.qualityAutoHigh,"autohigh"],[a.lang.flash.qualityMedium,"medium"],[a.lang.flash.qualityAutoLow,"autolow"],[a.lang.flash.qualityLow,"low"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"align",type:"select",requiredContent:"object[align]",label:a.lang.common.align,"default":"",style:"width : 100%;",items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.flash.alignAbsBottom,"absBottom"],[a.lang.flash.alignAbsMiddle,"absMiddle"],[a.lang.flash.alignBaseline,"baseline"],[a.lang.common.alignBottom,"bottom"],[a.lang.common.alignMiddle,"middle"],[a.lang.common.alignRight,"right"],[a.lang.flash.alignTextTop,"textTop"],[a.lang.common.alignTop,"top"]],setup:e,commit:function(e,a,l,i,n){var o=this.getValue();t.apply(this,arguments),o&&(n.align=o)}},{type:"html",html:"<div></div>"}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(a.lang.flash.flashvars),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"menu",label:a.lang.flash.chkMenu,"default":!0,setup:e,commit:t},{type:"checkbox",id:"play",label:a.lang.flash.chkPlay,"default":!0,setup:e,commit:t},{type:"checkbox",id:"loop",label:a.lang.flash.chkLoop,"default":!0,setup:e,commit:t},{type:"checkbox",id:"allowFullScreen",label:a.lang.flash.chkFull,"default":!0,setup:e,commit:t}]}]}]},{id:"advanced",label:a.lang.common.advancedTab,elements:[{type:"hbox",children:[{type:"text",id:"id",requiredContent:"object[id]",label:a.lang.common.id,setup:e,commit:t}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"bgcolor",requiredContent:"embed[bgcolor]",label:a.lang.flash.bgcolor,setup:e,commit:t},{type:"text",id:"class",requiredContent:"embed(cke-xyz)",label:a.lang.common.cssClass,setup:e,commit:t}]},{type:"text",id:"style",requiredContent:"embed{cke-xyz}",validate:CKEDITOR.dialog.validate.inlineStyle(a.lang.common.invalidInlineStyle),label:a.lang.common.cssStyle,setup:e,commit:t}]}]}})}();