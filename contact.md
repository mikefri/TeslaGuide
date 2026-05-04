---
layout: default
title: Contact — TeslaGénie
description: Une question sur Tesla, un parrainage, ou juste envie d'échanger ? Contactez TeslaGénie.
permalink: /contact/
---

<style>
  /* ── Page Contact ── */
  .contact-hero {
    padding: 7rem 1.5rem 4rem;
    max-width: 760px;
    margin: 0 auto;
  }
  .contact-eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--accent, #0071e3);
    margin-bottom: 1.2rem;
  }
  .contact-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(3rem, 8vw, 5.5rem);
    line-height: 1;
    letter-spacing: 0.02em;
    margin-bottom: 1.2rem;
  }
  .contact-title em {
    font-style: normal;
    color: var(--accent, #0071e3);
  }
  .contact-sub {
    font-family: 'Barlow', sans-serif;
    font-size: 1.05rem;
    font-weight: 300;
    color: #666;
    max-width: 500px;
    line-height: 1.7;
  }

  /* ── Layout deux colonnes ── */
  .contact-layout {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.5rem 6rem;
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 4rem;
    align-items: start;
  }
  @media (max-width: 768px) {
    .contact-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  }

  /* ── Sidebar infos ── */
  .contact-info-block {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: sticky;
    top: 6rem;
  }
  .contact-info-item {
    border-left: 2px solid rgba(0,0,0,0.1);
    padding-left: 1.2rem;
  }
  .contact-info-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 0.4rem;
  }
  .contact-info-value {
    font-family: 'Barlow', sans-serif;
    font-size: 0.95rem;
    color: #111;
    line-height: 1.5;
  }
  .contact-info-value a {
    color: #111;
    text-decoration: none;
    transition: color 0.2s;
  }
  .contact-info-value a:hover { color: var(--accent, #0071e3); }

  .contact-x-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.7rem 1.3rem;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 100px;
    font-family: 'Barlow', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    color: #111;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s;
    margin-top: 0.5rem;
    width: fit-content;
  }
  .contact-x-btn:hover {
    background: rgba(0,0,0,0.05);
    border-color: rgba(0,0,0,0.35);
    color: #000;
  }

  /* ── Formulaire ── */
  .contact-form-wrap {
    background: #f8f8f8;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 16px;
    padding: 2.5rem;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  @media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
  .form-label {
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #666;
  }
  .form-input,
  .form-select,
  .form-textarea {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.15);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-family: 'Barlow', sans-serif;
    font-size: 0.95rem;
    color: #111;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
  .form-input::placeholder,
  .form-textarea::placeholder { color: #bbb; }
  .form-input:focus,
  .form-select:focus,
  .form-textarea:focus {
    border-color: var(--accent, #0071e3);
    box-shadow: 0 0 0 3px rgba(0,113,227,0.1);
  }
  .form-select {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23555' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
    background-color: #fff;
  }
  .form-select option { background: #fff; color: #111; }
  .form-textarea { resize: vertical; min-height: 130px; }

  .form-submit {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.9rem 2rem;
    background: var(--accent, #0071e3);
    color: #fff;
    border: none;
    border-radius: 100px;
    font-family: 'Barlow', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 0.04em;
    transition: background 0.2s, transform 0.15s;
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
  }
  .form-submit:hover { background: #0063c7; transform: translateY(-1px); }
  .form-submit:active { transform: translateY(0); }

  /* ── Message de succès ── */
  .form-success {
    display: none;
    text-align: center;
    padding: 2rem 1rem;
  }
  .form-success-icon {
    width: 56px; height: 56px;
    background: rgba(0,113,227,0.15);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 1.2rem;
  }
  .form-success h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }
  .form-success p {
    font-family: 'Barlow', sans-serif;
    color: var(--grey, #888);
    font-size: 0.95rem;
  }

  /* ── Divider ── */
  .contact-divider {
    border: none;
    border-top: 1px solid rgba(0,0,0,0.08);
    max-width: 1100px;
    margin: 0 auto 4rem;
  }
</style>

<!-- Hero -->
<div class="contact-hero">
  <p class="contact-eyebrow">Contact</p>
  <h1 class="contact-title">Une question<br>sur <em>Tesla</em> ?</h1>
  <p class="contact-sub">Parrainage, conseil à l'achat, retour d'expérience ou simple curiosité — je réponds à tous les messages.</p>
</div>

<hr class="contact-divider">

<!-- Layout -->
<div class="contact-layout">

  <!-- Colonne gauche : infos -->
  <div class="contact-info-block">

    <div class="contact-info-item">
      <p class="contact-info-label">Temps de réponse</p>
      <p class="contact-info-value">Généralement sous 24 h</p>
    </div>

    <div class="contact-info-item">
      <p class="contact-info-label">Sujets traités</p>
      <p class="contact-info-value">
        Parrainage Tesla · Choix du modèle<br>
        Recharge &amp; Supercharger<br>
        Questions techniques · Entretien
      </p>
    </div>

    <div class="contact-info-item">
      <p class="contact-info-label">Aussi sur X (Twitter)</p>
      <a href="https://x.com/MikefriTesla" target="_blank" rel="noopener noreferrer" class="contact-x-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        @MikefriTesla
      </a>
    </div>

    <div class="contact-info-item">
      <p class="contact-info-label">Parrainage direct</p>
      <p class="contact-info-value">
        <a href="https://ts.la/michael618693" target="_blank" rel="noopener noreferrer">ts.la/michael618693</a>
      </p>
    </div>

  </div>

  <!-- Colonne droite : formulaire -->
  <div class="contact-form-wrap">

    <!-- Formulaire (Formspree — remplace YOUR_FORM_ID) -->
    <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

      <div class="form-row">
        <div class="form-group">
          <label class="form-label" for="cf-name">Prénom</label>
          <input class="form-input" type="text" id="cf-name" name="name"
                 placeholder="Votre prénom" required autocomplete="given-name">
        </div>
        <div class="form-group">
          <label class="form-label" for="cf-email">E-mail</label>
          <input class="form-input" type="email" id="cf-email" name="email"
                 placeholder="vous@exemple.com" required autocomplete="email">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="cf-subject">Sujet</label>
        <select class="form-select" id="cf-subject" name="subject" required>
          <option value="" disabled selected>Choisir un sujet…</option>
          <option value="Parrainage Tesla">🔗 Parrainage Tesla</option>
          <option value="Conseil à l'achat">🚗 Conseil à l'achat</option>
          <option value="Recharge / Supercharger">⚡ Recharge / Supercharger</option>
          <option value="Question technique">🔧 Question technique</option>
          <option value="Collaboration / Presse">📰 Collaboration / Presse</option>
          <option value="Autre">💬 Autre</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="cf-message">Message</label>
        <textarea class="form-textarea" id="cf-message" name="message"
                  placeholder="Décrivez votre question ou demande…" required></textarea>
      </div>

      <!-- Honeypot anti-spam -->
      <input type="text" name="_gotcha" style="display:none">
      <input type="hidden" name="_language" value="fr">

      <button type="submit" class="form-submit">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Envoyer le message
      </button>

    </form>

    <!-- Message succès (affiché après envoi JS) -->
    <div class="form-success" id="form-success">
      <div class="form-success-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="var(--accent,#0071e3)" stroke-width="2.2" stroke-linecap="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h3>Message envoyé !</h3>
      <p>Merci, je vous réponds généralement sous 24 h.</p>
    </div>

  </div><!-- /.contact-form-wrap -->
</div><!-- /.contact-layout -->

<script>
(function () {
  var form    = document.getElementById('contact-form');
  var success = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function (res) {
      if (res.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
      } else {
        alert('Une erreur est survenue. Veuillez réessayer ou me contacter sur X.');
      }
    })
    .catch(function () {
      alert('Erreur réseau. Veuillez réessayer.');
    });
  });
})();
</script>
