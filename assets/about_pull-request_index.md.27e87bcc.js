import{_ as e,o as a,c as r,b as s,d as n,e as o,a as t,r as l}from"./app.4b8e00fa.js";const i=JSON.parse('{"title":"环境准备","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"注册GitHub账号","slug":"注册github账号","link":"#注册github账号","children":[]},{"level":2,"title":"配置Git","slug":"配置git","link":"#配置git","children":[]},{"level":2,"title":"安装Node.js","slug":"安装node-js","link":"#安装node-js","children":[]},{"level":2,"title":"Markdown编辑器","slug":"markdown编辑器","link":"#markdown编辑器","children":[]}],"relativePath":"about/pull-request/index.md","lastUpdated":1683631174000}'),d={name:"about/pull-request/index.md"},p=n("h1",{id:"环境准备",tabindex:"-1"},[o("环境准备 "),n("a",{class:"header-anchor",href:"#环境准备","aria-hidden":"true"},"#")],-1),c=t('<p>在参与开源电子书项目之前，你需要准备以下环境：</p><ul><li>GitHub账号</li><li>Git</li><li>Node.js</li><li>Markdown编辑器</li></ul><h2 id="注册github账号" tabindex="-1">注册GitHub账号 <a class="header-anchor" href="#注册github账号" aria-hidden="true">#</a></h2><p>首先，打开<a href="https://github.com/" target="_blank" rel="noreferrer">GitHub官网</a>，如果官网打开缓慢或者无法打开，可以使用<a href="https://gitee.com/docmirror/dev-sidecar/releases" target="_blank" rel="noreferrer">DevSidecar</a>进行加速，点击<code>Sign Up</code>，填写以下信息</p><p><img src="/docs-page/assets/github-reg.c8a6d98c.png" alt="github reg"></p><p>点击<code>Create account</code>完成账号注册。完成注册后，你填写的邮箱会收到一封确认的邮件，点击<code>Verify email address</code>，</p><p><img src="/docs-page/assets/github-verify.80fae52e.png" alt="github verify"></p><p>完成确认后，你的GitHub账号就注册成功啦。</p><h2 id="配置git" tabindex="-1">配置Git <a class="header-anchor" href="#配置git" aria-hidden="true">#</a></h2><p>前往<a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git官网</a>，根据操作系统自行选择对应的版本进行安装，这边以 Windows 为例，Mac安装请参考<a href="https://git-scm.com/download/mac" target="_blank" rel="noreferrer">Mac build git</a>。</p><p><a href="https://git-scm.com/download/win" target="_blank" rel="noreferrer">下载</a>Git安装包，双击打开，按照指引，下一步完成安装即可。打开命令行，输入<code>git --version</code>，如出现对应的版本号，则表示安装成功。</p><p><img src="/docs-page/assets/git-version.f5a531f3.png" alt="git version"></p><p>接下来我们需要创建一个全局用户名和全局邮箱作为配置信息，</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git config --global user.name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_name</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ git config --global user.email </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your_email@youremail.com</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"></span></code></pre></div><p>这里的<code>your_name</code>以及<code>your_email@youremail.com</code>为方便统计贡献信息请尽量与你GitHub里的信息保持一致。</p><h2 id="安装node-js" tabindex="-1">安装Node.js <a class="header-anchor" href="#安装node-js" aria-hidden="true">#</a></h2><p>打开<a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">Node.js官网</a>，根据操作系统自行选择对应的版本进行安装，这边以 Windows 为例，Mac安装请下载对应的Mac安装包。</p><p><a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noreferrer">下载</a>Node安装包，这里我们选择<code>LTS</code>版本，这个是Node发行的稳定版本，双击打开，按照指引，下一步完成安装即可，打开命令行，输入<code>node -v &amp; npm -v</code>，出现对应的版本号，则表示安装成功。</p><p><img src="/docs-page/assets/node-version.d72a0322.png" alt="node version"></p><p>npm默认的镜像源为国外镜像源，下载可能会出现缓慢或卡死的情况，建议采用一下方式进行处理。</p><ol><li>安装cnpm，配置淘宝镜像源；</li></ol><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm install -g cnpm --registry=https://registry.npm.taobao.org</span></span>\n<span class="line"></span></code></pre></div><ol start="2"><li>使用DevSidecar打开npm加速。</li></ol><h2 id="markdown编辑器" tabindex="-1">Markdown编辑器 <a class="header-anchor" href="#markdown编辑器" aria-hidden="true">#</a></h2><p>由于项目中图文内容基于Markdown语法进行创作，我们需要一款优秀的Markdown编辑器，这里我们推荐<a href="https://www.typora.io/" target="_blank" rel="noreferrer">Typora</a>，干净、简洁、语法支持丰富，让你专注创作，打开官网，下载对应的安装包，安装即可。</p><p>当然，同学们可以根据自己的喜好使用自己平时常用的编辑器进行创作，如果有同学还不熟悉Markdown语法，可以参考<a href="http://note.youdao.com/s/cFmUBzQt" target="_blank" rel="noreferrer">Markdown语法整理</a>。</p><p>至此，基础环境已经准备完成，接下来将教同学们如何配置项目，提交PR（Pull Request）。</p>',27);const h=e(d,[["render",function(e,n,o,t,i,d){const h=l("VueJobs");return a(),r("div",null,[p,s(h),c])}]]);export{i as __pageData,h as default};