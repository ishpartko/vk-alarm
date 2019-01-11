# VK ALARM

## For all

1. if you are using **npm**:<br>

   <code>(PS)>npm install</code><br>
   if **yarn**:<br>

   <code>(PS)>yarn install</code>

2. to develop ext for FF rename **"manifestFox.json"** just to **"manifest.json"**
   or to develop ext for Chrome rename **"manifestChrome.json"** just to **"manifest.json"**

## For development

1. Run <code>web-ext</code> with your config from **manifest.json**
2. Run Webpack watcher of changes
   <code>(PS)> npm watch </code>
3. Start developing.

## For production

1. <code>(PS)> npm buid </code> - to build all files in **./dist/bundle.js**
2. <code>(PS)> web-ext build </code> - to build the extension from **./dist/bundle.js**
