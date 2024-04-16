(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[6558],{56558:(j,S,c)=>{c.r(S),c.d(S,{MAT_SORT_DEFAULT_OPTIONS:()=>u,MAT_SORT_HEADER_INTL_PROVIDER:()=>w,MAT_SORT_HEADER_INTL_PROVIDER_FACTORY:()=>y,MatSort:()=>h,MatSortHeader:()=>m,MatSortHeaderIntl:()=>n,MatSortModule:()=>p,matSortAnimations:()=>o});var t=c(94450),f=c(71689),b=c(3127),D=c(33297),_=c(66385),g=c(21322),r=c(72310),v=c(31134);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const C=["mat-sort-header",""];function M(a,e){if(a&1){const i=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",3),t.\u0275\u0275listener("@arrowPosition.start",function(){t.\u0275\u0275restoreView(i);const d=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(d._disableViewStateAnimation=!0)})("@arrowPosition.done",function(){t.\u0275\u0275restoreView(i);const d=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(d._disableViewStateAnimation=!1)}),t.\u0275\u0275element(1,"div",4),t.\u0275\u0275elementStart(2,"div",5),t.\u0275\u0275element(3,"div",6)(4,"div",7)(5,"div",8),t.\u0275\u0275elementEnd()()}if(a&2){const i=t.\u0275\u0275nextContext();t.\u0275\u0275property("@arrowOpacity",i._getArrowViewState())("@arrowPosition",i._getArrowViewState())("@allowChildren",i._getArrowDirectionState()),t.\u0275\u0275advance(2),t.\u0275\u0275property("@indicator",i._getArrowDirectionState()),t.\u0275\u0275advance(1),t.\u0275\u0275property("@leftPointer",i._getArrowDirectionState()),t.\u0275\u0275advance(1),t.\u0275\u0275property("@rightPointer",i._getArrowDirectionState())}}const I=["*"];function x(a){return Error(`Cannot have two MatSortables with the same id (${a}).`)}function O(){return Error("MatSortHeader must be placed within a parent element with the MatSort directive.")}function E(){return Error("MatSortHeader must be provided with a unique id.")}function P(a){return Error(`${a} is not a valid sort direction ('asc' or 'desc').`)}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const u=new t.InjectionToken("MAT_SORT_DEFAULT_OPTIONS"),T=(0,_.mixinInitialized)((0,_.mixinDisabled)(class{}));class h extends T{get direction(){return this._direction}set direction(e){if(e&&e!=="asc"&&e!=="desc"&&(typeof ngDevMode>"u"||ngDevMode))throw P(e);this._direction=e}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,b.coerceBooleanProperty)(e)}constructor(e){super(),this._defaultOptions=e,this.sortables=new Map,this._stateChanges=new g.Subject,this.start="asc",this._direction="",this.sortChange=new t.EventEmitter}register(e){if(typeof ngDevMode>"u"||ngDevMode){if(!e.id)throw E();if(this.sortables.has(e.id))throw x(e.id)}this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";const i=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear;let s=R(e.start||this.start,i),d=s.indexOf(this.direction)+1;return d>=s.length&&(d=0),s[d]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}h.\u0275fac=function(e){return new(e||h)(t.\u0275\u0275directiveInject(u,8))},h.\u0275dir=t.\u0275\u0275defineDirective({type:h,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],active:["matSortActive","active"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[t.\u0275\u0275InheritDefinitionFeature,t.\u0275\u0275NgOnChangesFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(h,[{type:t.Directive,args:[{selector:"[matSort]",exportAs:"matSort",host:{class:"mat-sort"},inputs:["disabled: matSortDisabled"]}]}],function(){return[{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[u]}]}]},{active:[{type:t.Input,args:["matSortActive"]}],start:[{type:t.Input,args:["matSortStart"]}],direction:[{type:t.Input,args:["matSortDirection"]}],disableClear:[{type:t.Input,args:["matSortDisableClear"]}],sortChange:[{type:t.Output,args:["matSortChange"]}]})}();function R(a,e){let i=["asc","desc"];return a=="desc"&&i.reverse(),e||i.push(""),i}/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const l=_.AnimationDurations.ENTERING+" "+_.AnimationCurves.STANDARD_CURVE,o={indicator:(0,r.trigger)("indicator",[(0,r.state)("active-asc, asc",(0,r.style)({transform:"translateY(0px)"})),(0,r.state)("active-desc, desc",(0,r.style)({transform:"translateY(10px)"})),(0,r.transition)("active-asc <=> active-desc",(0,r.animate)(l))]),leftPointer:(0,r.trigger)("leftPointer",[(0,r.state)("active-asc, asc",(0,r.style)({transform:"rotate(-45deg)"})),(0,r.state)("active-desc, desc",(0,r.style)({transform:"rotate(45deg)"})),(0,r.transition)("active-asc <=> active-desc",(0,r.animate)(l))]),rightPointer:(0,r.trigger)("rightPointer",[(0,r.state)("active-asc, asc",(0,r.style)({transform:"rotate(45deg)"})),(0,r.state)("active-desc, desc",(0,r.style)({transform:"rotate(-45deg)"})),(0,r.transition)("active-asc <=> active-desc",(0,r.animate)(l))]),arrowOpacity:(0,r.trigger)("arrowOpacity",[(0,r.state)("desc-to-active, asc-to-active, active",(0,r.style)({opacity:1})),(0,r.state)("desc-to-hint, asc-to-hint, hint",(0,r.style)({opacity:.54})),(0,r.state)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",(0,r.style)({opacity:0})),(0,r.transition)("* => asc, * => desc, * => active, * => hint, * => void",(0,r.animate)("0ms")),(0,r.transition)("* <=> *",(0,r.animate)(l))]),arrowPosition:(0,r.trigger)("arrowPosition",[(0,r.transition)("* => desc-to-hint, * => desc-to-active",(0,r.animate)(l,(0,r.keyframes)([(0,r.style)({transform:"translateY(-25%)"}),(0,r.style)({transform:"translateY(0)"})]))),(0,r.transition)("* => hint-to-desc, * => active-to-desc",(0,r.animate)(l,(0,r.keyframes)([(0,r.style)({transform:"translateY(0)"}),(0,r.style)({transform:"translateY(25%)"})]))),(0,r.transition)("* => asc-to-hint, * => asc-to-active",(0,r.animate)(l,(0,r.keyframes)([(0,r.style)({transform:"translateY(25%)"}),(0,r.style)({transform:"translateY(0)"})]))),(0,r.transition)("* => hint-to-asc, * => active-to-asc",(0,r.animate)(l,(0,r.keyframes)([(0,r.style)({transform:"translateY(0)"}),(0,r.style)({transform:"translateY(-25%)"})]))),(0,r.state)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",(0,r.style)({transform:"translateY(0)"})),(0,r.state)("hint-to-desc, active-to-desc, desc",(0,r.style)({transform:"translateY(-25%)"})),(0,r.state)("hint-to-asc, active-to-asc, asc",(0,r.style)({transform:"translateY(25%)"}))]),allowChildren:(0,r.trigger)("allowChildren",[(0,r.transition)("* <=> *",[(0,r.query)("@*",(0,r.animateChild)(),{optional:!0})])])};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class n{constructor(){this.changes=new g.Subject}}n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(n,[{type:t.Injectable,args:[{providedIn:"root"}]}],null,null)}();function y(a){return a||new n}const w={provide:n,deps:[[new t.Optional,new t.SkipSelf,n]],useFactory:y};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const k=(0,_.mixinDisabled)(class{});class m extends k{get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,b.coerceBooleanProperty)(e)}constructor(e,i,s,d,H,V,N,A){if(super(),this._intl=e,this._changeDetectorRef=i,this._sort=s,this._columnDef=d,this._focusMonitor=H,this._elementRef=V,this._ariaDescriber=N,this._showIndicatorHint=!1,this._viewState={},this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this._sortActionDescription="Sort",!s&&(typeof ngDevMode>"u"||ngDevMode))throw O();A?.arrowPosition&&(this.arrowPosition=A?.arrowPosition),this._handleStateChanges()}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector(".mat-sort-header-container"),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{const i=!!e;i!==this._showIndicatorHint&&(this._setIndicatorHintVisible(i),this._changeDetectorRef.markForCheck())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}_setIndicatorHintVisible(e){this._isDisabled()&&e||(this._showIndicatorHint=e,this._isSorted()||(this._updateArrowDirection(),this._showIndicatorHint?this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"hint"}):this._setAnimationTransitionState({fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(e){this._viewState=e||{},this._disableViewStateAnimation&&(this._viewState={toState:e.toState})}_toggleOnInteraction(){this._sort.sort(this),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0)}_handleClick(){this._isDisabled()||this._sort.sort(this)}_handleKeydown(e){!this._isDisabled()&&(e.keyCode===D.SPACE||e.keyCode===D.ENTER)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction==="asc"||this._sort.direction==="desc")}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){const e=this._viewState.fromState;return(e?`${e}-to-`:"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction=="asc"?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}_handleStateChanges(){this._rerenderSubscription=(0,g.merge)(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(()=>{this._isSorted()&&(this._updateArrowDirection(),(this._viewState.toState==="hint"||this._viewState.toState==="active")&&(this._disableViewStateAnimation=!0),this._setAnimationTransitionState({fromState:this._arrowDirection,toState:"active"}),this._showIndicatorHint=!1),!this._isSorted()&&this._viewState&&this._viewState.toState==="active"&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),this._changeDetectorRef.markForCheck()})}}m.\u0275fac=function(e){return new(e||m)(t.\u0275\u0275directiveInject(n),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(h,8),t.\u0275\u0275directiveInject("MAT_SORT_HEADER_COLUMN_DEF",8),t.\u0275\u0275directiveInject(f.FocusMonitor),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(f.AriaDescriber,8),t.\u0275\u0275directiveInject(u,8))},m.\u0275cmp=t.\u0275\u0275defineComponent({type:m,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(e,i){e&1&&t.\u0275\u0275listener("click",function(){return i._handleClick()})("keydown",function(d){return i._handleKeydown(d)})("mouseenter",function(){return i._setIndicatorHintVisible(!0)})("mouseleave",function(){return i._setIndicatorHintVisible(!1)}),e&2&&(t.\u0275\u0275attribute("aria-sort",i._getAriaSortAttribute()),t.\u0275\u0275classProp("mat-sort-header-disabled",i._isDisabled()))},inputs:{disabled:"disabled",id:["mat-sort-header","id"],arrowPosition:"arrowPosition",start:"start",sortActionDescription:"sortActionDescription",disableClear:"disableClear"},exportAs:["matSortHeader"],features:[t.\u0275\u0275InheritDefinitionFeature],attrs:C,ngContentSelectors:I,decls:4,vars:7,consts:[[1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(e,i){e&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0)(1,"div",1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(3,M,6,6,"div",2),t.\u0275\u0275elementEnd()),e&2&&(t.\u0275\u0275classProp("mat-sort-header-sorted",i._isSorted())("mat-sort-header-position-before",i.arrowPosition==="before"),t.\u0275\u0275attribute("tabindex",i._isDisabled()?null:0)("role",i._isDisabled()?null:"button"),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",i._renderArrow()))},dependencies:[v.NgIf],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],encapsulation:2,data:{animation:[o.indicator,o.leftPointer,o.rightPointer,o.arrowOpacity,o.arrowPosition,o.allowChildren]},changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(m,[{type:t.Component,args:[{selector:"[mat-sort-header]",exportAs:"matSortHeader",host:{class:"mat-sort-header","(click)":"_handleClick()","(keydown)":"_handleKeydown($event)","(mouseenter)":"_setIndicatorHintVisible(true)","(mouseleave)":"_setIndicatorHintVisible(false)","[attr.aria-sort]":"_getAriaSortAttribute()","[class.mat-sort-header-disabled]":"_isDisabled()"},encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,inputs:["disabled"],animations:[o.indicator,o.leftPointer,o.rightPointer,o.arrowOpacity,o.arrowPosition,o.allowChildren],template:`<!--
  We set the \`tabindex\` on an element inside the table header, rather than the header itself,
  because of a bug in NVDA where having a \`tabindex\` on a \`th\` breaks keyboard navigation in the
  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both
  be focusable, and have screen readers read out its \`aria-sort\` state. We prefer this approach
  over having a button with an \`aria-label\` inside the header, because the button's \`aria-label\`
  will be read out as the user is navigating the table's cell (see #13012).

  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid
-->
<div class="mat-sort-header-container mat-focus-indicator"
     [class.mat-sort-header-sorted]="_isSorted()"
     [class.mat-sort-header-position-before]="arrowPosition === 'before'"
     [attr.tabindex]="_isDisabled() ? null : 0"
     [attr.role]="_isDisabled() ? null : 'button'">

  <!--
    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large
    number of screenshot diff failures. It should be removed eventually. Note that the difference
    isn't visible with a shorter header, but once it breaks up into multiple lines, this element
    causes it to be center-aligned, whereas removing it will keep the text to the left.
  -->
  <div class="mat-sort-header-content">
    <ng-content></ng-content>
  </div>

  <!-- Disable animations while a current animation is running -->
  <div class="mat-sort-header-arrow"
       *ngIf="_renderArrow()"
       [@arrowOpacity]="_getArrowViewState()"
       [@arrowPosition]="_getArrowViewState()"
       [@allowChildren]="_getArrowDirectionState()"
       (@arrowPosition.start)="_disableViewStateAnimation = true"
       (@arrowPosition.done)="_disableViewStateAnimation = false">
    <div class="mat-sort-header-stem"></div>
    <div class="mat-sort-header-indicator" [@indicator]="_getArrowDirectionState()">
      <div class="mat-sort-header-pointer-left" [@leftPointer]="_getArrowDirectionState()"></div>
      <div class="mat-sort-header-pointer-right" [@rightPointer]="_getArrowDirectionState()"></div>
      <div class="mat-sort-header-pointer-middle"></div>
    </div>
  </div>
</div>
`,styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]}]}],function(){return[{type:n},{type:t.ChangeDetectorRef},{type:h,decorators:[{type:t.Optional}]},{type:void 0,decorators:[{type:t.Inject,args:["MAT_SORT_HEADER_COLUMN_DEF"]},{type:t.Optional}]},{type:f.FocusMonitor},{type:t.ElementRef},{type:f.AriaDescriber,decorators:[{type:t.Optional}]},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[u]}]}]},{id:[{type:t.Input,args:["mat-sort-header"]}],arrowPosition:[{type:t.Input}],start:[{type:t.Input}],sortActionDescription:[{type:t.Input}],disableClear:[{type:t.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=t.\u0275\u0275defineNgModule({type:p}),p.\u0275inj=t.\u0275\u0275defineInjector({providers:[w],imports:[v.CommonModule,_.MatCommonModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(p,[{type:t.NgModule,args:[{imports:[v.CommonModule,_.MatCommonModule],exports:[h,m],declarations:[h,m],providers:[w]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
