import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  // ページ内リンクのスムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // トップに戻るボタン（FV が画面外に出たら表示）
  const pagetop = document.querySelector('.c-pagetop');
  const hero = document.querySelector('.p-hero');
  if (pagetop && hero) {
    new IntersectionObserver(([entry]) => {
      pagetop.classList.toggle('is-visible', !entry.isIntersecting);
    }).observe(hero);

    pagetop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
