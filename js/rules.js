const d = document;
export default function viewRules() {
  d.addEventListener('click', (e) => {
    if (e.target.matches('#btn-rules')) {
      d.querySelector('.rules').classList.add('active');
    }
    if (e.target.matches('#cerrar *')) {
      d.querySelector('.rules').classList.remove('active');
    }
  });
}
