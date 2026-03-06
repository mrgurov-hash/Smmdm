# Netlify redirects file
# Static files should be served directly
/robots.txt   /robots.txt   200
/sitemap.xml  /sitemap.xml  200
/manifest.json /manifest.json 200

# All other routes go to index.html for SPA routing
/*    /index.html   200
