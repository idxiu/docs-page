(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{861:function(a,s,t){"use strict";t.r(s);var e=t(37),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"git基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git基本命令"}},[a._v("#")]),a._v(" Git基本命令")]),a._v(" "),t("h3",{attrs:{id:"获取master分支的最新更改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取master分支的最新更改"}},[a._v("#")]),a._v(" 获取master分支的最新更改")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git checkout master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"下载项目的最新更改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载项目的最新更改"}},[a._v("#")]),a._v(" 下载项目的最新更改")]),a._v(" "),t("p",[a._v("该命令用于拉取某分支的最新副本（建议工作时每次都输入这个命令）。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git pull 远端 分支名称 -u\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v('(远端: origin) (分支名称: 可以是"master"或者是一个已经存在的分支)')]),a._v(" "),t("h3",{attrs:{id:"创建一个分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个分支"}},[a._v("#")]),a._v(" 创建一个分支")]),a._v(" "),t("p",[a._v('由于空格不会被识别，所以请使用"-"或者"_"。')]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git checkout -b 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"在某分支上进行开发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在某分支上进行开发"}},[a._v("#")]),a._v(" 在某分支上进行开发")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git checkout 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"浏览您所做的更改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览您所做的更改"}},[a._v("#")]),a._v(" 浏览您所做的更改")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git status\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"将更改加入到本次提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将更改加入到本次提交"}},[a._v("#")]),a._v(" 将更改加入到本次提交")]),a._v(" "),t("p",[a._v('当输入"git status"时，您的更改会显示为红色。')]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('git add 红色的修改\ngit commit -m "提交的描述"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"提交您的更改到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交您的更改到服务器"}},[a._v("#")]),a._v(" 提交您的更改到服务器")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git push 远端 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"删除代码库的所有更改-不包含提交到暂存区的变更"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除代码库的所有更改-不包含提交到暂存区的变更"}},[a._v("#")]),a._v(" 删除代码库的所有更改（不包含提交到暂存区的变更）")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git checkout .\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"删除代码库的所有更改-包含未跟踪的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除代码库的所有更改-包含未跟踪的文件"}},[a._v("#")]),a._v(" 删除代码库的所有更改（包含未跟踪的文件）")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git clean -f\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"将某分支合并到master分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将某分支合并到master分支"}},[a._v("#")]),a._v(" 将某分支合并到master分支")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git checkout master\ngit merge 分支名称\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);