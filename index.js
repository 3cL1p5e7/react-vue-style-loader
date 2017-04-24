module.exports = function (content) {
  this.cacheable();

  var code = content.split('<style>', 2)[1];
  var result = content;
  if (code) {
    var source = code.split('</style>', 2);
    var preamble = 'require(' + JSON.stringify(require.resolve('style-loader/addStyles')) + ')(' +
      JSON.stringify([[this.resourcePath, source[0]]]) + ');';
    result = preamble + code[0] + source[1];
  }
  return result;
};
