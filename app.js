/* ============================================================
   LOUATENI — logique du site. Aucune dépendance, fonctionne en
   file:// et hors ligne. Tout ce qui est stocké reste sur
   l'appareil de l'utilisateur (localStorage) : rien n'est
   téléversé, parce qu'il n'y a pas de backend — et c'est
   voulu (voir note sécurité dans agir.html).
   ============================================================ */
(function () {
  "use strict";

  var B = window.BRAND || {};
  var T = window.I18N || { fr: {}, ar: {} };
  var D = (window.DARIJA && window.DARIJA.shu) || {};
  var NOTES = window.NOTES || [];

  /* trois langues : français, دارجة tchadienne, arabe standard.
     La دارجة na pas de code HTML officiel utilisable partout : on
     porte « shu » (code ISO de l'arabe tchadien) sur <html lang>. */
  var LANGS = ["fr", "shu", "ar"];

  var LS = { lang: "louateni.lang", theme: "louateni.theme", leads: "louateni.leads", dismissed: "louateni.installDismissed" };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function lang() {
    var l = (document.documentElement.lang || "fr").toLowerCase();
    return l === "shu" ? "shu" : (l.indexOf("ar") === 0 ? "ar" : "fr");
  }
  function isAr(l) { return l === "ar" || l === "shu"; }
  function nextLang(l) { return LANGS[(LANGS.indexOf(l) + 1) % LANGS.length]; }
  function tr(key) {
    var l = lang();
    /* repli en chaîne : دارجة -> arabe standard -> français -> la clé elle-même */
    if (l === "shu") return D[key] || (T.ar && T.ar[key]) || (T.fr && T.fr[key]) || key;
    return (T[l] && T[l][key]) || (T.fr && T.fr[key]) || key;
  }
  /* une note peut porter fr / ar / shu ; ce qui manque prend le repli */
  /* une URL de source n'est jamais recopiée telle quelle :
     seules http(s) et mailto sont autorisées (pas de javascript:,
     pas de data:, pas de //protocole-relatif). */
  function safeUrl(u) {
    return (typeof u === "string" && /^(https?:\/\/|mailto:)/i.test(u)) ? u : "";
  }

  function pick(o, l) { return (o && (o[l] || o.ar || o.shu || o.fr)) || ""; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------------- langue + thème ---------------- */
  function applyLang(l) {
    var d = document.documentElement;
    if (LANGS.indexOf(l) === -1) l = "fr";
    d.lang = l;
    d.dir = isAr(l) ? "rtl" : "ltr";
    try { localStorage.setItem(LS.lang, l); } catch (e) {}
    $$("[data-i18n]").forEach(function (el) { el.textContent = tr(el.getAttribute("data-i18n")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = tr(el.getAttribute("data-i18n-ph")); });
    $$("[data-i18n-label]").forEach(function (el) { el.setAttribute("aria-label", tr(el.getAttribute("data-i18n-label"))); });
    var btn = $("#langBtn");
    if (btn) btn.textContent = tr("lang.label");
    applyBrand();
    renderFilters();
    renderNotes();
    route();
  }

  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(LS.theme, t); } catch (e) {}
    var btn = $("#themeBtn");
    if (btn) btn.textContent = t === "dark" ? "☀" : "☾";
  }

  /* ---------------- marque ---------------- */
  function applyBrand() {
    $$("[data-brand]").forEach(function (el) {
      var k = el.getAttribute("data-brand");
      var v = k.split(".").reduce(function (o, p) { return o && o[p]; }, B);
      if (v !== undefined && v !== null && v !== "") { el.textContent = v; return; }
      /* une adresse de contact vide ne s'affiche pas comme un trou : elle
         s'affiche comme ce qu'elle est — un compte pas encore ouvert. */
      if (k.indexOf("contact.") === 0 || k.indexOf("handles.") === 0) el.textContent = tr("brand.empty");
    });
    $$("[data-brand-href]").forEach(function (el) {
      var k = el.getAttribute("data-brand-href");
      var v = k.split(".").reduce(function (o, p) { return o && o[p]; }, B);
      if (!v) {
        /* ni e-mail, ni téléphone, ni URL : on retire le lien et on laisse
           la mention lisible. Un lien mailto: vers rien est une faute. */
        var txt = document.createElement("span");
        txt.className = "meta is-empty";
        txt.textContent = tr("brand.empty");
        if (el.parentNode) el.parentNode.replaceChild(txt, el);
        return;
      }
      if (/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v)) el.href = "mailto:" + v;
      else if (/^\+?[\d\s().-]{6,}$/.test(v)) el.href = "https://wa.me/" + v.replace(/[^\d]/g, "");
      else if (/^https?:\/\//i.test(v)) el.href = v;
      /* sinon : le handle reste du texte, tant que le compte n'existe pas réellement. */
    });
    $$(".js-title-suffix").forEach(function (el) { el.textContent = B.shortName || "LOUATENI"; });
    var meta = $('meta[property="og:title"]');
    if (meta && B.fullName) meta.setAttribute("content", B.fullName);
    var desc = $('meta[property="og:description"]');
    if (desc && B.tagline) desc.setAttribute("content", B.tagline);
  }

  /* ---------------- analyses ---------------- */
  var state = { q: "", pillar: "all", open: null };

  function matches(n) {
    if (state.pillar !== "all" && n.pillar !== state.pillar) return false;
    if (!state.q) return true;
    var q = state.q.toLowerCase();
    var hay = [n.title.fr, n.title.ar, n.title.shu, n.lede.fr, n.lede.ar, n.lede.shu,
      n.problem.fr, n.problem.ar, n.pillar].join(" ").toLowerCase();
    return hay.indexOf(q) !== -1;
  }

  function cardHtml(n) {
    var l = lang();
    return '<button class="card notecard" data-id="' + esc(n.id) + '">' +
      '<span class="tag">' + esc(tr("pillars." + n.pillar)) + "</span>" +
      "<h3>" + esc(pick(n.title, l)) + "</h3>" +
      "<p>" + esc(pick(n.lede, l).slice(0, 190)) + "…</p>" +
      '<span class="meta">' + esc(n.date) + " · " + n.read + " " + esc(tr("latest.min")) +
      (n.status === "draft" ? ' · <span class="badge-draft">' + esc(tr("ana.draft")) + "</span>" : "") +
      "</span></button>";
  }

  function renderNotes() {
    var list = $("#noteList");
    if (list) {
      var rows = NOTES.filter(matches);
      list.innerHTML = rows.length ? rows.map(cardHtml).join("") :
        '<p class="meta">' + esc(tr("ana.empty")) + "</p>";
      $$(".notecard", list).forEach(function (b) {
        b.addEventListener("click", function () { location.hash = "#note=" + b.getAttribute("data-id"); });
      });
    }
    var latest = $("#latestNotes");
    if (latest) {
      var first3 = NOTES.slice(0, 3);
      latest.innerHTML = first3.length ? first3.map(cardHtml).join("") :
        '<p class="meta">' + esc(tr("latest.none")) + "</p>";
      $$(".notecard", latest).forEach(function (b) {
        b.addEventListener("click", function () { location.href = "analyses.html#note=" + b.getAttribute("data-id"); });
      });
    }
    $$("[data-count-notes]").forEach(function (el) {
      var v = (B.stats && typeof B.stats.notes === "number") ? B.stats.notes : 0;
      el.textContent = v;
    });
    $$("[data-count-brouillons]").forEach(function (el) { el.textContent = NOTES.length; });
    $$("[data-count-localites]").forEach(function (el) { el.textContent = (B.stats && B.stats.localites) || 0; });
    $$("[data-count-contributeurs]").forEach(function (el) { el.textContent = (B.stats && B.stats.contributeurs) || 0; });
    $$("[data-promise]").forEach(function (el, i) {
      var l = lang();
      var arr = (l === "shu" && B.promisesDj) ? B.promisesDj
        : (l === "ar" && B.promisesAr) ? B.promisesAr
        : (B.promises || []);
      var p = arr[i];
      if (p) el.textContent = p;
    });
  }

  /* le bloc « pilier » du menu de filtrage est construit depuis i18n */
  function renderFilters() {
    var box = $("#pillarChips");
    if (!box) return;
    var keys = ["all", "eau", "ecole", "sante", "energie", "emploi", "concorde"];
    box.innerHTML = keys.map(function (k) {
      var label = k === "all" ? tr("ana.filter.all") : tr("pillars." + k);
      return '<button class="chip" data-pillar="' + k + '" aria-pressed="' + (state.pillar === k) + '">' + esc(label) + "</button>";
    }).join("");
    $$(".chip", box).forEach(function (c) {
      c.addEventListener("click", function () {
        state.pillar = c.getAttribute("data-pillar");
        renderFilters(); renderNotes();
      });
    });
  }

  /* ---------------- lecteur d'une note ---------------- */
  function readerHtml(n) {
    var l = lang();
    var f = function (o) { return esc(pick(o, l)); };
    var h = "";
    h += '<p class="meta"><a href="analyses.html">' + esc(tr("ana.back")) + "</a></p>";
    h += '<span class="tag">' + esc(tr("pillars." + n.pillar)) + "</span>";
    h += "<h1>" + f(n.title) + "</h1>";
    h += '<p class="meta">' + esc(n.date) + " · " + n.read + " " + esc(tr("latest.min")) +
      ' · ' + esc(tr("ana.status")) + " : " +
      (n.status === "draft" ? '<span class="badge-draft">' + esc(tr("ana.draft")) + "</span>" : esc(tr("ana.verified"))) + "</p>";
    h += "<hr class='rule'>";
    h += '<div class="block"><h2>' + esc(tr("ana.problem")) + "</h2><p>" + f(n.lede) + "</p><p>" + f(n.problem) + "</p></div>";

    h += '<div class="block"><h2>' + esc(tr("ana.numbers")) + "</h2><table class='figures'><tbody>";
    n.numbers.forEach(function (x) {
      h += "<tr><th scope='row'>" + f(x.label) + "</th><td class='pending'>" + esc(x.value) + "</td><td>" + f(x.source) + "</td></tr>";
    });
    h += "</tbody></table></div>";

    h += '<div class="block"><h2>' + esc(tr("ana.options")) + '</h2><div class="options">';
    n.options.forEach(function (o) {
      h += '<div class="card"><h4>' + f(o.name) + "</h4><p>" + f(o.text) + '</p><p class="cost">' + f(o.cost) + "</p></div>";
    });
    h += "</div></div>";

    h += '<div class="block"><h2>' + esc(tr("ana.cost")) + "</h2><p>" + f(n.cost) + "</p></div>";
    h += '<div class="block"><h2>' + esc(tr("ana.winners")) + "</h2><p>" + f(n.winners) + "</p></div>";
    h += '<div class="block"><h2>' + esc(tr("ana.decision")) + "</h2><p>" + f(n.decision) + "</p></div>";

    h += '<div class="block"><h2>' + esc(tr("ana.source")) + "</h2><ul class='sources'>";
    n.sources.forEach(function (s) {
      var u = safeUrl(s.url);
      h += "<li>" + (u ? '<a href="' + esc(u) + '" rel="noopener noreferrer" target="_blank">' + f(s.label) + "</a>" : f(s.label));
      h += "</li>";
    });
    h += "</ul></div>";

    h += '<p class="cta" style="display:flex;gap:.6rem;flex-wrap:wrap">' +
      '<button class="btn" id="copyLink">' + esc(tr("ana.copy")) + "</button>" +
      '<button class="btn" id="printNote">' + esc(isAr(l) ? "طباعة" : "Imprimer / PDF") + "</button>" +
      "</p>";
    return h;
  }

  function route() {
    var reader = $("#reader"), list = $("#noteList"), head = $("#listHead");
    if (!reader) return;
    var m = /note=([\w-]+)/.exec(location.hash || "");
    var n = m && NOTES.filter(function (x) { return x.id === m[1]; })[0];
    if (n) {
      reader.innerHTML = readerHtml(n);
      reader.classList.add("is-open");
      if (list) list.style.display = "none";
      if (head) head.style.display = "none";
      var c = $("#copyLink");
      if (c) c.addEventListener("click", function () {
        var url = location.href;
        var done = function () { c.textContent = tr("ana.copied"); };
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, done);
        else done();
      });
      var p = $("#printNote");
      if (p) p.addEventListener("click", function () { window.print(); });
    } else {
      reader.classList.remove("is-open");
      reader.innerHTML = "";
      if (list) list.style.display = "";
      if (head) head.style.display = "";
    }
  }

  /* ---------------- formulaire à main levée ---------------- */
  function initForm() {
    var form = $("#leadForm");
    if (!form) return;
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = {
        date: new Date().toISOString(),
        lieu: form.elements.lieu.value,
        probleme: form.elements.probleme.value,
        qui: form.elements.qui.value,
        nom: form.elements.nom.value,
        contact: form.elements.contact.value
      };
      var all = [];
      try { all = JSON.parse(localStorage.getItem(LS.leads) || "[]"); } catch (e) {}
      all.push(data);
      try { localStorage.setItem(LS.leads, JSON.stringify(all)); } catch (e) {}
      var box = $("#leadOk");
      box.classList.add("is-on");
      var copy = $("#copyLead");
      copy.onclick = function () {
        var msg = tr("agir.form.title") + "\n" +
          (isAr(lang()) ? "المكان: " : "Lieu : ") + data.lieu + "\n" +
          (isAr(lang()) ? "المشكلة: " : "Problème : ") + data.probleme + "\n" +
          (isAr(lang()) ? "من يتحملها أولًا؟: " : "Qui le subit d'abord : ") + data.qui + "\n" +
          (isAr(lang()) ? "الاسم: " : "Nom : ") + (data.nom || (isAr(lang()) ? "بلا توقيع" : "sans signature")) + "\n" +
          (isAr(lang()) ? "التواصل: " : "Contact : ") + data.contact;
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(msg);
        copy.textContent = tr("ana.copied");
      };
      form.reset();
    });
  }

  /* ---------------- PWA + hors ligne ---------------- */
  var deferred = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    var ok = true;
    try { ok = !localStorage.getItem(LS.dismissed); } catch (err) {}
    if (ok) $("#installBar") && $("#installBar").classList.add("is-on");
  });
  function initPwa() {
    if (!("serviceWorker" in navigator)) return;
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () { /* file:// : normal */ });
    });
    var bar = $("#installBar");
    if (bar) {
      $("#installGo").addEventListener("click", function () {
        if (deferred) deferred.prompt();
        bar.classList.remove("is-on");
      });
      $("#installNo").addEventListener("click", function () {
        bar.classList.remove("is-on");
        try { localStorage.setItem(LS.dismissed, "1"); } catch (e) {}
      });
    }
    var toggle = function () { document.body.classList.toggle("is-offline", !navigator.onLine); };
    window.addEventListener("online", toggle);
    window.addEventListener("offline", toggle);
    toggle();
  }

  /* ---------------- démarrage ---------------- */
  function boot() {
    var savedLang = "fr", savedTheme = "light";
    try {
      savedLang = localStorage.getItem(LS.lang) || "fr";
      savedTheme = localStorage.getItem(LS.theme) ||
        (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    } catch (e) {}
    applyTheme(savedTheme);
    applyBrand();
    renderNotes();
    renderFilters();
    applyLang(savedLang);
    initForm();
    initPwa();

    var lb = $("#langBtn");
    if (lb) lb.addEventListener("click", function () { applyLang(nextLang(lang())); });
    var tb = $("#themeBtn");
    if (tb) tb.addEventListener("click", function () {
      applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
    });
    var q = $("#q");
    if (q) q.addEventListener("input", function () { state.q = q.value.trim(); renderNotes(); });
    window.addEventListener("hashchange", route);

    var y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
