(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{767:function(t,e,r){"use strict";r.r(e);var a=r(67),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"git工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#git工具"}},[t._v("#")]),t._v(" Git工具")]),t._v(" "),r("blockquote",[r("p",[t._v("如果您的电脑已安装Git命令行工具，请跳过本章。")])]),t._v(" "),r("h2",{attrs:{id:"windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" Windows")]),t._v(" "),r("p",[t._v("Windows需要电脑本机安装git-bash，"),r("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Bash下载地址"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("如果上面的地址，无法访问，请用迅雷直接使用下面的地址进行下载：")])]),t._v(" "),r("p",[t._v("windows git安装包，是一个exe文件，双击打开，不停的【下一步】即可完成安装。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/git-for-windows/git/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("git下载地址"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"macosx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macosx"}},[t._v("#")]),t._v(" MacOSX")]),t._v(" "),r("blockquote",[r("p",[t._v("MacOSX 部分机型自带git工具，如果没有，可以通过"),r("a",{attrs:{href:"https://brew.sh/index_zh-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("brew"),r("OutboundLink")],1),t._v("安装git命令工具")])]),t._v(" "),r("p",[t._v("安装命令：")]),t._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("/bin/bash -c "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh"),r("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\n\nbrew "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("p",[t._v("如果brew因网络问题安装失败，请参考："),r("a",{attrs:{href:"https://www.jianshu.com/p/06a9a59e7040",target:"_blank",rel:"noopener noreferrer"}},[t._v("详情"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"问题排查"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题排查"}},[t._v("#")]),t._v(" 问题排查")]),t._v(" "),r("p",[t._v("打开"),r("code",[t._v("操作系统终端命令行")]),t._v("软件，输入"),r("code",[t._v("git --version")]),t._v(", 检查下命令是否存在。")]),t._v(" "),r("p",[t._v("如果终端出现下列错误，则说明git"),r("code",[t._v("没有")]),t._v("安装成功。")]),t._v(" "),r("ul",[r("li",[t._v("错误1： "),r("code",[t._v("'git' 不是内部或外部命令，也不是可运行的程序或批处理文件。")])]),t._v(" "),r("li",[t._v("错误2："),r("code",[t._v("git: command not found")])])]),t._v(" "),r("blockquote",[r("p",[t._v("特别注意：windows电脑，如果您确定已成功安装Git安装包，但是命令行还是出现上面的错误，请将git安装目录加入到系统环境变量。")])]),t._v(" "),r("h2",{attrs:{id:"其他工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他工具"}},[t._v("#")]),t._v(" 其他工具")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/3c480961210f?from=timeline",target:"_blank",rel:"noopener noreferrer"}},[t._v("vscode 中使用 git"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("sourctree"),r("OutboundLink")],1),t._v(" 可以选择内置 git")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://tortoisegit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TortoiseGit"),r("OutboundLink")],1),t._v(" "),r("a",{attrs:{href:"https://www.cnblogs.com/xiuxingzhe/p/9312929.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),r("blockquote",[r("p",[t._v("使用 "),r("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),r("OutboundLink")],1),t._v(" 作为版本管理工具，代码则托管在内网的 "),r("code",[t._v("gitLab")]),t._v(" 中：")])])])}),[],!1,null,null,null);e.default=s.exports}}]);