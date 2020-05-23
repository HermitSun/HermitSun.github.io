(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{356:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eslint-typescript配置全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-typescript配置全局变量"}},[t._v("#")]),t._v(" ESLint + TypeScript配置全局变量")]),t._v(" "),a("p",[t._v("其实ESLint + TypeScript的组合还是挺香的，代码风格检查 + 类型检查，能省下不少时间。")]),t._v(" "),a("p",[t._v("但是还是存在一些问题。比如，有时候为了减小打包大小，我们可能会选择把一些不太关键的依赖放到CDN上，然后再通过"),a("code",[t._v("<script>")]),t._v("来异步加载，这种脚本一般都会采用注入变量的方式来进行加载，这个时候就很麻烦。比如，我通过"),a("code",[t._v("<script>")]),t._v("加载了d3，但是在使用的时候，就会报错：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ESLint: 'd3' is not defined.(no-undef)\nTS2686: 'd3' refers to a UMD global, but the current file is a module. Consider adding an import instead.\n")])])]),a("p",[t._v("解决起来也还比较简单。首先处理一下ts，给ts加一个类型声明文件来扩展全局变量。"),a("a",{attrs:{href:"https://blog.csdn.net/HermitSun/article/details/104104762",target:"_blank",rel:"noopener noreferrer"}},[t._v("之前我曾经写过相关的文章"),a("OutboundLink")],1),t._v("，在这里重复一下。为了方便（并不代表应该写成"),a("code",[t._v("any")]),t._v("，只是为了方便），在这里就暂时用一下"),a("code",[t._v("any")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// shims-global.d.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" global "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    d3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" d3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("为什么第一行要写个"),a("code",[t._v("export")]),t._v("？因为ts的模块机制，需要通过这个"),a("code",[t._v("export")]),t._v("让编译器意识到这是一个模块。在之前的文章里也有相应的解释。")]),t._v(" "),a("p",[t._v("然后就是配置ESLint。网上目前主要是两种写法：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("直接在rules里off掉这条规则。我觉得为了一个变量而关掉这项检查，不是一个很好的方案。")])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v(".eslintrc.js")]),t._v("里加这么一段：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  globals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'echarts'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("可以是可以，但是总觉得有点奇怪。为什么后面是个"),a("code",[t._v("true")]),t._v("呢？")])])]),t._v(" "),a("p",[t._v("所以我去查了文档，文档上提供了好几种写法，在这里选两个常用的：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过注释声明，只在当前文件生效。")]),t._v(" "),a("p",[t._v("最简单的写法如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* global var1, var2 */")]),t._v("\n")])])]),a("p",[t._v("还可以对全局变量的读写权限进行更细粒度的控制。写法如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* global var1:writable, var2:writable */")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v(".eslintrc.js")]),t._v("进行配置，对整个项目都生效。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  globals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    var1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'writable'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    var2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'readonly'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在这种写法里，off是有特殊含义的，可以“屏蔽”原生的全局变量。比如，我不希望组里的其他人直接使用Promise（比如"),a("code",[t._v("Promise.resolve")]),t._v("之类的方法，虽然我不知道什么情况下我会不想让别人用，但姑且认为我不想让其他人用），我就可以加上这么一个配置：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  globals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Promise"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这样，只要试图使用Promise，就会提示：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ESLint: 'Promise' is not defined.(no-undef)\n")])])]),a("p",[t._v("需要注意的是，这里不能写成"),a("code",[t._v("false")]),t._v("，否则规则不会生效，"),a("code",[t._v("Promise")]),t._v("仍然是可用的。也由此可见，写成"),a("code",[t._v("true")]),t._v("的那种写法并没有什么正确性，仅仅是因为有了一个值而已。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);