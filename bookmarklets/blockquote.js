javascript: (function() {
  var w = window.open().document;
  w.open();
  w.write('<TEXTAREA COLS=90 ROWS=20>{%blockquote ' + document.title + ' ' +
    location.href + '%}\n' + document.getSelection() +
    '\n{%endblockquote%}</TEXTAREA>');
  w.close();
})();
