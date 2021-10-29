(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{644:function(s,t,a){s.exports=a.p+"assets/img/image-20210729224040426.aa7846c2.aa7846c2.png"},769:function(s,t,a){"use strict";a.r(t);var n=a(40),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"核心概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[s._v("#")]),s._v(" 核心概念")]),s._v(" "),n("h2",{attrs:{id:"helloworld"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#helloworld"}},[s._v("#")]),s._v(" HelloWorld")]),s._v(" "),n("p",[s._v("首先是创建项目，创建一个名字为"),n("code",[s._v("webpack-learn")]),s._v("的文件夹（这里千万别创建成"),n("code",[s._v("webpack")]),s._v("），并且进入文件夹使用"),n("code",[s._v("npm init")]),s._v("进行初始化：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建目录并且进入")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# webpack-learn")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 webpack 和 webpack-cli到开发依赖")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i webpack@5 -D\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i webpack-cli@4 -D\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意这里安装的是webpack 5与webpack-cli 4的版本")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("创建目录src，其结构如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://b3logfile.com/file/2021/10/da4a65467db84657b8c15b5de6d42817.png",alt:"image-20210729211229579"}})]),s._v(" "),n("p",[s._v("创建"),n("code",[s._v("hello-world.js")]),s._v("文件：")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("module.exports = 'hello world';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("创建 "),n("code",[s._v("index.js")]),s._v("文件：")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const sayHello = require('./hello-world')\n\nconsole.log(sayHello)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("下面尝试一下webpack打包：")]),s._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('// 方法一\nnpx webpack\n\n// 方法二 scripts中添加 "start": "webpack"\nnpm run start\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("module.exports")]),s._v("与"),n("code",[s._v("require")]),s._v("是node.js所遵循的"),n("code",[s._v("Commonjs")]),s._v("规范；")]),s._v(" "),n("li",[n("code",[s._v("module.exports")]),s._v("导出了一个字符串；")]),s._v(" "),n("li",[n("code",[s._v("require")]),s._v("引用的如果是js文件，则可以省略；")])]),s._v(" "),n("p",[s._v("打包结果：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://b3logfile.com/file/2021/10/154303fac343439ab8c907d99f6f425c.png",alt:"image-20210729211452723"}})]),s._v(" "),n("p",[s._v("执行成功，index.js 文件被打包到了"),n("code",[s._v("dist")]),s._v("文件夹下了，同时提示我们默认使用了"),n("code",[s._v("production")]),s._v(" mode，即生产环境，打开"),n("code",[s._v("dist/main.js")]),s._v("，里面的代码的确是被压缩的，说明是生产环境打包；")]),s._v(" "),n("p",[s._v("下面继续修改"),n("code",[s._v("package.json")]),s._v("添加"),n("code",[s._v("scripts")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dev"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode development"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webpack --mode production"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://b3logfile.com/file/2021/10/d755457832014668be76264f5698beb0.png",alt:"image-20210729212308012"}})]),s._v(" "),n("p",[s._v("同样可以尝试"),n("code",[s._v("build")]),s._v("脚本，这里来说明一下这两个模式的内容，"),n("strong",[s._v("模式其实就是webpack内置了一些打包的参数。")])]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("选项")]),s._v(" "),n("th",[s._v("描述")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[n("code",[s._v("development")])]),s._v(" "),n("td",[s._v("会将 "),n("code",[s._v("DefinePlugin")]),s._v(" 中 "),n("code",[s._v("process.env.NODE_ENV")]),s._v(" 的值设置为 "),n("code",[s._v("development")]),s._v(". 为模块和 chunk 启用有效的名。")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("production")])]),s._v(" "),n("td",[s._v("会将 "),n("code",[s._v("DefinePlugin")]),s._v(" 中 "),n("code",[s._v("process.env.NODE_ENV")]),s._v(" 的值设置为 "),n("code",[s._v("production")]),s._v("。为模块和 chunk 启用确定性的混淆名称，"),n("code",[s._v("FlagDependencyUsagePlugin")]),s._v("，"),n("code",[s._v("FlagIncludedChunksPlugin")]),s._v("，"),n("code",[s._v("ModuleConcatenationPlugin")]),s._v("，"),n("code",[s._v("NoEmitOnErrorsPlugin")]),s._v(" 和 "),n("code",[s._v("TerserPlugin")]),s._v(" 。")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("none")])]),s._v(" "),n("td",[s._v("不使用任何默认优化选项")])])])]),s._v(" "),n("p",[s._v("如果没有设置，webpack 会给 "),n("code",[s._v("mode")]),s._v(" 的默认值设置为 "),n("code",[s._v("production")]),s._v("。上面的内容，我们后续会介绍到！")]),s._v(" "),n("h2",{attrs:{id:"cli进阶"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cli进阶"}},[s._v("#")]),s._v(" CLI进阶")]),s._v(" "),n("p",[s._v("一般的CLI的命令都会有一个"),n("code",[s._v("help")]),s._v("命令：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("➜ npx webpack "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v("\n\nUsage: webpack "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nAlternative usage to run commands: webpack "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nThe build tool "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" modern web applications.\n\nOptions:\n  -c, --config "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                Provide path to a webpack configuration "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" e.g. ./webpack.config.js.\n  --config-name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("               Name of the configuration to use.\n  -m, --merge                            Merge two or "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" configurations using "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-merge'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n  --env "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                       Environment passed to the configuration when it is a function.\n  --node-env "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                     Sets process.env.NODE_ENV to the specified value.\n  --progress "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                     Print compilation progress during build.\n  -j, --json "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                     Prints result as JSON or store it "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" a file.\n  -d, --devtool "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                  Determine "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" maps to use.\n  --no-devtool                           Do not generate "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" maps.\n  --entry "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                     The entry point"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" of your application e.g. ./src/main.js.\n  --mode "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                         Defines the mode to pass to webpack.\n  --name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                         Name of the configuration. Used when loading multiple configurations.\n  -o, --output-path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              Output location of the "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" generated by webpack e.g. ./dist/.\n  --stats "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                        It instructs webpack on how to treat the stats e.g. verbose.\n  --no-stats                             Disable stats output.\n  -t, --target "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                Sets the build target e.g. node.\n  --no-target                            Negative "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'target'")]),s._v(" option.\n  -w, --watch                            Watch "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" files changes.\n  --no-watch                             Do not "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changes.\n  --watch-options-stdin                  Stop watching when stdin stream has ended.\n  --no-watch-options-stdin               Do not stop watching when stdin stream has ended.\n\nGlobal options:\n  --color                                Enable colors on console.\n  --no-color                             Disable colors on console.\n  -v, --version                          Output the version number of "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-cli'")]),s._v(" and "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-dev-server'")]),s._v(" and commands.\n  -h, --help "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("verbose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                   Display "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commands and options.\n\nCommands:\n  build"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("bundle"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("b "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  Run webpack "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default command, can be omitted"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  configtest"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("t "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("config-path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("             Validate a webpack configuration.\n  "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("option"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("              Display "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commands and options.\n  info"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("i "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                       Outputs information about your system.\n  serve"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("server"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("            Run the webpack dev server. To see all available options you need to "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-dev-server'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n  version"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("v")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commands"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("                Output the version number of "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack'")]),s._v(", "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-cli'")]),s._v(" and "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack-dev-server'")]),s._v(" and commands.\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("w "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         Run webpack and "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" files changes.\n\nTo see list of all supported commands and options run "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'webpack --help=verbose'")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\nWebpack documentation: https://webpack.js.org/.\nCLI documentation: https://webpack.js.org/api/cli/.\nMade with ♥ by the webpack team.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])]),n("p",[s._v("说明：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("--config")]),s._v("，"),n("code",[s._v("-c")]),s._v("：指定一个 Webpack 配置文件的路径；")]),s._v(" "),n("li",[n("code",[s._v("--mode")]),s._v("：指定打包环境的 mode，取值为"),n("code",[s._v("development")]),s._v("和"),n("code",[s._v("production")]),s._v("，分别对应着开发环境和生产环境；")]),s._v(" "),n("li",[n("code",[s._v("--json")]),s._v("：输mode出 Webpack 打包的结果，可以使用"),n("code",[s._v("webpack --json > stats.json")]),s._v("方式将打包结果输出到指定的文件；")]),s._v(" "),n("li",[n("code",[s._v("--progress")]),s._v("：显示 Webpack 打包进度；")]),s._v(" "),n("li",[n("code",[s._v("--watch")]),s._v(", "),n("code",[s._v("-w")]),s._v("：watch 模式打包，监控文件变化之后重新开始打包；")])]),s._v(" "),n("h2",{attrs:{id:"配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),n("p",[s._v("Webpack 是可配置的模块打包工具，我们可以通过修改 Webpack 的配置文件（"),n("code",[s._v("webpack.config.js")]),s._v("）来对 Webpack 进行配置，Webpack 的配置文件是遵循 Node.js 的 CommonJS 模块规范的，即：")]),s._v(" "),n("ul",[n("li",[s._v("通过"),n("code",[s._v("require()")]),s._v("语法导入其他文件或者使用 Node.js 内置的模块")]),s._v(" "),n("li",[s._v("普通的 JavaScript 编写语法，包括变量、函数、表达式等")])]),s._v(" "),n("p",[s._v("说白了，"),n("code",[s._v("webpack.config.js")]),s._v("是一个 Node.js 的模块，简单的 webpack.config.js 示例")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'development'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    entry"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        filename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'server.bundle.js'")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("上面示例中，使用 CommonJS 的"),n("code",[s._v("require")]),s._v("引入 Node.js 内置的"),n("code",[s._v("path")]),s._v("模块，然后通过"),n("code",[s._v("module.exports")]),s._v("将 Webpack 的配置导出。")]),s._v(" "),n("blockquote",[n("p",[s._v("Tips：Webpack 的配置是一个 Node.js 模块，所以并不只是 JSON 对象。")])]),s._v(" "),n("p",[s._v("默认情况下，Webpack 会查找执行目录下面的"),n("code",[s._v("webpack.config.js")]),s._v("作为配置，如果需要指定某个配置文件，可以使用下面的命令：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("webpack -c webpack.config.js\n\n// 或者 默认读取根目录中的 webpack.config.js文件\nwebpack\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("如果 Webpack 不是全局安装，则可以在项目目录下实行：")]),s._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("node ./node_modules/webpack/bin/webpack --config webpack.config.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("或者使用"),n("code",[s._v("npx")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("npx webpack --config webpack.config.js\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("打包结果展示：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(644),alt:"image-20210729224040426"}})]),s._v(" "),n("p",[s._v("说明：为什么main.js还在dist，别急，后面会进行打包之后删除；")]),s._v(" "),n("p",[s._v("除了配置文件的语法多样之外，对于配置的类型也是多样的，最常见的是直接作为一个对象来使用，除了使用对象，Webpack 还支持函数、Promise 和多配置数组。")]),s._v(" "),n("h2",{attrs:{id:"核心概念-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#核心概念-2"}},[s._v("#")]),s._v(" 核心概念")]),s._v(" "),n("p",[s._v("讲完 Webpack 配置文件，下面讲下配置文件中的配置项：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("参数")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[n("code",[s._v("entry")])]),s._v(" "),n("td",[s._v("入口起点(entry point) 指示 webpack 应该使用哪个模块，来作为构建其内部 "),n("a",{attrs:{href:"https://webpack.docschina.org/concepts/dependency-graph/",target:"_blank",rel:"noopener noreferrer"}},[s._v("依赖图(dependency graph) "),n("strong",[s._v("(opens new window)")]),n("OutboundLink")],1),s._v("的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("output")])]),s._v(" "),n("td",[s._v("默认值是 "),n("code",[s._v("./src/index.js")]),s._v("output 属性告诉 webpack 在哪里输出它所创建的 "),n("em",[s._v("bundle")]),s._v(" ，以及如何命名这些文件。")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("mode")])]),s._v(" "),n("td",[s._v("通过选择 "),n("code",[s._v("development")]),s._v(", "),n("code",[s._v("production")]),s._v(" 或 "),n("code",[s._v("none")]),s._v(" 之中的一个，来设置 "),n("code",[s._v("mode")]),s._v(" 参数，可以启用 webpack 内置在相应环境下的优化。其默认值为 "),n("code",[s._v("production")]),s._v("。")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("loader")])]),s._v(" "),n("td",[s._v("模块转化器，模块的处理器，对模块进行转换处理；webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。"),n("strong",[s._v("loader")]),s._v(" 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 "),n("a",{attrs:{href:"https://webpack.docschina.org/concepts/modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("模块 "),n("strong",[s._v("(opens new window)")]),n("OutboundLink")],1),s._v("，以供应用程序使用，以及被添加到依赖图中。")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("plugin")])]),s._v(" "),n("td",[s._v("插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。")])])])]),s._v(" "),n("p",[s._v("还有一些其他的概念：")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("参数")]),s._v(" "),n("th",[s._v("说明")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[n("code",[s._v("module")])]),s._v(" "),n("td",[s._v("开发中每一个文件都可以看做 module，模块不局限于 js，也包含 css、图片等")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("chunk")])]),s._v(" "),n("td",[s._v("代码块，一个 chunk 可以由多个模块组成")])]),s._v(" "),n("tr",[n("td",[n("code",[s._v("bundle")])]),s._v(" "),n("td",[s._v("最终打包完成的文件，一般就是和 chunk 一一对应的关系，bundle 就是对 chunk 进行便意压缩打包等处理后的产出")])])])]),s._v(" "),n("blockquote",[n("p",[s._v("Webpack 不仅仅支持 js 配置，还支持 ts（TypeScript）、CoffeeScript 甚至 "),n("a",{attrs:{href:"https://reactjs.org/docs/introducing-jsx.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("JSX "),n("strong",[s._v("(opens new window)")]),n("OutboundLink")],1),s._v("语法的配置，不同语言其实核心配置项都不变，只不过语法不同而已 ——原因：是由于有很多不同的loaders！")])])])}),[],!1,null,null,null);t.default=e.exports}}]);