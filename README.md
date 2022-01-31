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

Pida 一个极简的类似Jquery的Javascript库
因为Jquery现在已经膨胀到了100K了，有时候做一些特别小的页面，实在没有必要引入这么大一个库，于是我就写了这个pida;
嗯 ，代码是东拼西凑的，也只做了chrome下的测试。
不建议在重要的项目中使用。