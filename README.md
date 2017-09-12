文档：https://github.com/webpack/docs/wiki/how-to-write-a-plugin


生成一个chunk.md,生成所有页面的相关依赖树

	`const WriteAWebpackPlugin = require('write_a_webpack_plugin');
	//...
	config.plugins.push(new WriteAWebpackPlugin());
	//...
	`
