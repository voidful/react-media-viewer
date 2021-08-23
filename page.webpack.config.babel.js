const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, './src/demo/index.js'),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, './src/__tests__/')
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
            {test: /\.css$/, use: ["style-loader", "css-loader"]}

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/demo/index.html"),
            filename: "./index.html",
        })
    ]
};
