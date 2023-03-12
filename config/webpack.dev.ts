// 为了引入devServer类型
import 'webpack-dev-server';
import { HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import CommonConfig from './webpack.common';

const DevConfig = merge(CommonConfig, {
  mode: 'development',
  devServer: {
    static: './dist',
    port: '9999',
    hot: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ]
});

export default DevConfig;