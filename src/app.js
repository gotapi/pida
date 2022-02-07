// import pida from "./index"
// import listen from "good-listener"
// console.log(pida)
// /*
// pida.get("https://ip4.dev/myip?format=json",{
//     "on":{
//         "load":(some)=>{
//             console.log("onload")
//             console.log(some)
//         },
//         "loaded":(evt)=>{
//             console.log("onloaded")
//             console.log(evt)
//         }
//     }
// }).then((data)=>{
//     console.log("got api data");
//     console.log(data);
// }).catch((err)=>{
//     console.log("got error")
//     console.log(err);
// });
//
// let odata =
//     JSON.stringify({title:"hyello"})
// let data = new FormData()
// data.append("secret","lv1010berm7553msnb4m9ccn6rd7346mpl1")
// data.append("title","hello")
// console.log(data.get("title"))
// pida.post("https://gotapi.404.ms/v3/api/mail/send.notify",{
//     headers:{
//         "secret":"lv1010berm7553msnb4m9ccn6rd7346mpl1"
//     }
//     },
//     data
// ).then((resp)=>{
//     console.log("got resp:")
//     console.log(resp)
// }).catch((err)=>{
//     console.log("got error")
//     console.log(err)
// });
// */
//
// pida.onDomReady(()=> {
//     let div1 = pida.$("#top1")
//     console.log(div1 instanceof pida.chainable);
//     let div1green = pida.$(".green",div1)
//     console.log("div1green")
//     console.log(div1green)
//     console.log("]]]]")
//      let div1link = pida.$("a[href]",div1)
//     console.log("links")
//     console.log(div1link)
//     console.log("]]]]")
//      let divalllink = pida.$("a[href]",div1green)
//
//     //
//     console.log("allLinks")
//     console.log(divalllink)
//     console.log("all links done")
//     pida.$("a[href]").on("click", (evt) => {
//         evt.preventDefault();
//         console.log(evt.target.getAttribute("href"));
//     });
// });
//

class bb{
    ds = "ds"
    ts = "ts"
    call(){
        return this.ds
    }
    get(k){
        if(k==="ds") {
            return this.ds;
        }
    }
}
let j = new bb
j.call()
console.log(j.get("ds"))