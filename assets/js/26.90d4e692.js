(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{418:function(t,s,n){"use strict";n.r(s);var e=n(42),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"在vue项目中导入外部字体的注意点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在vue项目中导入外部字体的注意点"}},[t._v("#")]),t._v(" 在Vue项目中导入外部字体的注意点")]),t._v(" "),n("p",[t._v("因为项目里有需求，要做一个代码展示。既然要做代码展示，高亮可以用highlight.js（当然这里没有这个需求，只是单纯做一个展示），同时字体也是必不可少的，用浏览器的默认字体总觉得差点啥，所以就有此一说。找了半天，我用了Source Code Pro这个开源的字体，用的是Google提供的字体服务。")]),t._v(" "),n("p",[t._v("本来应该是没啥需要注意的，大家都知道，只要从网上把字体下下来，然后放在项目里让webpack一起打包就行了，但是字体这种东西，打包在一起有点大，会增加打包的体积。可能有人说，我可以异步加载，可以shake（把字体里用不上的部分shake掉，对性能有特殊追求的同学可以试试，有一些解决方案），可以split，但是即使是静态资源，只要跟项目放在一起，就会占用服务器的带宽，间接降低并发量，所以最好还是拿出来；更何况这又不是那些必须要有的依赖，没有字体也能照样展示，就是不太好看罢了。")]),t._v(" "),n("p",[t._v("但是拿出来之后又有一个问题。如果说放在head里，啥都不加，肯定会阻塞渲染，显然是不好的；加个defer，或者在我这个场景下，放在Vue的mounted钩子里，又会导致界面闪烁。之前听说有个preload还不错，就试着用一下。")]),t._v(" "),n("p",[t._v("然后因为我用了vue-meta这个库，这个库似乎不能配置link的as、crossorigin这几个属性，着实有点难受，只能在mounted里创建一个link标签来配置：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fontElement "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'link'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fontElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fontElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fontElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("as "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  fontElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crossOrigin "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'anonymous'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fontElement"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这里面其实有好几个需要注意的地方：")]),t._v(" "),n("p",[t._v("第一个已经说了，vue-meta这个库好像不能配置link的as、crossorigin这几个属性，只能自己手写；")]),t._v(" "),n("p",[t._v("第二个是这里用的是Google的字体服务，Google的字体是以CSS的形式提供的，所以as要写成style而不是font，否则不能正确解析；")]),t._v(" "),n("p",[t._v("第三个是crossOrigin一定要有，没有的话也无法加载，这是字体的一个比较特殊的地方，即使是同源，也要设置这个，更何况这还不是同源的。因为CSS规范规定，浏览器必须匿名地去获取字体：")]),t._v(" "),n("blockquote",[n("h4",{attrs:{id:"_4-8-2-font-fetching-requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-2-font-fetching-requirements"}},[t._v("#")]),t._v(" 4.8.2. Font fetching requirements")]),t._v(" "),n("p",[t._v("For font loads, user agents must use the "),n("a",{attrs:{href:"https://fetch.spec.whatwg.org/#fetching",target:"_blank",rel:"noopener noreferrer"}},[t._v("potentially CORS-enabled fetch"),n("OutboundLink")],1),t._v(" method defined by the ["),n("a",{attrs:{href:"https://drafts.csswg.org/css-fonts/#biblio-html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML]"),n("OutboundLink")],1),t._v(' specification for URL’s defined within @font-face rules. When fetching, user agents must use "Anonymous" mode, set the referrer source to the stylesheet’s URL and set the origin to the URL of the containing document.')])]),t._v(" "),n("p",[t._v("但是为什么会有这样的规定，据说是因为XHR的默认请求就是匿名的；但是这个理由并不是很有说服力，我也没有找到其他的解释，希望知道的人不吝赐教。")]),t._v(" "),n("p",[t._v("说了半天，其实是和业务场景强相关的一些问题，并不具有普遍价值。不过，这也可以作为性能优化的一个切入点去进行思考。")]),t._v(" "),n("comment")],1)}),[],!1,null,null,null);s.default=a.exports}}]);