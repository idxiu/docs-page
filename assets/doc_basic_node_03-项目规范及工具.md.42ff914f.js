import{_ as s,o as e,c as a,b as n,d as l,e as p,a as o,r as t}from"./app.b322fe29.js";const c=JSON.parse('{"title":"项目规范及工具","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"集成 EditorConfig","slug":"集成-editorconfig","link":"#集成-editorconfig","children":[]},{"level":2,"title":"集成 Prettier","slug":"集成-prettier","link":"#集成-prettier","children":[]},{"level":2,"title":"集成 ESLint","slug":"集成-eslint","link":"#集成-eslint","children":[]},{"level":2,"title":"解决 Prettier 和 ESLint 的冲突","slug":"解决-prettier-和-eslint-的冲突","link":"#解决-prettier-和-eslint-的冲突","children":[]},{"level":2,"title":"集成 husky 和 lint-staged","slug":"集成-husky-和-lint-staged","link":"#集成-husky-和-lint-staged","children":[{"level":3,"title":"配置 husky","slug":"配置-husky","link":"#配置-husky","children":[]},{"level":3,"title":"配置 lint-staged","slug":"配置-lint-staged","link":"#配置-lint-staged","children":[]}]}],"relativePath":"doc/basic/node/03-项目规范及工具.md","lastUpdated":1663311966000}'),i={name:"doc/basic/node/03-项目规范及工具.md"},r=l("h1",{id:"项目规范及工具",tabindex:"-1"},[p("项目规范及工具 "),l("a",{class:"header-anchor",href:"#项目规范及工具","aria-hidden":"true"},"#")],-1),d=o('<h2 id="集成-editorconfig" tabindex="-1">集成 EditorConfig <a class="header-anchor" href="#集成-editorconfig" aria-hidden="true">#</a></h2><blockquote><p><strong><a href="https://editorconfig.org/" target="_blank" rel="noreferrer">EditorConfig</a></strong> 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。</p></blockquote><p>在项目根目录下增加 <code>.editorconfig</code> 文件， 并配置以下内容：</p><div class="language-yaml"><button class="copy"></button><span class="lang">yaml</span><pre><code><span class="line"><span style="color:#676E95;"># Editor configuration, see http://editorconfig.org</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 表示是最顶层的 EditorConfig 配置文件</span></span>\n<span class="line"><span style="color:#C3E88D;">root = true</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 表示所有文件适用</span></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">*</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 设置文件字符集为 utf-8</span></span>\n<span class="line"><span style="color:#C3E88D;">charset = utf-8</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 缩进风格（tab | space）</span></span>\n<span class="line"><span style="color:#C3E88D;">indent_style = space</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 缩进大小</span></span>\n<span class="line"><span style="color:#C3E88D;">indent_size = 4</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 控制换行类型(lf | cr | crlf)</span></span>\n<span class="line"><span style="color:#C3E88D;">end_of_line = lf</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 去除行首的任意空白字符</span></span>\n<span class="line"><span style="color:#C3E88D;">trim_trailing_whitespace = true</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># 始终在文件末尾插入一个新行</span></span>\n<span class="line"><span style="color:#C3E88D;">insert_final_newline = true</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;"># md 文件适用以下规则</span></span>\n<span class="line"><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.md</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#C3E88D;">max_line_length = off</span></span>\n<span class="line"><span style="color:#C3E88D;">trim_trailing_whitespace = false</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>VSCode 使用 EditorConfig 需要去插件市场下载插件 <code>EditorConfig for VS Code</code> 。WebStorm 则不需要安装，直接使用 EditorConfig 配置即可。</p><p><img src="/assets/image-20210504101228402.b87df61b.png" alt="image-20210504101228402"></p></div><h2 id="集成-prettier" tabindex="-1">集成 Prettier <a class="header-anchor" href="#集成-prettier" aria-hidden="true">#</a></h2><blockquote><p><strong><a href="https://prettier.io/" target="_blank" rel="noreferrer">Prettier</a></strong> 是一款强大的代码格式化工具，支持 <code>JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown</code> 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。</p></blockquote><ul><li>安装 Prettier</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i prettier -D</span></span>\n<span class="line"></span></code></pre></div><ul><li><p>创建 Prettier 配置文件 Prettier 支持多种格式的配置文件，比如 <code>.json</code>、<code>.yml</code>、<code>.yaml</code>、<code>.js</code> 等。 在本项目根目录下创建 <code>.prettierrc</code> 文件。</p></li><li><p>配置 <code>.prettierrc</code> 在本项目中，我们进行如下简单配置，关于更多配置项信息，请前往官网查看 <a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noreferrer">Prettier-Options</a> 。</p></li></ul><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">useTabs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">tabWidth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">printWidth</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">singleQuote</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">trailingComma</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">bracketSpacing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">semi</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>Prettier 安装且配置好之后，就能使用命令来格式化代码</p><ul><li>格式化所有文件（. 表示所有文件）</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npx prettier --write </span><span style="color:#82AAFF;">.</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>VSCode 编辑器使用 <code>Prettier</code> 配置需要下载插件 <code>Prettier - Code formatter</code>； WebStorm 则不需要安装，直接使用 EditorConfig 配置即可。</p><p><img src="/assets/image-20210504102416728.9d9b860a.png" alt="image-20210504102416728"></p></div><h2 id="集成-eslint" tabindex="-1">集成 ESLint <a class="header-anchor" href="#集成-eslint" aria-hidden="true">#</a></h2><p><a href="https://eslint.org/" target="_blank" rel="noreferrer">ESLint</a> 是一款用于查找并报告代码中问题的工具，并且支持部分问题自动修复。其核心是通过对代码解析得到的 <code>AST</code>（Abstract Syntax Tree 抽象语法树）进行模式匹配，来分析代码达到检查代码质量和风格问题的能力。 使用 <code>ESLint</code> 可以尽可能的避免团队成员之间编程能力和编码习惯不同所造成的代码质量问题，一边写代码一边查找问题，如果发现错误，就给出规则提示，并且自动修复，长期下去，可以促使团队成员往同一种编码风格靠拢。</p><ul><li>安装 eslint</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i -D eslint</span></span>\n<span class="line"></span></code></pre></div><ul><li><p>配置 ESLint</p><blockquote><p>ESLint 安装成功后，执行 <code>npx eslint --init</code>，然后按照终端操作提示完成一系列设置来创建配置文件。</p></blockquote></li></ul><p><img src="/assets/image-20210504103213588.78feea6a.png" alt="image-20210504103213588"></p><ul><li><p>How would you like to use ESLint? ...(你想如何使用 ESLint?…)</p><blockquote><p>我这里选择第三个，检查语法，发现问题，并强制代码样式</p></blockquote></li></ul><p><img src="/assets/image-20210504103418834.2a889938.png" alt="image-20210504103418834"></p><ul><li><p>What type of modules does your project use? ... （你的项目使用什么类型的模块?…）</p><blockquote><p>项目支持 es6+语法，所以这里就直接选用第一项：JavaScript modules (import/export)</p></blockquote></li><li><p>Which framework does your project use? ... （你的项目使用哪种框架?…）</p><blockquote><p>这里并未使用 vue 和 react，所以选择 none of these</p></blockquote></li></ul><p><img src="/assets/image-20210504104452973.e028f22a.png" alt="image-20210504104452973"></p><ul><li><p>Does your project use TypeScript? (你的项目使用 TypeScript 吗?)</p><blockquote><p>项目中并没有使用 Typescript，所以选择 No</p></blockquote></li></ul><p><img src="/assets/image-20210504104610444.28239063.png" alt="image-20210504104610444"></p><ul><li><p>Where does your code run?(你的代码在哪里运行?)</p><blockquote><p>这是 node 项目，所以不需要选择浏览器环境</p></blockquote></li></ul><p><img src="/assets/image-20210504105031201.5a0b2acf.png" alt="image-20210504105031201"></p><ul><li><p>How would you like to define a style for your project? ... (你想怎样为你的项目定义风格？)</p><blockquote><p>我们这里选择 Use a popular style guide（使用一种流行的风格指南）</p></blockquote></li></ul><p><img src="/assets/image-20210504105437959.7ab3babf.png" alt="image-20210504105437959"></p><ul><li><p>Which style guide do you want to follow? ... (你想遵循哪种风格指南?…)</p><p><img src="/assets/image-20210504105647664.46307f54.png" alt="image-20210504105647664"></p></li><li><p>What format do you want your config file to be in? ... (您希望配置文件的格式是什么?…)</p><blockquote><p>我这里选择 JavaScript</p></blockquote></li><li><p>Would you like to install them now with npm?（你想现在用 npm 安装它们吗?）</p><blockquote><p>默认 Yes，所以可以直接回车</p></blockquote><p><img src="/assets/image-20210504110100677.a6ab693a.png" alt="image-20210504110100677"></p></li><li><p>所有配置如下</p><p><img src="/assets/image-20210504110235680.a75198d8.png" alt="image-20210504110235680"></p></li></ul><p>安装成功后，项目的根目录就会多一个<code>.eslintrc.js</code>文件，其中的内容就是我们在终端中选择的相应配置。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p>VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint 。 <img src="/assets/image-20210504111438312.3fd71093.png" alt="image-20210504111438312"></p></div><h2 id="解决-prettier-和-eslint-的冲突" tabindex="-1">解决 Prettier 和 ESLint 的冲突 <a class="header-anchor" href="#解决-prettier-和-eslint-的冲突" aria-hidden="true">#</a></h2><p>本项目中的 ESLint 配置中使用了 <code>Airbnb JavaScript</code> 风格指南校验，其规则之一是代码结束后面要加分号，而我们在 Prettier 配置文件中加了代码结束后面不加分号的配置项，这样就有冲突了，会出现用 Prettier 格式化后的代码，ESLint 检测到格式有问题的，从而抛出错误提示。 解决两者冲突问题，需要用到 <code>eslint-plugin-prettier</code> 和 <code>eslint-config-prettier</code>。</p><blockquote><p><code>eslint-plugin-prettier</code> 将 Prettier 的规则设置到 ESLint 的规则中。</p></blockquote><blockquote><p><code>eslint-config-prettier</code> 关闭 ESLint 中与 Prettier 中会发生冲突的规则。</p></blockquote><p>最后形成优先级：Prettier 配置规则 &gt; ESLint 配置规则。</p><ul><li>安装插件</li></ul><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i eslint-plugin-prettier eslint-config-prettier -D</span></span>\n<span class="line"></span></code></pre></div><ul><li>在 <code>.eslintrc.js</code> 添加 prettier 插件</li></ul><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>\n<span class="line"><span style="color:#A6ACCD;">    extends: [</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">airbnb-base</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">plugin:prettier/recommended</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 添加 prettier 插件</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>这样，我们在执行 <code>eslint --fix</code> 命令时，ESLint 就会按照 Prettier 的配置规则来格式化代码，轻松解决二者冲突问题。</p><h2 id="集成-husky-和-lint-staged" tabindex="-1">集成 husky 和 lint-staged <a class="header-anchor" href="#集成-husky-和-lint-staged" aria-hidden="true">#</a></h2><p>我们在项目中已集成 <code>ESLint</code> 和 <code>Prettier</code>，在编码时，这些工具可以对我们写的代码进行实时校验，在一定程度上能有效规范我们写的代码，但团队可能会有些人觉得这些条条框框的限制很麻烦，选择视“提示”而不见，依旧按自己的一套风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，<code>ESLint</code> 也就形同虚设。 所以，我们还需要做一些限制，让没通过 <code>ESLint</code> 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。 为了解决这个问题，我们需要用到 <code>Git Hook</code>，在本地执行 <code>git commit</code> 的时候，就对所提交的代码进行 <code>ESLint</code> 检测和修复（即执行 <code>eslint --fix</code>），如果这些代码没通过 <code>ESLint</code> 规则校验，则禁止提交。 实现这一功能，我们借助 <code>husky + lint-staged</code> 。</p><blockquote><p>husky —— Git Hook 工具，可以设置在 git 各个阶段（pre-commit、commit-msg、pre-push 等）触发我们的命令。 lint-staged —— 在 git 暂存的文件上运行 linters。</p></blockquote><h3 id="配置-husky" tabindex="-1">配置 husky <a class="header-anchor" href="#配置-husky" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用 <code>husky-init</code> 命令快速在项目初始化一个 <code>husky</code> 配置。在配置 <code>husky</code> 之前必须初始化 <code>git</code>，否则可能会配置不成功</p></div><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npx husky-init </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> npm install</span></span>\n<span class="line"></span></code></pre></div><p>命令执行会经历以下四步流程：</p><ul><li><p>安装<code>husky</code>为开发依赖</p><p><img src="/assets/image-20210504120333648.9e117d44.png" alt="image-20210504120333648"></p></li><li><p>创建<code>.husky</code>文件夹</p><p><img src="/assets/image-20210504120510820.e0d6bcf9.png" alt="image-20210504120510820"></p></li><li><p>在 <code>.husky</code> 目录创建 <code>pre-commit</code> hook，并初始化 <code>pre-commit</code> 命令为 <code>npm test</code></p><p><img src="/assets/image-20210504120612932.4f820762.png" alt="image-20210504120612932"></p></li><li><p>修改 <code>package.json</code> 的 <code>scripts</code>，增加 <code>&quot;prepare&quot;: &quot;husky install&quot;</code></p><p><img src="/assets/image-20210504120708693.5e11d59c.png" alt="image-20210504120708693"></p></li></ul><h3 id="配置-lint-staged" tabindex="-1">配置 lint-staged <a class="header-anchor" href="#配置-lint-staged" aria-hidden="true">#</a></h3><p>lint-staged 这个工具一般结合 husky 来使用，它可以让 husky 的 <code>hook</code> 触发的命令只作用于 <code>git add</code>那些文件（即 git 暂存区的文件），而不会影响到其他文件。</p><p>接下来，我们使用 lint-staged 继续优化项目。</p><ul><li><p>安装 lint-staged</p><div class="language-shell"><button class="copy"></button><span class="lang">shell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i lint-staged -D</span></span>\n<span class="line"></span></code></pre></div></li><li><p>在 <code>package.json</code>里增加 lint-staged 配置项</p><div class="language-json"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lint-staged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">*.{vue,js,ts}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint --fix</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>\n<span class="line"></span></code></pre></div><p><img src="/assets/image-20210504121302298.f0b10d76.png" alt="image-20210504121302298"></p></li><li><p>修改 <code>.husky/pre-commit hook</code> 的触发命令为：<code>npx lint-staged</code></p><p><img src="/assets/image-20210504121450870.d62451cf.png" alt="image-20210504121450870"></p></li></ul><p>至此，husky 和 lint-staged 组合配置完成。</p>',57);const u=s(i,[["render",function(s,l,p,o,c,i){const u=t("VueJobs");return e(),a("div",null,[r,n(u),d])}]]);export{c as __pageData,u as default};
