/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../..', 'src', 'index.tsx'),

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../..', 'dist'),
        clean: true,
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    transpileOnly: true,
                    configFile: path.resolve(__dirname, '../..', 'tsconfig.json'),
                },
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                            },
                        },
                    },
                    'sass-loader',
                ],
            },

            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.svg$/i,
                type: 'asset',
                resourceQuery: /url/,
            },

            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: [/url/] },
                use: ['@svgr/webpack'],
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                memoryLimit: 4096,
                configFile: path.resolve(__dirname, '../..', 'tsconfig.json'),
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../..', 'index.html'),
        }),
    ],
};
