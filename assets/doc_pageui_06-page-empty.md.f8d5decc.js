import{_ as t,o as s,c as a,b as e,d as l,e as o,a as d,r as n}from"./app.4b8e00fa.js";const p=JSON.parse('{"title":"空页面","description":"","frontmatter":{},"headers":[{"level":3,"title":"演示代码","slug":"演示代码","link":"#演示代码","children":[]},{"level":3,"title":"设置显示图及提示文字","slug":"设置显示图及提示文字","link":"#设置显示图及提示文字","children":[]},{"level":3,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]}],"relativePath":"doc/pageui/06-page-empty.md","lastUpdated":1683631174000}'),c={name:"doc/pageui/06-page-empty.md"},r=l("h1",{id:"空页面",tabindex:"-1"},[o("空页面 "),l("a",{class:"header-anchor",href:"#空页面","aria-hidden":"true"},"#")],-1),i=d('<h3 id="演示代码" tabindex="-1">演示代码 <a class="header-anchor" href="#演示代码" aria-hidden="true">#</a></h3><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">page-empty</span><span style="color:#89DDFF;"> &gt;&lt;/</span><span style="color:#F07178;">page-empty</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="设置显示图及提示文字" tabindex="-1">设置显示图及提示文字 <a class="header-anchor" href="#设置显示图及提示文字" aria-hidden="true">#</a></h3><div class="tip custom-block"><p class="custom-block-title">提示</p><p>index 默认13</p></div><p>index包含的类名及其含义为：</p><ul><li><code>0</code> - 购物车为空</li><li><code>1</code> - 页面不存在</li><li><code>2</code> - 没有搜索结果</li><li><code>3</code> - 没有收货地址</li><li><code>4</code> - 没有WiFi</li><li><code>5</code> - 订单为空</li><li><code>6</code> - 没有优惠券</li><li><code>7</code> - 无收藏</li><li><code>8</code> - 无权限</li><li><code>9</code> - 无历史记录</li><li><code>10</code> - 无新闻列表</li><li><code>11</code> - 消息列表为空</li><li><code>12</code> - 列表为空(通用)</li><li><code>13</code> - 数据为空(默认，通用)</li></ul><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">page-empty</span><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">top</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">9</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">暂无介绍</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">iconSize</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">120</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">page-empty</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><div class="table-custom"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>custom</td><td>自定义空图</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>notImg</td><td>不显示图</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>tip</td><td>提示文字</td><td>string</td><td>—</td><td>暂无数据</td></tr><tr><td>top</td><td>距离上面的距离</td><td>string</td><td>—</td><td>192</td></tr><tr><td>index</td><td>自定义类型</td><td>string/number</td><td>—</td><td>13</td></tr><tr><td>iconSize</td><td>自定义类型图标大小</td><td>string/number</td><td>—</td><td>220</td></tr></tbody></table></div>',9);const D=t(c,[["render",function(t,l,o,d,p,c){const D=n("VueJobs");return s(),a("div",null,[r,e(D),i])}]]);export{p as __pageData,D as default};