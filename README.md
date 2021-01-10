# File Structure
<ul>
  <li>bin/</li>
  <li>public/</li>
  <li>
    src/
    <ul>
      <li>components/</li>
      <li>pages/</li>
      <li>style/</li>
      <li>App.js</li>
    </ul>
  </li>
  <li>package.json</li>
</ul>

## bin

This directory holds executable js files. \
Currently this only holds ``load-screenshots.js`` which can be executed with \
``node bin/load-screenshots.js``. This script puts the screenshot file names \
from ``public/images/screenshots`` into the ``data.json`` file for the screenshots page.

## public

Holds the ``index.html`` file as well as any public resources such as images.

## src

All source code for the site.

### components

Components used across multiple pages such as navbars and footers.

### pages

Full site pages such as the Home page or Screenshots page.

### style

scss and css files.

### App.js

Top level entry point to the application. Includes switches for react router.
