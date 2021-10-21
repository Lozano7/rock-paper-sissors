const d = document;
export default function viewRules() {
  d.addEventListener('click', (e) => {
    if (e.target.matches('#btn-rules')) {
      d.documentElement.scrollTop = 0;
      d.querySelector('.rules').classList.add('active');
      d.querySelector('body').classList.add('active-body');
    }
    if (e.target.matches('#cerrar *')) {
      d.documentElement.scrollTop = 0;
      d.querySelector('.rules').classList.remove('active');
      d.querySelector('body').classList.remove('active-body');
    }
  });
}
