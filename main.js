import includeHtml from './js/include_html.js';
import playNow from './js/play.js';
import viewRules from './js/rules.js';
import scorePrint from './js/score.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
  viewRules();
  playNow();
});
scorePrint();
