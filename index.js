function WriteAWebpackPlugin(options) {

}

// This apply method is called once by the webpack compiler
// while installing the plugin.
WriteAWebpackPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        console.log('Done');
    });

    compiler.plugin('compilation', function(compilation) {
        compilation.plugin('optimize', function() {
            console.log('Assets are being optimized.')
        });
    });

    compiler.plugin('emit', function(compilation, callback) {
        let text = '';
        compilation.chunks.forEach(function(chunk) {
            text += chunk.name + '\n\n';
            chunk.modules.forEach(function(module) {
                if (module) {
                    text += '- ' + module.toString() + '\n';
                    (module.fileDependencies || []).forEach(function (filePath) {
                        text += '\t- ' + filePath + '\n';
                    });
                }
            });
            chunk.files.forEach(function(filename) {
                // source
                const source = compilation.assets[filename].source();
            });
            compilation.assets['chunk.md'] = {
                source: function() {
                    return text;
                },
                size: function() {
                    return text.length;
                }
            }
            callback && callback();
        });
    });
}

module.exports = WriteAWebpackPlugin;