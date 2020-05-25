(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{355:function(t,e,s){"use strict";s.r(e);var a=s(43),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"windows-10环境下v8引擎的编译方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-10环境下v8引擎的编译方法"}},[t._v("#")]),t._v(" Windows 10环境下V8引擎的编译方法")]),t._v(" "),s("p",[t._v("先说说为什么我要干这个事吧。看起来内核跟我们日常开发没什么关系，但是在做性能优化的时候，性能分析可能会需要深入到汇编指令的层面；可以利用d8做到这一点。比如：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("./out/x64.debug/d8  --print-opt-code test.js\n")])])]),s("p",[t._v("再扯下去就扯远了，这次主要是记录一下编译方法。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("先说明一下环境，我用的是Windows 10，然后电脑上已经有了之前学C++的时候装的VS 2017 Community，也有一个anaconda的Python 3.7，以及很基础的Git。其中VS还是很重要的，在Windows下编译基于C++的一些东西还是挺有用的；Python 3.7是不行的，需要倒回去装一个Python 2.7（然而今年年初的时候已经停止维护了，sigh），下面会说到。")]),t._v(" "),s("p",[t._v("首先的首先，建议设置一个代理，这样能快一点。设置方法可以参考"),s("a",{attrs:{href:"https://blog.csdn.net/HermitSun/article/details/106069175",target:"_blank",rel:"noopener noreferrer"}},[t._v("之前的一篇文章"),s("OutboundLink")],1),t._v("，不过代理需要自己提供。")]),t._v(" "),s("p",[t._v("首先按照"),s("a",{attrs:{href:"https://chromium.googlesource.com/chromium/tools/depot_tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方的说法"),s("OutboundLink")],1),t._v("，把仓库clone下来：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://chromium.googlesource.com/chromium/tools/depot_tools\n")])])]),s("p",[t._v("然后把clone下来的仓库的路径加入环境变量。比如我clone到了C盘根目录，那就往环境变量里加一个"),s("code",[t._v("C:\\depot_tools")]),t._v("。为什么要这么做，因为接下来需要执行一些命令，用环境变量比较方便。或者你愿意的话，也可以直接到clone下来的仓库里去执行。")]),t._v(" "),s("p",[t._v("然后在命令行设置一个环境变量（因为我已经有VS了，没有的话建议去下一个）。有人说在环境变量里设置，我觉得没必要，反正就用一次，到时候还得清理，多麻烦。直接在命令行弄一个就好了：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" DEPOT_TOOLS_WIN_TOOLCHAIN = 0\n")])])]),s("p",[t._v("因为我电脑没分区，只有一个C盘，所以VS默认是在C盘的。看到网上有人说如果VS不是装在C盘的，可能需要一些额外的设置。在这里放一下，我没有验证，仅供参考：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" GYP_MSVS_OVERRIDE_PATH = <path>\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" GYP_MSVS_VERSION = 2017\n")])])]),s("p",[t._v("然后执行这两个命令（没有代理可能会卡住）：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("fetch v8\ngclient "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),t._v("\n")])])]),s("p",[t._v("在这里可能会很久。fetch是把代码拉下来，sync是下载需要的环境。如果之前没设置"),s("code",[t._v("DEPOT_TOOLS_WIN_TOOLCHAIN")]),t._v("，在这里会报错。")]),t._v(" "),s("p",[t._v("同时，它可能还会有这样一个报错：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('You must install the "Debugging Tools for Windows" feature from the Windows 10 SDK.\n')])])]),s("p",[t._v("按理来说，Windows SDK是跟VS一起安装的，并没有给我配置的机会。那这个问题怎么解决呢？还是有办法的。打开“卸载或更改程序”，在里面找到“Windows Software Development Kit”，然后点击“修改”，然后选择“Change”，在里面把“Debugging Tools for Windows”打上勾，然后点击“change”，就好了。如果觉得有点抽象，可以参考Stack Overflow上的"),s("a",{attrs:{href:"https://stackoverflow.com/a/59031498",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个回答"),s("OutboundLink")],1),t._v("，里面有图。")]),t._v(" "),s("p",[t._v("然后就是激动人心的编译了：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("cd v8\npython tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("v8gen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py x64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug\nninja "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("C out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("x64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug d8\n")])])]),s("p",[t._v("在这个过程中，如果用的是Python 3，就会报错……原因很简单，他依赖于Python 2的一些库，比如urllib2。所以要是没装2.7，赶紧装一个吧……")]),t._v(" "),s("p",[t._v("然后就是CPU 100%的编译过程，大概会持续半小时到一小时。")]),t._v(" "),s("p",[t._v("然后？然后没然后了。编译好的d8在out目录下，就可以开始用了。文章开头就写了一个简单的调用方法。")])])}),[],!1,null,null,null);e.default=n.exports}}]);