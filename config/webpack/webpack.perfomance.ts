import { BuildOptions } from './types';
import { Configuration } from 'webpack';

export function webpackPerfomance({ mode }: BuildOptions): Configuration['performance'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  if (isDev) return;

  if (isProd) {
    return {
      maxEntrypointSize: 2500000,
      maxAssetSize: 1200000,
    };
  }
}
