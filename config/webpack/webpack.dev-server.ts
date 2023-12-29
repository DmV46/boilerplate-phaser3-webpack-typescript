import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types';

export function webpackDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
    hot: true,
  };
}
