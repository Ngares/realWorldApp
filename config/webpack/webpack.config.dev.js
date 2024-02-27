/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    bail: false,
    devServer: {
        port: 3030,
        open: true,
        historyApiFallback: true,
    },
});
