export interface BuildPaths {
  entry?: string;
  output: string;
  html: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
