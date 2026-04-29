(function () {
  const params = new URLSearchParams(window.location.search);
  const query  = (params.get("q") || "").trim().toLowerCase();
  const input  = document.getElementById("search-input");
  const container = document.getElementById("search-results");

  if (input) input.value = query;
  if (!container) return;

  if (!query) {
    container.innerHTML = '<p class="search-empty">Entrez un mot-clé pour commencer.</p>';
    return;
  }

  fetch("/search.json")
    .then(r => r.json())
    .then(posts => {
      const words = query.split(/\s+/).filter(Boolean);

      const results = posts.filter(post => {
        const haystack = [post.title, post.excerpt, post.category]
          .join(" ").toLowerCase();
        return words.every(w => haystack.includes(w));
      });

      if (!results.length) {
        container.innerHTML =
          `<p class="search-empty">Aucun résultat pour <strong>${escHtml(query)}</strong>.</p>`;
        return;
      }

      container.innerHTML = results.map(post => `
        <a href="${post.url}" class="post-card">
          <div class="post-card-content">
            <span class="post-tag">${escHtml(post.category)}</span>
            <h3 class="post-title">${highlight(escHtml(post.title), words)}</h3>
            <p class="post-excerpt">${highlight(escHtml(post.excerpt), words)}</p>
            <span class="post-date">${post.date}</span>
            <span class="post-arrow">Lire →</span>
          </div>
          <div class="post-card-image"></div>
        </a>
      `).join("");
    })
    .catch(() => {
      container.innerHTML = '<p class="search-empty">Erreur de chargement de l\'index.</p>';
    });

  function escHtml(s) {
    return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  function highlight(text, words) {
    return words.reduce((t, w) =>
      t.replace(new RegExp(`(${w})`, "gi"), "<mark>$1</mark>"), text);
  }
})();
