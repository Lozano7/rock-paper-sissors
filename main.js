import includeHtml from './js/include_html.js';
import playNow from './js/play.js';
import viewRules from './js/rules.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  includeHtml('.header', 'assets/header.html');
  includeHtml('.footer', 'assets/footer.html');
  viewRules();
  playNow();
});
