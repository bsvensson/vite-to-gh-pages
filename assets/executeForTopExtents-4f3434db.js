import{aL as r,ly as s,as as m}from"./index-dadee5ab.js";import{p as c}from"./queryTopFeatures-32917152.js";async function u(a,o,e){const n=r(a),t=await c(n,s.from(o),{...e});return{count:t.data.count,extent:m.fromJSON(t.data.extent)}}export{u as executeForTopExtents};
