import{j as o,Q as p,af as a,ag as r,ah as m}from"./index-dadee5ab.js";import{a as h}from"./BitmapContainer-6981035f.js";import{f as n,u as d}from"./LayerView-1f17d75a.js";import{v as c}from"./ExportStrategy-4530d1aa.js";import{i as g}from"./RefreshableLayerView-b35a13f2.js";import"./WGLContainer-bb0ff625.js";import"./definitions-3ddd14a8.js";import"./VertexArrayObject-8658aab3.js";import"./Texture-0caaf40d.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-a0f9600f.js";import"./enums-55085e26.js";import"./ProgramTemplate-00d2df46.js";import"./MaterialKey-f9533bff.js";import"./utils-0bf8dd59.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-045fbc1e.js";import"./earcut-61f7b102.js";import"./Bitmap-6a99e0c7.js";let t=class extends g(n(d)){update(e){this._strategy.update(e).catch(i=>{o(i)||p.getLogger(this.declaredClass).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,s){return this.layer.fetchImageBitmap(e,i,s)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const Q=t;export{Q as default};
