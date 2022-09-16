import{_ as s,o as a,c as l,b as e,d as n,e as o,a as p,r as c}from"./app.399c4537.js";const t=JSON.parse('{"title":"uniapp介绍","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"什么是快应用？","slug":"什么是快应用？","link":"#什么是快应用？","children":[]},{"level":2,"title":"背景介绍","slug":"背景介绍","link":"#背景介绍","children":[{"level":3,"title":"技术人想偷懒","slug":"技术人想偷懒","link":"#技术人想偷懒","children":[]},{"level":3,"title":"各个平台之间的对比","slug":"各个平台之间的对比","link":"#各个平台之间的对比","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}]},{"level":2,"title":"什么是uniapp?","slug":"什么是uniapp","link":"#什么是uniapp","children":[]},{"level":2,"title":"开发规范","slug":"开发规范","link":"#开发规范","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"导入静态资源","slug":"导入静态资源","link":"#导入静态资源","children":[{"level":3,"title":"模板内引入静态资源","slug":"模板内引入静态资源","link":"#模板内引入静态资源","children":[]},{"level":3,"title":"js文件引入","slug":"js文件引入","link":"#js文件引入","children":[]},{"level":3,"title":"css引入静态资源","slug":"css引入静态资源","link":"#css引入静态资源","children":[]}]}],"relativePath":"project/community-miniapp/README.md","lastUpdated":1663312337000}'),i={name:"project/community-miniapp/README.md"},r=n("h1",{id:"uniapp介绍",tabindex:"-1"},[o("uniapp介绍 "),n("a",{class:"header-anchor",href:"#uniapp介绍","aria-hidden":"true"},"#")],-1),d=p('<h2 id="什么是快应用？" tabindex="-1">什么是快应用？ <a class="header-anchor" href="#什么是快应用？" aria-hidden="true">#</a></h2><p>快应用是指用户无需下载安装，即点即用，享受原生性能体验的应用，例如：微信小程序，支付宝小程序，百度小程序等。</p><p>快应用的优势：</p><ul><li>无需下载安装App，节约手机空间；</li><li>性能好，体验接近原生；</li><li>背靠流量；</li></ul><p>快应用的缺点：</p><ul><li>平台多，语法多，开发成本高；</li><li>管控难；</li></ul><p>快应用的发展趋势：平台底层支持，扫码即用，无需安装微信、支付宝等平台，可以参看，<a href="https://www.zhihu.com/question/269267011" target="_blank" rel="noreferrer">链接</a></p><p>为什么PWA不香了？</p><ul><li>浏览器环境需要考虑兼容性；</li><li>支付会被限制；</li><li>缺乏原生能力；</li><li>追求原生体验；</li><li>更高的安全性的要求（内容、代码）；</li></ul><h2 id="背景介绍" tabindex="-1">背景介绍 <a class="header-anchor" href="#背景介绍" aria-hidden="true">#</a></h2><h3 id="技术人想偷懒" tabindex="-1">技术人想偷懒 <a class="header-anchor" href="#技术人想偷懒" aria-hidden="true">#</a></h3><p>困境：</p><ul><li>小程序的平台太多，需要学习多个平台的语法；</li><li>前端人也想用vue，react语法来写小程序；</li><li>想在小程序中使用npm包（庞大的第三方包）；</li><li>小程序代码 -&gt; 原生App，一套代码多端运行；</li></ul><h3 id="各个平台之间的对比" tabindex="-1">各个平台之间的对比 <a class="header-anchor" href="#各个平台之间的对比" aria-hidden="true">#</a></h3><p><img src="/docs-page/assets/test-frame-11.4961d5c2.png" alt="test-frame-11.png"></p><p>数据源：<a href="https://juejin.cn/post/6844903810788245511" target="_blank" rel="noreferrer">链接</a>， 2020年横评：<a href="https://juejin.cn/post/6844904118901817351" target="_blank" rel="noreferrer">链接</a></p><p><strong>结论：</strong></p><ul><li>跨端支持度测评结论：<code>uni-app</code> &gt; <code>taro</code> &gt; <code>chameleon</code> &gt; <code>mpvue</code> &gt;<code>wepy</code>、<code>原生微信小程序</code></li><li>微信原生框架可达到更好的性能，但 <code>uni-app</code>、<code>taro</code> 相比微信原生，性能差距并不大；</li><li>微信原生开发手工优化, <code>uni-app</code>&gt;微信原生开发未手工优化, <code>taro</code> &gt; <code>chameleon</code>&gt; <code>wepy</code> &gt; <code>mpvue</code></li><li><code>mpvue</code>支持绝大部分的Vue语法；<code>uni-app</code> 编译到微信端曾经使用过<code>mpvue</code>，但后来重新编写，支持了更多vue语法如<code>filter</code>、复杂 <code>JavaScript</code> 表达式等；<code>wepy</code>、<code>chameleon</code> 都是 <code>类Vue</code> 的实现，仅支持 <code>Vue</code> 的部分语法，开发时需要单独学习它们的规则；<code>taro</code> 对于 <code>JSX</code> 的语法支持是相对完善的，React技术栈友好；</li><li>学习资料完善度：<code>uni-app</code> &gt; <code>mpvue</code> , <code>taro</code> &gt; <code>chameleon</code> &gt; <code>wepy</code></li><li>社区活跃度：<code>uni-app</code> &gt; <code>taro</code>&gt; <code>chameleon</code> &gt; <code>wepy</code> &gt;<code>mpvue</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>没有最好的，只有最适合的。</p></div><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-hidden="true">#</a></h3><ul><li>熟悉Vue技术栈，推荐：uniapp &gt; wepy &gt; mpvue；熟悉React技术栈，taro；</li><li>项目初期，想法论证可以使用uniapp -&gt; 多端开发；后续，推荐Flutter跨端开发，再到后期推荐原生开发；</li><li>框架的更新本身，不能作为使用框架的绝对指标；选择合适的框架，解决当下的问题；</li></ul><h2 id="什么是uniapp" tabindex="-1">什么是uniapp? <a class="header-anchor" href="#什么是uniapp" aria-hidden="true">#</a></h2><p><code>uni-app</code> 是一个使用 <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue.js</a> 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>uni-app与mpvue的渊源：<code>uni-app</code>在初期借鉴了<code>mpvue</code>，实现了微信小程序端的快速兼容，<a href="https://ask.dcloud.net.cn/article/35699" target="_blank" rel="noreferrer">参考链接</a>。</p></div><h2 id="开发规范" tabindex="-1">开发规范 <a class="header-anchor" href="#开发规范" aria-hidden="true">#</a></h2><p>为了实现多端兼容，综合考虑编译速度、运行性能等因素，<code>uni-app</code> 约定了如下开发规范：</p><ul><li><p>页面文件遵循 <a href="https://vue-loader.vuejs.org/zh/spec.html" target="_blank" rel="noreferrer">Vue 单文件组件 (SFC) 规范</a></p></li><li><p>组件标签靠近小程序规范，详见<a href="https://uniapp.dcloud.io/component/README" target="_blank" rel="noreferrer">uni-app 组件规范</a></p><p>有几点特别要注意的：</p><ol><li>注意：所有组件与属性名都是小写，单词之间以连字符<code>-</code>连接；</li><li>每个vue文件的根节点必须为 <code>&lt;template&gt;</code>，且这个 <code>&lt;template&gt;</code> 下只能且必须有一个根 <code>&lt;view&gt;</code> 组件；</li><li>不推荐使用HTML标签，为了管理方便、策略统一，新写代码时仍然建议使用view等组件；</li><li>组件上的事件绑定，需要以 vue 的事件绑定语法来绑定，如 bindchange=&quot;eventName&quot; 事件，需要写成 <code>@change=&quot;eventName&quot;</code>；</li><li>uni-app支持的组件分为vue组件和小程序自定义组件；如果扩展组件符合uni-app的<code>easycom</code>组件规范，则可以免注册，直接使用；如果组件不符合easycom规范，则需要在代码里手动import和注册组件，然后才能使用</li></ol></li><li><p>接口能力（JS API）靠近微信小程序规范，但需将前缀 <code>wx</code> 替换为 <code>uni</code>，详见<a href="https://uniapp.dcloud.io/api/README" target="_blank" rel="noreferrer">uni-app接口规范</a></p></li><li><p>数据绑定及事件处理同 <code>Vue.js</code> 规范，同时补充了App及页面的生命周期</p></li><li><p>为兼容多端运行，建议使用flex布局进行开发</p></li></ul><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h2><p>一个uni-app工程，默认包含如下目录及文件：</p><div class="language-markdown"><button class="copy"></button><span class="lang">markdown</span><pre><code><span class="line"><span style="color:#A6ACCD;">┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）</span></span>\n<span class="line"><span style="color:#A6ACCD;">│─components            符合vue组件规范的uni-app组件目录</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  └─comp-a.vue         可复用的a组件</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─hybrid                App端存放本地html文件的目录，详见</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─platforms             存放各平台专用页面的目录，详见</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─pages                 业务页面文件存放的目录</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  ├─index</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  │  └─index.vue       index页面</span></span>\n<span class="line"><span style="color:#A6ACCD;">│  └─list</span></span>\n<span class="line"><span style="color:#A6ACCD;">│     └─list.vue        list页面</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─uni_modules           存放uni_module规范的插件。</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─wxcomponents          存放小程序组件的目录，详见</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─main.js               Vue初始化入口文件</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期</span></span>\n<span class="line"><span style="color:#A6ACCD;">├─manifest.json         配置应用名称、appid、logo、版本等打包信息</span></span>\n<span class="line"><span style="color:#A6ACCD;">└─pages.json            配置页面路由、导航条、选项卡等页面类信息</span></span>\n<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>编译到任意平台时，<code>static</code> 目录下的文件均会被完整打包进去，且不会编译。非 <code>static</code> 目录下的文件（vue、js、css 等）只有被引用到才会被打包编译进去。</li><li><code>static</code> 目录下的 <code>js</code> 文件不会被编译，如果里面有 <code>es6</code> 的代码，不经过转换直接运行，在手机设备上会报错。</li><li><code>css</code>、<code>less/scss</code> 等资源不要放在 <code>static</code> 目录下，建议这些公用的资源放在自建的 <code>common</code> 目录下。</li><li>HbuilderX 1.9.0+ 支持在根目录创建 <code>ext.json</code>、<code>sitemap.json</code> 等小程序需要的文件。</li></ul></div><h2 id="导入静态资源" tabindex="-1">导入静态资源 <a class="header-anchor" href="#导入静态资源" aria-hidden="true">#</a></h2><h3 id="模板内引入静态资源" tabindex="-1">模板内引入静态资源 <a class="header-anchor" href="#模板内引入静态资源" aria-hidden="true">#</a></h3><p><code>template</code>内引入静态资源，如<code>image</code>、<code>video</code>等标签的<code>src</code>属性时，可以使用相对路径或者绝对路径，形式如下</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#676E95;">&lt;!-- 绝对路径，/static指根目录下的static目录，在cli项目中/static指src目录下的static目录 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/static/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/static/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#676E95;">&lt;!-- 相对路径 --&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">logo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../../static/logo.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><p>特别说明：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><code>@</code>开头的绝对路径以及相对路径会经过base64转换规则校验</li><li>引入的静态资源在非h5平台，均不转为base64。</li><li>H5平台，小于4kb的资源会被转换成base64，其余不转。</li><li>自<code>HBuilderX 2.6.6</code>起<code>template</code>内支持<code>@</code>开头路径引入静态资源，旧版本不支持此方式</li><li>App平台自<code>HBuilderX 2.6.9</code>起<code>template</code>节点中引用静态资源文件时（如：图片），调整查找策略为【基于当前文件的路径搜索】，与其他平台保持一致</li><li>支付宝小程序组件内 image 标签不可使用相对路径</li></ul></div><h3 id="js文件引入" tabindex="-1">js文件引入 <a class="header-anchor" href="#js文件引入" aria-hidden="true">#</a></h3><p><code>js</code>文件或<code>script</code>标签内（包括renderjs等）引入<code>js</code>文件时，可以使用相对路径和绝对路径，形式如下</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// 绝对路径，@指向项目根目录，在cli项目中@指向src目录</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/common/add.js</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#676E95;">// 相对路径</span></span>\n<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> add </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../common/add.js</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>js文件不支持使用<code>/</code>开头的方式引入</p></div><h3 id="css引入静态资源" tabindex="-1">css引入静态资源 <a class="header-anchor" href="#css引入静态资源" aria-hidden="true">#</a></h3><ol><li><code>css</code>文件或<code>style标签</code>内引入<code>css</code>文件时（scss、less文件同理），可以使用相对路径或绝对路径（<code>HBuilderX 2.6.6</code>）</li></ol><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#676E95;">/* 绝对路径 */</span></span>\n<span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/common/uni.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/common/uni.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"><span style="color:#676E95;">/* 相对路径 */</span></span>\n<span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../../common/uni.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>\n<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>自<code>HBuilderX 2.6.6</code>起支持绝对路径引入静态资源，旧版本不支持此方式</p></div><ol start="2"><li><code>css</code>文件或<code>style标签</code>内引用的图片路径可以使用相对路径也可以使用绝对路径，需要注意的是，有些小程序端css文件不允许引用本地文件（请看注意事项）。</li></ol><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#676E95;">/* 绝对路径 */</span></span>\n<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: url(/static/logo</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">);</span></span>\n<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: url(@/static/logo</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">);</span></span>\n<span class="line"><span style="color:#676E95;">/* 相对路径 */</span></span>\n<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: url(.</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">/.</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">/static/logo</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">png</span><span style="color:#A6ACCD;">);</span></span>\n<span class="line"></span></code></pre></div><p>注意事项：</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>引入字体图标请参考，<a href="https://uniapp.dcloud.io/frame?id=%E5%AD%97%E4%BD%93%E5%9B%BE%E6%A0%87" target="_blank" rel="noreferrer">字体图标</a></li><li><code>@</code>开头的绝对路径以及相对路径会经过base64转换规则校验</li><li>不支持本地图片的平台，小于40kb，一定会转base64。（共四个平台mp-weixin, mp-qq, mp-toutiao, app v2）</li><li>h5平台，小于4kb会转base64，超出4kb时不转。</li><li>其余平台不会转base64</li></ul></div>',49);const u=s(i,[["render",function(s,n,o,p,t,i){const u=c("VueJobs");return a(),l("div",null,[r,e(u),d])}]]);export{t as __pageData,u as default};
