import{_ as s}from"./chunks/lifecycle.422b2c2e.js";import{_ as l,o as a,c as n,b as p,d as o,e,a as c,r}from"./app.b322fe29.js";const t=JSON.parse('{"title":"编写规范","description":"","frontmatter":{"sidebarDepth":2},"headers":[{"level":2,"title":"标题","slug":"标题","link":"#标题","children":[]},{"level":2,"title":"文本","slug":"文本","link":"#文本","children":[]},{"level":2,"title":"段落","slug":"段落","link":"#段落","children":[]},{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":2,"title":"代码块","slug":"代码块","link":"#代码块","children":[]},{"level":2,"title":"链接","slug":"链接","link":"#链接","children":[]},{"level":2,"title":"图片","slug":"图片","link":"#图片","children":[]}],"relativePath":"about/notes/01-编写规范.md","lastUpdated":1663311966000}'),F={name:"about/notes/01-编写规范.md"},i=o("h1",{id:"编写规范",tabindex:"-1"},[e("编写规范 "),o("a",{class:"header-anchor",href:"#编写规范","aria-hidden":"true"},"#")],-1),y=c('<h2 id="标题" tabindex="-1">标题 <a class="header-anchor" href="#标题" aria-hidden="true">#</a></h2><ul><li>标题层层递进，不要跨层级。例如：一级标题下只能使用二级标题，不要直接出现三级或者四级标题。</li><li>下级标题内容尽量不要与上级标题内容相同。</li><li>标题尽量不要超过四级。</li><li>尽量不要出现某一级标题只出现一次的情况。</li><li>标题不要加拖尾的标点符号。</li><li>标题要被空行包围，即标题前后都是空行。</li></ul><h2 id="文本" tabindex="-1">文本 <a class="header-anchor" href="#文本" aria-hidden="true">#</a></h2><ul><li>中文字符和英文字符之间保持一个空格，标点符号与英文字符之间不用空格。</li></ul><p>示例：</p><p><code>这是一篇介绍 JavaScript 的文章，是的这真的是介绍 JavaScript。</code></p><ul><li>尽量避免句子过长，不含标点符号的单个句子，或者以逗号分隔的句子构件，长度尽量保持在20个字以内。如果超出，不得超过40个字。</li></ul><p>示例：</p><p><code>本教程适用于初学者。无论是初学者，还是资深前端工程师，均能在本教程中有所收获。</code></p><ul><li><p>语句中的关键词要使用``标注。</p></li><li><p>中英文标点符号应避免混用。</p></li><li><p>如果整句为英文，该句应使用英文标点。</p></li><li><p>中文句子，并列词使用<code>、</code>分隔。英文句子，并列词使用<code>,</code>分隔。</p></li></ul><p>示例：</p><p><code>我最喜欢的公司有华为、小米、地平线、 Supercell 和阿里等。</code></p><p><code>Office includes Word, Excel, PowerPoint, Outlook and other components.</code></p><ul><li>省略号的使用，中文后面跟中文省略号，英文后面跟英文省略号。</li></ul><p>示例：</p><p><code>5 分钟过去了......</code></p><p><code>5 minutes later...</code></p><ul><li>专有名词或专业术语格式一定要写对。</li></ul><p>示例：</p><p><code>JavaScript √ javaScript ×</code></p><ul><li>数字一律使用半角形式。</li><li>数值超过1,000，尽量添加英文逗号。</li></ul><h2 id="段落" tabindex="-1">段落 <a class="header-anchor" href="#段落" aria-hidden="true">#</a></h2><ul><li>一个段落只能有一个主题。</li><li>一个段落长度不要超过<code>7</code>行，最佳不超过<code>4</code>行。</li><li>段落之间用空行隔开。</li><li>段落开头不要留有空白字符。</li></ul><h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-hidden="true">#</a></h2><ul><li>引用第三方内容时，应注明出处。</li><li>使用外部图片，尽量注明来源。</li></ul><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-hidden="true">#</a></h2><ul><li><p>代码块上下空行，用空行包围。</p></li><li><p>Shell 命令注意添加<code>$</code>符号。</p></li></ul><p>示例：</p><div class="language-sh"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker ps</span></span>\n<span class="line"></span></code></pre></div><ul><li>代码要指明对应的语言。</li></ul><p>示例：</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> genSidebarConfig </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">hasSub</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">exclude</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dir</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">files</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">readdirSync</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">subDir</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hasSub</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dir</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">files</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">exclude</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">subDir</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">subDir</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">basename</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">basename</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// console.log(&#39;🚀 ~ file: config.js ~ line 26 ~ genSidebarConfig ~ subDir&#39;, subDir)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unshift</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">subDir</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><ul><li>代码书写注意代码格式，缩进大小保持一致。</li></ul><h2 id="链接" tabindex="-1">链接 <a class="header-anchor" href="#链接" aria-hidden="true">#</a></h2><ul><li>不适用裸露的链接，请使用一般格式<code>[百度官网](https:www.baidu.com/)</code>。</li><li>链接文本尽量不要带有空格。</li></ul><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-hidden="true">#</a></h2><ul><li>图片一定要清晰。</li><li>图片大小尽量不要超过 300K。</li><li>图片的尺寸宽度尽量不要超过 700。</li></ul><p>示例：</p><div style="text-align:center;"><img src="'+s+'" width="300"></div>',39);const D=l(F,[["render",function(s,l,o,e,c,t){const F=r("VueJobs");return a(),n("div",null,[i,p(F),y])}]]);export{t as __pageData,D as default};
