# Pida 

Terribly small javascript library ,up to 5k (gziped)

- Chrome or other supported:( no IE )
- Browser side only,not for node.js
 

## Installation:
```shell
yarn add pida
```
or 
```shell
npm install --save pida
```



# Example of document query

```javascript
import  pida from  'pida'
pida.onDomReady(()=>{
    console.dir(pida.$("a").length)
     pida.addListener(pida.$("a"),"click",(evt)=>{
         console.log(evt.target);
     })
    pida.each(pida.$("a"),(item)=>{
        console.log(item);
    })
    console.dir(pida)
})
```

vite demo project:[https://github.com/gotapi/pida-demo](https://github.com/gotapi/pida-demo)

## ajax get request

```javascript
pida.get("https://ip4.dev/myip?format=json",{
    "on":{
        "load":(progress)=>{
            console.log("onload")
        },
        "loaded":(progress)=>{
            console.log("onloaded")    
        }
    }
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("got error")
    console.log(err);
});
```

## ajax post request

```javascript
let data = new FormData()
data.append("title","hello")
pida.post("https://example.org/",{
    headers:{
        "secret":"this is secret"
    }
    },
    data
).then((resp)=>{
    console.log("got resp:")
    console.log(resp)
}).catch((err)=>{
    console.log("got error")
    console.log(err)
});
```

## example for post x-www-form-urlencoded data:
```javascript
let formSend = "type=json&url=" + encodeURIComponent(location.href) + "&content=" + encodeURIComponent("Hellobaby");

pida.post("https://gotapi.net/v3/api/text2pic", {
    "timeout": 15000,
    "headers": {
        "secret": secret,
        "Content-Type": "application/x-www-form-urlencoded"
   }
},
formSend).then((data) => {});
```

# hide/show/toggle



```javascript
pida.$("a[href]").toggle()
```

## html/val/text
```javascript
pida.$("p").html("same text")

```

# attr
```javascript
//when you try to getAttributes,return the first
pida.$("input").attr("value")
pida.$("href").attr("link","/index")
```

## addClass/removeClass

```javascript
pida.$("p").addClass("bigger")
pida.$("p").removeClass("blue-text")
```

## usage of event binding

```javascript
    pida.$("a[href]").on("click", (evt) => {
        evt.preventDefault();
        console.log(evt.target.getAttribute("href"));
    });
```


## chainable

```javascript
pida.$("a[href]").on("click",(evt)=>{ console.log(evt);}).addClass("blue").addClass("bigger")
```

## other helpers 
```javascript
pida.each(iter,(element)=>{

})
pida.isArray()
pida.isObject()
pida.isString()
```