import{af as p,ag as l,ah as f,G as m,s as y,c3 as v,ai as _,t as u,r as d}from"./index-dadee5ab.js";import g from"./FeatureLayerView2D-4f4b399f.js";import{e as S}from"./util-baa71c84.js";import"./Container-045fbc1e.js";import"./definitions-3ddd14a8.js";import"./enums-64ab819c.js";import"./Texture-0caaf40d.js";import"./LayerView-1f17d75a.js";import"./schemaUtils-f4332cac.js";import"./color-a0f9600f.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./utils-0bf8dd59.js";import"./MaterialKey-f9533bff.js";import"./visualVariablesUtils-702f75bc.js";import"./ExpandedCIM-50b756ba.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-045e9599.js";import"./floatRGBA-a2166fa0.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-b819e29c.js";import"./RefreshableLayerView-b35a13f2.js";function h(e,t){if(u(e)&&u(t))return null;const r={};return d(t)&&(r.geometry=t.toJSON()),d(e)&&(r.where=e),r}let o=class extends g{constructor(){super(...arguments),this._enabledEventTypes=new Set,this._isUserPaused=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.addHandles([m(()=>this.layer.customParameters,e=>this._proxy.updateCustomParameters(e)),this.layer.on("send-message-to-socket",e=>this._proxy.sendMessageToSocket(e)),this.layer.on("send-message-to-client",e=>this._proxy.sendMessageToClient(e)),m(()=>this.layer.purgeOptions,()=>this._update()),m(()=>this.suspended,e=>{e?this._proxy.pauseStream():this._isUserPaused||this._proxy.resumeStream()})],"constructor")}get connectionError(){if(this.errorString)return new y("stream-controller",this.errorString)}pause(){this._isUserPaused=!0,this._proxy.pauseStream()}resume(){this._isUserPaused=!1,this._proxy.resumeStream()}on(e,t){if(Array.isArray(e))return v(e.map(n=>this.on(n,t)));const r=["data-received","message-received"].includes(e);r&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const i=super.on(e,t),s=this;return{remove(){i.remove(),r&&(s._proxy.closed||s.hasEventListener(e)||s._proxy.enableEvent(e,!1))}}}queryLatestObservations(e,t){var r,i,s;if(!((r=this.layer.timeInfo)!=null&&r.endField||(i=this.layer.timeInfo)!=null&&i.startField||(s=this.layer.timeInfo)!=null&&s.trackIdField))throw new y("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(n=>{const a=_.fromJSON(n);return a.features.forEach(c=>{c.layer=this.layer,c.sourceLayer=this.layer}),a})}detach(){super.detach(),this.connectionStatus="disconnected"}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(h(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(a=>a.toJSON()),i=S(e.geometryType),s=e.timeInfo&&e.timeInfo.toJSON()||null,n=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:s,source:this.layer.parsedUrl,serviceFilter:h(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:n,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};p([l()],o.prototype,"errorString",void 0),p([l({readOnly:!0})],o.prototype,"connectionError",null),p([l()],o.prototype,"connectionStatus",void 0),o=p([f("esri.views.2d.layers.StreamLayerView2D")],o);const G=o;export{G as default};
