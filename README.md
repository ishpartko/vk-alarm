# VK ALARM

## For all

  if you are using __npm__:<br>
   <code>(PS)>npm install</code><br>
   if **yarn**:<br>
   <code>(PS)>yarn install</code>

## For development

1. Run <code>web-ext</code> with your config from **manifest.json**
2. Run Webpack watcher of changes
   <code>(PS)> npm watch </code>
3. Start developing.

## For production

1. <code>(PS)> npm buid </code> - to build all files in **./dist/bundle.js**
2. <code>(PS)> web-ext build </code> - to build the extension from **./dist/bundle.js**
