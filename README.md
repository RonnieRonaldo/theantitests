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
Check the new colors and face icon, start a test, select an answer, reload, and use Continue your test. Read through to a result and try Copy result & link. A shared link carries no answers; a recipient with existing local progress may choose to resume or start fresh.

## Quiz behavior

The original 15 scenes, 45 answers and three profile descriptions are kept in quizzes/anti-consumption/quiz-data.js. Each A/B/C selection adds one point to that profile. A tie asks one extra choice between the tied profiles; original counts stay unchanged. Revisiting an earlier question discards answers after that point to avoid inconsistent results. Browser Back also revisits earlier screens. Progress is stored locally on the visitor's browser, with a graceful fallback when storage is unavailable. No accounts, analytics or external requests are added.

Parent Edition and Christmas remain honestly marked Coming soon; their complete source questions have not yet been integrated.

The favicon is a local SVG with a cache-version query. Browsers can keep old tab icons; closing and reopening the tab may help.
