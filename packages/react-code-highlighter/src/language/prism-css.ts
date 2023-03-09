/**
 * @see https://github.com/PrismJS/prism/blob/master/components/prism-css.js
 */

import type { Grammar, TokenObject } from 'prismjs'
import Prism from 'prismjs'

const string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/

Prism.languages.css = {
  comment: /\/\*[\s\S]*?\*\//,
  atrule: {
    pattern: RegExp(
      '@[\\w-](?:' +
        /[^;{\s"']|\s+(?!\s)/.source +
        '|' +
        string.source +
        ')*?' +
        /(?:;|(?=\s*\{))/.source,
    ),
    inside: {
      rule: /^@[\w-]+/,
      'selector-function-argument': {
        pattern:
          /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
        lookbehind: true,
        alias: 'selector',
      },
      keyword: {
        pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
        lookbehind: true,
      },
      // See rest below
    },
  },
  url: {
    // https://drafts.csswg.org/css-values-3/#urls
    pattern: RegExp(
      '\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
      'i',
    ),
    greedy: true,
    inside: {
      function: /^url/i,
      punctuation: /^\(|\)$/,
      string: {
        pattern: RegExp('^' + string.source + '$'),
        alias: 'url',
      },
    },
  },
  selector: {
    pattern: RegExp(
      '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)',
    ),
    lookbehind: true,
  },
  string: {
    pattern: string,
    greedy: true,
  },
  property: {
    pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    lookbehind: true,
  },
  important: /!important\b/i,
  function: {
    pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
    lookbehind: true,
  },
  punctuation: /[(){};:,]/,
}
;(Prism.languages.css['atrule'] as TokenObject).inside!.rest = Prism.languages.css

const markup = Prism.languages.markup as Grammar & { tag: any }
if (markup) {
  markup.tag.addInlined('style', 'css')
  markup.tag.addAttribute('style', 'css')
}
