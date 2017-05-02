var path = require('path');
module.exports = function (content) {
  this.cacheable();
  var query = this.query.substr(1);

  var parsed = parseStyleTag(content);
  var result = content;
  if (parsed && parsed.css) {
    var preamble = '';
    if (query === 'true') {
      result = parsed.css;
    }
    else {
      var preproc = parsed.pre ? `!${parsed.pre}-loader` : '';
      var style = `require("!!css-loader?sourceMap${preproc}!react-vue-style-loader?true!./${path.basename(this.resourcePath)}")`;
      preamble = `require(${JSON.stringify(require.resolve('style-loader/addStyles'))})([["${this.resourcePath}", ${style}]]);`;
      result = preamble + parsed.js;
    }
  }
  return result;
};

function parseStyleTag(source) {
  var code = source.split('<style')[1];
  if (!code)
    return;
  var lang = (code.match(/lang='([^>]*)'/) || code.match(/lang="([^>]*)"/) || [])[1];
  var secSplit = code.split('</style>');
  if (secSplit.length < 2)
    throw "Detected not closed <style> brace!";
  return {
    pre: lang,
    css: secSplit[0].substr(secSplit[0].indexOf('>') + 1),
    js: secSplit[1]
  };
};
