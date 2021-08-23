const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'media-viewer.js',
        library: packageJson.name,
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, './src/__tests__/'),
                    path.resolve(__dirname, './src/demo/')
                ],
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/, use: ["style-loader", "css-loader"],
                exclude: [
                    path.resolve(__dirname, './src/demo/'),
                    path.resolve(__dirname, './src/__tests__/')
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            chunks: 'vendor',
            minChunks(module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.SplitChunksPlugin({
            chunks: 'manifest'
        })
    ]
}
