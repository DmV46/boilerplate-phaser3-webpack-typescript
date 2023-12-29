import { Configuration } from 'webpack';
import { BuildOptions } from './types';

export function webpackResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.js', '.ts', '.tsx'],
  };
}
