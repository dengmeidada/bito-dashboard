"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[315],{5315:($,w,c)=>{c.d(w,{V:()=>q,S:()=>W});var e=c(4893),p=c(1777),g=c(9808),l=c(5730),u=c(9783);let D=(()=>{class i{constructor(t){this.el=t}onkeydown(t){if(!0!==this.pFocusTrapDisabled){t.preventDefault();let n=l.p.getFocusableElements(this.el.nativeElement);if(n&&n.length>0)if(n[0].ownerDocument.activeElement){let o=n.indexOf(n[0].ownerDocument.activeElement);t.shiftKey?-1==o||0===o?n[n.length-1].focus():n[o-1].focus():-1==o||o===n.length-1?n[0].focus():n[o+1].focus()}else n[0].focus()}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,selectors:[["","pFocusTrap",""]],hostAttrs:[1,"p-element"],hostBindings:function(t,n){1&t&&e.NdJ("keydown.tab",function(s){return n.onkeydown(s)})("keydown.shift.tab",function(s){return n.onkeydown(s)})},inputs:{pFocusTrapDisabled:"pFocusTrapDisabled"}}),i})(),k=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez]}),i})();var b=c(5787),_=c(5921);const T=["titlebar"],z=["content"],C=["footer"];function E(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",11),e.NdJ("mousedown",function(o){e.CHM(t);const s=e.oxw(3);return e.KtG(s.initResize(o))}),e.qZA()}}function L(i,a){if(1&i&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&i){const t=e.oxw(4);e.uIk("id",t.id+"-label"),e.xp6(1),e.Oqu(t.header)}}function I(i,a){if(1&i&&(e.TgZ(0,"span",18),e.Hsn(1,1),e.qZA()),2&i){const t=e.oxw(4);e.uIk("id",t.id+"-label")}}function S(i,a){1&i&&e.GkF(0)}const M=function(){return{"p-dialog-header-icon p-dialog-header-maximize p-link":!0}};function O(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(4);return e.KtG(o.maximize())})("keydown.enter",function(){e.CHM(t);const o=e.oxw(4);return e.KtG(o.maximize())}),e._UZ(1,"span",20),e.qZA()}if(2&i){const t=e.oxw(4);e.Q6J("ngClass",e.DdM(2,M)),e.xp6(1),e.Q6J("ngClass",t.maximized?t.minimizeIcon:t.maximizeIcon)}}const H=function(){return{"p-dialog-header-icon p-dialog-header-close p-link":!0}};function R(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(o){e.CHM(t);const s=e.oxw(4);return e.KtG(s.close(o))})("keydown.enter",function(o){e.CHM(t);const s=e.oxw(4);return e.KtG(s.close(o))}),e._UZ(1,"span",22),e.qZA()}if(2&i){const t=e.oxw(4);e.Q6J("ngClass",e.DdM(4,H)),e.uIk("aria-label",t.closeAriaLabel)("tabindex",t.closeTabindex),e.xp6(1),e.Q6J("ngClass",t.closeIcon)}}function F(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",12,13),e.NdJ("mousedown",function(o){e.CHM(t);const s=e.oxw(3);return e.KtG(s.initDrag(o))}),e.YNc(2,L,2,2,"span",14),e.YNc(3,I,2,1,"span",14),e.YNc(4,S,1,0,"ng-container",9),e.TgZ(5,"div",15),e.YNc(6,O,2,3,"button",16),e.YNc(7,R,2,5,"button",17),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(2),e.Q6J("ngIf",!t.headerFacet&&!t.headerTemplate),e.xp6(1),e.Q6J("ngIf",t.headerFacet),e.xp6(1),e.Q6J("ngTemplateOutlet",t.headerTemplate),e.xp6(2),e.Q6J("ngIf",t.maximizable),e.xp6(1),e.Q6J("ngIf",t.closable)}}function Y(i,a){1&i&&e.GkF(0)}function Z(i,a){1&i&&e.GkF(0)}function A(i,a){if(1&i&&(e.TgZ(0,"div",23,24),e.Hsn(2,2),e.YNc(3,Z,1,0,"ng-container",9),e.qZA()),2&i){const t=e.oxw(3);e.xp6(3),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}const J=function(i,a,t,n){return{"p-dialog p-component":!0,"p-dialog-rtl":i,"p-dialog-draggable":a,"p-dialog-resizable":t,"p-dialog-maximized":n}},Q=function(i,a){return{transform:i,transition:a}},G=function(i){return{value:"visible",params:i}};function P(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",3,4),e.NdJ("@animation.start",function(o){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onAnimationStart(o))})("@animation.done",function(o){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onAnimationEnd(o))}),e.YNc(2,E,1,0,"div",5),e.YNc(3,F,8,5,"div",6),e.TgZ(4,"div",7,8),e.Hsn(6),e.YNc(7,Y,1,0,"ng-container",9),e.qZA(),e.YNc(8,A,4,1,"div",10),e.qZA()}if(2&i){const t=e.oxw(2);e.Tol(t.styleClass),e.Q6J("ngClass",e.l5B(15,J,t.rtl,t.draggable,t.resizable,t.maximized))("ngStyle",t.style)("pFocusTrapDisabled",!1===t.focusTrap)("@animation",e.VKq(23,G,e.WLB(20,Q,t.transformOptions,t.transitionOptions))),e.uIk("aria-labelledby",t.id+"-label"),e.xp6(2),e.Q6J("ngIf",t.resizable),e.xp6(1),e.Q6J("ngIf",t.showHeader),e.xp6(1),e.Tol(t.contentStyleClass),e.Q6J("ngClass","p-dialog-content")("ngStyle",t.contentStyle),e.xp6(3),e.Q6J("ngTemplateOutlet",t.contentTemplate),e.xp6(1),e.Q6J("ngIf",t.footerFacet||t.footerTemplate)}}const X=function(i,a,t,n,o,s,h,m,d,r){return{"p-dialog-mask":!0,"p-component-overlay p-component-overlay-enter":i,"p-dialog-mask-scrollblocker":a,"p-dialog-left":t,"p-dialog-right":n,"p-dialog-top":o,"p-dialog-top-left":s,"p-dialog-top-right":h,"p-dialog-bottom":m,"p-dialog-bottom-left":d,"p-dialog-bottom-right":r}};function N(i,a){if(1&i&&(e.TgZ(0,"div",1),e.YNc(1,P,9,25,"div",2),e.qZA()),2&i){const t=e.oxw();e.Tol(t.maskStyleClass),e.Q6J("ngClass",e.rFY(4,X,[t.modal,t.modal||t.blockScroll,"left"===t.position,"right"===t.position,"top"===t.position,"topleft"===t.position||"top-left"===t.position,"topright"===t.position||"top-right"===t.position,"bottom"===t.position,"bottomleft"===t.position||"bottom-left"===t.position,"bottomright"===t.position||"bottom-right"===t.position])),e.xp6(1),e.Q6J("ngIf",t.visible)}}const B=["*",[["p-header"]],[["p-footer"]]],j=["*","p-header","p-footer"],V=(0,p.oQ)([(0,p.oB)({transform:"{{transform}}",opacity:0}),(0,p.jt)("{{transition}}")]),K=(0,p.oQ)([(0,p.jt)("{{transition}}",(0,p.oB)({transform:"{{transform}}",opacity:0}))]);let q=(()=>{class i{constructor(t,n,o,s,h){this.el=t,this.renderer=n,this.zone=o,this.cd=s,this.config=h,this.draggable=!0,this.resizable=!0,this.closeOnEscape=!0,this.closable=!0,this.showHeader=!0,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.minX=0,this.minY=0,this.focusOnShow=!0,this.keepInViewport=!0,this.focusTrap=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.closeIcon="pi pi-times",this.closeTabindex="-1",this.minimizeIcon="pi pi-window-minimize",this.maximizeIcon="pi pi-window-maximize",this.onShow=new e.vpe,this.onHide=new e.vpe,this.visibleChange=new e.vpe,this.onResizeInit=new e.vpe,this.onResizeEnd=new e.vpe,this.onDragEnd=new e.vpe,this.onMaximize=new e.vpe,this.id=(0,_.Th)(),this._style={},this._position="center",this.transformOptions="scale(0.7)"}get positionLeft(){return 0}set positionLeft(t){console.log("positionLeft property is deprecated.")}get positionTop(){return 0}set positionTop(t){console.log("positionTop property is deprecated.")}get responsive(){return!1}set responsive(t){console.log("Responsive property is deprecated.")}get breakpoint(){return 649}set breakpoint(t){console.log("Breakpoint property is not utilized and deprecated, use breakpoints or CSS media queries instead.")}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"content":default:this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngOnInit(){this.breakpoints&&this.createStyle()}get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}get style(){return this._style}set style(t){t&&(this._style=Object.assign({},t),this.originalStyle=t)}get position(){return this._position}set position(t){switch(this._position=t,t){case"topleft":case"bottomleft":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"topright":case"bottomright":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)"}}focus(){let t=l.p.findSingle(this.container,"[autofocus]");t&&this.zone.runOutsideAngular(()=>{setTimeout(()=>t.focus(),5)})}close(t){this.visibleChange.emit(!1),t.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",t=>{this.wrapper&&this.wrapper.isSameNode(t.target)&&this.close(t)})),this.modal&&l.p.addClass(document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.dismissableMask&&this.unbindMaskClickListener(),this.modal&&l.p.removeClass(document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?l.p.addClass(document.body,"p-overflow-hidden"):l.p.removeClass(document.body,"p-overflow-hidden")),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex&&(_.P9.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let n in this.breakpoints)t+=`\n                    @media screen and (max-width: ${n}) {\n                        .p-dialog[${this.id}] {\n                            width: ${this.breakpoints[n]} !important;\n                        }\n                    }\n                `;this.styleElement.innerHTML=t}}initDrag(t){l.p.hasClass(t.target,"p-dialog-header-icon")||l.p.hasClass(t.target.parentElement,"p-dialog-header-icon")||this.draggable&&(this.dragging=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,this.container.style.margin="0",l.p.addClass(document.body,"p-unselectable-text"))}onKeydown(t){if(this.focusTrap&&9===t.which){t.preventDefault();let n=l.p.getFocusableElements(this.container);if(n&&n.length>0)if(n[0].ownerDocument.activeElement){let o=n.indexOf(n[0].ownerDocument.activeElement);t.shiftKey?-1==o||0===o?n[n.length-1].focus():n[o-1].focus():-1==o||o===n.length-1?n[0].focus():n[o+1].focus()}else n[0].focus()}}onDrag(t){if(this.dragging){let n=l.p.getOuterWidth(this.container),o=l.p.getOuterHeight(this.container),s=t.pageX-this.lastPageX,h=t.pageY-this.lastPageY,m=this.container.getBoundingClientRect(),d=m.left+s,r=m.top+h,f=l.p.getViewport();this.container.style.position="fixed",this.keepInViewport?(d>=this.minX&&d+n<f.width&&(this._style.left=d+"px",this.lastPageX=t.pageX,this.container.style.left=d+"px"),r>=this.minY&&r+o<f.height&&(this._style.top=r+"px",this.lastPageY=t.pageY,this.container.style.top=r+"px")):(this.lastPageX=t.pageX,this.container.style.left=d+"px",this.lastPageY=t.pageY,this.container.style.top=r+"px")}}endDrag(t){this.dragging&&(this.dragging=!1,l.p.removeClass(document.body,"p-unselectable-text"),this.cd.detectChanges(),this.onDragEnd.emit(t))}resetPosition(){this.container.style.position="",this.container.style.left="",this.container.style.top="",this.container.style.margin=""}center(){this.resetPosition()}initResize(t){this.resizable&&(this.resizing=!0,this.lastPageX=t.pageX,this.lastPageY=t.pageY,l.p.addClass(document.body,"p-unselectable-text"),this.onResizeInit.emit(t))}onResize(t){if(this.resizing){let n=t.pageX-this.lastPageX,o=t.pageY-this.lastPageY,s=l.p.getOuterWidth(this.container),h=l.p.getOuterHeight(this.container),m=l.p.getOuterHeight(this.contentViewChild.nativeElement),d=s+n,r=h+o,f=this.container.style.minWidth,v=this.container.style.minHeight,x=this.container.getBoundingClientRect(),y=l.p.getViewport();(!parseInt(this.container.style.top)||!parseInt(this.container.style.left))&&(d+=n,r+=o),(!f||d>parseInt(f))&&x.left+d<y.width&&(this._style.width=d+"px",this.container.style.width=this._style.width),(!v||r>parseInt(v))&&x.top+r<y.height&&(this.contentViewChild.nativeElement.style.height=m+r-h+"px",this._style.height&&(this._style.height=r+"px",this.container.style.height=this._style.height)),this.lastPageX=t.pageX,this.lastPageY=t.pageY}}resizeEnd(t){this.resizing&&(this.resizing=!1,l.p.removeClass(document.body,"p-unselectable-text"),this.onResizeEnd.emit(t))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.zone.runOutsideAngular(()=>{this.documentDragListener=this.onDrag.bind(this),window.document.addEventListener("mousemove",this.documentDragListener)})}unbindDocumentDragListener(){this.documentDragListener&&(window.document.removeEventListener("mousemove",this.documentDragListener),this.documentDragListener=null)}bindDocumentDragEndListener(){this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.endDrag.bind(this),window.document.addEventListener("mouseup",this.documentDragEndListener)})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(window.document.removeEventListener("mouseup",this.documentDragEndListener),this.documentDragEndListener=null)}bindDocumentResizeListeners(){this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.onResize.bind(this),this.documentResizeEndListener=this.resizeEnd.bind(this),window.document.addEventListener("mousemove",this.documentResizeListener),window.document.addEventListener("mouseup",this.documentResizeEndListener)})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(window.document.removeEventListener("mousemove",this.documentResizeListener),window.document.removeEventListener("mouseup",this.documentResizeEndListener),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",n=>{27==n.which&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.wrapper):l.p.appendChild(this.wrapper,this.appendTo))}restoreAppend(){this.container&&this.appendTo&&this.el.nativeElement.appendChild(this.wrapper)}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.wrapper=this.container.parentElement,this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container.setAttribute(this.id,""),this.modal&&this.enableModality(),!this.modal&&this.blockScroll&&l.p.addClass(document.body,"p-overflow-hidden"),this.focusOnShow&&this.focus();break;case"void":this.wrapper&&this.modal&&l.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(t){switch(t.toState){case"void":this.onContainerDestroy(),this.onHide.emit({});break;case"visible":this.onShow.emit({})}}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maskVisible=!1,this.maximized&&(l.p.removeClass(document.body,"p-overflow-hidden"),this.maximized=!1),this.modal&&this.disableModality(),this.blockScroll&&l.p.removeClass(document.body,"p-overflow-hidden"),this.container&&this.autoZIndex&&_.P9.clear(this.container),this.container=null,this.wrapper=null,this._style=this.originalStyle?Object.assign({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.container&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(u.b4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-dialog"]],contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,u.h4,5),e.Suo(o,u.$_,5),e.Suo(o,u.jx,4)),2&t){let s;e.iGM(s=e.CRH())&&(n.headerFacet=s.first),e.iGM(s=e.CRH())&&(n.footerFacet=s.first),e.iGM(s=e.CRH())&&(n.templates=s)}},viewQuery:function(t,n){if(1&t&&(e.Gf(T,5),e.Gf(z,5),e.Gf(C,5)),2&t){let o;e.iGM(o=e.CRH())&&(n.headerViewChild=o.first),e.iGM(o=e.CRH())&&(n.contentViewChild=o.first),e.iGM(o=e.CRH())&&(n.footerViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{header:"header",draggable:"draggable",resizable:"resizable",positionLeft:"positionLeft",positionTop:"positionTop",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:"modal",closeOnEscape:"closeOnEscape",dismissableMask:"dismissableMask",rtl:"rtl",closable:"closable",responsive:"responsive",appendTo:"appendTo",breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",showHeader:"showHeader",breakpoint:"breakpoint",blockScroll:"blockScroll",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",minX:"minX",minY:"minY",focusOnShow:"focusOnShow",maximizable:"maximizable",keepInViewport:"keepInViewport",focusTrap:"focusTrap",transitionOptions:"transitionOptions",closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",visible:"visible",style:"style",position:"position"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},ngContentSelectors:j,decls:1,vars:1,consts:[[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],["pFocusTrap","","role","dialog",3,"ngClass","ngStyle","class","pFocusTrapDisabled",4,"ngIf"],["pFocusTrap","","role","dialog",3,"ngClass","ngStyle","pFocusTrapDisabled"],["container",""],["class","p-resizable-handle","style","z-index: 90;",3,"mousedown",4,"ngIf"],["class","p-dialog-header",3,"mousedown",4,"ngIf"],[3,"ngClass","ngStyle"],["content",""],[4,"ngTemplateOutlet"],["class","p-dialog-footer",4,"ngIf"],[1,"p-resizable-handle",2,"z-index","90",3,"mousedown"],[1,"p-dialog-header",3,"mousedown"],["titlebar",""],["class","p-dialog-title",4,"ngIf"],[1,"p-dialog-header-icons"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button","pRipple","",3,"ngClass","click","keydown.enter",4,"ngIf"],[1,"p-dialog-title"],["type","button","tabindex","-1","pRipple","",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-maximize-icon",3,"ngClass"],["type","button","pRipple","",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-close-icon",3,"ngClass"],[1,"p-dialog-footer"],["footer",""]],template:function(t,n){1&t&&(e.F$t(B),e.YNc(0,N,2,15,"div",0)),2&t&&e.Q6J("ngIf",n.maskVisible)},dependencies:[g.mk,g.O5,g.tP,g.PC,D,b.H],styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translate(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0px!important;left:0px!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,p.X$)("animation",[(0,p.eR)("void => visible",[(0,p._7)(V)]),(0,p.eR)("visible => void",[(0,p._7)(K)])])]},changeDetection:0}),i})(),W=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,k,b.T,u.m8]}),i})()}}]);