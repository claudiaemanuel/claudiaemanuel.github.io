/* =========================================================
   LOGICA DEL SITO — quiz, risultato, galleria
   ========================================================= */
(function () {
  "use strict";

  const STORE_KEY = "cm-mazzo-v1";
  const app = document.getElementById("app");
  const LETTERS = ["A", "B", "C", "D"];
  const ALL_Q = QUESTIONS.concat(BONUS);
  const Q_BY_ID = Object.fromEntries(ALL_Q.map(q => [q.id, q]));
  const GALLERY_ORDER = GALLERY.flatMap(s => s.cards);

  /* ---------- Stato (salvato nel browser dell'ospite) ---------- */
  let state = load() || fresh();
  function fresh() { return { stage: "intro", idx: 0, answers: {}, done: false }; }
  function load() {
    try { const s = JSON.parse(localStorage.getItem(STORE_KEY)); return s && s.answers ? s : null; }
    catch (e) { return null; }
  }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* storage non disponibile: il sito funziona lo stesso */ } }
  function go(stage, idx) { state.stage = stage; if (idx !== undefined) state.idx = idx; save(); render(); window.scrollTo(0, 0); }

  const isRight = id => state.answers[id] !== undefined && state.answers[id] === Q_BY_ID[id].correct;
  const mainScore = () => QUESTIONS.filter(q => isRight(q.id)).length;
  const bonusScore = () => BONUS.filter(q => isRight(q.id)).length;

  /* ---------- Render ---------- */
  function render() {
    const s = state.stage;
    if (s === "quiz") return renderQuestion(QUESTIONS, state.idx, false);
    if (s === "bonusIntro") return renderBonusIntro();
    if (s === "bonus") return renderQuestion(BONUS, state.idx, true);
    if (s === "result") return renderResult();
    if (s === "gallery" && state.done) return renderGallery();
    return renderIntro();
  }

  function renderIntro() {
    const imgs = ["sei-coppe", "donna-spade", "tre-coppe"].map(id => `<img src="${CARDS[id].img}" alt="">`).join("");
    app.innerHTML = `
      <section class="hero">
        <div class="hero-cards" aria-hidden="true">${imgs}</div>
        <div class="eyebrow">Prima del quiz</div>
        <h1>C’è più di quello che sembra…</h1>
      </section>
      <div class="ornament">✦ ✦ ✦</div>
      ${INTRO_TEXT}
      <p class="big center"><strong>Buona ricerca!</strong></p>
      <div class="signature">Claudia &amp; Manuel</div>
      <div class="ornament">✦</div>
      ${state.done
        ? `<button class="btn" data-act="gallery">Vai alla galleria</button>
           <button class="btn ghost" data-act="restart">Rifai il quiz</button>`
        : `<button class="btn" data-act="start">${Object.keys(state.answers).length ? "Riprendi il quiz" : "Inizia il quiz"}</button>`}
    `;
  }

  function renderQuestion(list, idx, bonus) {
    const q = list[idx];
    const answered = state.answers[q.id] !== undefined;
    const pct = ((idx + (answered ? 1 : 0)) / list.length) * 100;
    const last = idx === list.length - 1;
    const nextLabel = !last ? "Avanti" : bonus ? "Scopri il risultato" : "Continua";

    app.innerHTML = `
      <div class="progress"><span style="width:${pct}%"></span></div>
      <div class="q-meta">
        <span>${bonus ? "Domanda bonus" : "Domanda"} ${idx + 1} di ${list.length}</span>
        <span>${q.label}</span>
      </div>
      <p class="question">${q.q}</p>
      ${q.hint ? `<button class="btn ghost hint-btn" data-act="hint">🔍 Mostrami un indizio</button><div id="hint"></div>` : ""}
      <div class="options">
        ${q.options.map((o, i) => `
          <button class="opt ${state.answers[q.id] === i ? "chosen" : ""}" data-opt="${i}" ${answered ? "disabled" : ""}>
            <span class="letter">${LETTERS[i]}</span><span>${o}</span>
          </button>`).join("")}
      </div>
      ${answered ? `
        <div class="feedback ${isRight(q.id) ? "right" : "wrong"}">${isRight(q.id) ? FEEDBACK.right : FEEDBACK.wrong}</div>
        <button class="btn" data-act="next">${nextLabel}</button>` : ""}
    `;

    app.querySelectorAll(".opt").forEach(b => b.addEventListener("click", () => {
      if (state.answers[q.id] !== undefined) return;
      state.answers[q.id] = Number(b.dataset.opt);
      save(); renderQuestion(list, idx, bonus);
      const fb = app.querySelector(".feedback");
      if (fb) fb.scrollIntoView({ behavior: "smooth", block: "center" });
    }));
  }

  function showHint(q) {
    const box = document.getElementById("hint");
    if (!box || box.innerHTML) return;
    const card = CARDS[q.hint.card];
    const z = q.hint.zoom;
    box.className = "hint";
    // Dettaglio: riquadro quadrato centrato sul punto (x, y) della carta, ingrandito di "scale"
    const RATIO = 2700 / 1770;
    box.innerHTML = z
      ? `<div class="hint-frame zoom"><img src="${card.img}" alt="Dettaglio della carta ${card.name}"
           style="position:absolute;width:${z.scale * 100}%;height:auto;max-width:none;object-fit:fill;
                  left:${50 - z.x * z.scale}%;top:${50 - z.y * z.scale * RATIO}%"></div>`
      : `<div class="hint-frame"><img src="${card.img}" alt="${card.name}"></div>`;
    const btn = app.querySelector(".hint-btn"); if (btn) btn.remove();
  }

  function renderBonusIntro() {
    app.innerHTML = `
      <div class="ornament">✦ ✦ ✦</div>
      <h1 class="center">${BONUS_INTRO.title}</h1>
      <p class="center">${BONUS_INTRO.text}</p>
      <div class="ornament">✦</div>
      <button class="btn gold" data-act="bonus">Vai alle domande bonus</button>
      <button class="link-btn" data-act="result">Salta e scopri il risultato</button>
    `;
  }

  function renderResult() {
    const sc = mainScore();
    const p = PROFILES.find(x => sc >= x.min && sc <= x.max);
    const bAns = BONUS.filter(q => state.answers[q.id] !== undefined).length;
    app.innerHTML = `
      <div class="eyebrow center">Il risultato</div>
      <div class="score">${sc}<small>/${QUESTIONS.length}</small></div>
      <h2 class="profile-title">${p.title}</h2>
      ${bAns ? `<p class="bonus-score">Domande bonus: ${bonusScore()} su ${BONUS.length}</p>` : ""}
      <div class="panel">${p.text}</div>
      <div class="ornament">✦</div>
      <div class="center">${RESULT_OUTRO}</div>
      <button class="btn gold" data-act="unlock">🔓 Sblocca la galleria</button>
    `;
  }

  function badgeFor(card) {
    const ids = card.quiz.filter(id => state.answers[id] !== undefined);
    if (!ids.length) return "";
    return ids.every(isRight)
      ? `<span class="badge found">Easter egg trovato nel quiz ✓</span>`
      : `<span class="badge missed">Questo ti era sfuggito 👀</span>`;
  }

  function renderGallery() {
    app.innerHTML = `
      <div class="center">
        <div class="eyebrow">La galleria</div>
        <h1>Tutti i segreti del mazzo</h1>
        <p><em>Tocca una carta per girarla, scoprire i dettagli nascosti e leggere la sua storia.</em></p>
      </div>
      <details class="semi"><summary>I quattro semi</summary>${SEMI_TEXT}</details>
      ${GALLERY.map(sec => `
        <h3 class="section-title">${sec.title}</h3>
        <div class="grid">
          ${sec.cards.map(id => {
            const c = CARDS[id];
            return `<button class="tile" data-card="${id}">
              <img src="${c.img}" alt="${c.name}" loading="lazy">
              <span class="t-name">${c.name}</span>
              <span class="t-title">${c.title}</span>
              <span class="t-sub">${c.subtitle}</span>
              ${badgeFor(c)}
              <span class="t-more">SCOPRI LA STORIA +</span>
            </button>`;
          }).join("")}
        </div>`).join("")}
      <section class="closing">
        <div class="ornament">✦ ✦ ✦</div>
        ${CLOSING_TEXT}
        <div class="signature">Claudia &amp; Manuel</div>
        <p class="date">${WEDDING_DATE}</p>
        <button class="link-btn" data-act="restart">Rifai il quiz</button>
      </section>
    `;
  }

  /* ---------- Visore carta ---------- */
  const viewer = document.getElementById("viewer");
  const vBody = document.getElementById("v-body");
  let vIdx = 0;

  function openViewer(id, push) {
    vIdx = GALLERY_ORDER.indexOf(id);
    const c = CARDS[id];
    document.getElementById("v-count").textContent = `${vIdx + 1} / ${GALLERY_ORDER.length}`;
    vBody.innerHTML = `
      <div class="viewer-inner">
        <div class="flip" id="flip" role="button" aria-label="Gira la carta" tabindex="0">
          <div class="flip-inner">
            <div class="face front">
              <img src="${c.img}" alt="${c.name}">
              ${c.hotspots.map((h, i) => `<button class="hotspot" data-spot="${i}" style="left:${h.x}%;top:${h.y}%" aria-label="Dettaglio ${i + 1}">${c.hotspots.length > 1 ? i + 1 : "+"}</button>`).join("")}
            </div>
            <div class="face back"><img src="${RETRO}" alt="Retro della carta"></div>
          </div>
        </div>
        <p class="flip-hint">${c.hotspots.length ? "Tocca i punti dorati per scoprire i dettagli · tocca la carta per girarla" : "Tocca la carta per girarla"}</p>
        <div id="spot-caption"></div>
        <div class="v-head">
          <div class="eyebrow">${c.name}</div>
          <h2>${c.title}</h2>
          <div class="sub">${c.subtitle}</div>
          ${badgeFor(c)}
        </div>
        <div class="story">${c.story}</div>
      </div>`;
    viewer.hidden = false;
    document.body.classList.add("lock");
    vBody.scrollTop = 0;
    if (push) history.pushState({ viewer: true }, "");

    const flip = document.getElementById("flip");
    const cap = document.getElementById("spot-caption");
    const toggle = () => { flip.classList.toggle("flipped"); cap.innerHTML = ""; };
    flip.addEventListener("click", e => { if (!e.target.closest(".hotspot")) toggle(); });
    flip.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    flip.querySelectorAll(".hotspot").forEach(b => b.addEventListener("click", e => {
      e.stopPropagation();
      flip.querySelectorAll(".hotspot").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      cap.innerHTML = `<div class="spot-caption">${c.hotspots[b.dataset.spot].text}</div>`;
    }));
  }

  function closeViewer() {
    viewer.hidden = true;
    document.body.classList.remove("lock");
  }

  document.getElementById("v-close").addEventListener("click", () => {
    if (history.state && history.state.viewer) history.back(); else closeViewer();
  });
  document.getElementById("v-prev").addEventListener("click", () =>
    openViewer(GALLERY_ORDER[(vIdx - 1 + GALLERY_ORDER.length) % GALLERY_ORDER.length], false));
  document.getElementById("v-next").addEventListener("click", () =>
    openViewer(GALLERY_ORDER[(vIdx + 1) % GALLERY_ORDER.length], false));
  window.addEventListener("popstate", () => { if (!viewer.hidden) closeViewer(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !viewer.hidden) document.getElementById("v-close").click(); });

  /* ---------- Azioni ---------- */
  app.addEventListener("click", e => {
    const tile = e.target.closest("[data-card]");
    if (tile) return openViewer(tile.dataset.card, true);
    const b = e.target.closest("[data-act]");
    if (!b) return;
    const act = b.dataset.act;
    const list = state.stage === "bonus" ? BONUS : QUESTIONS;

    if (act === "start") {
      const firstOpen = QUESTIONS.findIndex(q => state.answers[q.id] === undefined);
      go("quiz", firstOpen < 0 ? QUESTIONS.length - 1 : firstOpen);
    } else if (act === "hint") showHint(list[state.idx]);
    else if (act === "next") {
      if (state.idx < list.length - 1) go(state.stage, state.idx + 1);
      else go(state.stage === "bonus" ? "result" : "bonusIntro", 0);
    } else if (act === "bonus") go("bonus", 0);
    else if (act === "result") go("result");
    else if (act === "unlock") { state.done = true; go("gallery"); }
    else if (act === "gallery") go("gallery");
    else if (act === "restart") {
      if (confirm("Vuoi rifare il quiz? Le risposte precedenti verranno cancellate.")) {
        const done = state.done; state = fresh(); state.done = done; go("quiz", 0);
      }
    }
  });

  // Precarica il retro così la prima rotazione è immediata
  new Image().src = RETRO;
  render();
})();
