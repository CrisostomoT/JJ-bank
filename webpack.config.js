const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: ['bootstrap-loader', '/app/src/index.js'],
    entry: {
        main: "./app/src/index.js",
        dashBoard: "./app/src/admin.js",
        userProfile: "./app/src/profile.js",
        aboutUs: './app/src/aboutus.js',
        carousel: './app/src/carousel.js',
        copyright: './app/src/copyright.js',
        footer: './app/src/footer.js',
        login: './app/src/login.js',
        navbar: './app/src/navbar.js',
        services: './app/src/services.js',
        tabla: './app/src/tabla.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-proposal-class-properties"]
                        ]
                    }
                }
            },
            {
                test: /\.(s?css)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'postcss-loader', // Run postcss actions
                    options: {
                        plugins: function() { // postcss plugins, can be exported to postcss.config.js
                            return [
                                require('autoprefixer')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {

                test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/public/index.html",
            inject: true,
            chunks: ['main', 'aboutUs', 'carousel', 'copyright', 'footer', 'login', 'navbar', 'services'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: "./app/public/admin.html",
            inject: true,
            chunks: ['dashBoard', 'tabla'],
            filename: 'admin.html'
        }),
        new HtmlWebpackPlugin({
            template: "./app/public/profile.html",
            inject: true,
            chunks: ['userProfile'],
            filename: 'profile.html'
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        })
    ]
};