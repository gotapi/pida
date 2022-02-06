Pida 

a very small Jquery like javascript library.

Installation:
```shell
yarn add pida
```
or 
```shell
npm install --save pida
```



Example:

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

Pida 一个极简的类似Jquery的Javascript库
因为Jquery现在已经膨胀到了100K了，有时候做一些特别小的页面，实在没有必要引入这么大一个库，于是我就写了这个pida;
嗯 ，代码是东拼西凑的，也只做了chrome下的测试。
不建议在重要的项目中使用。


# ajax get request

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
# ajax post request
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

# hide/show/toggle

```javascript
pida.$("a[href]").toggle()
```

# html/val/text
```javascript
pida.$("p").html("same text")
```

# addClass/removeClass

```javascript
pida.$("p").addClass("bigger")
pida.$("p").removeClass("blue-text")
```

# usage of event binding

```javascript
    pida.$("a[href]").on("click", (evt) => {
        evt.preventDefault();
        console.log(evt.target.getAttribute("href"));
    });
```