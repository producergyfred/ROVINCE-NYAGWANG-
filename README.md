# Rovince Nyagwang | Official Website

A black, white and gold website for Rovince Nyagwang, Luo gospel artist.
Built with plain HTML, CSS and JavaScript. No frameworks, no build tools.

## What is in the folder

| File | What it does |
|---|---|
| `index.html` | Page structure and the biography text |
| `style.css` | All colours, fonts and layout |
| `script.js` | **All your photos, videos, songs and contact details** (top of the file), plus the gallery, lightbox, menu and booking form |
| `favicon.png` | Browser tab icon (replace with your own square image if you like) |
| `README.md` | This guide |

Until you add your own content, the site shows neutral dark placeholders, "Video coming soon" labels and greyed-out buttons. Nothing is broken, it simply waits for your information.

---

## 1. Add your photos (ImgBB)

1. Upload a photo to [imgbb.com](https://imgbb.com).
2. On the photo's page, copy the **Direct link**. It starts with `https://i.ibb.co/` and ends in `.jpg`, `.png` or `.webp`.
   Do **not** use the page link (`https://ibb.co/xxxx`) or an album link. Those will not display.
3. Open `script.js`. At the top, find `const artistImages` and replace each `PASTE_...` text with your link, keeping the quotation marks:

```js
hero: "https://i.ibb.co/abc123/rovince-hero.jpg",
```

| Setting | Where it appears |
|---|---|
| `logo` | Small logo beside the name in the menu (optional) |
| `header` | Faint wide banner behind the hero text (optional) |
| `hero` | Large portrait at the top of the page |
| `biography` | Photo beside the biography |
| `footer` | Faint background in the footer (optional) |
| `gallery` | The gallery photos (add or remove lines as you like) |

Tips: use a tall or square portrait for `hero` (at least 1600 px on the long side), keep files under about 500 KB for fast loading, and put the face in the upper half of the picture because the hero crops from the top on phones.

**Gallery captions:** just below the images, `galleryCaptions` holds the caption and alt text for each gallery photo, in the same order. Rewrite them so they describe what is really in each photo.

**Song covers and video thumbnails** also take ImgBB direct links (see below).

## 2. Add your music videos (YouTube)

In `script.js`, find `const artistVideos`.

1. Open the video on YouTube. The link looks like `https://www.youtube.com/watch?v=dQw4w9WgXcQ`.
2. Copy the 11 characters after `v=` (here `dQw4w9WgXcQ`) into `videoId`.
   For short links like `https://youtu.be/dQw4w9WgXcQ`, it is the part after the last `/`.
3. Edit `title` and `description`.
4. `thumbnail`: leave the placeholder to use YouTube's own thumbnail automatically, or paste an ImgBB direct link for a custom one.

To add another video, copy one whole `{ ... },` block and paste it below. To remove one, delete its block.

Visitors press the gold play button to watch on the page, or use **Watch on YouTube**.

## 3. Add your songs

In `script.js`, find `const songs`. For each song set `title`, `year`, `description`, `cover` (ImgBB link) and `url` (the YouTube or streaming link for **Listen Now**). `audio` is optional: only use it if you have a direct link to an audio file you own, otherwise leave `""`.

## 4. YouTube channel, social media and contact details

In `script.js`, find `const artistLinks`.

```js
const artistLinks = {
  youtube:   "https://www.youtube.com/@yourchannel",
  facebook:  "https://www.facebook.com/yourpage",
  instagram: "https://www.instagram.com/yourname",
  tiktok:    "https://www.tiktok.com/@yourname",
  whatsapp:  "254700000000",          // digits only, with country code
  email:     "name@example.com",
  phone:     "+254 700 000 000",
  location:  "Town, Country"
};
```

* **WhatsApp:** country code followed by the number, digits only. No `+`, spaces, dashes or leading `0`. (`254700000000` is a made-up example. Use the real number.)
* **Phone:** any readable format. The page automatically makes the correct `tel:` link.
* Links you leave as `PASTE_...` show as greyed-out icons, so you can see where they will go.

## 5. Edit the biography

Open `index.html` and find the section marked `C. BIOGRAPHY`. Replace each paragraph that starts with **[Placeholder]** with real text. Only include details that are true and can be verified (no invented awards, albums or statistics).

The first two paragraphs are always visible. The paragraphs inside `<div id="bioMore" hidden>` appear when the visitor presses **Read more**.

Other text you may want to change in `index.html`:

* The welcome sentence in the hero (`hero-msg`)
* The ministry statement in the footer
* Your website address in the `canonical` and `og:url` lines at the top (see section 8)

## 6. Connect the booking form

**Important:** a website made only of HTML, CSS and JavaScript cannot send email by itself. Until you connect a form service, the form checks the visitor's details and then tells them honestly that nothing was sent, and offers **WhatsApp** or **email** links with the message ready to go. The **Book on WhatsApp** button works as soon as you add a WhatsApp number.

To receive inquiries by email, connect a free form service. Example with [Formspree](https://formspree.io):

1. Create a free account and a new form, using the email address that should receive bookings.
2. Copy the form's endpoint address, which looks like `https://formspree.io/f/xxxxxxxx`.
3. In `script.js`, find `const bookingSettings` and paste it:

```js
const bookingSettings = {
  formEndpoint: "https://formspree.io/f/xxxxxxxx"
};
```

4. Publish the site, send yourself a test inquiry, and confirm it arrives. (Some services ask you to confirm your email or your website address first.)

Other services that accept a standard form post work the same way (for example Web3Forms or Getform). Check their current free-plan limits before relying on them.

## 7. Test the website on your computer

**Quick look:** double-click `index.html` to open it in your browser.

**Recommended (needed for YouTube videos):** YouTube players often refuse to play when a page is opened straight from a file. Run a tiny local server instead:

* **VS Code:** install the "Live Server" extension, right-click `index.html`, choose *Open with Live Server*.
* **Python:** open a terminal in the folder and run `python3 -m http.server 8000`, then visit `http://localhost:8000`.

Check it on your phone too (same Wi-Fi: visit `http://YOUR-COMPUTER-IP:8000`) or use your browser's device toolbar (press F12).

Checklist: menu works on mobile, every placeholder you replaced shows the right image, each video plays, gallery photos open and the arrows and Esc key work, the form shows messages for empty or wrong fields.

## 8. Publish online (free)

### Option A: Netlify (easiest)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop) (create a free account if asked).
2. Drag the whole `rovince-nyagwang-website` folder onto the page.
3. You get a web address immediately. You can rename it in *Site settings*, and later connect your own domain.

### Option B: GitHub Pages
1. Create a free GitHub account and a new **public** repository (for example `rovince-nyagwang`).
2. Upload all five files (*Add file* then *Upload files*), keeping `index.html` at the top level, and commit.
3. Open *Settings* then *Pages*. Under *Build and deployment*, choose *Deploy from a branch*, select `main` and `/ (root)`, and save.
4. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/rovince-nyagwang/`.

### After publishing
* Replace `https://YOUR-WEBSITE-URL-HERE/` in `index.html` (the `canonical` and `og:url` lines) with your real address.
* For nice link previews when sharing on WhatsApp or Facebook, replace `PASTE_IMGBB_SHARE_IMAGE_URL_HERE` in the `og:image` line with an ImgBB direct link (landscape, around 1200 x 630 px).
* To update the site later, change the files and upload them again (Netlify: drag the folder again; GitHub: upload the changed files).

A custom 404 page is not included. Netlify and GitHub Pages both show a standard one, and a single-page site does not need more.

## Changing the look

Colours are at the top of `style.css` in the `:root` block (`--gold`, `--black`, `--dark`, `--gold-light`). Fonts are `Cormorant Garamond` (headings) and `Jost` (text), loaded from Google Fonts in `index.html`. If you delete those three `<link>` lines, the site falls back to Georgia and your device's default sans-serif font.

## Accessibility and performance notes

* Keyboard friendly: skip link, visible focus outlines, accessible menu, form labels and error messages, and a gallery viewer that traps focus and closes with Esc.
* Animations are minimal and switch off for visitors who prefer reduced motion.
* Videos never autoplay on page load. They start only when a visitor presses play.
* Images below the first screen load lazily.
