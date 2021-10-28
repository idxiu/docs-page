(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{774:function(s,n,e){"use strict";e.r(n);var a=e(67),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"自动化打包、部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动化打包、部署"}},[s._v("#")]),s._v(" 自动化打包、部署")]),s._v(" "),e("h2",{attrs:{id:"vuepress-自动发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-自动发布"}},[s._v("#")]),s._v(" vuepress 自动发布")]),s._v(" "),e("blockquote",[e("p",[s._v("github actions.github/workflows/master.yml:")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("name: Build  to GitHub Pages\non:\n  push:\n    branches: [ master ]\n  # Allows you to run this workflow manually from the Actions tab\n  workflow_dispatch:\n    \njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js\n      uses: actions/setup-node@v1\n      with:\n        node-version: '14.x'\n\n    # Caching dependencies to speed up workflows. (GitHub will remove any cache entries that have not been accessed in over 7 days.)\n    - name: Cache node modules\n      uses: actions/cache@v1\n      id: cache\n      with:\n        path: node_modules\n        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n        restore-keys: |\n          ${{ runner.os }}-node-\n    - name: Install Dependencies\n      if: steps.cache.outputs.cache-hit != 'true'\n      run: npm i\n\n    # Vuepress Build.\n    - name: Generates Pages\n      run: |\n        npm run build\n\n    - name: Deploy Github Pages🚀\n      uses: JamesIves/github-pages-deploy-action@4.1.0\n      with:\n        repository-name: idxiu/xxx # 操作应部署到的分支。.\n        branch: master\n        folder: ./src/.vuepress/dist # 操作应部署的文件夹.\n        ssh-key: ${{ secrets.DEPLOY_KEY }} # 部署密钥\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);