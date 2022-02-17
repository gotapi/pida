import pq from "./src/index.js"
pq.onDomReady(()=>{
    console.log(pq.$("#top2 a").elements[0]);
})
