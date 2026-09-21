# The Anti-Tests — electric edition

English static website, hosted on Cloudflare Pages from GitHub.

## Upload this update

1. Extract the ZIP on your computer.
2. Open the GitHub repository RonnieRonaldo/theantitests.
3. Choose Add file → Upload files.
4. Drag the CONTENTS of the extracted folder into GitHub, including assets and quizzes. index.html and styles.css belong at the repository root, not inside another folder.
5. Commit to main. Cloudflare builds automatically.
6. Wait for the new production deployment to succeed before testing.

Keep the existing Cloudflare build settings, domain connections, DNS and redirects. No GitHub Pages configuration is needed.

## Test

Open https://theantitests.com/ and https://theantitests.com/quizzes/anti-consumption/ .
Also open https://theantitests.com/quizzes/anti-perfectionism-parent/ .
Check the new colors and face icon, start a test, select an answer, reload, and use Continue your test. Read through to a result and try Copy result & link. A shared link carries no answers; a recipient with existing local progress may choose to resume or start fresh.

## Quiz behavior

The original 15 scenes, 45 answers and three profile descriptions are kept in quizzes/anti-consumption/quiz-data.js. Each A/B/C selection adds one point to that profile. A tie asks one extra choice between the tied profiles; original counts stay unchanged. Revisiting an earlier question discards answers after that point to avoid inconsistent results. Browser Back also revisits earlier screens. Progress is stored locally on the visitor's browser, with a graceful fallback when storage is unavailable. No accounts are required. Optional GA4 loads only after analytics consent.

Parent Edition is now live at /quizzes/anti-perfectionism-parent/ with all 15 scenes, 45 answers and three original result descriptions from the supplied Pages document. It uses the same flow as Anti-Consumption, its own local progress storage, and a new tie-break question aligned to the book’s A/B/C strategies. Other profiles and the original final reflection can be expanded on the result screen. Christmas remains Coming soon.

Both supplied covers are included unchanged on the homepage and respective quiz pages. They are scaled to fit without cropping. Cover alt text, sharing image metadata, and the sitemap are included.

The favicon is a local SVG with a cache-version query. Browsers can keep old tab icons; closing and reopening the tab may help.

## Analytics and future pages

GA4 measurement ID: G-0155LKV8WT. assets/analytics.js implements a basic consent gate on every HTML page, including Privacy and 404. Unknown or rejected consent does not load the Google tag. Accept enables analytics only; advertising consent stays denied. The footer settings control reopens the choice. Withdrawal disables the tag, clears its accessible GA cookies, and reloads the page to unload Google listeners. No per-answer or result-profile custom events are added.

Before testing in GA4 Realtime, accept analytics on the live website and ensure an ad blocker is not blocking Google Analytics. Local checks confirm loading and consent logic; receiving live events requires deployment.

In GA4 Admin → Data streams → this web stream → Enhanced measurement (gear) → Page views → Advanced settings, turn OFF “Page changes based on browser history events”. Keep “Page loads” on. The quizzes use browser history to support Back; disabling history-based pageviews avoids counting each question as a separate webpage.

For EVERY future page, include /assets/analytics.css and the deferred /assets/analytics.js script exactly once, plus the footer Analytics settings button and privacy link. Do not insert an additional inline gtag snippet. Use the same fully linked quiz-card structure for published quizzes, with no nested links, and descriptive cover alt text that naturally describes the subject and artwork. Keep Coming soon cards unlinked.
