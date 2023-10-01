import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'connect.js',
    path: "C://laragon/www/metapandas/dist/",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
};

