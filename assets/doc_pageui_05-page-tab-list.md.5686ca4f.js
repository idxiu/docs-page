import{_ as s,o as a,c as n,b as l,d as p,e as t,a as o,r as e}from"./app.2eac99e3.js";const c=JSON.parse('{"title":"选项卡带刷新加载","description":"","frontmatter":{},"headers":[{"level":3,"title":"演示代码","slug":"演示代码","link":"#演示代码","children":[]},{"level":3,"title":"Attributes","slug":"attributes","link":"#attributes","children":[]},{"level":3,"title":"Event","slug":"event","link":"#event","children":[]},{"level":3,"title":"method","slug":"method","link":"#method","children":[]}],"relativePath":"doc/pageui/05-page-tab-list.md","lastUpdated":1684812942000}'),r={name:"doc/pageui/05-page-tab-list.md"},D=p("h1",{id:"选项卡带刷新加载",tabindex:"-1"},[t("选项卡带刷新加载 "),p("a",{class:"header-anchor",href:"#选项卡带刷新加载","aria-hidden":"true"},"#")],-1),y=o('<div class="tip custom-block"><p class="custom-block-title">提示</p><p>不需要滑动加载请使用 <code>page-tab-list-comm</code> 组件</p></div><h3 id="演示代码" tabindex="-1">演示代码 <a class="header-anchor" href="#演示代码" aria-hidden="true">#</a></h3><div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;page-panel title=&quot;分类&quot;  :fullPage=&quot;true&quot; ref=&quot;page&quot; :isLoading=&quot;pageLoading&quot; &gt; </span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">slot</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">gBody</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">page-tab-list</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">enable</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">stickyEnable</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">tabRest</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">tabList</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">tabList</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">mainHeight</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">mHeight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tabs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">startReq</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">startReq</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disableTouch</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">&lt;!-- 选项列表数据上方插槽 --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">other</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex flex-vh-center flex-between py-30 px-32</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">                类型-1</span></span>\n<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#676E95;">&lt;!-- 数据渲染   --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">dataList</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">tabIndex</span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#676E95;">&lt;!-- tab 对应列表数据 --&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;"> &amp;&amp; </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">px-32</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">book</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">booIndex</span><span style="color:#89DDFF;">) in </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  &gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">book-lr-item</span><span style="color:#89DDFF;">  :</span><span style="color:#C792EA;">book</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">book</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">imgHeight</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">204</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">imgwidth</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">204</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">book</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">book-lr-item</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">               </span><span style="color:#676E95;">&lt;!-- 空数据 --&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">page-empty</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">v-else</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">page-empty</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">page-tab-list</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   </span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">page-panel</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  export default { </span></span>\n<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>\n<span class="line"><span style="color:#A6ACCD;">      return {  </span></span>\n<span class="line"><span style="color:#A6ACCD;">        tabList: [{name: &#39;全部&#39;,id:&#39;&#39;}, {name: &#39;社科&#39;,id:&#39;1403618681748156416&#39;}, {name: &#39;文艺&#39;,id:&#39;1403618735858872320&#39;}, {name: &#39;少儿&#39;,id:&#39;1403618775771869184&#39;}],</span></span>\n<span class="line"><span style="color:#A6ACCD;">        // 页面加载</span></span>\n<span class="line"><span style="color:#A6ACCD;">        pageLoading   : true,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        // 内容主体高度</span></span>\n<span class="line"><span style="color:#A6ACCD;">        mainHeight    : 200,   </span></span>\n<span class="line"><span style="color:#A6ACCD;">        lastIndex:0, </span></span>\n<span class="line"><span style="color:#A6ACCD;">      };</span></span>\n<span class="line"><span style="color:#A6ACCD;">    },</span></span>\n<span class="line"><span style="color:#A6ACCD;">    onLoad() { </span></span>\n<span class="line"><span style="color:#A6ACCD;">      this.pageLoading = false;  </span></span>\n<span class="line"><span style="color:#A6ACCD;">      if(this.isLogin){</span></span>\n<span class="line"><span style="color:#A6ACCD;">        uni.showLoading({</span></span>\n<span class="line"><span style="color:#A6ACCD;">          title:&#39;请稍后&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">        })</span></span>\n<span class="line"><span style="color:#A6ACCD;">      } </span></span>\n<span class="line"><span style="color:#A6ACCD;">    },  </span></span>\n<span class="line"><span style="color:#A6ACCD;">    onReady(){ </span></span>\n<span class="line"><span style="color:#A6ACCD;">      //获取内容高度</span></span>\n<span class="line"><span style="color:#A6ACCD;">      this.getContentHeight()</span></span>\n<span class="line"><span style="color:#A6ACCD;">    },</span></span>\n<span class="line"><span style="color:#A6ACCD;">    methods:{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      getContentHeight(){</span></span>\n<span class="line"><span style="color:#A6ACCD;">        this.$util.getRefs(&#39;page&#39;, this, 0, (ref)=&gt;{ </span></span>\n<span class="line"><span style="color:#A6ACCD;">          ref.getDomSize(&#39;pageBody&#39;, (e)=&gt;{ </span></span>\n<span class="line"><span style="color:#A6ACCD;">            // 主体高度 = 页面高度 - 自定义区域高度 tab默认的高度为 80 加上 底部滑块的高度 6 和默认的间隔 20 合计 106 rpx</span></span>\n<span class="line"><span style="color:#A6ACCD;">            // 如果自定义区域有 margin 尺寸获取不到请加上这个值，可以利用 uni.upx2px() 转换</span></span>\n<span class="line"><span style="color:#A6ACCD;">            this.mHeight = e.height - uni.upx2px(106); </span></span>\n<span class="line"><span style="color:#A6ACCD;">            this.initHeight() </span></span>\n<span class="line"><span style="color:#A6ACCD;">          });</span></span>\n<span class="line"><span style="color:#A6ACCD;">        }); </span></span>\n<span class="line"><span style="color:#A6ACCD;">      }, </span></span>\n<span class="line"><span style="color:#A6ACCD;">      initHeight(){ </span></span>\n<span class="line"><span style="color:#A6ACCD;">        //去掉other插槽的高度 才是内容区域的高度</span></span>\n<span class="line"><span style="color:#A6ACCD;">        this.mHeight=this.mHeight - uni.upx2px(110)</span></span>\n<span class="line"><span style="color:#A6ACCD;">        // 第一次加载数据  会触发 startReq 回调</span></span>\n<span class="line"><span style="color:#A6ACCD;">        this.$refs.tabs.init(); </span></span>\n<span class="line"><span style="color:#A6ACCD;">      },  </span></span>\n<span class="line"><span style="color:#A6ACCD;">      //开始请求</span></span>\n<span class="line"><span style="color:#A6ACCD;">      startReq(req){</span></span>\n<span class="line"><span style="color:#A6ACCD;">        console.log(&#39;req&#39;,req);</span></span>\n<span class="line"><span style="color:#A6ACCD;">        let {isReload,tabIndex,page}=req; </span></span>\n<span class="line"><span style="color:#A6ACCD;">        let data={</span></span>\n<span class="line"><span style="color:#A6ACCD;">          currentPage:page, </span></span>\n<span class="line"><span style="color:#A6ACCD;">          pageSize: 10, </span></span>\n<span class="line"><span style="color:#A6ACCD;">          contentTypeId: this.tabList[tabIndex].id ,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          isFree: &quot;&quot;,</span></span>\n<span class="line"><span style="color:#A6ACCD;">          isLimitTimeFree: &quot;&quot; , </span></span>\n<span class="line"><span style="color:#A6ACCD;">        }</span></span>\n<span class="line"><span style="color:#A6ACCD;">        //想后台请求数据</span></span>\n<span class="line"><span style="color:#A6ACCD;">        queryList(data).then(res=&gt;{</span></span>\n<span class="line"><span style="color:#A6ACCD;">          let list=res.data.records||[]; </span></span>\n<span class="line"><span style="color:#A6ACCD;">          let isnomore=list.length</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">*</span><span style="color:#C792EA;">10</span></span>\n<span class="line"><span style="color:#89DDFF;">          //请求成功把数据填充tab</span></span>\n<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">this</span><span style="color:#89DDFF;">.$</span><span style="color:#C792EA;">refs</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">tabs</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">reqFinish</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">req</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">list</span><span style="color:#89DDFF;">||[],</span><span style="color:#C792EA;">isnomore</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"><span style="color:#89DDFF;">          </span><span style="color:#C792EA;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">hideLoading</span><span style="color:#89DDFF;">()</span></span>\n<span class="line"><span style="color:#89DDFF;">        }).</span><span style="color:#C792EA;">catch</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">err</span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">          uni.hideLoading()</span></span>\n<span class="line"><span style="color:#A6ACCD;">          this.$refs.tabs.onReqErr(isReload)</span></span>\n<span class="line"><span style="color:#A6ACCD;">        }) </span></span>\n<span class="line"><span style="color:#A6ACCD;">      }, </span></span>\n<span class="line"><span style="color:#A6ACCD;">    }</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-hidden="true">#</a></h3><div class="table-custom"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>otherInfo</td><td>附加信息</td><td>Object</td><td>null</td></tr><tr><td>gap</td><td>选项卡距离下方的间隔</td><td>Number,String</td><td>20</td></tr><tr><td>barWidth</td><td>选项卡宽度</td><td>Number,String</td><td>210</td></tr><tr><td>index</td><td>选项卡默认选中的索引</td><td>Number</td><td>0</td></tr><tr><td>tabList</td><td>选项卡数据</td><td>Array</td><td>[]</td></tr><tr><td>tabName</td><td>选项卡显示的属性</td><td>String</td><td>&#39;name&#39;</td></tr><tr><td>mainHeight</td><td>内容区高度</td><td>Number</td><td>200</td></tr><tr><td>isScroll</td><td>选项卡是否滑动</td><td>Boolean</td><td>false</td></tr><tr><td>enable</td><td>启用吸顶</td><td>Boolean</td><td>true</td></tr><tr><td>tabRest</td><td>点击tab 重新获取数据</td><td>Boolean</td><td>false</td></tr></tbody></table></div><h3 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h3><div class="table-custom"><table><thead><tr><th>事件</th><th>说明</th></tr></thead><tbody><tr><td>startReq</td><td>开启请求数据,回调<code>isReload</code>是否刷新请求, <code>tabIndex</code>当前选项索引, <code>page</code>当前请求页数</td></tr></tbody></table></div><h3 id="method" tabindex="-1">method <a class="header-anchor" href="#method" aria-hidden="true">#</a></h3><div class="table-custom"><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>init ()</td><td>组件初始化后调用</td></tr><tr><td>reqFinish (req,reqData,isnomore)</td><td>用于请求成功后把数据返回</td></tr><tr><td>onReqErr (req)</td><td>请求异常时调用</td></tr><tr><td>getTabData (tabIndex)</td><td>获取当前tab的数据</td></tr><tr><td>updataTabData (tabIndex,data)</td><td>更新当前tab的数据</td></tr></tbody></table></div><div class="tip custom-block"><p class="custom-block-title">solt 插槽传值不生效</p><p>针对小程序端: <code>在清单文件中设置 &quot;scopedSlotsCompiler&quot; : &quot;legacy&quot;</code></p></div>',10);const F=s(r,[["render",function(s,p,t,o,c,r){const F=e("VueJobs");return a(),n("div",null,[D,l(F),y])}]]);export{c as __pageData,F as default};