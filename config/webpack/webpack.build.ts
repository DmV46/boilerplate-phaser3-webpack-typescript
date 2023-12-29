import webpack from 'webpack';

import { BuildOptions } from './types';
import { webpackResolvers } from './webpack.resolvers';
import { webpackLoaders } from './webpack.loaders';
import { webpackPlugins } from './webpack.plugins';
import { webpackDevServer } from './webpack.dev-server';
import { webpackPerfomance } from './webpack.perfomance';
import { webpackOptimization } from './webpack.optimization';

export function webpackBuild(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? webpackDevServer(options) : undefined,
    entry: paths?.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash].min.js',
      clean: true,
    },
    performance: webpackPerfomance(options),
    optimization: webpackOptimization(options),
    module: {
      rules: webpackLoaders(options),
    },
    resolve: webpackResolvers(options),
    plugins: webpackPlugins(options),
  };
}
