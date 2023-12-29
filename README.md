# Phaser 3 Webpack Project Template

A Phaser 3 project template with ES6 support via [Webpack 5](https://webpack.js.org/) that includes hot-reloading for development and production-ready builds.

This has been updated for Phaser 3.60.0 version and above.

Loading images via JavaScript module `import` is also supported, although not recommended.

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                                                                             |
| --------------- |---------------------------------------------------------------------------------------------------------|
| `npm install`   | Install project dependencies                                                                            |
| `npm start`     | Build project and open web server running project                                                       |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) into the `build` folder |
| `npm run lint` | Eslint code checking                                                                                    |
| `npm run lint:fix` | Checking eslint code and fixing errors                                                                  |
| `npm run format` | Code formatting                                                                                         |
## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development server by running `npm start`.

After starting the development server with `npm start`, you can edit any files in the `src` folder and webpack will automatically recompile and reload your server (available at `http://localhost:8080` by default).

## Handling Assets

This template provides support for both embedding images and loading them from a static folder. To embed an image, you can import it at the top of the file you are using it in:

```js
import logoImg from './assets/logo.png';
```

To load static files such as images, audio files, videos, etc place them into the `public/assets` folder. Then you can use this path in the Loader calls within Phaser:

```js
preload();
{
  //  This is an example of a bundled image:
  this.load.image('logo', logoImg);

  //  This is an example of loading a static image from the public folder:
  this.load.image('background', 'assets/bg.jpg');
}
```

When you do `npm run build` it will use the copy-webpack-plugin to copy the `public/assets` folder into `dist/assets`. Remember to include this folder when you deploy your game to a server.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `build/bundle.min.js` along with any other assets you project depended.
