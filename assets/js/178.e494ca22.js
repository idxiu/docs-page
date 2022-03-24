(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{927:function(s,t,a){"use strict";a.r(t);var n=a(33),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"uniapp规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uniapp规范"}},[s._v("#")]),s._v(" uniapp规范")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"http://192.168.201.106/csdn/framework/general-system-parent-uniapp",target:"_blank",rel:"noopener noreferrer"}},[s._v("模板地址"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[s._v("#")]),s._v(" 开发规范")]),s._v(" "),a("p",[s._v("为了实现多端兼容，综合考虑编译速度、运行性能等因素，"),a("code",[s._v("uni-app")]),s._v(" 约定了如下开发规范：")]),s._v(" "),a("ul",[a("li",[s._v("页面文件遵循 "),a("a",{attrs:{href:"https://vue-loader.vuejs.org/zh/spec.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vue 单文件组件 (SFC) 规范"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("组件标签靠近小程序规范，详见"),a("a",{attrs:{href:"https://uniapp.dcloud.io/component/README",target:"_blank",rel:"noopener noreferrer"}},[s._v("uni-app 组件规范"),a("OutboundLink")],1),s._v("\n有几点特别要注意的：\n"),a("ol",[a("li",[s._v("注意：所有组件与属性名都是小写，单词之间以连字符"),a("code",[s._v("-")]),s._v("连接；")]),s._v(" "),a("li",[s._v("每个vue文件的根节点必须为 "),a("code",[s._v("<template>")]),s._v("，且这个 "),a("code",[s._v("<template>")]),s._v(" 下只能且必须有一个根 "),a("code",[s._v("<view>")]),s._v(" 组件；")]),s._v(" "),a("li",[s._v("不推荐使用HTML标签，为了管理方便、策略统一，新写代码时仍然建议使用view等组件；")]),s._v(" "),a("li",[s._v('组件上的事件绑定，需要以 vue 的事件绑定语法来绑定，如 bindchange="eventName" 事件，需要写成 '),a("code",[s._v('@change="eventName"')]),s._v("；")]),s._v(" "),a("li",[s._v("uni-app支持的组件分为vue组件和小程序自定义组件；如果扩展组件符合uni-app的"),a("code",[s._v("easycom")]),s._v("组件规范，则可以免注册，直接使用；如果组件不符合easycom规范，则需要在代码里手动import和注册组件，然后才能使用")])])]),s._v(" "),a("li",[s._v("接口能力（JS API）靠近微信小程序规范，但需将前缀 "),a("code",[s._v("wx")]),s._v(" 替换为 "),a("code",[s._v("uni")]),s._v("，详见"),a("a",{attrs:{href:"https://uniapp.dcloud.io/api/README",target:"_blank",rel:"noopener noreferrer"}},[s._v("uni-app接口规范"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("数据绑定及事件处理同 "),a("code",[s._v("Vue.js")]),s._v(" 规范，同时补充了App及页面的生命周期")]),s._v(" "),a("li",[s._v("为兼容多端运行，建议使用flex布局进行开发")])]),s._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[s._v("一个uni-app工程，默认包含如下目录及文件：")]),s._v(" "),a("div",{staticClass:"language-markdown line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[s._v("┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）\n│─api             \t\t \t接口接口目录\n│─asses             \t\tcss、icon资源目录 \n│─components            符合vue组件规范的uni-app组件目录\n│  └─comp-a.vue         可复用的a组件\n│─config             \t\t公共配置文件比如请求域名、端口、缓存等。\n│─libs             \t\t  第三方sdk工具包\n│─mixins             \t\t混入对象\n├─hybrid                App端存放本地html文件的目录，\n├─platforms             存放各平台专用页面的目录，\n├─pages                 业务页面文件存放的目录\n│  ├─index\n│  │  └─index.vue       index页面\n│  └─list\n│     └─list.vue        list页面\n│─plugin             \t\t第三方插件包\n├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此\n│─store             \t\tvuex状态管理目录\n│─utils             \t\t自定义工具类\n├─uni_modules           存放uni_module规范的插件。\n├─wxcomponents          存放小程序组件的目录，\n├─main.js               Vue初始化入口文件\n├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期\n├─manifest.json         配置应用名称、appid、logo、版本等打包信息\n└─pages.json            配置页面路由、导航条、选项卡等页面类信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("ul",[a("li",[s._v("编译到任意平台时，"),a("code",[s._v("static")]),s._v(" 目录下的文件均会被完整打包进去，且不会编译。非 "),a("code",[s._v("static")]),s._v(" 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去。")]),s._v(" "),a("li",[a("code",[s._v("static")]),s._v(" 目录下的 "),a("code",[s._v("js")]),s._v(" 文件不会被编译，如果里面有 "),a("code",[s._v("es6")]),s._v(" 的代码，不经过转换直接运行，在手机设备上会报错。")]),s._v(" "),a("li",[a("code",[s._v("css")]),s._v("、"),a("code",[s._v("less/scss")]),s._v(" 等资源不要放在 "),a("code",[s._v("static")]),s._v(" 目录下，建议这些公用的资源放在自建的 "),a("code",[s._v("common")]),s._v(" 目录下。")]),s._v(" "),a("li",[s._v("HbuilderX 1.9.0+ 支持在根目录创建 "),a("code",[s._v("ext.json")]),s._v("、"),a("code",[s._v("sitemap.json")]),s._v(" 等小程序需要的文件。")])])]),s._v(" "),a("h2",{attrs:{id:"导入静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入静态资源"}},[s._v("#")]),s._v(" 导入静态资源")]),s._v(" "),a("h3",{attrs:{id:"模板内引入静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板内引入静态资源"}},[s._v("#")]),s._v(" 模板内引入静态资源")]),s._v(" "),a("p",[a("code",[s._v("template")]),s._v("内引入静态资源，如"),a("code",[s._v("image")]),s._v("、"),a("code",[s._v("video")]),s._v("等标签的"),a("code",[s._v("src")]),s._v("属性时，可以使用相对路径或者绝对路径，形式如下")]),s._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("image")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("/static/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("image")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("@/static/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!-- 相对路径 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("image")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("../../static/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("特别说明：")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("@")]),s._v("开头的绝对路径以及相对路径会经过base64转换规则校验")]),s._v(" "),a("li",[s._v("引入的静态资源在非h5平台，均不转为base64。")]),s._v(" "),a("li",[s._v("H5平台，小于4kb的资源会被转换成base64，其余不转。")]),s._v(" "),a("li",[s._v("自"),a("code",[s._v("HBuilderX 2.6.6")]),s._v("起"),a("code",[s._v("template")]),s._v("内支持"),a("code",[s._v("@")]),s._v("开头路径引入静态资源，旧版本不支持此方式")]),s._v(" "),a("li",[s._v("App平台自"),a("code",[s._v("HBuilderX 2.6.9")]),s._v("起"),a("code",[s._v("template")]),s._v("节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致")]),s._v(" "),a("li",[s._v("支付宝小程序组件内 image 标签不可使用相对路径")])])]),s._v(" "),a("h3",{attrs:{id:"js文件引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js文件引入"}},[s._v("#")]),s._v(" js文件引入")]),s._v(" "),a("p",[a("code",[s._v("js")]),s._v("文件或"),a("code",[s._v("script")]),s._v("标签内（包括renderjs等）引入"),a("code",[s._v("js")]),s._v("文件时，可以使用相对路径和绝对路径，形式如下")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 绝对路径，@指向项目根目录，在cli项目中@指向src目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/common/add.js'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相对路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" add "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../common/add.js'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("js文件不支持使用"),a("code",[s._v("/")]),s._v("开头的方式引入")])]),s._v(" "),a("h3",{attrs:{id:"css引入静态资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css引入静态资源"}},[s._v("#")]),s._v(" css引入静态资源")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("css")]),s._v("文件或"),a("code",[s._v("style标签")]),s._v("内引入"),a("code",[s._v("css")]),s._v("文件时（scss、less文件同理），可以使用相对路径或绝对路径（"),a("code",[s._v("HBuilderX 2.6.6")]),s._v("）")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 绝对路径 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v("'/common/uni.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v("'@/common/uni.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 相对路径 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string url"}},[s._v("'../../common/uni.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("自"),a("code",[s._v("HBuilderX 2.6.6")]),s._v("起支持绝对路径引入静态资源，旧版本不支持此方式")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[s._v("css")]),s._v("文件或"),a("code",[s._v("style标签")]),s._v("内引用的图片路径可以使用相对路径也可以使用绝对路径，需要注意的是，有些小程序端css文件不允许引用本地文件（请看注意事项）。")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 绝对路径 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/static/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("@/static/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 相对路径 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("../../static/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("注意事项：")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("ul",[a("li",[s._v("引入字体图标请参考，"),a("a",{attrs:{href:"https://uniapp.dcloud.io/frame?id=%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87",target:"_blank",rel:"noopener noreferrer"}},[s._v("字体图标"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("code",[s._v("@")]),s._v("开头的绝对路径以及相对路径会经过base64转换规则校验")]),s._v(" "),a("li",[s._v("不支持本地图片的平台，小于40kb，一定会转base64。（共四个平台mp-weixin, mp-qq, mp-toutiao, app v2）")]),s._v(" "),a("li",[s._v("h5平台，小于4kb会转base64，超出4kb时不转。")]),s._v(" "),a("li",[s._v("其余平台不会转base64")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);