(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[9458,9478],{79458:(m,c,t)=>{t.r(c),t.d(c,{DesignTimeAppearanceSettingsStoreService:()=>i,InterfaceDesignerApiModule:()=>n});var p=t(31134),s=t(94450);class n{}n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=s.\u0275\u0275defineInjector({imports:[p.CommonModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&s.\u0275\u0275setNgModuleScope(n,{imports:[p.CommonModule]})}();var g=t(36124),o=t(49475),d=t(21322);class i{constructor(e){this._clientUnitSchemaDesignerService=e,this._defaultModalSettings={size:o.ModalSize.Small},this.appearanceSettingChanged$=new d.ReplaySubject(1)}_getAppearanceSettingsAddon(){return this._clientUnitSchemaDesignerService.getCurrentClientUnitSchema().addons.find(S=>S.addonName===o.AddonName.AppearanceSettings)}_loadAppearanceSettingsMetadata(){return this._getAppearanceSettingsAddon()?.addonConfig.pipe((0,d.map)(a=>({modalSettings:a.modalSettings??this._defaultModalSettings})))}_setAppearanceSettingsMetadata(e){const a=this._getAppearanceSettingsAddon();a.addonConfig=(0,d.of)(new o.AppearanceSettingsMetadata(e))}getAppearanceSettings(e){const a=this._loadAppearanceSettingsMetadata();return a||this.getDefaultAppearanceSettings()}setAppearanceSettings(e){this._setAppearanceSettingsMetadata(e),this.appearanceSettingChanged$.next(e)}getDefaultAppearanceSettings(e){return(0,d.of)({modalSettings:this._defaultModalSettings})}}i.\u0275fac=function(e){return new(e||i)(s.\u0275\u0275inject(g.ClientUnitSchemaDesignerService))},i.\u0275prov=s.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac})}}]);
