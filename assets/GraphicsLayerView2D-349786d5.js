import{E as p,am as a,P as o,r as g,af as s,ag as m,ah as l}from"./index-b5f964cf.js";import{f as c,u as n}from"./LayerView-4eae7879.js";import{i as d}from"./GraphicContainer-c5939f8e.js";import{a as u}from"./GraphicsView2D-ccc25b9e.js";import"./Container-ea7b43dd.js";import"./definitions-3ddd14a8.js";import"./enums-64ab819c.js";import"./Texture-0cedfe26.js";import"./color-d59b5220.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./BaseGraphicContainer-10249fa5.js";import"./FeatureContainer-10e87b98.js";import"./AttributeStoreView-6ab86b38.js";import"./TiledDisplayObject-f2b03c8b.js";import"./visualVariablesUtils-7cc0e1f3.js";import"./visualVariablesUtils-16cadc52.js";import"./VertexArrayObject-313aa6f0.js";import"./TileContainer-9d9b2288.js";import"./WGLContainer-0984ad0e.js";import"./ProgramTemplate-451b805d.js";import"./MaterialKey-befd4f07.js";import"./utils-ef2b7191.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./earcut-61f7b102.js";import"./vec3f32-ad1dc57f.js";import"./ExpandedCIM-20dd0f8c.js";import"./BidiEngine-836b7ef6.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-7c385c3f.js";import"./floatRGBA-bd8a1145.js";import"./normalizeUtilsSync-42059230.js";import"./projectionSupport-34ec6601.js";import"./json-48e3ea08.js";import"./Matcher-0578c842.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-efadfa3c.js";import"./devEnvironmentUtils-5002a058.js";import"./schemaUtils-8697e507.js";import"./util-8702111c.js";import"./ComputedAttributeStorage-b5e719fd.js";import"./arcadeTimeUtils-8ae32705.js";import"./executionError-fb3f283a.js";import"./centroid-22576f9c.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(n){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new d(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof a?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):o.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const mi=e;export{mi as default};