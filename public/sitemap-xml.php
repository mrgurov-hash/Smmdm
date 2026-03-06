<?php
// Set correct content-type header for XML sitemap
header('Content-Type: application/xml; charset=UTF-8');

// Read and output the sitemap.xml file
$sitemapFile = __DIR__ . '/sitemap.xml';

if (file_exists($sitemapFile)) {
    readfile($sitemapFile);
} else {
    http_response_code(404);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Sitemap not found';
}
exit;
