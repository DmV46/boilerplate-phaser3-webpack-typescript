import webpack, { Configuration } from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types';
import CopyPlugin from 'copy-webpack-plugin';

export function webpackPlugins(options: BuildOptions): Configuration['plugins'] {
  const { mode, paths } = options;
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const plugins: Configuration['plugins'] = [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
      'typeof WEBGL_DEBUG': JSON.stringify(true),
      'typeof EXPERIMENTAL': JSON.stringify(true),
      'typeof PLUGIN_3D': JSON.stringify(false),
      'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
      'typeof PLUGIN_FBINSTANT': JSON.stringify(false),
      'typeof FEATURE_SOUND': JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];

  if (isDev) {
    // плагины для разработки
  }

  if (isProd) {
    plugins.push(
      new CopyPlugin({
        patterns: [{ from: 'public/assets', to: 'assets' }],
      }),
    );
  }

  return plugins;
}
