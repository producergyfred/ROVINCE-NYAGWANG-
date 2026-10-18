/* =====================================================================
   Rovince Nyagwang | Luo Gospel Artist
   script.js

   PART 1  CONFIGURATION  <-- the ONLY part you normally need to edit
   PART 2  Helpers
   PART 3  Page features (images, songs, videos, gallery, contact,
           navigation, lightbox, booking form)
   ===================================================================== */
"use strict";

/* =====================================================================
   PART 1: CONFIGURATION (EDIT HERE)
   ===================================================================== */

/* ---------------------------------------------------------------------
   1A. IMAGES (ImgBB)
   Paste DIRECT image links. A direct link starts with https://i.ibb.co/
   and ends with .jpg / .png / .webp.
   Do NOT paste album or page links (https://ibb.co/xxxx).
   Anything still showing "PASTE_..." displays a neutral placeholder.
   --------------------------------------------------------------------- */
const artistImages = {
  logo:      "https://i.ibb.co/mCvm1FdS/RN-logo.png",          // small square logo shown in the menu (optional)
  header:    "",  // wide banner behind the hero text (optional)
  hero:      "https://i.ibb.co/sd5RtL3q/nyagwang.png",    // main portrait at the top of the page
  biography: "https://i.ibb.co/m5snYp1c/Polished-Studio-Portrait-with-Red-Tie.png",     // photo beside the biography
  footer:    "https://i.ibb.co/mCvm1FdS/RN-logo.png",  // faint background image in the footer (optional)

  // Gallery photos. Add or remove lines freely (8 look best).
  gallery: [
    "https://i.ibb.co/Z1mjZtcH/Focused-Music-Studio-Workspace.png",
    "PASTE_IMGBB_GALLERY_IMAGE_2_URL_HERE",
    "PASTE_IMGBB_GALLERY_IMAGE_3_URL_HERE",
    "PASTE_IMGBB_GALLERY_IMAGE_4_URL_HERE",
    "PASTE_IMGBB_GALLERY_IMAGE_5_URL_HERE",
    "PASTE_IMGBB_GALLERY_IMAGE_6_URL_HERE",
    "PASTE_IMGBB_GALLERY_IMAGE_7_URL_HERE",
    "https://i.ibb.co/23dnFLz3/Whats-App-Image-2026-10-17-at-16-55-11-2.jpg"
  ]
};

/* Captions / alt text for the gallery photos, in the SAME ORDER as the list above.
   Describe what is really in each photo (this is read aloud by screen readers). */
const galleryCaptions = [
  "Rovince Nyagwang portrait",
  "Rovince Nyagwang performing live",
  "Worship at a church service",
  "A gospel event",
  "Behind the scenes",
  "Promotional photograph",
  "Live performance on stage",
  "Ministry moment"
];

/* ---------------------------------------------------------------------
   1B. MUSIC VIDEOS (YouTube)
   videoId = the 11 characters after "v=" in a YouTube link.
     https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  videoId: "dQw4w9WgXcQ"
     https://youtu.be/dQw4w9WgXcQ                 ->  videoId: "dQw4w9WgXcQ"
   thumbnail = optional ImgBB image. Leave as is to use YouTube's own thumbnail.
   Add or remove { ... }, blocks freely.
   --------------------------------------------------------------------- */
const artistVideos = [
  {
    title: "Ngima To Tek",
    description: "A luo phrase meaning life isn't easy.",
    videoId: "SN7uVF4XumA",
    thumbnail: "PASTE_IMGBB_THUMBNAIL_URL_HERE"
  },
  {
    title: "Genona",
    description: "A luo word meaning my hope.",
    videoId: "GJ0jz36-8Gg",
    thumbnail: "https://i.ibb.co/Mx2Jhdf5/genona-img.jpg"
  },
  {
    title: "Dunia ",
    description: "Swahili phrase meaning The world isn't safe.",
    videoId: "yGR_ZFg1jLc",
    thumbnail: "PASTE_IMGBB_THUMBNAIL_URL_HERE"
  },
  {
    title: "Nind Gi kwee",
    description: "Tribute to the late Raila Amollo Odinga",
    videoId: "YuCUJEThwb",
    thumbnail: "https://i.ibb.co/TD40pwSr/rovy.jpg"
  }
];

/* ---------------------------------------------------------------------
   1C. SONGS (the "My Music" cards)
   cover = ImgBB image link for the cover art
   url   = link to the song on YouTube or a streaming service (full https:// link)
   audio = optional direct link to an audio file you own (leave "" if none)
   Add or remove { ... }, blocks freely.
   --------------------------------------------------------------------- */
const songs = [
  {
    title: "Ngima To Tek ",
    year: "2023",
    description: "Add a short description of this song here.",
    cover: "https://i.ibb.co/mCvm1FdS/RN-logo.png",
    url: "PASTE_YOUTUBE_OR_STREAMING_LINK_HERE",
    audio: ""
  },
  {
    title: "Genona",
    year: "2024",
    description: "Add a short description of this song here.",
    cover: "https://i.ibb.co/mCvm1FdS/RN-logo.png",
    url: "GJ0jz36-8Gg",
    audio: ""
  },
   {
    title: "Nind Gik kwee",
    year: "2025",
    description: "Tribute.",
    cover: "https://i.ibb.co/mCvm1FdS/RN-logo.png",
    url: "https://www.youtube.com/embed/YuCUJEThwbo",
    audio: ""
  },
  {
    title: "Dunia",
    year: "2026",
    description: "Add a short description of this song here.",
    cover: "https://i.ibb.co/mCvm1FdS/RN-logo.png",
    url: "PASTE_YOUTUBE_OR_STREAMING_LINK_HERE",
    audio: ""
  },
 
];

/* ---------------------------------------------------------------------
   1D. CONTACT DETAILS & SOCIAL LINKS
   youtube / facebook / instagram / tiktok : full https:// links
   whatsapp : number with country code, DIGITS ONLY, no "+", spaces or dashes
              (example format: 254700000000 is a made-up number, replace it)
   email    : e.g. name@example.com
   phone    : any format, e.g. +254 700 000 000
   location : e.g. "Kisumu, Kenya"
   --------------------------------------------------------------------- */
const artistLinks = {
  youtube:   "PASTE_YOUTUBE_CHANNEL_URL_HERE",
  facebook:  "PASTE_FACEBOOK_URL_HERE",
  instagram: "PASTE_INSTAGRAM_URL_HERE",
  tiktok:    "PASTE_TIKTOK_URL_HERE",
  whatsapp:  "PASTE_WHATSAPP_NUMBER_HERE",
  email:     "PASTE_ARTIST_EMAIL_HERE",
  phone:     "PASTE_ARTIST_PHONE_HERE",
  location:  "PASTE_LOCATION_HERE"
};

/* ---------------------------------------------------------------------
   1E. BOOKING FORM
   formEndpoint = the web address of a form service (for example Formspree:
   https://formspree.io/f/xxxxxxxx). Until you add one, the form checks the
   details but does NOT send them anywhere, and visitors are pointed to
   WhatsApp or email instead. See README.md, "Connect the booking form".
   --------------------------------------------------------------------- */
const bookingSettings = {
  formEndpoint: "PASTE_FORM_ENDPOINT_URL_HERE"
};

/* =====================================================================
   PART 2: HELPERS  (no need to edit)
   ===================================================================== */

const $  = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/** True when a config value has not been filled in yet. */
function isPlaceholder(value) {
  return typeof value !== "string" || value.trim() === "" || /(PASTE_|REPLACE_)/i.test(value);
}
function isUrl(value) {
  return !isPlaceholder(value) && /^https?:\/\/\S+$/i.test(value.trim());
}
function isEmail(value) {
  return !isPlaceholder(value) && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
function digitsOnly(value) {
  return typeof value === "string" ? value.replace(/\D/g, "") : "";
}
function isWhatsAppNumber(value) {
  if (isPlaceholder(value)) return false;
  const d = digitsOnly(value);
  return d.length >= 8 && d.length <= 15;
}
function isYouTubeId(value) {
  return !isPlaceholder(value) && /^[A-Za-z0-9_-]{11}$/.test(value.trim());
}

/** Small, safe element builder. */
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (val === undefined || val === null || val === false) continue;
    if (key === "class") node.className = val;
    else if (key === "text") node.textContent = val;
    else if (key === "html") node.innerHTML = val;
    else node.setAttribute(key, val === true ? "" : val);
  }
  [].concat(children).forEach(child => { if (child) node.append(child); });
  return node;
}

function escapeXml(text) {
  return String(text).replace(/[<>&'"]/g, c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]));
}

/** A neutral dark picture with a small gold cross, used when an image is missing or fails to load. */
function fallbackImage(label = "Photo coming soon") {
  const svg =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>" +
    "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#1d1d1d'/><stop offset='1' stop-color='#0c0c0c'/></linearGradient></defs>" +
    "<rect width='800' height='600' fill='url(#g)'/>" +
    "<path d='M400 215v150M350 262h100' fill='none' stroke='#D4AF37' stroke-opacity='.6' stroke-width='6' stroke-linecap='round'/>" +
    "<text x='400' y='440' text-anchor='middle' fill='#BDB7A8' font-family='Georgia,serif' font-size='28'>" + escapeXml(label) + "</text>" +
    "</svg>";
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/** Sets an <img> from a config URL, with a clean fallback instead of a broken-image icon. */
function applyImage(img, url, label) {
  const fallback = fallbackImage(label);
  delete img.dataset.fallback;
  img.onerror = () => {
    if (img.dataset.fallback) return;
    img.dataset.fallback = "1";
    img.src = fallback;
  };
  if (isPlaceholder(url)) {
    img.dataset.fallback = "1";
    img.src = fallback;
    return;
  }
  // Friendly warning if an ImgBB *page* link was pasted instead of a direct image link.
  if (/^https?:\/\/ibb\.co\//i.test(url.trim())) {
    console.warn("[Rovince site] This looks like an ImgBB page link, not a direct image link:", url,
      "\nOpen it and copy the 'Direct link' (it starts with https://i.ibb.co/).");
  }
  img.src = url.trim();
}

/** Sets a CSS background image (hero banner, footer) only when a real URL is supplied. */
function applyBackground(node, url) {
  if (!node || isPlaceholder(url)) return;
  node.style.backgroundImage = 'url("' + url.trim().replace(/"/g, "%22") + '")';
}

/* Inline SVG icons (no icon libraries needed). */
const ICONS = {
  youtube:   '<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>',
  facebook:  '<path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/>',
  instagram: '<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" fill-rule="evenodd"/>',
  tiktok:    '<path d="M19.6 6.8a4.8 4.8 0 0 1-3.8-4.3V2h-3.5v13.4a2.9 2.9 0 1 1-2-2.8V9.1a6.4 6.4 0 1 0 5.5 6.3V8.9a8.3 8.3 0 0 0 4.8 1.5V6.9a4.8 4.8 0 0 1-1-.1z"/>',
  whatsapp:  '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-.9.9-.9 2.1s.9 2.500 1 2.700c.1.200 1.800 2.800 4.400 3.900 1.600.7 2.300.7 3.100.6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.1-.2-.2-.5-.3z"/>',
  phone:     '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z"/>',
  email:     '<path d="M3 6h18v12H3z M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>',
  location:  '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  play:      '<path d="M8 5v14l11-7z"/>'
};
function icon(name) {
  return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' + ICONS[name] + "</svg>";
}

/* =====================================================================
   PART 3: PAGE FEATURES
   ===================================================================== */

/* ---------- Images in fixed places (logo, hero, bio, banner, footer) ---------- */
function initStaticImages() {
  const logo = $("#brandLogo");
  if (logo && !isPlaceholder(artistImages.logo)) {
    applyImage(logo, artistImages.logo, "Logo");
    logo.hidden = false;
  }
  applyImage($("#heroImage"), artistImages.hero, "Add hero photo");
  applyImage($("#bioImage"), artistImages.biography, "Add biography photo");
  applyBackground($("#heroBanner"), artistImages.header);
  applyBackground($("#footerBg"), artistImages.footer);
}

/* ---------- Social icon rows (hero, contact, footer) ---------- */
function initSocial() {
  const networks = [
    { key: "youtube",   name: "YouTube" },
    { key: "facebook",  name: "Facebook" },
    { key: "instagram", name: "Instagram" },
    { key: "tiktok",    name: "TikTok" }
  ];
  $$("[data-social]").forEach(list => {
    networks.forEach(({ key, name }) => {
      const li = el("li");
      if (isUrl(artistLinks[key])) {
        li.append(el("a", {
          class: "icon-link", href: artistLinks[key].trim(), target: "_blank", rel: "noopener noreferrer",
          "aria-label": "Rovince Nyagwang on " + name + " (opens in a new tab)", html: icon(key)
        }));
      } else {
        // Link not added yet: show a muted, non-clickable icon.
        li.append(el("span", {
          class: "icon-link is-disabled", role: "img",
          "aria-label": name + " link not added yet", title: "Add your " + name + " link in script.js", html: icon(key)
        }));
      }
      list.append(li);
    });
  });
}

/* ---------- Biography "Read more" ---------- */
function initBio() {
  const btn = $("#bioToggle"), more = $("#bioMore");
  if (!btn || !more) return;
  btn.addEventListener("click", () => {
    const open = more.hidden;          // hidden now -> about to open
    more.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "Show less" : "Read more";
  });
}

/* ---------- Songs ---------- */
function renderSongs() {
  const grid = $("#songGrid");
  if (!grid) return;
  grid.replaceChildren();

  songs.forEach(song => {
    const cover = el("img", { alt: (song.title || "Song") + " cover art", loading: "lazy", decoding: "async", width: "600", height: "600" });
    applyImage(cover, song.cover, "Cover art coming soon");

    const actions = el("div", { class: "card-actions" });
    if (isUrl(song.url)) {
      actions.append(el("a", {
        class: "btn btn-gold btn-small", href: song.url.trim(), target: "_blank", rel: "noopener noreferrer",
        "aria-label": "Listen now to " + song.title + " (opens in a new tab)", text: "Listen Now"
      }));
    } else {
      actions.append(el("span", {
        class: "btn btn-small is-disabled", "aria-disabled": "true", title: "Add this song's link in script.js", text: "Listen Now"
      }));
    }

    const body = el("div", { class: "card-body" }, [
      el("h3", { text: song.title }),
      el("p", { class: "card-meta", text: song.year }),
      el("p", { class: "card-desc", text: song.description })
    ]);
    if (song.audio && isUrl(song.audio)) {
      body.append(el("audio", { controls: true, preload: "none", src: song.audio.trim(), "aria-label": "Audio player for " + song.title }));
    }
    body.append(actions);

    grid.append(el("article", { class: "card song-card" }, [el("div", { class: "card-media" }, cover), body]));
  });
}

/* ---------- Videos ---------- */
let stopActiveVideo = null;   // lets only one embedded video play at a time

function renderVideos() {
  const grid = $("#videoGrid");
  if (!grid) return;
  grid.replaceChildren();

  artistVideos.forEach(video => {
    const validId = isYouTubeId(video.videoId);
    const id = validId ? video.videoId.trim() : "";

    // Thumbnail: your ImgBB image -> YouTube's own thumbnail -> neutral placeholder
    const thumb = el("img", { alt: "Thumbnail for " + video.title, loading: "lazy", decoding: "async", width: "640", height: "360" });
    if (!isPlaceholder(video.thumbnail)) applyImage(thumb, video.thumbnail, "Video thumbnail");
    else if (validId) {
      thumb.onerror = () => { thumb.onerror = null; thumb.src = fallbackImage("Video thumbnail"); };
      thumb.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
    } else applyImage(thumb, "", "Video thumbnail");

    const media = el("div", { class: "card-media video-media" });
    const initialMedia = [thumb];

    if (validId) {
      const playBtn = el("button", {
        class: "video-play", type: "button", "aria-label": "Play video: " + video.title,
        html: '<span class="play-disc">' + icon("play") + "</span>"
      });
      initialMedia.push(playBtn);

      const reset = () => media.replaceChildren(...initialMedia);
      playBtn.addEventListener("click", () => {
        if (stopActiveVideo) stopActiveVideo();
        const frame = el("iframe", {
          src: "https://www.youtube.com/embed/" + id + "?autoplay=1&rel=0",
          title: video.title + " (YouTube video player)",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowfullscreen: true, referrerpolicy: "strict-origin-when-cross-origin"
        });
        media.replaceChildren(frame);
        frame.focus();
        stopActiveVideo = () => { reset(); stopActiveVideo = null; };
      });
    } else {
      initialMedia.push(el("span", { class: "video-soon", text: "Video coming soon" }));
    }
    media.append(...initialMedia);

    const actions = el("div", { class: "card-actions" });
    if (validId) {
      actions.append(el("a", {
        class: "btn btn-outline btn-small", href: "https://www.youtube.com/watch?v=" + id,
        target: "_blank", rel: "noopener noreferrer",
        "aria-label": "Watch " + video.title + " on YouTube (opens in a new tab)", text: "Watch on YouTube"
      }));
    } else {
      actions.append(el("span", { class: "btn btn-small is-disabled", "aria-disabled": "true", title: "Add this video's ID in script.js", text: "Watch on YouTube" }));
    }

    const body = el("div", { class: "card-body" }, [
      el("h3", { text: video.title }),
      el("p", { class: "card-desc", text: video.description }),
      actions
    ]);
    grid.append(el("article", { class: "card video-card" }, [media, body]));
  });

  // "Visit My YouTube Channel" button
  const channelBtn = $("#channelBtn");
  if (channelBtn) {
    if (isUrl(artistLinks.youtube)) {
      channelBtn.href = artistLinks.youtube.trim();
    } else {
      channelBtn.removeAttribute("href");
      channelBtn.removeAttribute("target");
      channelBtn.setAttribute("aria-disabled", "true");
      channelBtn.classList.add("is-disabled");
      channelBtn.title = "Add your YouTube channel link in script.js";
    }
  }
}

/* ---------- Gallery + Lightbox ---------- */
const lightbox = { index: 0, opener: null, startX: 0 };

function renderGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;
  grid.replaceChildren();

  artistImages.gallery.forEach((url, i) => {
    const caption = galleryCaptions[i] || "Photo " + (i + 1);
    const img = el("img", { alt: caption, loading: "lazy", decoding: "async", width: "800", height: "800" });
    applyImage(img, url, "Photo coming soon");
    const btn = el("button", { class: "g-item", type: "button" }, [img, el("span", { class: "g-cap", "aria-hidden": "true", text: caption })]);
    btn.addEventListener("click", () => openLightbox(i, btn));
    grid.append(btn);
  });
}

function showLightboxPhoto() {
  const total = artistImages.gallery.length;
  const url = artistImages.gallery[lightbox.index];
  const caption = galleryCaptions[lightbox.index] || "Photo " + (lightbox.index + 1);
  const img = $("#lbImage");
  applyImage(img, url, "Photo coming soon");
  img.alt = caption;
  $("#lbCaption").textContent = caption + "  (" + (lightbox.index + 1) + " of " + total + ")";
}

function stepLightbox(direction) {
  const total = artistImages.gallery.length;
  if (total < 2) return;
  lightbox.index = (lightbox.index + direction + total) % total;
  showLightboxPhoto();
}

function openLightbox(index, opener) {
  const box = $("#lightbox");
  lightbox.index = index;
  lightbox.opener = opener || null;
  showLightboxPhoto();
  const single = artistImages.gallery.length < 2;
  $(".lb-prev").hidden = single;
  $(".lb-next").hidden = single;
  box.hidden = false;
  document.body.classList.add("lb-open");
  $(".lb-close").focus();
}

function closeLightbox() {
  $("#lightbox").hidden = true;
  document.body.classList.remove("lb-open");
  if (lightbox.opener) lightbox.opener.focus();
}

function initLightbox() {
  const box = $("#lightbox");
  if (!box) return;

  $(".lb-close").addEventListener("click", closeLightbox);
  $(".lb-prev").addEventListener("click", () => stepLightbox(-1));
  $(".lb-next").addEventListener("click", () => stepLightbox(1));

  // Click on the dark area (not the photo or buttons) closes the viewer
  box.addEventListener("click", e => { if (e.target === box) closeLightbox(); });

  // Keyboard: Escape, arrows, and keeping Tab inside the viewer
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); closeLightbox(); }
    else if (e.key === "ArrowLeft") stepLightbox(-1);
    else if (e.key === "ArrowRight") stepLightbox(1);
    else if (e.key === "Tab") {
      const focusable = $$("button", box).filter(b => !b.hidden);
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  // Swipe left / right on phones
  box.addEventListener("touchstart", e => { lightbox.startX = e.changedTouches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - lightbox.startX;
    if (Math.abs(dx) > 50) stepLightbox(dx < 0 ? 1 : -1);
  }, { passive: true });
}

/* ---------- Contact ---------- */
function renderContact() {
  const list = $("#contactList");
  if (!list) return;
  list.replaceChildren();

  const wa = isWhatsAppNumber(artistLinks.whatsapp) ? digitsOnly(artistLinks.whatsapp) : "";
  const phoneOk = !isPlaceholder(artistLinks.phone) && digitsOnly(artistLinks.phone).length >= 7;

  const items = [
    { name: "phone",    label: "Phone",    value: phoneOk ? artistLinks.phone.trim() : "To be added",
      href: phoneOk ? "tel:" + artistLinks.phone.trim().replace(/[^\d+]/g, "") : "", external: false },
    { name: "whatsapp", label: "WhatsApp", value: wa ? "Chat on WhatsApp" : "To be added",
      href: wa ? "https://wa.me/" + wa : "", external: true },
    { name: "email",    label: "Email",    value: isEmail(artistLinks.email) ? artistLinks.email.trim() : "To be added",
      href: isEmail(artistLinks.email) ? "mailto:" + artistLinks.email.trim() : "", external: false },
    { name: "location", label: "Location", value: !isPlaceholder(artistLinks.location) ? artistLinks.location.trim() : "To be added",
      href: "", external: false, textOnly: true },
    { name: "youtube",  label: "YouTube",  value: isUrl(artistLinks.youtube) ? "Visit my channel" : "To be added",
      href: isUrl(artistLinks.youtube) ? artistLinks.youtube.trim() : "", external: true }
  ];

  items.forEach(item => {
    const inner = [
      el("span", { class: "contact-icon", html: icon(item.name) }),
      el("span", { class: "contact-text" }, [
        el("span", { class: "contact-label", text: item.label }),
        el("span", { class: "contact-value", text: item.value })
      ])
    ];
    let node;
    if (item.href) {
      node = el("a", { class: "contact-item", href: item.href, target: item.external ? "_blank" : false, rel: item.external ? "noopener noreferrer" : false }, inner);
    } else {
      node = el("div", { class: "contact-item" + (item.textOnly && item.value !== "To be added" ? "" : " is-disabled") }, inner);
    }
    list.append(el("li", {}, node));
  });
}

/* ---------- Navigation ---------- */
function initNav() {
  const header = $(".site-header"), toggle = $(".nav-toggle"), nav = $("#primaryNav");
  if (!header || !toggle || !nav) return;

  const setOpen = open => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("menu-open", open);
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { setOpen(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", e => { if (e.matches) setOpen(false); });

  // Subtle line under the header once the page scrolls
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the menu link for the section currently on screen
  const links = $$('.primary-nav ul a[href^="#"]');
  const byId = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(a => { a.classList.remove("is-active"); a.removeAttribute("aria-current"); });
        const active = byId.get(entry.target.id);
        if (active) { active.classList.add("is-active"); active.setAttribute("aria-current", "location"); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    byId.forEach((_, id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
  }
}

/* ---------- Booking form ---------- */
function initBooking() {
  const form = $("#bookingForm");
  if (!form) return;

  const status = $("#formStatus");
  const submitBtn = $("#submitBtn");
  const waBtn = $("#whatsappBookBtn");
  const waIcon = $("#waBtnIcon");
  if (waIcon) waIcon.innerHTML = icon("whatsapp");

  const pad = n => String(n).padStart(2, "0");
  const today = new Date();
  const todayISO = today.getFullYear() + "-" + pad(today.getMonth() + 1) + "-" + pad(today.getDate());
  form.elements.eventDate.min = todayISO;

  const fieldNames = ["fullName", "organization", "email", "phone", "eventType", "eventDate", "eventLocation", "message"];

  /* Returns an error message, or "" when the field is fine. */
  function check(name) {
    const input = form.elements[name];
    const value = input.value.trim();
    switch (name) {
      case "fullName":
        if (!value) return "Please enter your full name.";
        if (value.length < 2) return "Please enter your full name (at least 2 letters).";
        return "";
      case "organization":
        return value ? "" : "Please enter your organization, church or event name.";
      case "email":
        if (!value) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return "Enter a valid email address, like name@example.com.";
        return "";
      case "phone": {
        if (!value) return "";
        const d = digitsOnly(value);
        if (!/^[+\d][\d\s().-]*$/.test(value) || d.length < 7 || d.length > 15) return "Enter a valid phone number, or leave this blank.";
        return "";
      }
      case "eventType":
        return value ? "" : "Please choose an event type.";
      case "eventDate":
        if (!value) return "Please choose the event date.";
        if (value < todayISO) return "The event date cannot be in the past.";
        return "";
      case "eventLocation":
        return value ? "" : "Please enter the event location.";
      case "message":
        return value.length > 1500 ? "Please keep your message under 1500 characters." : "";
      default:
        return "";
    }
  }

  function showFieldError(name, message) {
    const input = form.elements[name];
    const error = $("#" + name + "-error");
    if (error) error.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    const wrap = input.closest(".field");
    if (wrap) wrap.classList.toggle("has-error", Boolean(message));
  }

  /* Validates every field. Returns the first invalid input (or null). */
  function validateAll() {
    let firstInvalid = null;
    fieldNames.forEach(name => {
      const message = check(name);
      showFieldError(name, message);
      if (message && !firstInvalid) firstInvalid = form.elements[name];
    });
    return firstInvalid;
  }

  fieldNames.forEach(name => {
    const input = form.elements[name];
    input.addEventListener("blur", () => showFieldError(name, check(name)));
    input.addEventListener("input", () => {
      if (input.closest(".field").classList.contains("has-error")) showFieldError(name, check(name));
    });
    input.addEventListener("change", () => {
      if (input.closest(".field").classList.contains("has-error")) showFieldError(name, check(name));
    });
  });

  function setStatus(type, nodes) {
    status.className = "form-status is-" + type;
    status.replaceChildren(...[].concat(nodes));
    status.hidden = false;
  }
  const para = (text, extra) => el("p", { text }, extra);

  function inquiryText(data) {
    return [
      "Hello Rovince, I would like to inquire about booking you.",
      "",
      "Name: " + data.fullName,
      "Organization / event: " + data.organization,
      "Event type: " + data.eventType,
      "Event date: " + data.eventDate,
      "Event location: " + data.eventLocation,
      "Email: " + data.email,
      data.phone ? "Phone: " + data.phone : "",
      data.message ? "Details: " + data.message : ""
    ].filter((line, i, arr) => line !== "" || (i > 0 && i < 2)).join("\n");
  }

  function formValues() {
    const data = {};
    fieldNames.forEach(name => { data[name] = form.elements[name].value.trim(); });
    return data;
  }

  function alternativeLinks(data) {
    const wrap = el("p");
    const parts = [];
    if (isEmail(artistLinks.email)) {
      parts.push(el("a", {
        href: "mailto:" + artistLinks.email.trim() + "?subject=" + encodeURIComponent("Booking inquiry: " + data.eventType) +
              "&body=" + encodeURIComponent(inquiryText(data)),
        text: "Send by email instead"
      }));
    }
    if (isWhatsAppNumber(artistLinks.whatsapp)) {
      parts.push(el("a", {
        href: "https://wa.me/" + digitsOnly(artistLinks.whatsapp) + "?text=" + encodeURIComponent(inquiryText(data)),
        target: "_blank", rel: "noopener noreferrer", text: "Send on WhatsApp instead"
      }));
    }
    parts.forEach((link, i) => { if (i) wrap.append("  |  "); wrap.append(link); });
    return parts.length ? wrap : null;
  }

  /* Submit */
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const firstInvalid = validateAll();
    if (firstInvalid) {
      setStatus("error", para("Please fix the highlighted fields and try again."));
      firstInvalid.focus();
      return;
    }

    // Spam trap filled in: pretend all is well, send nothing.
    if (form.elements._gotcha && form.elements._gotcha.value) {
      setStatus("success", para("Thank you. Your booking inquiry has been sent."));
      form.reset();
      return;
    }

    const data = formValues();

    // No form service connected yet: be honest, and offer WhatsApp / email.
    if (!isUrl(bookingSettings.formEndpoint)) {
      const nodes = [
        para("Your details look complete, but this form is not connected to an email service yet, so nothing has been sent."),
        para("Please send your inquiry using one of the options below.")
      ];
      const alt = alternativeLinks(data);
      if (alt) nodes.push(alt);
      else nodes.push(para("(Site owner: add an email, WhatsApp number or form endpoint in script.js.)"));
      setStatus("info", nodes);
      status.focus();
      return;
    }

    // Form service connected: send the inquiry.
    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    try {
      const response = await fetch(bookingSettings.formEndpoint.trim(), {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      });
      if (!response.ok) throw new Error("Request failed with status " + response.status);
      setStatus("success", para("Thank you, " + data.fullName.split(" ")[0] + ". Your booking inquiry has been sent."));
      form.reset();
      fieldNames.forEach(name => showFieldError(name, ""));
      status.focus();
    } catch (error) {
      console.error("[Rovince site] Booking form error:", error);
      const nodes = [para("Sorry, your inquiry could not be sent. Please check your connection and try again.")];
      const alt = alternativeLinks(data);
      if (alt) nodes.push(alt);
      setStatus("error", nodes);
      status.focus();
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    }
  });

  /* Optional WhatsApp booking: opens a pre-filled message the visitor sends manually */
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      if (!isWhatsAppNumber(artistLinks.whatsapp)) {
        setStatus("error", para("WhatsApp booking is not available yet because no WhatsApp number has been added."));
        status.focus();
        return;
      }
      const firstInvalid = validateAll();
      if (firstInvalid) {
        setStatus("error", para("Please complete the highlighted fields first, then choose Book on WhatsApp."));
        firstInvalid.focus();
        return;
      }
      const url = "https://wa.me/" + digitsOnly(artistLinks.whatsapp) + "?text=" + encodeURIComponent(inquiryText(formValues()));
      window.open(url, "_blank", "noopener");
      setStatus("info", para("WhatsApp should now be open with your message ready. Press send in WhatsApp to complete your inquiry."));
    });
  }
}

/* ---------- Footer year ---------- */
function initYear() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* ---------- Start everything ---------- */
function init() {
  initStaticImages();
  initSocial();
  initBio();
  renderSongs();
  renderVideos();
  renderGallery();
  initLightbox();
  renderContact();
  initNav();
  initBooking();
  initYear();
}
init();
