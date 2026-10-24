/* 双语切换:通过给 <body> 加 class lang-zh / lang-en 控制显隐。
   规则:页面里所有要翻译的文本,写成两个相邻元素,分别带 lang="zh" 和 lang="en"。
   加新章节时照抄这个写法即可(见 index.html)。 */
(function () {
  var KEY = 'xuanyi_lang';
  var def = 'zh';

  function apply(lang) {
    document.body.classList.remove('lang-zh', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.documentElement.lang = lang;
    // 高亮当前语言按钮
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    localStorage.setItem(KEY, lang);
  }

  // 已保存偏好,否则用浏览器语言
  var saved = localStorage.getItem(KEY);
  var browserLang = (navigator.language || 'zh').toLowerCase().indexOf('en') === 0 ? 'en' : 'zh';
  apply(saved || browserLang);

  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () { apply(b.getAttribute('data-lang')); });
  });
})();
