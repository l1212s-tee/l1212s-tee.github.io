// Per-article read counter for blog.html (GitHub Pages static site).
// Delegated click handler: clicking any [data-count] link increments that
// article's read count, stored in localStorage per-browser.
(function () {
  var KEY = 'blogread_v1';
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; }
  }
  function save(d) {
    try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
  }

  function init() {
    var counts = load();
    // Render stored counts into the read-count spans.
    document.querySelectorAll('.blog-item').forEach(function (item) {
      var id = item.getAttribute('data-id');
      var el = item.querySelector('.read-count');
      if (id && el) el.textContent = counts[id] || 0;
    });
    // Single delegated handler: any click on a [data-count] link (title or "阅读原文").
    document.addEventListener('click', function (e) {
      var a = e.target.closest('[data-count]');
      if (!a) return;
      var item = a.closest('.blog-item');
      if (!item) return;
      var id = item.getAttribute('data-id');
      var el = item.querySelector('.read-count');
      if (!id || !el) return;
      counts[id] = (counts[id] || 0) + 1;
      el.textContent = counts[id];
      save(counts);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
