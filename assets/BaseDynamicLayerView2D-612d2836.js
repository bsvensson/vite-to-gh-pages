import{j as o,Q as p,af as a,ag as r,ah as m}from"./index-0de50d74.js";import{a as h}from"./BitmapContainer-5344444a.js";import{f as n,u as d}from"./LayerView-85d47530.js";import{v as c}from"./ExportStrategy-8f548890.js";import{i as g}from"./RefreshableLayerView-bf2ed4b3.js";import"./WGLContainer-8a9eb065.js";import"./definitions-3ddd14a8.js";import"./VertexArrayObject-5ee2b09a.js";import"./Texture-ced32764.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-8addb28a.js";import"./enums-55085e26.js";import"./ProgramTemplate-c215e719.js";import"./MaterialKey-58902227.js";import"./utils-eedf372e.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-6916f960.js";import"./earcut-61f7b102.js";import"./Bitmap-60aca3b5.js";let t=class extends g(n(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImageBitmap(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const Q=t;export{Q as default};