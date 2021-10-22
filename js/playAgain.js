const d = document;
export default function playAgainNow() {
  d.addEventListener('click', (e) => {
    if (e.target === d.getElementById('regresar')) {
      location.reload();
    }
  });
}
