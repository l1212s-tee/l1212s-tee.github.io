# xuanyi.github.io

个人学术主页 / Personal academic homepage

对标 https://heartever.github.io 的纯静态风格,中英双语可切换。
纯 HTML + CSS + JS,零依赖,由 GitHub Pages 直接托管。

## 目录结构

    index.html       主页面(所有双语内容都在这里)
    css/style.css    样式
    js/main.js       语言切换逻辑
    images/          放头像等图片(当前为占位 profile.svg,替换成你的照片即可)
    files/           放 CV、PDF 等附件(可选)

## 怎么填内容

1. 打开 index.html。
2. 每条内容都有 中文 + 英文 两段,分别带 lang="zh" 和 lang="en",两段都要填。
   例如论文条目,复制一个 <li> 同时加到 中文 <ol> 和 英文 <ol> 里。
3. 头像:把照片放成 images/profile.jpg(或替换 profile.svg 的文件名/路径)。
4. 附件 PDF 放 files/,链接写 [PDF](/files/xxx.pdf)。

语言切换由 CSS 规则控制:
  body.lang-zh -> 隐藏所有 [lang="en"],显示 [lang="zh"]
  body.lang-en -> 相反
加新段落时,保证中英两段是相邻两个元素、标签带对应 lang 即可。

## 部署上线

仓库: https://github.com/l1212s-tee/xuanyi.github.io (已设好 origin)

在能联网的机器上执行:

    cd xuanyi.github.io
    git add -A && git commit -m "init: personal academic homepage"
    git push -u origin main

然后到 GitHub 仓库页面:
  Settings -> Pages -> Source 选 "Deploy from a branch",分支选 main / (root),
  保存后等一两分钟,你的页面就会出现在:
  https://xuanyi.github.io

(可选)自定义域名:在仓库 Pages 设置里填域名,并在仓库根新建 CNAME 文件写入域名。

## 本地预览

直接用浏览器打开 index.html 即可预览;或跑一个本地服务器:

    python3 -m http.server 8000   # 然后访问 http://localhost:8000
