(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{552:function(e,t,r){"use strict";r.r(t);var a=r(8),_=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_5-标志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-标志"}},[e._v("#")]),e._v(" 5. 标志")]),e._v(" "),t("p",[e._v("标志也叫模式修正符，因为它可以用来修改表达式的搜索结果。\n这些标志可以任意的组合使用，它也是整个正则表达式的一部分。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("标志")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("i")]),e._v(" "),t("td",[e._v("忽略大小写。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("g")]),e._v(" "),t("td",[e._v("全局搜索。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("m")]),e._v(" "),t("td",[e._v("多行修饰符：锚点元字符 "),t("code",[e._v("^")]),e._v(" "),t("code",[e._v("$")]),e._v(" 工作范围在每行的起始。")])])])]),e._v(" "),t("h3",{attrs:{id:"_5-1-忽略大小写-case-insensitive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-忽略大小写-case-insensitive"}},[e._v("#")]),e._v(" 5.1 忽略大小写 (Case Insensitive)")]),e._v(" "),t("p",[e._v("修饰语 "),t("code",[e._v("i")]),e._v(" 用于忽略大小写。\n例如，表达式 "),t("code",[e._v("/The/gi")]),e._v(" 表示在全局搜索 "),t("code",[e._v("The")]),e._v("，在后面的 "),t("code",[e._v("i")]),e._v(" 将其条件修改为忽略大小写，则变成搜索 "),t("code",[e._v("the")]),e._v(" 和 "),t("code",[e._v("The")]),e._v("，"),t("code",[e._v("g")]),e._v(" 表示全局搜索。")]),e._v(" "),t("pre",[e._v('"The" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" fat cat sat on the mat.\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/dpQyf9/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[e._v('"/The/gi" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" fat cat sat on "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" mat.\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/ahfiuh/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_5-2-全局搜索-global-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-全局搜索-global-search"}},[e._v("#")]),e._v(" 5.2 全局搜索 (Global search)")]),e._v(" "),t("p",[e._v("修饰符 "),t("code",[e._v("g")]),e._v(" 常用于执行一个全局搜索匹配，即（不仅仅返回第一个匹配的，而是返回全部）。\n例如，表达式 "),t("code",[e._v("/.(at)/g")]),e._v(" 表示搜索 任意字符（除了换行）+ "),t("code",[e._v("at")]),e._v("，并返回全部结果。")]),e._v(" "),t("pre",[e._v('"/.(at)/" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v(" cat sat on the mat.\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/jnk6gM/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[e._v('"/.(at)/g" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("cat")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("sat")])]),e._v(" on the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat")])]),e._v(".\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/dO1nef/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_5-3-多行修饰符-multiline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-多行修饰符-multiline"}},[e._v("#")]),e._v(" 5.3 多行修饰符 (Multiline)")]),e._v(" "),t("p",[e._v("多行修饰符 "),t("code",[e._v("m")]),e._v(" 常用于执行一个多行匹配。")]),e._v(" "),t("p",[e._v("像之前介绍的 "),t("code",[e._v("(^,$)")]),e._v(" 用于检查格式是否是在待检测字符串的开头或结尾。但我们如果想要它在每行的开头和结尾生效，我们需要用到多行修饰符 "),t("code",[e._v("m")]),e._v("。")]),e._v(" "),t("p",[e._v("例如，表达式 "),t("code",[e._v("/at(.)?$/gm")]),e._v(" 表示小写字符 "),t("code",[e._v("a")]),e._v(" 后跟小写字符 "),t("code",[e._v("t")]),e._v(" ，末尾可选除换行符外任意字符。根据 "),t("code",[e._v("m")]),e._v(" 修饰符，现在表达式匹配每行的结尾。")]),e._v(" "),t("pre",[e._v('"/.at(.)?$/" => The fat\n                cat sat\n                on the '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat.")])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/hoGMkP/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[e._v('"/.at(.)?$/gm" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v("\n                  cat "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("sat")])]),e._v("\n                  on the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat.")])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/E88WE2/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=_.exports}}]);