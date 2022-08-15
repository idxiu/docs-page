(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{607:function(s,n,e){"use strict";e.r(n);var a=e(8),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"自动化打包、部署"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自动化打包、部署"}},[s._v("#")]),s._v(" 自动化打包、部署")]),s._v(" "),n("h2",{attrs:{id:"vuepress-自动发布"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-自动发布"}},[s._v("#")]),s._v(" vuepress 自动发布")]),s._v(" "),n("blockquote",[n("p",[s._v("github actions.github/workflows/master.yml:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("name: Build  to GitHub Pages\non:\n  push:\n    branches: [ master ]\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n    \njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js\n      uses: actions/setup-node@v1\n      with:\n        node-version: '14.x'\n\n    # Caching dependencies to speed up workflows. (GitHub will remove any cache entries that have not been accessed in over 7 days.)\n    - name: Cache node modules\n      uses: actions/cache@v1\n      id: cache\n      with:\n        path: node_modules\n        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n        restore-keys: |\n          ${{ runner.os }}-node-\n    - name: Install Dependencies\n      if: steps.cache.outputs.cache-hit != 'true'\n      run: npm i\n\n    # Vuepress Build.\n    - name: Generates Pages\n      run: |\n        npm run build\n\n    - name: Deploy Github Pages🚀\n      uses: JamesIves/github-pages-deploy-action@4.1.0\n      with:\n        repository-name: idxiu/xxx # 操作应部署到的分支。.\n        branch: master\n        folder: ./src/.vuepress/dist # 操作应部署的文件夹.\n        ssh-key: ${{ secrets.DEPLOY_KEY }} # 部署密钥\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("从 "),n("code",[s._v("A仓库")]),s._v(" 部署到 "),n("code",[s._v("B仓库")])]),s._v(" "),n("ul",[n("li",[n("code",[s._v("B仓库")]),s._v("添加"),n("code",[s._v("DEPLOY_KEY中的公钥")])]),s._v(" "),n("li",[n("code",[s._v("A仓库")]),s._v("中添加"),n("code",[s._v("私钥")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);