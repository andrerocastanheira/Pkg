(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[4775],{4775:(F,V,c)=>{c.r(V),c.d(V,{EntityRecordColumnType:()=>g,EntityRecordPrimaryValueType:()=>E,ExpressionEngineModule:()=>d,ExpressionEngineType:()=>f,ExpressionVariableAggregationType:()=>S,ExpressionVariableType:()=>T,RecordExpressionVariableType:()=>h});var g;(function(n){n.Column="Column",n.AggregationColumn="AggregationColumn"})(g||(g={}));var E;(function(n){n.Constant="Constant",n.Parameter="Parameter",n.SysSetting="SysSetting",n.SysValue="SysValue"})(E||(E={}));var f;(function(n){n.PowerFx="PowerFx"})(f||(f={}));var T;(function(n){n.SysSetting="SysSetting",n.SysValue="SysValue",n.Parameter="Parameter",n.Record="Record",n.Collection="Collection",n.EsqAggregation="EsqAggregation"})(T||(T={}));var h;(function(n){n.Entity="Entity",n.Custom="Custom"})(h||(h={}));var S;(function(n){n.None="None",n.Count="Count",n.Sum="Sum",n.Avg="Avg",n.Min="Min",n.Max="Max",n.TopOne="TopOne"})(S||(S={}));var m=c(74742),D=c(31134),a=c(75378);let _=class{convert(e,s){const r={type:"crt.ExecuteExpressionRequest",$context:s,metadata:e};return a.HandlerChainService.instance.process(r).then(t=>t?.result).catch(t=>(console.warn(t),null))}};_=(0,m.__decorate)([(0,a.CrtConverter)({type:"crt.ExecuteExpression"})],_);var x=c(8239),v=c(2876),u=c(21322),l=c(94450);class p{_getDataValueTypeName(e){switch(e){case a.DataValueType.FLOAT1:return"Float1";case a.DataValueType.FLOAT2:return"Float2";case a.DataValueType.FLOAT3:return"Float3";case a.DataValueType.FLOAT4:return"Float4";case a.DataValueType.FLOAT8:return"Float8";case a.DataValueType.CUSTOM_OBJECT:return"Object";case a.DataValueType.COMPOSITE_OBJECT_LIST:return"CompositeObjectList";default:return a.DataValueType[e]}}_getRequestParameterValueDto(e){const s=e.value;if(Array.isArray(s)){const r=s[0];return Array.isArray(r)?s.map(t=>t.map(i=>({...i,value:this._encodeValue(i.value,i.dataValueType),dataValueType:this._getDataValueTypeName(i.dataValueType)}))):s.map(t=>({...t,value:this._encodeValue(t.value,t.dataValueType),dataValueType:this._getDataValueTypeName(t.dataValueType)}))}return this._encodeValue(s,e.dataValueType)}_encodeValue(e,s){return[a.DataValueType.Date,a.DataValueType.Time,a.DataValueType.DateTime].includes(s)?(0,a.toLocalISOString)(e):e}decodeValue(e,s){return[a.DataValueType.Date,a.DataValueType.Time,a.DataValueType.DateTime].includes(s)?new Date(e):e}getExecutionMetadata(e){const s=e.parameters.map(t=>({...t,dataValueType:this._getDataValueTypeName(t.dataValueType),value:this._getRequestParameterValueDto(t)})),r=e.expressionVariables.map(t=>({...t,dataValueType:this._getDataValueTypeName(t.dataValueType)}));return JSON.stringify({...e,parameters:s,expressionVariables:r,resultDataValueType:this._getDataValueTypeName(e.resultDataValueType)})}}p.\u0275fac=function(e){return new(e||p)},p.\u0275prov=l.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"});class y{constructor(e,s,r,t){this._httpClient=e,this._featureService=s,this._sysSettingsService=r,this._expressionMetadataAdapter=t,this._expressionEngineEndpoint="ServiceModel/ExpressionService.svc/Execute",this._expressionsEngineEndpoint="ServiceModel/ExpressionService.svc/ExecuteMany",this._defaultDebounceTime=200,this._defaultBundleCount=20,this._debounceTimeSysSettingName="ExpressionEngineDebounceTime",this._bundleCountSysSettingName="ExpressionEngineBundleCount",this._requests=new u.Subject}_executeImmediate(e){const s={metadata:e};return(0,u.lastValueFrom)(this._httpClient.post(this._expressionEngineEndpoint,s,{headers:new v.HttpHeaders({"Content-Type":"application/json"})}))}_getBundleSettings(){var e=this;return(0,x.Z)(function*(){const s=yield e._sysSettingsService.getByCodes([e._debounceTimeSysSettingName,e._bundleCountSysSettingName]),r=s.values[e._debounceTimeSysSettingName]?.value||e._defaultDebounceTime,t=s.values[e._bundleCountSysSettingName]?.value||e._defaultBundleCount;return{executionDebounceTime:r,bundleCount:t}})()}_prepareDebouncedResponsesStream(){var e=this;return(0,x.Z)(function*(){const{executionDebounceTime:s,bundleCount:r}=yield e._getBundleSettings();if(e._responses)return;const t=new u.BehaviorSubject(0),i=(0,u.merge)(t.pipe((0,u.filter)(o=>o>=r)),e._requests.pipe((0,u.tap)(()=>{t.next(t.value+1)}),(0,u.debounceTime)(s)));e._responses=e._requests.pipe((0,u.buffer)(i),(0,u.filter)(o=>!!o.length),(0,u.mergeMap)(o=>(t.next(0),e._httpClient.post(e._expressionsEngineEndpoint,o,{headers:new v.HttpHeaders({"Content-Type":"application/json"})}))),(0,u.share)())})()}_executeThrottled(e){var s=this;return(0,x.Z)(function*(){yield s._prepareDebouncedResponsesStream();const r=(0,a.generateGuid)(),t=(0,u.firstValueFrom)(s._responses.pipe((0,u.filter)(i=>i.some(o=>o.executionId===r)),(0,u.map)(i=>i.find(o=>o.executionId===r).result)));return s._requests.next({executionId:r,metadata:e}),t})()}safeExecute(e,s={immediate:!1}){var r=this;return(0,x.Z)(function*(){try{return yield r.execute(e,s)}catch(t){return{success:!1,errorInfo:t,result:null}}})()}execute(e,s={immediate:!1}){var r=this;return(0,x.Z)(function*(){let t;const i=r._expressionMetadataAdapter.getExecutionMetadata(e),o=yield r._featureService.getFeatureState("ExpressionEngineDisableBundling");if(s.immediate||o?t=yield r._executeImmediate(i):t=yield r._executeThrottled(i),!t.success){const j=t.errorInfo;return Promise.reject(`${j.errorCode} ${j.message}`)}return{...t,result:r._expressionMetadataAdapter.decodeValue(t.result,e.resultDataValueType)}})()}}y.\u0275fac=function(e){return new(e||y)(l.\u0275\u0275inject(v.HttpClient),l.\u0275\u0275inject(a.FeatureService),l.\u0275\u0275inject(a.SysSettingsService),l.\u0275\u0275inject(p))},y.\u0275prov=l.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac,providedIn:"root"});let M=class extends a.BaseRequest{constructor(){super(...arguments),this.type="crt.ExecuteExpressionRequest"}};M=(0,m.__decorate)([(0,a.CrtRequest)({type:"crt.ExecuteExpressionRequest"})],M);let C=class extends a.BaseRequestHandler{constructor(e){super(),this._engine=e}handle(e){return this._engine.execute(e.metadata)}};C=(0,m.__decorate)([(0,a.CrtRequestHandler)({type:"crt.ExecuteExpressionHandler",requestType:"crt.ExecuteExpressionRequest"}),(0,m.__metadata)("design:paramtypes",[y])],C);let d=class{};d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=l.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=l.\u0275\u0275defineInjector({providers:[y,p],imports:[D.CommonModule]}),d=(0,m.__decorate)([(0,a.CrtModule)({converters:[_],requestHandlers:[C]})],d),function(){(typeof ngJitMode>"u"||ngJitMode)&&l.\u0275\u0275setNgModuleScope(d,{imports:[D.CommonModule]})}()}}]);
