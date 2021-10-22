const d = document;
const ls = localStorage;
const $score = d.getElementById('score');

export default function scorePrint() {
  d.addEventListener('DOMContentLoaded', (e) => {
    if (ls.getItem('contador') === null) ls.setItem('contador', 0);
    $score.innerHTML = ls.getItem('contador');
  });
}
