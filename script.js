// ES / EN language toggle (initial language is set inline in <head>)
document.querySelectorAll('.lang button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var l = btn.dataset.lang;
    var root = document.documentElement;
    root.classList.remove('lang-es', 'lang-en');
    root.classList.add('lang-' + l);
    root.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
  });
});
