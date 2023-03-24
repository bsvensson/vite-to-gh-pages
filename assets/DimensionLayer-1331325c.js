import{iO as $,cB as d,af as t,ag as i,gP as w,cs as P,db as z,ah as g,iP as j,R as b,e8 as E,iQ as L,iR as T,P as N,an as k,G as O,au as q,t as m,r as s,ap as C,q as D,iS as _,as as x,cL as A,cN as H,aY as B,cR as G}from"./index-b5f964cf.js";import{c as M}from"./Analysis-72f20036.js";let l=class extends $(j){constructor(e){super(e),this.type="simple",this.color=new d("black"),this.lineSize=2,this.fontSize=10,this.textColor=new d("black"),this.textBackgroundColor=new d([255,255,255,.6])}};t([i({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([i({type:d,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"color",void 0),t([i({type:Number,cast:P,nonNullable:!0,range:{min:z(1)},json:{write:{isRequired:!0}}})],l.prototype,"lineSize",void 0),t([i({type:Number,cast:P,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"fontSize",void 0),t([i({type:d,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"textColor",void 0),t([i({type:d,nonNullable:!0,json:{type:[w],write:{isRequired:!0}}})],l.prototype,"textBackgroundColor",void 0),l=t([g("esri.analysis.DimensionSimpleStyle")],l);const v=l;var c;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(c||(c={}));const F=[c.Horizontal,c.Vertical,c.Direct];let a=class extends $(j){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=c.Direct,this.offset=0,this.orientation=0}};t([i({type:["length"],json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),t([i({type:b,json:{write:!0}})],a.prototype,"startPoint",void 0),t([i({type:b,json:{write:!0}})],a.prototype,"endPoint",void 0),t([i({type:F,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"measureType",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"offset",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),E(e=>L.normalize(T(e),0,!0))],a.prototype,"orientation",void 0),a=t([g("esri.analysis.LengthDimension")],a);const S=a,f=N.ofType(S);let p=class extends M{constructor(e){super(e),this.type="dimension",this.style=new v,this.extent=null}initialize(){this.addHandles(O(()=>this._computeExtent(),e=>{(m(e)||m(e.pending))&&this._set("extent",s(e)?e.extent:null)},q))}get dimensions(){return this._get("dimensions")||new f}set dimensions(e){this._set("dimensions",C(e,this.dimensions,f))}get spatialReference(){for(const e of this.dimensions){if(s(e.startPoint))return e.startPoint.spatialReference;if(s(e.endPoint))return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,n)=>(e.push(n.startPoint,n.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return s(e)?D(e.pending):Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(m(e))return{pending:null,extent:null};const n=[];for(const r of this.dimensions)s(r.startPoint)&&n.push(r.startPoint),s(r.endPoint)&&n.push(r.endPoint);const u=_(n,e);if(s(u.pending))return{pending:u.pending,extent:null};let h=null;return s(u.geometries)&&(h=u.geometries.reduce((r,y)=>m(r)?s(y)?x.fromPoint(y):null:s(y)?r.union(x.fromPoint(y)):r,null)),{pending:null,extent:h}}clear(){this.dimensions.removeAll()}};t([i({type:["dimension"]})],p.prototype,"type",void 0),t([i({cast:k,type:f,nonNullable:!0})],p.prototype,"dimensions",null),t([i({readOnly:!0})],p.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},nonNullable:!0})],p.prototype,"style",void 0),t([i({value:null,readOnly:!0})],p.prototype,"extent",void 0),t([i({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([g("esri.analysis.DimensionAnalysis")],p);const R=p;let o=class extends A(H(G)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new R,this.opacity=1,e){const{source:n,style:u}=e;n&&u&&(n.style=u)}}initialize(){this.addHandles([O(()=>this.source,(e,n)=>{s(n)&&n.parent===this&&(n.parent=null),s(e)&&(e.parent=this)},q)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return D(this.source.spatialReference)}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new R)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,n,u,h){n.dimensions=e.filter(({startPoint:r,endPoint:y})=>s(r)&&s(y)).map(r=>r.toJSON(h)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i({type:["ArcGISDimensionLayer"]})],o.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],o.prototype,"source",void 0),t([i({readOnly:!0})],o.prototype,"spatialReference",null),t([i({types:{key:"type",base:null,typeMap:{simple:v}},json:{write:{ignoreOrigin:!0}}})],o.prototype,"style",null),t([i({readOnly:!0})],o.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],o.prototype,"opacity",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:N.ofType(S),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],o.prototype,"dimensions",null),t([B("web-scene","dimensions")],o.prototype,"writeDimensions",null),o=t([g("esri.layers.DimensionLayer")],o);const V=o;export{V as default};