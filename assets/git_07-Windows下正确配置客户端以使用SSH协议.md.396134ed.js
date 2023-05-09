import{_ as e,o as t,c as i,b as o,d as s,e as a,a as r,r as n}from"./app.4b8e00fa.js";const d=JSON.parse('{"title":"Windows下使用TortoiseGit的解决方案如下：","description":"","frontmatter":{},"headers":[{"level":2,"title":"如果使用idea系列工具，请配置原生的ssh client：","slug":"如果使用idea系列工具，请配置原生的ssh-client：","link":"#如果使用idea系列工具，请配置原生的ssh-client：","children":[]}],"relativePath":"git/07-Windows下正确配置客户端以使用SSH协议.md","lastUpdated":1683631174000}'),l={name:"git/07-Windows下正确配置客户端以使用SSH协议.md"},h=s("h1",{id:"windows下使用tortoisegit的解决方案如下：",tabindex:"-1"},[a("Windows下使用TortoiseGit的解决方案如下： "),s("a",{class:"header-anchor",href:"#windows下使用tortoisegit的解决方案如下：","aria-hidden":"true"},"#")],-1),c=r('<ol><li>下载Windows下的git客户端，<a href="https://git-for-windows.github.io/" target="_blank" rel="noreferrer">git-for-windows</a></li><li>打开bash，输入<code>ssh-keygen.exe -t rsa -C &quot;email&quot; </code>如果不想输密码的话，一路回车会自动生成id_rsa和对应的pub文件</li><li>打开<code>sshKeys</code>页面，点击<code>&quot;ADD SSH KEY&quot;</code>添加新公钥，将刚刚生成的id_rsa.pub文件中的内容复制到Key输入框中</li><li>调整TortoiseGit settings中的network选项，将tortoisegitplink.exe改成步骤1中git的安装目录（如，user\\bin\\ssh.exe）。</li></ol><h2 id="如果使用idea系列工具，请配置原生的ssh-client：" tabindex="-1">如果使用idea系列工具，请配置原生的ssh client： <a class="header-anchor" href="#如果使用idea系列工具，请配置原生的ssh-client：" aria-hidden="true">#</a></h2><p>具体配置路径为：settings--&gt;Version Control--&gt;Git ,SSH executable选择Native，具体的可以参考<a href="http://stackoverflow.com/questions/27566999/git-with-intellij-idea-could-not-read-from-remote-repository" target="_blank" rel="noreferrer">git-with-intellij-idea-could-not-read-from-remote-repository</a></p><blockquote><p>idea在14以上版本，默认将ssh的配置成新的java client</p></blockquote>',4);const u=e(l,[["render",function(e,s,a,r,d,l){const u=n("VueJobs");return t(),i("div",null,[h,o(u),c])}]]);export{d as __pageData,u as default};
