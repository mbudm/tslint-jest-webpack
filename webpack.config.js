module.exports = function () {
	return {
		entry: './src/index.ts',
		output: {
			path: './dist/',
			filename: 'server.js'
		},
		target: 'node',
		module: {
			rules: [
				{ test: /\.ts?$/, loader: "tslint-loader", exclude: /node_modules/, enforce: 'pre' },
				{ test: /\.ts?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ }
			]
		},
		plugins: [
		],
		resolve: {
			extensions: [".ts", ".js"],
			alias: {}
		}
	};
}
