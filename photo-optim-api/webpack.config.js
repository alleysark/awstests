const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    // serverless 설정에 따라 웹팩 진입점이 달라질 수 있다.
    entry: slsw.lib.entries,
    // 개발 중에는 source-map 등을 추가하지만 lambda 초기 로딩비용을
    // 극단적으로 아끼기 위해서는 source-map을 제외하는 것이 좋다.
    devtool: "source-map",
    // webpack이 처리할 파일 설정
    resolve: {
        extensions: [".mjs", ".json", ".ts", ".js"],
    },
    // webpack의 결과물을 생성하기 위한 설정
    output: {
        libraryTarget: "commonjs2",
        path: path.join(__dirname, ".webpack"),
        filename: "[name].js",
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    stats: "normal",
};