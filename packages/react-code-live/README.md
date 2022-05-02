<header>
  <h1 align="center">
    <a href="https://github.com/yozorajs/yozora-react/tree/main/packages/react-code-live#readme">@yozora/react-code-live</a>
  </h1>
  <div align="center">
    <a href="https://www.npmjs.com/package/@yozora/react-code-live">
      <img
        alt="Npm Version"
        src="https://img.shields.io/npm/v/@yozora/react-code-live.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-code-live">
      <img
        alt="Npm Download"
        src="https://img.shields.io/npm/dm/@yozora/react-code-live.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-code-live">
      <img
        alt="Npm License"
        src="https://img.shields.io/npm/l/@yozora/react-code-live.svg"
      />
    </a>
    <a href="#install">
      <img
        alt="Module formats: cjs, esm"
        src="https://img.shields.io/badge/module_formats-cjs%2C%20esm-green.svg"
      />
    </a>
    <a href="https://github.com/nodejs/node">
      <img
        alt="Node.js Version"
        src="https://img.shields.io/node/v/@yozora/react-code-live"
      />
    </a>
    <a href="https://github.com/facebook/react">
      <img
        alt="React version"
        src="https://img.shields.io/npm/dependency-version/@yozora/react-code-live/peer/react"
      />
    </a>
    <a href="https://github.com/facebook/jest">
      <img
        alt="Tested with Jest"
        src="https://img.shields.io/badge/tested_with-jest-9c465e.svg"
      />
    </a>
    <a href="https://github.com/prettier/prettier">
      <img
        alt="Code Style: prettier"
        src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"
      />
    </a>
  </div>
</header>
<br/>

This component is for rendering the [Code][@yozora/ast] data produced by
[@yozora/tokenizer-indented-code][] and [@yozora/tokenizer-fenced-code].\
This component has been built into [@yozora/react-markdown][], you can use it directly.


## Install

* npm

  ```bash
  npm install --save @yozora/react-code-live
  ```

* yarn

  ```bash
  yarn add @yozora/react-code-live
  ```

## Usage

* Basic:

  ```tsx
  import React from 'react'
  import CodeLive from '@yozora/react-code-live'
  import type { ICodeRunnerProps } from '@yozora/react-code-runners'

  const JsxRenderer = ({ value }: ICodeRunnerProps): React.ReactElement => {
    // eslint-disable-next-line no-new-func
    const f = new Function(code)
    const v = f()
    return <span data-type="jsx">{ v }</span>
  }

  const code = `
    const a = 1 + 2;
    return a * a
  `

  const wrapper = (
    <CodeLive
      lang="jsx"
      value={ code }
      CodeRenderer={ JsxRenderer }
    />
  )
  ```


### Props

Name                | Type                  | Required  | Default | Description
:------------------:|:---------------------:|:---------:|:-------:|:-------------
`className`         | `string`              | `false`   | -       | Root css class
`collapsed`         | `boolean`             | `false`   | `false` | Collapse the code block
`darken`            | `boolean`             | `false`   | -       | Enable the darken mode
`highlightLinenos`  | `number[]`            | `false`   | -       | Line number of Lines that should be highlighted
`lang`              | `string`              | `false`   | -       | Language of the source codes
`maxLines`          | `number`              | `number`  | -       | Maximum number of rows displayed
`showLineNo`        | `boolean`             | `false`   | -       | Whether to display the line numbers
`style`             | `React.CSSProperties` | `false`   | -       | Root css style
`title`             | `string`              | `false`   | -       | Code title
`value`             | `string`              | `true`    | -       | Literal source codes

* `className`: The root element of this component will always bind with the
  CSS class `'yozora-code-literal'`.

### CSS variables

Name                              | Default value
:--------------------------------:|:----------------:
`--yozora-colors-background-code` | `#f5f5f5`
`--yozora-colors-border-code`     | `#d3d3d3`
`--yozora-colors-caret-code`      | `#ed6c60`
`--yozora-colors-selection-code`  | `hsla(200deg, 30%, 70%, 0.3)`
`--yozora-colors-text-codeTitle`  | `hsla(0deg, 0%, 30%, 0.8)`
`--yozora-fonts-family-code`      | `Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif`
`--yozora-fonts-family-heading`   | `'Comic Sans MS', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif`
`--yozora-fonts-size-code`        | `1rem`


## Related

* [@yozora/ast][]
* [@yozora/react-code][]
* [@yozora/react-code-embed][]
* [@yozora/react-code-highlighter][]
* [@yozora/react-code-literal][]
* [@yozora/react-markdown][]
* [@yozora/tokenizer-indented-code][]
* [@yozora/tokenizer-fenced-code][]
* [Code | Mdast][mdast]


[@yozora/ast]: https://www.npmjs.com/package/@yozora/ast#code
[@yozora/react-code]: https://www.npmjs.com/package/@yozora/react-code
[@yozora/react-code-embed]: https://www.npmjs.com/package/@yozora/react-code-embed
[@yozora/react-code-highlighter]: https://www.npmjs.com/package/@yozora/react-code-highlighter
[@yozora/react-code-literal]: https://www.npmjs.com/package/@yozora/react-code-literal
[@yozora/react-code-live]: https://www.npmjs.com/package/@yozora/react-code-live
[@yozora/react-markdown]: https://www.npmjs.com/package/@yozora/react-markdown
[@yozora/tokenizer-indented-code]: https://www.npmjs.com/package/@yozora/tokenizer-indented-code
[@yozora/tokenizer-fenced-code]: https://www.npmjs.com/package/@yozora/tokenizer-fenced-code
[mdast]: https://github.com/syntax-tree/mdast#code
