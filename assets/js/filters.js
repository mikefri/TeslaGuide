(function () {
  const btns       = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.posts-grid .post-card');
  const count      = document.getElementById('results-count');
  const empty      = document.getElementById('no-results');
  const grid       = document.getElementById('posts-grid');
  const pagination = document.getElementById('pagination');

  if (!btns.length) return;

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {

      /* Bouton actif */
      btns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      var filter  = this.dataset.filter;
      var visible = 0;

      cards.forEach(function (card) {
        var cat   = card.dataset.category || 'Guide';
        var match = filter === 'all' || cat === filter;

        if (match) {
          card.style.display = '';
          requestAnimationFrame(function () {
            card.style.opacity   = '0';
            card.style.transform = 'translateY(8px)';
            requestAnimationFrame(function () {
              card.style.transition = 'opacity .25s ease, transform .25s ease';
              card.style.opacity    = '1';
              card.style.transform  = 'translateY(0)';
            });
          });
          visible++;
        } else {
          card.style.display   = 'none';
          card.style.opacity   = '';
          card.style.transform = '';
        }
      });

      /* Compteur */
      if (count) count.textContent = visible;

      /* État vide */
      if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
      if (grid)  grid.style.display  = visible === 0 ? 'none'  : '';

      /* Pagination : masquée quand un filtre est actif */
      if (pagination) pagination.style.display = filter === 'all' ? '' : 'none';
    });
  });

  /* Lecture du paramètre URL au chargement : ?category=Recharge */
  var params = new URLSearchParams(window.location.search);
  var preset = params.get('category');
  if (preset) {
    var target = Array.prototype.find.call(btns, function (b) {
      return b.dataset.filter === preset;
    });
    if (target) target.click();
  }
})();
