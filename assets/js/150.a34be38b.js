(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{852:function(v,_,t){"use strict";t.r(_);var e=t(67),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"命名规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[v._v("#")]),v._v(" 命名规范")]),v._v(" "),t("blockquote",[t("p",[v._v("规范的目的是为了编写高质量的代码，降低沟通成本，提高团队合作开发的效率，最终让大家每个人都可以写出一套漂亮整洁的代码。"),t("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide",target:"_blank",rel:"noopener noreferrer"}},[v._v("参考官方文档"),t("OutboundLink")],1)])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("规范方式")]),v._v(" "),t("ul",[t("li",[v._v("帕斯卡拼写法，英文为"),t("code",[v._v("PascalCase")]),v._v("，特点是所有连接单词的首字母大写，可以简称为大坨峰\n"),t("ul",[t("li",[v._v("骆驼拼写法，英文为"),t("code",[v._v("camelCase")]),v._v("，特点是第一个连接的单词的首字母小写，其余大写，可以简称为小坨峰；")]),v._v(" "),t("li",[v._v("短横拼写法，英文为"),t("code",[v._v("kebab-case")]),v._v("，特点是所有连接的单词以中划线（-）连接，可以简称为中划线。")])])]),v._v(" "),t("li",[v._v("文件和文件夹中除"),t("code",[v._v("components")]),v._v("中组件文件夹要使用 大坨峰规则外，其他文件和文件夹都为中划线分隔。")])])]),v._v(" "),t("h2",{attrs:{id:"整体规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体规范"}},[v._v("#")]),v._v(" 整体规范")]),v._v(" "),t("p",[t("strong",[v._v("命名不可使用中文拼音")])]),v._v(" "),t("p",[t("strong",[v._v("字母统一小写，专有名词可大写")])]),v._v(" "),t("p",[t("strong",[v._v("共性在前，个性在后")])]),v._v(" "),t("p",[t("strong",[v._v("语义要清楚完整，不要过分简写")])]),v._v(" "),t("h2",{attrs:{id:"命名严谨性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名严谨性"}},[v._v("#")]),v._v(" 命名严谨性")]),v._v(" "),t("blockquote",[t("p",[v._v("与后端命名统一。比如权限：后端"),t("code",[v._v("privilege")]),v._v(", 前端无论"),t("code",[v._v("router")]),v._v(" , "),t("code",[v._v("store")]),v._v(", "),t("code",[v._v("api")]),v._v("等都必须使用"),t("code",[v._v("privilege")]),v._v("单词！")])]),v._v(" "),t("p",[v._v("文件和代码中的命名严禁使用拼音与英文混合的方式，更不允许直接使用中文的方式。 正确的英文拼写和语法可以让阅读者易于理解，避免歧义。\n注："),t("code",[v._v("beijing")]),v._v("、"),t("code",[v._v("henan")]),v._v("、"),t("code",[v._v("rmb")]),v._v(" 等国际通用的名称，可视同英文。")]),v._v(" "),t("h2",{attrs:{id:"项目命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目命名"}},[v._v("#")]),v._v(" 项目命名")]),v._v(" "),t("blockquote",[t("p",[v._v("字母组成，中划线拼接,全部采用小写方式，以中划线分隔。前面为项目英文名称，后面为项目的类型。尽量不要用"),t("code",[v._v("mall-management-system")]),v._v("，因为被后台占用。")])]),v._v(" "),t("p",[v._v("示例："),t("code",[v._v("traffic-security-pc")]),v._v("、"),t("code",[v._v("travel-uni-app")]),v._v("、"),t("code",[v._v("mall-management-h5")]),v._v("、"),t("code",[v._v("mall-management-wx")])]),v._v(" "),t("h2",{attrs:{id:"目录-文件夹-命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录-文件夹-命名"}},[v._v("#")]),v._v(" 目录（文件夹）命名")]),v._v(" "),t("blockquote",[t("p",[v._v("文件夹代表着功能或者模块的名字，应该简洁明了。\n除components组件目录，使用大坨峰命名，\nnode_modules 依赖外,其余全部采用字母组成，中划线拼接。\n有复数结构时，要采用复数命名法")])]),v._v(" "),t("p",[v._v("普通示例：")]),v._v(" "),t("p",[t("code",[v._v("scripts/")]),v._v("、"),t("code",[v._v("styles/")]),v._v("、"),t("code",[v._v("images/")]),v._v("、"),t("code",[v._v("utils/")]),v._v("、"),t("code",[v._v("layouts")]),v._v("、"),t("code",[v._v("company-news/")]),v._v("、"),t("code",[v._v("img/")]),v._v("、"),t("code",[v._v("js/")]),v._v("、"),t("code",[v._v("doc/")]),v._v("、"),t("code",[v._v("api/")]),v._v("、"),t("code",[v._v("order/")])]),v._v(" "),t("p",[v._v("特殊：")]),v._v(" "),t("p",[t("code",[v._v("node_modules")]),v._v("示例："),t("code",[v._v("node_modules/")]),v._v("、\n"),t("code",[v._v("components")]),v._v("示例："),t("code",[v._v("SvgIcon")]),v._v("、"),t("code",[v._v("Upload")]),v._v("、"),t("code",[v._v("TestUnit")])]),v._v(" "),t("h2",{attrs:{id:"文件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件命名"}},[v._v("#")]),v._v(" 文件命名")]),v._v(" "),t("p",[v._v("文件包括"),t("code",[v._v(".js")]),v._v(" "),t("code",[v._v(".css")]),v._v(" "),t("code",[v._v(".html")]),v._v(" "),t("code",[v._v(".vue")]),v._v(" "),t("code",[v._v(".sass")]),v._v(" "),t("code",[v._v(".less")]),v._v(" 图片等文件")]),v._v(" "),t("blockquote",[t("p",[v._v("字母组成，中划线拼接")])]),v._v(" "),t("p",[v._v("例："),t("code",[v._v("sass-index.scss")]),v._v(" "),t("code",[v._v("dialog-user-info.vue")])]),v._v(" "),t("h2",{attrs:{id:"组件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件命名"}},[v._v("#")]),v._v(" 组件命名")]),v._v(" "),t("blockquote",[t("p",[v._v("声明&使用：首字母大写，驼峰拼接")])]),v._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 声明")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("import")]),v._v(" DialogUserInfo form "),t("span",{pre:!0,attrs:{class:"token string"}},[v._v("'@/components/dialog-user-info'")]),v._v("\ncomponents"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(":")]),v._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    DialogUserInfo\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 使用")]),v._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("DialogUserInfo"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v("/")]),v._v("DialogUserInfo"),t("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v("\n")])]),v._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[v._v("1")]),t("br"),t("span",{staticClass:"line-number"},[v._v("2")]),t("br"),t("span",{staticClass:"line-number"},[v._v("3")]),t("br"),t("span",{staticClass:"line-number"},[v._v("4")]),t("br"),t("span",{staticClass:"line-number"},[v._v("5")]),t("br"),t("span",{staticClass:"line-number"},[v._v("6")]),t("br"),t("span",{staticClass:"line-number"},[v._v("7")]),t("br")])]),t("h2",{attrs:{id:"css命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css命名"}},[v._v("#")]),v._v(" css命名")]),v._v(" "),t("blockquote",[t("p",[v._v("字母组成，中划线拼接\nid采用驼峰式命名")])]),v._v(" "),t("p",[v._v("例："),t("code",[v._v(".color-white")]),v._v(" "),t("code",[v._v("#theDialog")])]),v._v(" "),t("h2",{attrs:{id:"js命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js命名"}},[v._v("#")]),v._v(" js命名")]),v._v(" "),t("h4",{attrs:{id:"变量-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量-函数"}},[v._v("#")]),v._v(" 变量&函数")]),v._v(" "),t("blockquote",[t("p",[v._v("常量：大写字母、数字组成，下划线拼接，例："),t("code",[v._v("CONSULT_TYPE")]),v._v("\n私有变量：字母、数字组成，驼峰拼接，下划线开头，例："),t("code",[v._v("_self")]),v._v("\n普通变量：字母、数字组成，驼峰拼接，例："),t("code",[v._v("idCard")]),v._v("\n构造函数：字母组成，驼峰拼接，首字母大写，例："),t("code",[v._v("Vue()")]),v._v("\n普通函数：字母组成，驼峰拼接，动词+名词方式组合，例："),t("code",[v._v("getList()")])])]),v._v(" "),t("h4",{attrs:{id:"形参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#形参"}},[v._v("#")]),v._v(" 形参")]),v._v(" "),t("p",[v._v("形参本身是可以任意定义的，统一是为了更方便地复用/合并代码")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("参数")]),v._v(" "),t("th",[v._v("含义")]),v._v(" "),t("th",[v._v("用法示例")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("i")]),v._v(" "),t("td",[v._v("索引")]),v._v(" "),t("td",[v._v("switchTab(i) {}")])]),v._v(" "),t("tr",[t("td",[v._v("e")]),v._v(" "),t("td",[v._v("事件")]),v._v(" "),t("td",[v._v("focusHandler(e) {}")])]),v._v(" "),t("tr",[t("td",[v._v("v")]),v._v(" "),t("td",[v._v("基本类型值")]),v._v(" "),t("td",[v._v("setData(v) {}")])]),v._v(" "),t("tr",[t("td",[v._v("obj")]),v._v(" "),t("td",[v._v("对象")]),v._v(" "),t("td",[v._v("let arr = mainList.filter(obj => obj.isCheck)")])]),v._v(" "),t("tr",[t("td",[v._v("arr")]),v._v(" "),t("td",[v._v("数组")]),v._v(" "),t("td",[v._v("let arr = Array.from(obj)")])]),v._v(" "),t("tr",[t("td",[v._v("fun")]),v._v(" "),t("td",[v._v("函数")]),v._v(" "),t("td",[v._v("callback(fun) {}")])]),v._v(" "),t("tr",[t("td",[v._v("item")]),v._v(" "),t("td",[v._v("列表项")]),v._v(" "),t("td",[v._v("jumpDetail(item) {}")])]),v._v(" "),t("tr",[t("td",[v._v("element")]),v._v(" "),t("td",[v._v("forEach的项")]),v._v(" "),t("td",[v._v("forEach(element=>{})")])]),v._v(" "),t("tr",[t("td",[v._v("key,value")]),v._v(" "),t("td",[v._v("键值对")]),v._v(" "),t("td",[v._v("for (let [key, value] of arr) {}")])])])])])}),[],!1,null,null,null);_.default=s.exports}}]);