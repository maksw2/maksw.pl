/**
 * main.js — maksw.pl
 * Zastępuje: jquery, owl carousel, meanmenu,
 *            one-page-nav, scrollup, counterup
 *            (i wszystko inne czego nie używałeś)
 */

console.warn("idzie zgarbiona baba do lekarza a lekarz po huj się tak pani skrada");

/* ── Helpers ─────────────────────────────────────── */

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setImg(id, images, folder = "./images/") {
  const el = document.getElementById(id);
  if (el) el.src = folder + pick(images);
}

function setBg(id, images, folder = "./images/") {
  const el = document.getElementById(id);
  if (el) el.style.backgroundImage = `url('${folder}${pick(images)}')`;
}

async function loadQuote(url, id) {
  const el = document.getElementById(id);
  if (!el) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("brak odpowiedzi");
    const lines = (await res.text()).split("\n").filter(l => l.trim());
    el.textContent = pick(lines);
  } catch {
    el.textContent = "Oops, could not load quotes.";
  }
}

/* ── DOMContentLoaded ────────────────────────────── */

document.addEventListener("DOMContentLoaded", () => {

  /* 1. Losowe tło w hero (parallax via CSS background-attachment:fixed) */
  setBg("hero-bg", ["slider1.webp", "slider2.webp", "slider3.webp"]);

  /* 2. Losowy cytat */
  loadQuote("cytaty.txt", "lec-quote");

  /* 3. Losowe zdjęcia sekcji */
  setImg("img-omnie", [
    "ja1.webp", "ja2.webp", "ja3.webp", "ja4.webp", "ja5.webp", 
    "ja6.webp", "ja7.webp", "ja8.webp", "ja9.webp", "ja10.webp", 
    "ja11.webp", "ja12.webp", "ja13.webp", "ja14.webp"
  ]);

  setImg("img-okoledze", [
    "wikor1.webp", "wikor2.webp", "wikor3.webp", "wikor4.webp", 
    "wikor5.webp", "wikor6.webp", "wikor7.webp"
  ]);

  setImg("img-projekty", [
    "projekty1.webp", "projekty2.webp", "projekty3.webp", "projekty4.webp", 
    "projekty5.webp", "projekty6.webp", "projekty7.webp", "projekty8.webp", 
    "projekty9.webp", "projekty10.webp", "projekty11.webp", "projekty12.webp", 
    "projekty13.webp"
  ]);

  /* 4. Scroll-to-top */
  const scrollBtn = document.getElementById("scroll-top");
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 300);
  }, { passive: true });
  scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* 5. Aktywna klasa w nawigacji przy scrollu (zastępuje onePageNav) */
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks  = document.querySelectorAll(".main-nav a");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.remove("active"));
      const active = document.querySelector(`.main-nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));

  /* 6. Zamknij menu mobilne po kliknięciu w link */
  const navToggle = document.getElementById("nav-toggle");
  navLinks.forEach(a => {
    a.addEventListener("click", () => {
      if (navToggle) navToggle.checked = false;
    });
  });

});
