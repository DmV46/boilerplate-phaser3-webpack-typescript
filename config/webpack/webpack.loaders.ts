import { ModuleOptions } from 'webpack';
import { BuildOptions } from './types';

export function webpackLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const rawLoader = {
    test: [/\.vert$/, /\.frag$/],
    use: 'raw-loader',
  };

  const fileLoader = {
    test: /\.(gif|png|jpe?g|svg|xml|glsl)$/i,
    use: 'file-loader',
  };

  return [tsLoader, rawLoader, fileLoader];
}
