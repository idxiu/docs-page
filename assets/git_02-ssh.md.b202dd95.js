import{_ as s,o as a,c as n,b as e,d as p,e as l,a as o,r as c}from"./app.b322fe29.js";const i=JSON.parse('{"title":"如何创建和添加SSH Keys","description":"","frontmatter":{},"headers":[{"level":2,"title":"SSH keys","slug":"ssh-keys","link":"#ssh-keys","children":[]},{"level":2,"title":"Applications","slug":"applications","link":"#applications","children":[{"level":3,"title":"Eclipse","slug":"eclipse","link":"#eclipse","children":[]}]},{"level":2,"title":"Tip: Non-default OpenSSH key file names or locations","slug":"tip-non-default-openssh-key-file-names-or-locations","link":"#tip-non-default-openssh-key-file-names-or-locations","children":[]}],"relativePath":"git/02-ssh.md","lastUpdated":1663311966000}'),t={name:"git/02-ssh.md"},r=p("h1",{id:"如何创建和添加ssh-keys",tabindex:"-1"},[l("如何创建和添加SSH Keys "),p("a",{class:"header-anchor",href:"#如何创建和添加ssh-keys","aria-hidden":"true"},"#")],-1),d=o('<h2 id="ssh-keys" tabindex="-1">SSH keys <a class="header-anchor" href="#ssh-keys" aria-hidden="true">#</a></h2><p>SSH key 可以让你在你的电脑和Code服务器之间建立安全的加密连接。 先执行以下语句来判断是否已经存在本地公钥：</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat ~/.ssh/id_rsa.pub</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果你看到一长串以 <code>ssh-rsa</code>或 <code>ssh-dsa</code>开头的字符串, 你可以跳过 <code>ssh-keygen</code>的步骤。</p><p>提示: 最好的情况是一个密码对应一个ssh key，但是那不是必须的。你完全可以跳过创建密码这个步骤。请记住设置的密码并不能被修改或获取。</p><p>你可以按如下命令来生成ssh key：</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">ssh-keygen -t rsa -C &quot;917017530@qq.com&quot;</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这个指令会要求你提供一个位置和文件名去存放键值对和密码，你可以点击Enter键去使用默认值。</p><p>用以下命令获取你生成的公钥：</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat ~/.ssh/id_rsa.pub</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>复制这个公钥放到你的个人设置中的SSH/My SSH Keys下，请完整拷贝从<code>ssh-</code>开始直到你的用户名和主机名为止的内容。</p><p>如果打算拷贝你的公钥到你的粘贴板下，请参考你的操作系统使用以下的命令：</p><p><strong>Windows:</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">clip &lt; ~/.ssh/id_rsa.pub</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Mac:</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pbcopy &lt; ~/.ssh/id_rsa.pub</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>GNU/Linux (requires xclip):</strong></p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">xclip -sel clip &lt; ~/.ssh/id_rsa.pub</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="applications" tabindex="-1">Applications <a class="header-anchor" href="#applications" aria-hidden="true">#</a></h2><h3 id="eclipse" tabindex="-1">Eclipse <a class="header-anchor" href="#eclipse" aria-hidden="true">#</a></h3><p>如何在Eclipse中添加ssh key: <a href="https://wiki.eclipse.org/EGit/User_Guide#Eclipse_SSH_Configuration" target="_blank" rel="noreferrer">https://wiki.eclipse.org/EGit/User_Guide#Eclipse_SSH_Configuration</a></p><h2 id="tip-non-default-openssh-key-file-names-or-locations" tabindex="-1">Tip: Non-default OpenSSH key file names or locations <a class="header-anchor" href="#tip-non-default-openssh-key-file-names-or-locations" aria-hidden="true">#</a></h2><p>如果，不管你有什么理由，当你决定去用一个非默认的位置或文件名去存放你的ssh key。你必须配置好你的ssh客户端以找到你的ssh私钥去连接Code服务器，对于OpenSSH客户端，这个通常是在<code>~/.ssh/config</code>类似的位置配置的：</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#</span></span>\n<span class="line"><span style="color:#A6ACCD;"># Our company&#39;s internal GitLab server</span></span>\n<span class="line"><span style="color:#A6ACCD;">#</span></span>\n<span class="line"><span style="color:#A6ACCD;">Host my-git.company.com</span></span>\n<span class="line"><span style="color:#A6ACCD;">RSAAuthentication yes</span></span>\n<span class="line"><span style="color:#A6ACCD;">IdentityFile ~/my-ssh-key-directory/company-com-private-key-filename</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>',24);const h=s(t,[["render",function(s,p,l,o,i,t){const h=c("VueJobs");return a(),n("div",null,[r,e(h),d])}]]);export{i as __pageData,h as default};
