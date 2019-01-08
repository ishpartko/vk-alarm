# For development

0. Run <code>web-ext</code> with your config from __manifest.json__
1. Run Webpack watcher of changes
   <code>(PS)> npm watch </code>
2. Start developing.

# For production

0. <code>(PS)> npm buid </code> - to build all files in __./dist/bundle.js__
1. <code>(PS)> web-ext build </code> - to build the extension from __./dist/bundle.js__
