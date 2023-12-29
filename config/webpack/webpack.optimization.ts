import TerserPlugin from 'terser-webpack-plugin';
import { BuildOptions } from './types';
import { Configuration } from 'webpack';

export function webpackOptimization({ mode }: BuildOptions): Configuration['optimization'] {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  if (isDev) return;

  if (isProd) {
    return {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    };
  }
}
