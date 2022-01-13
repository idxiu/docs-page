(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{718:function(s,a,t){s.exports=t.p+"assets/img/28a935ea8bc74ccc8eecae9474092564.5286c0bf.png"},719:function(s,a,t){s.exports=t.p+"assets/img/53d44d2e1f6a45cfafb7ebc4cb3e54a8.c7a3aab3.png"},902:function(s,a,t){"use strict";t.r(a);var n=t(45),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"图片规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片规范"}},[s._v("#")]),s._v(" 图片规范")]),s._v(" "),n("h2",{attrs:{id:"图片管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片管理"}},[s._v("#")]),s._v(" 图片管理")]),s._v(" "),n("h3",{attrs:{id:"assets-和-static-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#assets-和-static-的区别"}},[s._v("#")]),s._v(" "),n("code",[s._v("assets")]),s._v(" 和 "),n("code",[s._v("static")]),s._v(" 的区别")]),s._v(" "),n("p",[s._v("详见 "),n("a",{attrs:{href:"https://athena0304.gitbooks.io/vue-template-webpack-cn/content/static.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuejs 处理静态资产"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"图片资源存储"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片资源存储"}},[s._v("#")]),s._v(" 图片资源存储")]),s._v(" "),n("p",[n("strong",[s._v("统一存放在 "),n("code",[s._v("src/assets/images")]),s._v(" 文件夹，文件目录如下：")])]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("├─images         ----------- 图片\n    ├─back       ----------- 背景图片\n    ├─banner     ----------- banner图\n    ├─default    ----------- 默认图片\n    ├─figure     ----------- 配图\n    ├─icon       ----------- 图标\n    ├─logo       ----------- logo\n    ├─nodata     ----------- 无数据图\n    ├─other      ----------- 其他图片\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"图片资源引用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片资源引用"}},[s._v("#")]),s._v(" 图片资源引用")]),s._v(" "),n("p",[s._v("给图片资源配置一个别名："),n("code",[s._v("'~'")]),s._v("，便于和其他资源区别开来单独管理")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 基于vue-cli2脚手架，在webpack.base.conf.js添加配置:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("alias")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v("'~'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/assets/images'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 若基于vue-cli3脚手架，在vue.config.js添加配置:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("chainWebpack")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alias\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/assets/images'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("strong",[n("code",[s._v("image")]),s._v(" 标签 "),n("code",[s._v("src")]),s._v(" 引入：用于一般配图")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// html")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("src"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"imgXxx"')]),s._v(" style"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"width: 200px; height: 200px"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" imgXxx "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~/Sep18-init/figure-xxx.png'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[n("strong",[s._v("样式 "),n("code",[s._v("background")]),s._v(" 引入：用于图标")])]),s._v(" "),n("div",{staticClass:"language-scss line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//icon.scss")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$theicons")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("follow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 28"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 28"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pay"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 40"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 40"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("myfocus"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 44"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 44"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@each")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token selector"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$icon")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$width")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$height")]),s._v(" in "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$theicons")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".theicon-"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$icon}")]),s._v(" ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$width}")]),s._v("px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$height}")]),s._v("px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token url"}},[s._v("url")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("../images/icon/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("#{$icon}")]),s._v(".png"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" no-repeat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v("background-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 100% 100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("blockquote",[n("p",[n("code",[s._v("css")]),s._v(" 中一定要用相对路径，才会被解释为模块依赖，编译生成 "),n("code",[s._v("base64")]),s._v(" 编码。所以，将需要用 "),n("code",[s._v("background")]),s._v(" 去引用图片的样式，集中放在同一个样式文件（如："),n("code",[s._v("icon.scss")]),s._v("）进行统一管理。\n图片大小尽量控制在 "),n("code",[s._v("200kb")]),s._v(" 内。")])]),s._v(" "),n("h3",{attrs:{id:"图片优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[s._v("#")]),s._v(" 图片优化")]),s._v(" "),n("p",[s._v("图片的使用与优化影响整个项目的性能与用户体验，下面有一些规则帮助你做的更好：")]),s._v(" "),n("ul",[n("li",[s._v("使用合适的尺寸不浪费一像素")]),s._v(" "),n("li",[s._v("使用合适的图片格式，jepg、webp 等在系统支持的情况下")]),s._v(" "),n("li",[s._v("使用合适的压缩比率，减小图片体积")]),s._v(" "),n("li",[s._v("小于 10kb 的图被会转化成 base64，内联在 html 中响应更快")]),s._v(" "),n("li",[s._v("大图片存储在对象存储或者服务端")]),s._v(" "),n("li",[s._v("服务端支持图片处理服务时，使用图片处理服务进行优化")])]),s._v(" "),n("h2",{attrs:{id:"图标管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图标管理"}},[s._v("#")]),s._v(" 图标管理")]),s._v(" "),n("h3",{attrs:{id:"字体图标-单色图标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字体图标-单色图标"}},[s._v("#")]),s._v(" 字体图标（单色图标）")]),s._v(" "),n("ul",[n("li",[s._v("设计人员将图标上传到阿里矢量图标库，图标命名由开发人员维护，采用英文语义化命名")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(718),alt:"阿里矢量图标库"}})]),s._v(" "),n("ul",[n("li",[s._v("开发将字体图标下载至本地，将相关文件存在 "),n("code",[s._v("assets/iconfont")]),s._v(" 文件夹下，并将字体图标样式选择器改写如下：")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(719),alt:"字体图标文件"}})]),s._v(" "),n("ul",[n("li",[s._v("用法：")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/assets/iconfont/iconfont.css'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// xxx.vue")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icon-xxx color-xxx"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h3",{attrs:{id:"图片图标-复色图标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图片图标-复色图标"}},[s._v("#")]),s._v(" 图片图标（复色图标）")]),s._v(" "),n("ul",[n("li",[s._v("图片存储："),n("code",[s._v("assets/images/icon")]),s._v(" 文件夹")]),s._v(" "),n("li",[s._v("图片转成样式："),n("a",{attrs:{href:"http://ui.ucmed.cn/doc/%E9%99%84%E5%BD%95/#icon-scss",target:"_blank",rel:"noopener noreferrer"}},[s._v("sass/icon.scss"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("用法：")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@/assets/sass/sass-index.scss'")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// xxx.vue")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"theicon-xxx"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);