# Todo Application
This application is created using ReactJS

How to create the new empty application?
1. Install NPM dependency:
### `npm i -g create-react-app`
2. Run next command to create app-name
### `create-react-app app-name`

How to deploy the new application?
1. Add GitHub Pages package as a dev-dependency:
### `npm install gh-pages --save-dev`
2. Add property to the top of package.json file:
### `"homepage": "http://{username}.github.io/{app-name}"`
3. In section scripts add next 2 properties:
### `"predeploy": "npm run build",`
### `"deploy": "gh-pages -d build"`
4. Deploy application to GitHub Pages:
### `npm run deploy`