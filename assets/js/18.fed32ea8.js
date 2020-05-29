(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{367:function(t,s,a){"use strict";a.r(s);var e=a(43),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"精读emcascript规范：截断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#精读emcascript规范：截断"}},[t._v("#")]),t._v(" 精读EMCAScript规范：截断")]),t._v(" "),a("p",[t._v("之所以要写这个，是因为之前遇到了一个老生常谈的问题：如何在JS中实现"),a("strong",[t._v("截断")]),t._v("，也就是"),a("strong",[t._v("向0取整")]),t._v("，也就是保留数字的整数部分？")]),t._v(" "),a("p",[t._v("JS使用的是基于IEEE 754的浮点数，这个大家都知道。IEEE 754所带来的浮点数精度问题（比如著名的"),a("code",[t._v("0.1 + 0.2 != 0.3")]),t._v("，"),a("code",[t._v("==")]),t._v("还是"),a("code",[t._v("===")]),t._v("都是一样的，因为都是number），以及大整数的误差问题（比如著名的"),a("code",[t._v("2**53 + 1 == 2**53")]),t._v("），我们也都很清楚。关于这些问题，ES6以后提供了类似于"),a("code",[t._v("Number.EPSILON")]),t._v("、BigInt等一系列特性去解决这些问题，就不在这里赘述了。")]),t._v(" "),a("p",[t._v("首先需要说明的是，截断并不代表"),a("strong",[t._v("向下取整")]),t._v("。比如对于-0.2，如果是截断，结果应该是0，而向下取整则是-1。事实上，截断的实现相当于这样：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("因为这个场景还是比较常用的，所以ES6提供了原生的Math.trunc来实现截断；当然了，这个有兼容性的问题，并不是所有浏览器都支持ES6（没错我说的就是IE）。")]),t._v(" "),a("p",[t._v("原生的实现有一个非常有趣的地方，如果参数本身是一个整数，那返回的结果也是整数。啥意思呢？意思是：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 20")]),t._v("\nMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 20")]),t._v("\nMath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trunc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uncaught TypeError: Cannot convert a BigInt value to a number")]),t._v("\n")])])]),a("p",[t._v("只要这个数字事实上是一个number类型的整数（20.0事实上也是一个number类型的整数），返回值就是一个整数，这也是Math里很多函数的共同特点。不过，如果传入的参数是一个BigInt类型的整数，那么就会报错。虽然我们都知道，20n他就是一个整数，而且也在number的范围内，但类型不同就是不同，没办法执行。")]),t._v(" "),a("p",[t._v("事实上，规范里明确定义了“整数”的概念：")]),t._v(" "),a("blockquote",[a("p",[t._v("When the term "),a("strong",[t._v("integer")]),t._v(" is used in this specification, it refers to a "),a("strong",[t._v("Number")]),t._v(" value whose mathematical value) is in the set of integers, unless otherwise stated: when the term "),a("strong",[t._v("mathematical integer")]),t._v(" is used in this specification, it refers to a mathematical value which is in the set of integers.")])]),t._v(" "),a("p",[t._v("也就是说，“整数”指的是"),a("strong",[t._v("number类型中的")]),t._v("整数，而“数学整数”才是数学意义上的整数集；BigInt就属于“数学整数”，和普通的数字不是一个类型的，无法互操作。")]),t._v(" "),a("p",[t._v("我们看看规范里怎么定义"),a("code",[t._v("Math.trunc")]),t._v("的行为的：")]),t._v(" "),a("blockquote",[a("p",[t._v("Returns the integral part of the "),a("strong",[t._v("number")]),t._v(" x, removing any fractional digits. If x is "),a("strong",[t._v("already an integer")]),t._v(", the result is x.")]),t._v(" "),a("ul",[a("li",[t._v("If x is NaN, the result is NaN.")]),t._v(" "),a("li",[t._v("If x is -0, the result is -0.")]),t._v(" "),a("li",[t._v("If x is +0, the result is +0.")]),t._v(" "),a("li",[t._v("If x is +∞, the result is +∞.")]),t._v(" "),a("li",[t._v("If x is -∞, the result is -∞.")]),t._v(" "),a("li",[t._v("If x is greater than 0 but less than 1, the result is +0.")]),t._v(" "),a("li",[t._v("If x is less than 0 but greater than -1, the result is -0.")])])]),t._v(" "),a("p",[t._v("规范里也强调了，该方法只适用于number类型。")]),t._v(" "),a("p",[t._v("事实上，截断的实现方式有很多种，其中流传最广的几种之一，就是位运算。比如：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -1")]),t._v("\nn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -1")]),t._v("\n")])])]),a("p",[t._v("但是我们刚才看到了规范里对trunc的定义，位运算只能实现其中的一部分。比如这里以"),a("code",[t._v("~~")]),t._v("为例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("NaN")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -2147483648(-2**31)")]),t._v("\n")])])]),a("p",[t._v("我们可以看到，因为位运算的特性，特殊值的输出全是0，无法分辨。此外，因为位运算只支持32位，所以一旦超过32位有符号整数的范围，就会出现错误的结果（超过32位有符号整数的范围后，截取低32位）。")]),t._v(" "),a("p",[t._v("但是，有一个非常蹊跷的地方：为什么"),a("code",[t._v("~~NaN")]),t._v("会是0？如果大家对IEEE 754比较了解，应该会记得：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/IEEE_754_Double_Floating_Point_Format.svg/1920px-IEEE_754_Double_Floating_Point_Format.svg.png",alt:"img"}})]),t._v(" "),a("p",[t._v("因为JS的位运算是截取低32位，所以"),a("code",[t._v("~~Infinity")]),t._v("为0是可以理解的，因为Infinity的低32位都为0。但是NaN的低32位并不一定全为0，并且NaN不是一个数，而是一个范围；为什么还是0呢？")]),t._v(" "),a("p",[t._v("规范上规定了这个行为的过程。还是以取反操作为例：")]),t._v(" "),a("blockquote",[a("p",[t._v("The abstract operation Number::bitwiseNOT takes argument x (a Number). It performs the following steps when called:")]),t._v(" "),a("p",[t._v("Let oldValue be ! ToInt32(x).Return the result of applying bitwise complement to oldValue. The result is a signed 32-bit integer.")])]),t._v(" "),a("p",[t._v("相当于是先转换成32位的整数，然后再取反。而这个转换过程是这样的：")]),t._v(" "),a("blockquote",[a("p",[t._v("The abstract operation ToInt32 takes argument argument. It converts argument to one of 232 "),a("a",{attrs:{href:"https://tc39.es/ecma262/#integer",target:"_blank",rel:"noopener noreferrer"}},[t._v("integer"),a("OutboundLink")],1),t._v(" values in the range -231 through 231 - 1, inclusive. It performs the following steps when called:")]),t._v(" "),a("ol",[a("li",[t._v("Let number be ? ToNumber(argument).")]),t._v(" "),a("li",[t._v("If number is NaN, +0, -0, +∞, or -∞, return +0.")]),t._v(" "),a("li",[t._v("Let int be the Number value that is the same sign as number and whose magnitude is floor(abs(number)).")]),t._v(" "),a("li",[t._v("Let int32bit be int modulo 2^32^.")]),t._v(" "),a("li",[t._v("If "),a("em",[t._v("int32bit")]),t._v(" ≥ 2^31^, return "),a("em",[t._v("int32bit")]),t._v(" - 2^32^; otherwise return "),a("em",[t._v("int32bit")]),t._v(".")])])]),t._v(" "),a("p",[t._v("所以，规范里就已经规定了NaN会被转换成0，0取反两次自然还是0。")]),t._v(" "),a("p",[t._v("不过，还是那个问题，为什么NaN会对应到0？我觉得简单一句“规定”并没有说服力。我觉得可能是这样：因为NaN不是一个整数概念，而是一个浮点数概念（来源于IEEE 754的浮点数定义）。它在−2^31^到2^31^ − 1的范围内找不到任何一个整数能表达这个概念，就只能委屈一下，跟0放在一起，因为它代表的是“不存在”。Infinity同理，因为在这个范围内找不到无穷大，就只能跟0放在一起，表达一个“不存在”的概念。")])])}),[],!1,null,null,null);s.default=n.exports}}]);