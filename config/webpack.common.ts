import { Configuration, DefinePlugin } from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

const __DEV__ = process.env.NODE_ENV === "development";

const CommonConfig: Configuration = {
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "[name]_[fullhash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      __DEV__: JSON.stringify(__DEV__),
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: true,
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    alias: {
      "@bear-world/components": resolve(__dirname, "../src/components"),
      "@bear-world/utils": resolve(__dirname, "../src/utils"),
      "@bear-world/hooks": resolve(__dirname, "../src/hooks"),
      "@bear-world/pages": resolve(__dirname, "../src/pages"),
      "@bear-world/router": resolve(__dirname, "../src/router"),
      "@bear-world/feature": resolve(__dirname, "../src/feature"),
      "@bear-world/store": resolve(__dirname, "../src/store"),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};

export default CommonConfig;
