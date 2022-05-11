(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{709:function(s,a,t){s.exports=t.p+"assets/img/image-20220511161457299.07ae9e20.png"},710:function(s,a,t){s.exports=t.p+"assets/img/image-20220511171942976.e6945349.png"},711:function(s,a,t){s.exports=t.p+"assets/img/image-20220511172152175.139f7770.png"},861:function(s,a,t){"use strict";t.r(a);var e=t(37),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git规范"}},[s._v("#")]),s._v(" git规范")]),s._v(" "),e("h3",{attrs:{id:"git-代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-代理"}},[s._v("#")]),s._v(" git 代理")]),s._v(" "),e("p",[s._v("解决方法就是加速访问 github,本人使用蓝灯的全局代理功能")]),s._v(" "),e("p",[e("img",{attrs:{src:t(709),alt:"image-20220511161457299"}})]),s._v(" "),e("p",[s._v("再配置 git 代理")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:51252\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global https.proxy "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:51252\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("以上设置后就可以随意git 操作GitHub仓库了")]),s._v(" "),e("p",[s._v("撤销 git 代理")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset http.proxy\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset https.proxy\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("查看 git 配置")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"权限管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权限管理"}},[s._v("#")]),s._v(" 权限管理")]),s._v(" "),e("p",[s._v("GitLib有五种身份权限，分别是：")]),s._v(" "),e("ul",[e("li",[s._v("Owner 项目所有者，拥有所有的操作权限")]),s._v(" "),e("li",[s._v("Master 项目的管理者，除更改、删除项目元信息外其它操作均可")]),s._v(" "),e("li",[s._v("Developer 项目的开发人员，做一些开发工作，对受保护内容无权限")]),s._v(" "),e("li",[s._v("Reporter 项目的报告者，只有项目的读权限，可以创建代码片断")]),s._v(" "),e("li",[s._v("Guest 项目的游客，只能提交问题和评论内容")])]),s._v(" "),e("h3",{attrs:{id:"基本使用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本使用命令"}},[s._v("#")]),s._v(" 基本使用命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch  显示所有分支 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master  拉取远程主机master分支上的内容\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master 把本地内容推到远程主机master分支上\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch b1 从当前分支创建一个叫b1的分支 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout b1 切换到b1分支 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b b1 相当于以上两条命令的组合 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master 切换到master主分支 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge b1 把b1分支的代码合并到master上 \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d b1 删除b1分支，不能在被删除分支上执行\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"使用行为规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用行为规范"}},[s._v("#")]),s._v(" 使用行为规范")]),s._v(" "),e("ul",[e("li",[s._v("创建自己的分支，在自己的分支上进行开发")]),s._v(" "),e("li",[s._v("写好每次提交的 description 是个好习惯")]),s._v(" "),e("li",[s._v("需求完成或者 bug 修复后，利用自动化部署工具部署 dev 分支的代码到测试环境进行验证")]),s._v(" "),e("li",[s._v("自测通过后将分支合并到dev分支提交到远程主机")])]),s._v(" "),e("h3",{attrs:{id:"分支规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支规范"}},[s._v("#")]),s._v(" 分支规范")]),s._v(" "),e("h4",{attrs:{id:"主分支master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主分支master"}},[s._v("#")]),s._v(" 主分支Master")]),s._v(" "),e("p",[s._v("首先，代码库应该有一个、且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布。")]),s._v(" "),e("p",[s._v("Git主分支的名字，默认叫做Master。它是自动建立的，版本库初始化以后，默认就是在主分支在进行开发。")]),s._v(" "),e("h4",{attrs:{id:"开发分支dev"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发分支dev"}},[s._v("#")]),s._v(" 开发分支Dev")]),s._v(" "),e("p",[s._v("主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做Dev。")]),s._v(" "),e("p",[s._v('这个分支可以用来生成代码的最新隔夜版本（nightly）。如果想正式对外发布，就在Master分支上，对Dev分支进行"合并"（merge）。')]),s._v(" "),e("blockquote",[e("p",[s._v("Git创建Dev分支的命令：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("将Dev分支发布到Master分支的命令：")])]),s._v(" "),e("ul",[e("li",[s._v("切换到Master分支")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("对Dev分支进行合并")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('这里稍微解释一下，上一条命令的--no-ff参数是什么意思。默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将Master分支指向Dev分支。')]),s._v(" "),e("p",[s._v("使用--no-ff参数后，会执行正常合并，在Master分支上生成一个新节点。为了保证版本演进的清晰，我们希望采用这种做法。")]),s._v(" "),e("h4",{attrs:{id:"临时性分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#临时性分支"}},[s._v("#")]),s._v(" 临时性分支")]),s._v(" "),e("p",[s._v("前面讲到版本库的两条主要分支：Master和Dev。前者用于正式发布，后者用于日常开发。其实，常设分支只需要这两条就够了，不需要其他了。")]),s._v(" "),e("p",[s._v("但是，除了常设分支以外，还有一些临时性分支，用于应对一些特定目的的版本开发。 临时性分支主要有两种：")]),s._v(" "),e("ul",[e("li",[s._v("开发功能（dev-*）分支")]),s._v(" "),e("li",[s._v("修补bug（fixbug）分支")])]),s._v(" "),e("p",[s._v("这两种分支都属于临时性需要，使用完合并以后，临时分支不要提交到远程代码库，使得远程代码库的常设分支始终只有Master和Dev。")]),s._v(" "),e("h4",{attrs:{id:"开发功能分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发功能分支"}},[s._v("#")]),s._v(" 开发功能分支")]),s._v(" "),e("p",[s._v('接下来，来看这两种"临时性分支"。 第一种是开发功能分支，它是为了开发人员独立开发不受其他干扰，从Dev分支上面分出来的。开发完成后，要再并入Dev。')]),s._v(" "),e("blockquote",[e("p",[s._v("分支的名字，可以采用dev-*的形式命名。")])]),s._v(" "),e("ul",[e("li",[s._v("创建一个分支：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b dev-x dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("开发完成后，将分支合并到dev分支：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff dev-x\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"修补bug分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修补bug分支"}},[s._v("#")]),s._v(" 修补bug分支")]),s._v(" "),e("p",[s._v("后一种是修补bug分支。软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。 修补bug分支是从Master分支上面分出来的。修补结束以后，再合并进Master和Dev分支。它的命名，可以采用fixbug-*的形式。")]),s._v(" "),e("ul",[e("li",[s._v("创建一个修补bug分支：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b fixbug-0.1 master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("修补结束后，合并到master分支：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff fixbug-0.1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("再合并到develop分支：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout develop\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff fixbug-0.1\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin dev\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"代码合并打tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码合并打tag"}},[s._v("#")]),s._v(" 代码合并打tag")]),s._v(" "),e("p",[s._v("一个迭代上线并且线上回归结束后，我们通常要做两件事：")]),s._v(" "),e("p",[s._v("1、Developer提交Merge Requests，备注当前版本号，申请将该迭代分支合并到master分支")]),s._v(" "),e("p",[s._v("2、Master审核通过merge代码之后，对master分支打个标签，以便标识和快速退回到此版本；TAG版本号和应和项目版本号保持一致。例："),e("code",[s._v("TAG-1.0.0")]),s._v(" "),e("code",[s._v("TAG-1.0.1")]),s._v(" ...")]),s._v(" "),e("p",[s._v("打tag可以通过git平台手动操作或通过以下命令行：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v(".0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"提交pr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交pr"}},[s._v("#")]),s._v(" 提交PR")]),s._v(" "),e("p",[s._v("打开命令行，关联upstream原始仓库")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" upstream https://github.com/xxx/xxxA.git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("内容创作完成后，执行下面的命令，")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全量提交")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or 提交某个文件")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" 文件名\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit，添加commit信息")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'message'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# push推送到fork远程仓库")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保持同步原始仓库")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch upstream\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("完成推送后，打开"),e("code",[s._v("Fork")]),s._v("到自己仓库GitHub地址，选择"),e("code",[s._v("Pull requests")]),s._v("，点击"),e("code",[s._v("New pull request")])]),s._v(" "),e("p",[e("strong",[e("img",{attrs:{src:t(710),alt:"image-20220511171942976"}})])]),s._v(" "),e("p",[s._v("按照规范填写title及备注信息，点击"),e("code",[s._v("Create pull request")]),s._v("即可完成提交")]),s._v(" "),e("p",[e("img",{attrs:{src:t(711),alt:"image-20220511172152175"}})]),s._v(" "),e("p",[s._v("最后等待审核者审核即可。")])])}),[],!1,null,null,null);a.default=n.exports}}]);