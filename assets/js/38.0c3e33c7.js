(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{720:function(s,t,a){s.exports=a.p+"assets/img/Snipaste_2021-10-13_13-40-07.90247521.png"},911:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"贡献规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#贡献规范"}},[s._v("#")]),s._v(" 贡献规范")]),s._v(" "),n("p",[s._v("在参与贡献之前，请先熟读本规范。")]),s._v(" "),n("h2",{attrs:{id:"必备的知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#必备的知识"}},[s._v("#")]),s._v(" 必备的知识")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("必须要会使用MarkDown语法，并遵循 "),n("a",{attrs:{href:"./01-%E7%BC%96%E5%86%99%E8%A7%84%E8%8C%83"}},[s._v("编写规范")])])]),s._v(" "),n("li",[n("p",[s._v("学习vuepress的使用，参考"),n("RouterLink",{attrs:{to:"/about/vuepress/"}},[s._v("文档")])],1)]),s._v(" "),n("li",[n("p",[s._v("需要了解 Github 的PR方式，并按照如下要求提交Commit，例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("格式: [todo] message\n\ntodo: A - ADD, U - UPDATE, D - DELETE, F - FIX BUGS\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"贡献流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#贡献流程"}},[s._v("#")]),s._v(" 贡献流程")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("下载仓库代码，本地安装，并使用"),n("code",[s._v("npm run dev")]),s._v("运行项目；")])]),s._v(" "),n("li",[n("p",[s._v("明确自己更新的文章或者内容的范畴。")]),s._v(" "),n("ul",[n("li",[s._v("如果是大的篇章，需要更新"),n("code",[s._v("config.js")]),s._v("中的目录；")]),s._v(" "),n("li",[s._v("如果是小更新，只需要在先前别人的文章基础之上进行修订即可")])])]),s._v(" "),n("li",[n("p",[s._v("新建"),n("code",[s._v("xxx.md")]),s._v("文章")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("如果是根目录，则需要创建一个README.md的文件")])]),s._v(" "),n("p",[s._v("系列文章的目录需要按照如下要求进行命名：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(720),alt:"image-20210501164344335"}})]),s._v(" "),n("p",[s._v("说明：")]),s._v(" "),n("ul",[n("li",[s._v("保证文章列表的顺序：文章以"),n("code",[s._v("0")]),s._v("或者不加"),n("code",[s._v("0")]),s._v("，从1开始，子篇章使用"),n("code",[s._v(".")]),s._v("进行扩展")]),s._v(" "),n("li",[s._v("文章内，不要设置"),n("code",[s._v("sidebar: auto")])]),s._v(" "),n("li",[s._v("文章内的一级标题与文件名同名，并去除标号，如："),n("code",[s._v("1-搭建开发环境.md")]),s._v("的一级标题应该是"),n("code",[s._v("搭建开发环境")])]),s._v(" "),n("li",[s._v("所有.md的文件的图片，存放在相对目录的"),n("code",[s._v("assets")]),s._v("目录中")])])]),s._v(" "),n("li",[n("p",[s._v("配置"),n("code",[s._v("config.js")]),s._v("添加自定义目录")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sidebar "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("title")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("collapsable")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("children")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("genSidebarConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'project/community-pc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" siderBarOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("关于"),n("code",[s._v("genSidebarConfig")]),s._v("，主要的目的是为了自动形成数组目录，参考"),n("RouterLink",{attrs:{to:"/about/vuepress/01-配置说明.html#配置文件"}},[s._v("说明")]),s._v("：")],1),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("genSidebarConfig")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'project/community-pc'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" siderBarOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 结果如下")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/1-搭建开发环境'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/2-首页模块'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/2.1-发贴功能'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/2.2-文章详情'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/3-消息模块'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/4-热门模块'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/5-个人中心'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'community-pc/6-发布上线'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("按照 "),n("a",{attrs:{href:"./01-%E7%BC%96%E5%86%99%E8%A7%84%E8%8C%83"}},[s._v("编写规范")]),s._v("书写，一定注意不要有4级标题；")])]),s._v(" "),n("li",[n("p",[s._v("每完成一个部分进行一次commit；")])]),s._v(" "),n("li",[n("p",[s._v("完成一个大的功能介绍之后，提交一次PR；")])]),s._v(" "),n("li",[n("p",[s._v("管理员完成PR检查后，会自动合并，并部署发布出来。")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);