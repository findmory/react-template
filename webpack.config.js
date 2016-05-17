var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

//take /app/index.js
//run it through loaders with rule: (any .js, except in node_modules, run through babel-loader which transforms jsx to javasccript)
//output into /dist as index_bundle.js
//take index.html inject into directory

module.exports = {
	entry:[
		'./app/index.js'
	],
	output:{
		path: __dirname + '/dist',
		filename: "index_bundle.js"
	},
	module:{
		loaders:[
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.css$/, loader: "style-loader!css-loader"}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
	
}