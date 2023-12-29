import { Configuration } from 'webpack';
import { webpackBuild } from './config/webpack/webpack.build';
import { BuildMode, BuildPaths } from './config/webpack/types';
import path from 'path';

interface EnvVariables {
  mode: BuildMode;
  port?: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, './src/index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: Configuration = webpackBuild({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });

  return config;
};
