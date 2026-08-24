SHALIMAR RIVERA WEBSITE — MIAMI SERVER PACKAGE

This is a build-free static website. It works with Apache, Nginx, cPanel,
Plesk, or any server that can serve HTML, CSS, and JavaScript files.

UPLOAD
1. Extract the ZIP.
2. Upload the CONTENTS of the shalimar-rivera-site folder to the domain's
   public web root (commonly public_html, httpdocs, or /var/www/site/public).
3. Keep the assets folder structure unchanged.
4. Point shalimarrivera.com and www.shalimarrivera.com to that web root.
5. Enable HTTPS and redirect HTTP to HTTPS in the server control panel.

PAGES
- index.html
- about.html
- brand.html
- media.html
- in-the-press.html
- contact.html

GLOBAL EDITING
- Header, announcement bar, bilingual labels, and page starter copy:
  assets/js/site.js
- Colors, spacing, desktop/mobile layout, and visual styling:
  assets/css/styles.css

IMPORTANT BEFORE LAUNCH
- Replace all starter copy with final approved copy.
- Replace hello@shalimarrivera.com if necessary.
- Connect the contact form to the Miami server's secure mail handler. The
  included form is intentionally non-sending until a backend endpoint is known.
- Add approved photography and social-sharing images.
- Test HTTPS, email delivery, mobile navigation, and both languages.

APACHE
The included .htaccess adds safe baseline headers and browser caching. If the
server blocks .htaccess overrides, apply equivalent rules in its virtual host.

NGINX
No rewrite rules are required. Set index.html as the directory index and serve
the extracted folder as the site root.
