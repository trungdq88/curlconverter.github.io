import * as curlconverter from '@trungdq88/curlconverter';

const languages = {
  ansible: { converter: curlconverter.toAnsibleWarn, hljs: 'yaml' },
  // TODO: not supported by highlight.js
  cfml: { converter: curlconverter.toCFMLWarn, hljs: 'javascript' },
  dart: { converter: curlconverter.toDartWarn, hljs: 'dart' },
  elixir: { converter: curlconverter.toElixirWarn, hljs: 'elixir' },
  go: { converter: curlconverter.toGoWarn, hljs: 'go' },
  java: { converter: curlconverter.toJavaWarn, hljs: 'java' },
  javascript: { converter: curlconverter.toJavaScriptWarn, hljs: 'javascript' },
  json: { converter: curlconverter.toJsonStringWarn, hljs: 'json' },
  matlab: { converter: curlconverter.toMATLABWarn, hljs: 'matlab' },
  'node-fetch': { converter: curlconverter.toNodeWarn, hljs: 'javascript' },
  'node-axios': {
    converter: curlconverter.toNodeAxiosWarn,
    hljs: 'javascript',
  },
  'node-request': {
    converter: curlconverter.toNodeRequestWarn,
    hljs: 'javascript',
  },
  php: { converter: curlconverter.toPhpWarn, hljs: 'php' },
  python: { converter: curlconverter.toPythonWarn, hljs: 'python' },
  r: { converter: curlconverter.toRWarn, hljs: 'r' },
  rust: { converter: curlconverter.toRustWarn, hljs: 'rust' },
  strest: { converter: curlconverter.toStrestWarn, hljs: 'yaml' },
};

window.curlconverter = curlconverter;
window.__languages = languages;
