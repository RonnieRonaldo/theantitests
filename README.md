# The Anti-Tests — homepage v1

An English static homepage for https://theantitests.com/.
Hosting: Cloudflare Pages. Source files: GitHub. Do not enable GitHub Pages.

## Preview on your Mac
Unzip the package and open index.html in Safari or Chrome. Keep styles.css and assets alongside it.

## 1. Put the files in GitHub
1. Open https://github.com/new and select your own account as Owner.
2. Set Repository name to theantitests. Choose Private.
3. Enable Add README so the repository opens with a file list. Leave the template, gitignore and licence options unset.
4. Click Create repository.
5. Select Add file > Upload files.
6. Open the extracted theantitests-mainpage folder in Finder. Drag its CONTENTS, including the assets folder, into the upload area. Do not upload the ZIP or the outer folder itself.
7. Use the commit message: Add The Anti-Tests homepage.
8. Commit directly to main and select Commit changes. The README in this package replaces the initial README.
9. Check that index.html is at the repository's top level, next to styles.css, assets, robots.txt, sitemap.xml, 404.html and README.md.

## 2. Publish directly on Cloudflare Pages
1. Open your Cloudflare dashboard and go to Workers & Pages.
2. Choose Create application, then Pages. Select Connect to Git or Import an existing Git repository (wording may vary).
3. Connect GitHub. If asked, grant access to the theantitests repository. Select that repository and Begin setup.
4. Use these settings:
   - Project name: theantitests (or another available project name).
   - Production branch: main.
   - Framework preset: None.
   - Build command: exit 0.
   - Build output directory: . (one dot, meaning the repository root).
   - Root directory: leave blank.
   - Environment variables: none required.
5. Select Save and Deploy. Open the actual pages.dev address Cloudflare provides once deployment succeeds.
6. Check the homepage and navigation on desktop and phone. All quizzes intentionally say Coming soon; this package contains the homepage only.

## 3. Connect theantitests.com
1. Add theantitests.com as a website/domain in the same Cloudflare account, if it is not already there. Select the Free plan when offered.
2. Review imported DNS records and keep any records used for email or other existing services.
3. Cloudflare gives you two assigned nameservers. At your domain registrar, change the nameservers for theantitests.com to those exact two values. Do not copy values from another domain.
4. Wait until Cloudflare reports the domain as Active.
5. Open Workers & Pages > your Pages project > Custom domains > Set up a domain.
6. Enter theantitests.com and follow the DNS confirmation steps. Let Cloudflare create the required record. Do not replace unrelated DNS records.
7. Once the custom domain is Active, open https://theantitests.com/ and verify HTTPS, the stylesheet and the favicon.
8. Optionally add www.theantitests.com through the same Custom domains flow, then configure a Cloudflare redirect from www to the main non-www address. Configure the pages.dev production redirect only after the custom domain works.

If your domain is already active in Cloudflare, start at step 5. Domain activation and HTTPS may take time; use the status shown in your own dashboard.

## What's included
- index.html: homepage, title, meta description, canonical, Open Graph text and WebSite structured data.
- styles.css: responsive layout, warm paper tones and burgundy; local system fonts.
- assets/favicon.svg: the site's burgundy icon.
- robots.txt and sitemap.xml: prepared for the main domain; only the existing homepage is listed.
- 404.html: custom error page.

## Current scope
The quiz cards are Coming soon, with no broken start links. The A/B/C card at the top is decorative artwork, not an interactive question. No quiz pages, accounts, contact form, analytics scripts or tracking cookies are included. Contact/privacy details and analytics can be added once those services are chosen. Existing prototype files have not been modified.

The site works without JavaScript or a build tool. Every main-branch update will trigger a new Cloudflare deployment once the Git integration is connected.

## Later edits
Homepage copy lives in index.html; layout and colours live in styles.css. Only add real, tested quiz links and published URLs to the sitemap. Confirm quiz durations before displaying them.

## Official setup references
https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
https://developers.cloudflare.com/pages/get-started/git-integration/
https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
https://developers.cloudflare.com/pages/configuration/custom-domains/
