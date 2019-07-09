const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const AssetVersioning = require('webpack-php-asset-versioning');

module.exports = {
    entry: './index.js',
    output: {
        filename: './js/main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                }
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                        outputPath: 'images'
                    },
                  },
                ],
            },
            {
                test: /\.(woff|woff2)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 5000,
                        name: '[name].[ext]',
                        outputPath: 'fonts'
                    },
                  },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            outputPath: './css/',
                        }
                    },
                    {
                        loader: 'extract-loader',
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                                    plugins: () => [
                                        require('cssnano')(),
                                    ]
                                }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    },
                },
            }),
        ]
    },
    externals: {
        jquery: 'jQuery'
    },
    mode : 'production',
    watch: true,
    plugins: [
        new BrowserSyncPlugin({
            host: '192.168.10.10', // Vagrant
            proxy: 'mysite.local',
            open: false,
            files: [
                '../resources/views/**/*.blade.php', // eg. Laravel view files
            ],
        }),
        new AssetVersioning({
            file_name: '../assets.version.php'
        })
    ]
};
