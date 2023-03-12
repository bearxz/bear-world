import { merge } from 'webpack-merge';
import CommonConfig from './webpack.common';

const ProdConfig = merge(CommonConfig, {
  mode: 'production',
});

export default ProdConfig;