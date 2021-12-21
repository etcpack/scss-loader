module.exports = function (source) {

    // 如果是scss文件，就进行转义
    // if (/\.scss$/.test(this.filepath)) {
        source = require('@hai2007/algorithm').scss(source);
    // }

    return source;
};
