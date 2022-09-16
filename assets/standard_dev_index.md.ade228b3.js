import{_ as e,o as a,c as r,b as t,d as l,e as i,a as d,r as s}from"./app.b322fe29.js";const n=JSON.parse('{"title":"开发流程","description":"","frontmatter":{"sidebar":"auto"},"headers":[{"level":2,"title":"迭代","slug":"迭代","link":"#迭代","children":[{"level":3,"title":"Tapd","slug":"tapd","link":"#tapd","children":[]},{"level":3,"title":"迭代表","slug":"迭代表","link":"#迭代表","children":[]},{"level":3,"title":"原型图","slug":"原型图","link":"#原型图","children":[]},{"level":3,"title":"设计图","slug":"设计图","link":"#设计图","children":[]},{"level":3,"title":"接口文档","slug":"接口文档","link":"#接口文档","children":[]}]}],"relativePath":"standard/dev/index.md","lastUpdated":1663311966000}'),o={name:"standard/dev/index.md"},h=l("h1",{id:"开发流程",tabindex:"-1"},[i("开发流程 "),l("a",{class:"header-anchor",href:"#开发流程","aria-hidden":"true"},"#")],-1),p=d('<p>开发流程包含 <strong>迭代</strong> 和 <strong>编码</strong> ，这一章你将学会如何高效地协作和开发。</p><h2 id="迭代" tabindex="-1">迭代 <a class="header-anchor" href="#迭代" aria-hidden="true">#</a></h2><p>我们采用敏捷开发的模式，来持续地产出和交付，下面是开发流程：</p><ol><li>产品经理在<a href="https://www.tapd.cn/" target="_blank" rel="noreferrer">Tapd</a>上录入需求，形成一个大的需求库</li><li>迭代开始前进行<strong>需求评审</strong> 和<strong>工时计算</strong></li><li>项目 leader 拿出一部分需求划分<strong>任务</strong> 和<strong>工时</strong> ，作为一个<strong>迭代</strong></li><li>开发根据接收到<code>任务</code> 和<code>迭代时间表</code> 开始编码，<strong>请按照时间表的顺序处理需求</strong> 。</li><li>完成一部分需求自测没问题后可以提交测试</li><li>完成整体需求后进入测试阶段，同时开发修复测试反馈的 bug</li><li>交付产品验收</li></ol><p>TIP</p><p>如果当前任务有前置要求导致你无法继续的时候可以先跳到后面的任务。</p><h3 id="tapd" tabindex="-1">Tapd <a class="header-anchor" href="#tapd" aria-hidden="true">#</a></h3><p><a href="https://www.tapd.cn/" target="_blank" rel="noreferrer">Tapd</a> 是一站式敏捷研发协作云平台，我们使用它来进行高效的协作。以下是你需要注意的项：</p><ul><li>迭代开始后，你的工作台中都会收到相应的任务，当你开始开发时将任务状态改为<strong>研发中</strong></li><li>研发过程中，在任务详情可以新建子任务来记录<strong>任务完成度</strong> 和<strong>工时</strong></li><li>研发完成后，将任务状态修改为<strong>质控中</strong> ，并且处理人添加测试的同事</li><li>需求库中有未来的任务，你可以提前熟悉它们</li><li>当出现 bug 时，修复 bug 也需要修改对应的 bug 状态</li></ul><p>有些项目组可能没有测试，需要申请测试资源，由项目 leader 将任务状态修改为质控中，然后提交质控申请单，申请测试资源。</p><p><img src="/assets/graph_LR.28245fb1.e42ec04e.png" alt="开发流程图"></p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>bug 会出现在你的工作台中，bug 日清是一个好习惯。</p></div><h3 id="迭代表" tabindex="-1">迭代表 <a class="header-anchor" href="#迭代表" aria-hidden="true">#</a></h3><p>除了 tapd 以外，你还会有一份迭代表，通常是一个 excel 表格。上面会记录工时，迭代时间节点，负责人，任务完成度之类的信息，记得每天更新它。</p><h3 id="原型图" tabindex="-1">原型图 <a class="header-anchor" href="#原型图" aria-hidden="true">#</a></h3><p><code>原型图</code>可以帮助你理解需求，梳理业务逻辑。在开发之前请确认是否理解了原型图，有疑问的地方多跟产品沟通。</p><h3 id="设计图" tabindex="-1">设计图 <a class="header-anchor" href="#设计图" aria-hidden="true">#</a></h3><p><code>设计图</code>是交付产品验收的重要依据，请高保真地完成设计图中的页面。如果开发过程中遇到逻辑问题，保持团队沟通。</p><h3 id="接口文档" tabindex="-1">接口文档 <a class="header-anchor" href="#接口文档" aria-hidden="true">#</a></h3><p>后端的接口文档托管在<a href="https://swagger.io/" target="_blank" rel="noreferrer">swagger</a>中。如果你还不熟悉的话，先看看如何使用它们来调试接口。需要对接数据时，可以找后端的同事拿对应文档。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在迭代的过程中，你可能会遇到产品原型或者设计图的修改，简单的修改请跟产品确认清楚。改动较大则反馈给项目 leader，再决定调整迭代时间还是延期。</p></div>',21);const c=e(o,[["render",function(e,l,i,d,n,o){const c=s("VueJobs");return a(),r("div",null,[h,t(c),p])}]]);export{n as __pageData,c as default};
