module.exports = function (source) {

    // 如果不是css文件，才转义
    if (!(/\.css$/.test(this.filepath))) {
        source = require('@hai2007/algorithm').scss(source);
    }

    return source;
};
