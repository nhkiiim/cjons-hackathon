const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	name: "Adam",
	mode: "development",
	entry: {
		main: "./src/index.js",
	},
	output: {
		path: path.resolve("./dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
				},
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
	devServer: {
		host: "localhost",
		port: 8200,
		historyApiFallback: true,
	},
};

// Ref. https://juni-official.tistory.com/158
// Ref. https://joshua1988.github.io/webpack-guide/tutorials/webpack-dev-server.html#%EC%8B%A4%EC%8A%B5-%EC%A0%88%EC%B0%A8
