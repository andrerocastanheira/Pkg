(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[9793],{19793:(W,I,z)=>{z.r(I),z.d(I,{ResizableDirective:()=>p,ResizableModule:()=>y,ResizeHandleDirective:()=>f});var T=z(31134),Z=z.n(T),i=z(94450),F=z.n(i),d=z(21322),B=z.n(d),c=z(27049),K=z.n(c);const b=(()=>typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)();function S(s,t,r=3){return Math.abs(s-t)<r}function _(s,t,r,n){const e={top:s.top,bottom:s.bottom,left:s.left,right:s.right};return t.top&&(e.top+=n),t.bottom&&(e.bottom+=n),t.left&&(e.left+=r),t.right&&(e.right+=r),e.height=e.bottom-e.top,e.width=e.right-e.left,e}function G(s,t){let r=0,n=0;const e=s.nativeElement.style,l=["transform","-ms-transform","-moz-transform","-o-transform"].map(a=>e[a]).find(a=>!!a);if(l&&l.includes("translate")&&(r=l.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/,"$1"),n=l.replace(/.*translate3?d?\((-?[0-9]*)px, (-?[0-9]*)px.*/,"$2")),t==="absolute")return{height:s.nativeElement.offsetHeight,width:s.nativeElement.offsetWidth,top:s.nativeElement.offsetTop-n,bottom:s.nativeElement.offsetHeight+s.nativeElement.offsetTop-n,left:s.nativeElement.offsetLeft-r,right:s.nativeElement.offsetWidth+s.nativeElement.offsetLeft-r};{const a=s.nativeElement.getBoundingClientRect();return{height:a.height,width:a.width,top:a.top-n,bottom:a.bottom-n,left:a.left-r,right:a.right-r,scrollTop:s.nativeElement.scrollTop,scrollLeft:s.nativeElement.scrollLeft}}}function C({clientY:s,rect:t}){return s>=t.top&&s<=t.bottom}function w({clientX:s,rect:t}){return s>=t.left&&s<=t.right}function D({clientX:s,clientY:t,elm:r,allowedEdges:n,cursorPrecision:e}){const u=r.nativeElement.getBoundingClientRect(),l={};return n.left&&S(s,u.left,e)&&C({clientY:t,rect:u})&&(l.left=!0),n.right&&S(s,u.right,e)&&C({clientY:t,rect:u})&&(l.right=!0),n.top&&S(t,u.top,e)&&w({clientX:s,rect:u})&&(l.top=!0),n.bottom&&S(t,u.bottom,e)&&w({clientX:s,rect:u})&&(l.bottom=!0),l}const x=Object.freeze({topLeft:"nw-resize",topRight:"ne-resize",bottomLeft:"sw-resize",bottomRight:"se-resize",leftOrRight:"col-resize",topOrBottom:"row-resize"});function O(s,t){return s.left&&s.top?t.topLeft:s.right&&s.top?t.topRight:s.left&&s.bottom?t.bottomLeft:s.right&&s.bottom?t.bottomRight:s.left||s.right?t.leftOrRight:s.top||s.bottom?t.topOrBottom:""}function M({edges:s,initialRectangle:t,newRectangle:r}){const n={};return Object.keys(s).forEach(e=>{n[e]=(r[e]||0)-(t[e]||0)}),n}const L="resize-active",$="resize-left-hover",A="resize-right-hover",Y="resize-top-hover",X="resize-bottom-hover",H="resize-ghost-element",U=50;class p{constructor(t,r,n,e){this.platformId=t,this.renderer=r,this.elm=n,this.zone=e,this.resizeEdges={},this.enableGhostResize=!1,this.resizeSnapGrid={},this.resizeCursors=x,this.resizeCursorPrecision=3,this.ghostElementPositioning="fixed",this.allowNegativeResizes=!1,this.mouseMoveThrottleMS=U,this.resizeStart=new i.EventEmitter,this.resizing=new i.EventEmitter,this.resizeEnd=new i.EventEmitter,this.mouseup=new d.Subject,this.mousedown=new d.Subject,this.mousemove=new d.Subject,this.destroy$=new d.Subject,this.resizeEdges$=new d.Subject,this.pointerEventListeners=v.getInstance(r,e)}ngOnInit(){const t=(0,d.merge)(this.pointerEventListeners.pointerDown,this.mousedown),r=(0,d.merge)(this.pointerEventListeners.pointerMove,this.mousemove).pipe((0,c.tap)(({event:o})=>{if(e)try{o.preventDefault()}catch{}}),(0,c.share)()),n=(0,d.merge)(this.pointerEventListeners.pointerUp,this.mouseup);let e;const u=()=>{e&&e.clonedNode&&(this.elm.nativeElement.parentElement.removeChild(e.clonedNode),this.renderer.setStyle(this.elm.nativeElement,"visibility","inherit"))},l=()=>Object.assign({},x,this.resizeCursors);this.resizeEdges$.pipe((0,c.startWith)(this.resizeEdges),(0,c.map)(()=>this.resizeEdges&&Object.keys(this.resizeEdges).some(o=>!!this.resizeEdges[o])),(0,c.switchMap)(o=>o?r:d.EMPTY),(0,c.auditTime)(this.mouseMoveThrottleMS),(0,c.takeUntil)(this.destroy$)).subscribe(({clientX:o,clientY:m})=>{const g=D({clientX:o,clientY:m,elm:this.elm,allowedEdges:this.resizeEdges,cursorPrecision:this.resizeCursorPrecision}),R=l();if(!e){const h=O(g,R);this.renderer.setStyle(this.elm.nativeElement,"cursor",h)}this.setElementClass(this.elm,$,g.left===!0),this.setElementClass(this.elm,A,g.right===!0),this.setElementClass(this.elm,Y,g.top===!0),this.setElementClass(this.elm,X,g.bottom===!0)}),t.pipe((0,c.mergeMap)(o=>{function m(h){return{clientX:h.clientX-o.clientX,clientY:h.clientY-o.clientY}}const g=()=>{const h={x:1,y:1};return e&&(this.resizeSnapGrid.left&&e.edges.left?h.x=+this.resizeSnapGrid.left:this.resizeSnapGrid.right&&e.edges.right&&(h.x=+this.resizeSnapGrid.right),this.resizeSnapGrid.top&&e.edges.top?h.y=+this.resizeSnapGrid.top:this.resizeSnapGrid.bottom&&e.edges.bottom&&(h.y=+this.resizeSnapGrid.bottom)),h};function R(h,E){return{x:Math.ceil(h.clientX/E.x),y:Math.ceil(h.clientY/E.y)}}return(0,d.merge)(r.pipe((0,c.take)(1)).pipe((0,c.map)(h=>[,h])),r.pipe((0,c.pairwise)())).pipe((0,c.map)(([h,E])=>[h&&m(h),m(E)])).pipe((0,c.filter)(([h,E])=>{if(!h)return!0;const P=g(),N=R(h,P),j=R(E,P);return N.x!==j.x||N.y!==j.y})).pipe((0,c.map)(([,h])=>{const E=g();return{clientX:Math.round(h.clientX/E.x)*E.x,clientY:Math.round(h.clientY/E.y)*E.y}})).pipe((0,c.takeUntil)((0,d.merge)(n,t)))})).pipe((0,c.filter)(()=>!!e)).pipe((0,c.map)(({clientX:o,clientY:m})=>_(e.startingRect,e.edges,o,m))).pipe((0,c.filter)(o=>this.allowNegativeResizes||!!(o.height&&o.width&&o.height>0&&o.width>0))).pipe((0,c.filter)(o=>this.validateResize?this.validateResize({rectangle:o,edges:M({edges:e.edges,initialRectangle:e.startingRect,newRectangle:o})}):!0),(0,c.takeUntil)(this.destroy$)).subscribe(o=>{e&&e.clonedNode&&(this.renderer.setStyle(e.clonedNode,"height",`${o.height}px`),this.renderer.setStyle(e.clonedNode,"width",`${o.width}px`),this.renderer.setStyle(e.clonedNode,"top",`${o.top}px`),this.renderer.setStyle(e.clonedNode,"left",`${o.left}px`)),this.resizing.observers.length>0&&this.zone.run(()=>{this.resizing.emit({edges:M({edges:e.edges,initialRectangle:e.startingRect,newRectangle:o}),rectangle:o})}),e.currentRect=o}),t.pipe((0,c.map)(({clientX:o,clientY:m,edges:g})=>g||D({clientX:o,clientY:m,elm:this.elm,allowedEdges:this.resizeEdges,cursorPrecision:this.resizeCursorPrecision}))).pipe((0,c.filter)(o=>Object.keys(o).length>0),(0,c.takeUntil)(this.destroy$)).subscribe(o=>{e&&u();const m=G(this.elm,this.ghostElementPositioning);e={edges:o,startingRect:m,currentRect:m};const g=l(),R=O(e.edges,g);this.renderer.setStyle(document.body,"cursor",R),this.setElementClass(this.elm,L,!0),this.enableGhostResize&&(e.clonedNode=this.elm.nativeElement.cloneNode(!0),this.elm.nativeElement.parentElement.appendChild(e.clonedNode),this.renderer.setStyle(this.elm.nativeElement,"visibility","hidden"),this.renderer.setStyle(e.clonedNode,"position",this.ghostElementPositioning),this.renderer.setStyle(e.clonedNode,"left",`${e.startingRect.left}px`),this.renderer.setStyle(e.clonedNode,"top",`${e.startingRect.top}px`),this.renderer.setStyle(e.clonedNode,"height",`${e.startingRect.height}px`),this.renderer.setStyle(e.clonedNode,"width",`${e.startingRect.width}px`),this.renderer.setStyle(e.clonedNode,"cursor",O(e.edges,g)),this.renderer.addClass(e.clonedNode,H),e.clonedNode.scrollTop=e.startingRect.scrollTop,e.clonedNode.scrollLeft=e.startingRect.scrollLeft),this.resizeStart.observers.length>0&&this.zone.run(()=>{this.resizeStart.emit({edges:M({edges:o,initialRectangle:m,newRectangle:m}),rectangle:_(m,{},0,0)})})}),n.pipe((0,c.takeUntil)(this.destroy$)).subscribe(()=>{e&&(this.renderer.removeClass(this.elm.nativeElement,L),this.renderer.setStyle(document.body,"cursor",""),this.renderer.setStyle(this.elm.nativeElement,"cursor",""),this.resizeEnd.observers.length>0&&this.zone.run(()=>{this.resizeEnd.emit({edges:M({edges:e.edges,initialRectangle:e.startingRect,newRectangle:e.currentRect}),rectangle:e.currentRect})}),u(),e=null)})}ngOnChanges(t){t.resizeEdges&&this.resizeEdges$.next(this.resizeEdges)}ngOnDestroy(){(0,T.isPlatformBrowser)(this.platformId)&&this.renderer.setStyle(document.body,"cursor",""),this.mousedown.complete(),this.mouseup.complete(),this.mousemove.complete(),this.resizeEdges$.complete(),this.destroy$.next()}setElementClass(t,r,n){n?this.renderer.addClass(t.nativeElement,r):this.renderer.removeClass(t.nativeElement,r)}}p.\u0275fac=function(t){return new(t||p)(i.\u0275\u0275directiveInject(i.PLATFORM_ID),i.\u0275\u0275directiveInject(i.Renderer2),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.NgZone))},p.\u0275dir=i.\u0275\u0275defineDirective({type:p,selectors:[["","mwlResizable",""]],inputs:{resizeEdges:"resizeEdges",enableGhostResize:"enableGhostResize",resizeSnapGrid:"resizeSnapGrid",resizeCursors:"resizeCursors",resizeCursorPrecision:"resizeCursorPrecision",ghostElementPositioning:"ghostElementPositioning",allowNegativeResizes:"allowNegativeResizes",mouseMoveThrottleMS:"mouseMoveThrottleMS",validateResize:"validateResize"},outputs:{resizeStart:"resizeStart",resizing:"resizing",resizeEnd:"resizeEnd"},exportAs:["mwlResizable"],features:[i.\u0275\u0275NgOnChangesFeature]}),p.ctorParameters=()=>[{type:void 0,decorators:[{type:i.Inject,args:[i.PLATFORM_ID]}]},{type:i.Renderer2},{type:i.ElementRef},{type:i.NgZone}],p.propDecorators={validateResize:[{type:i.Input}],resizeEdges:[{type:i.Input}],enableGhostResize:[{type:i.Input}],resizeSnapGrid:[{type:i.Input}],resizeCursors:[{type:i.Input}],resizeCursorPrecision:[{type:i.Input}],ghostElementPositioning:[{type:i.Input}],allowNegativeResizes:[{type:i.Input}],mouseMoveThrottleMS:[{type:i.Input}],resizeStart:[{type:i.Output}],resizing:[{type:i.Output}],resizeEnd:[{type:i.Output}]},function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(p,[{type:i.Directive,args:[{selector:"[mwlResizable]",exportAs:"mwlResizable"}]}],function(){return[{type:void 0,decorators:[{type:i.Inject,args:[i.PLATFORM_ID]}]},{type:i.Renderer2},{type:i.ElementRef},{type:i.NgZone}]},{resizeEdges:[{type:i.Input}],enableGhostResize:[{type:i.Input}],resizeSnapGrid:[{type:i.Input}],resizeCursors:[{type:i.Input}],resizeCursorPrecision:[{type:i.Input}],ghostElementPositioning:[{type:i.Input}],allowNegativeResizes:[{type:i.Input}],mouseMoveThrottleMS:[{type:i.Input}],resizeStart:[{type:i.Output}],resizing:[{type:i.Output}],resizeEnd:[{type:i.Output}],validateResize:[{type:i.Input}]})}();class v{static getInstance(t,r){return v.instance||(v.instance=new v(t,r)),v.instance}constructor(t,r){this.pointerDown=new d.Observable(n=>{let e,u;return r.runOutsideAngular(()=>{e=t.listen("document","mousedown",l=>{n.next({clientX:l.clientX,clientY:l.clientY,event:l})}),b&&(u=t.listen("document","touchstart",l=>{n.next({clientX:l.touches[0].clientX,clientY:l.touches[0].clientY,event:l})}))}),()=>{e(),b&&u()}}).pipe((0,c.share)()),this.pointerMove=new d.Observable(n=>{let e,u;return r.runOutsideAngular(()=>{e=t.listen("document","mousemove",l=>{n.next({clientX:l.clientX,clientY:l.clientY,event:l})}),b&&(u=t.listen("document","touchmove",l=>{n.next({clientX:l.targetTouches[0].clientX,clientY:l.targetTouches[0].clientY,event:l})}))}),()=>{e(),b&&u()}}).pipe((0,c.share)()),this.pointerUp=new d.Observable(n=>{let e,u,l;return r.runOutsideAngular(()=>{e=t.listen("document","mouseup",a=>{n.next({clientX:a.clientX,clientY:a.clientY,event:a})}),b&&(u=t.listen("document","touchend",a=>{n.next({clientX:a.changedTouches[0].clientX,clientY:a.changedTouches[0].clientY,event:a})}),l=t.listen("document","touchcancel",a=>{n.next({clientX:a.changedTouches[0].clientX,clientY:a.changedTouches[0].clientY,event:a})}))}),()=>{e(),b&&(u(),l())}}).pipe((0,c.share)())}}class f{constructor(t,r,n,e){this.renderer=t,this.element=r,this.zone=n,this.resizableDirective=e,this.resizeEdges={},this.eventListeners={},this.destroy$=new d.Subject}ngOnInit(){this.zone.runOutsideAngular(()=>{this.listenOnTheHost("mousedown").subscribe(t=>{this.onMousedown(t,t.clientX,t.clientY)}),this.listenOnTheHost("mouseup").subscribe(t=>{this.onMouseup(t.clientX,t.clientY)}),b&&(this.listenOnTheHost("touchstart").subscribe(t=>{this.onMousedown(t,t.touches[0].clientX,t.touches[0].clientY)}),(0,d.merge)(this.listenOnTheHost("touchend"),this.listenOnTheHost("touchcancel")).subscribe(t=>{this.onMouseup(t.changedTouches[0].clientX,t.changedTouches[0].clientY)}))})}ngOnDestroy(){this.destroy$.next(),this.unsubscribeEventListeners()}onMousedown(t,r,n){t.preventDefault(),this.eventListeners.touchmove||(this.eventListeners.touchmove=this.renderer.listen(this.element.nativeElement,"touchmove",e=>{this.onMousemove(e,e.targetTouches[0].clientX,e.targetTouches[0].clientY)})),this.eventListeners.mousemove||(this.eventListeners.mousemove=this.renderer.listen(this.element.nativeElement,"mousemove",e=>{this.onMousemove(e,e.clientX,e.clientY)})),this.resizable.mousedown.next({clientX:r,clientY:n,edges:this.resizeEdges})}onMouseup(t,r){this.unsubscribeEventListeners(),this.resizable.mouseup.next({clientX:t,clientY:r,edges:this.resizeEdges})}get resizable(){return this.resizableDirective||this.resizableContainer}onMousemove(t,r,n){this.resizable.mousemove.next({clientX:r,clientY:n,edges:this.resizeEdges,event:t})}unsubscribeEventListeners(){Object.keys(this.eventListeners).forEach(t=>{this.eventListeners[t](),delete this.eventListeners[t]})}listenOnTheHost(t){return(0,d.fromEvent)(this.element.nativeElement,t).pipe((0,c.takeUntil)(this.destroy$))}}f.\u0275fac=function(t){return new(t||f)(i.\u0275\u0275directiveInject(i.Renderer2),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(p,8))},f.\u0275dir=i.\u0275\u0275defineDirective({type:f,selectors:[["","mwlResizeHandle",""]],inputs:{resizeEdges:"resizeEdges",resizableContainer:"resizableContainer"}}),f.ctorParameters=()=>[{type:i.Renderer2},{type:i.ElementRef},{type:i.NgZone},{type:p,decorators:[{type:i.Optional}]}],f.propDecorators={resizeEdges:[{type:i.Input}],resizableContainer:[{type:i.Input}]},function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(f,[{type:i.Directive,args:[{selector:"[mwlResizeHandle]"}]}],function(){return[{type:i.Renderer2},{type:i.ElementRef},{type:i.NgZone},{type:p,decorators:[{type:i.Optional}]}]},{resizeEdges:[{type:i.Input}],resizableContainer:[{type:i.Input}]})}();class y{}y.\u0275fac=function(t){return new(t||y)},y.\u0275mod=i.\u0275\u0275defineNgModule({type:y}),y.\u0275inj=i.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(y,[{type:i.NgModule,args:[{declarations:[p,f],exports:[p,f]}]}],null,null)}(),function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(y,{declarations:[p,f],exports:[p,f]})}()}}]);
