const path = require("path");

const config = {
    entry: ["./src/app.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src/js'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: [".ts", ".tsx", ".js", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.scss$|\.css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        inline: false
    },
    devtool: 'source-map'
};

module.exports = config;
