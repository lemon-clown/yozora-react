<header>
  <h1 align="center">
    <a href="https://github.com/yozorajs/yozora-react/tree/release-2.x.x/packages/react-code-embed#readme">@yozora/react-code-embed</a>
  </h1>
  <div align="center">
    <a href="https://www.npmjs.com/package/@yozora/react-code-embed">
      <img
        alt="Npm Version"
        src="https://img.shields.io/npm/v/@yozora/react-code-embed.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-code-embed">
      <img
        alt="Npm Download"
        src="https://img.shields.io/npm/dm/@yozora/react-code-embed.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-code-embed">
      <img
        alt="Npm License"
        src="https://img.shields.io/npm/l/@yozora/react-code-embed.svg"
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
        src="https://img.shields.io/node/v/@yozora/react-code-embed"
      />
    </a>
    <a href="https://github.com/facebook/react">
      <img
        alt="React version"
        src="https://img.shields.io/npm/dependency-version/@yozora/react-code-embed/peer/react"
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

- npm

  ```bash
  npm install --save @yozora/react-code-embed
  ```

- yarn

  ```bash
  yarn add @yozora/react-code-embed
  ```

## Usage

- Basic:

  ```tsx
  import React from 'react'
  import CodeEmbed from '@yozora/react-code-embed'
  import type { ICodeRunnerProps } from '@yozora/react-code-runners'

  const JsxRenderer = ({ value }: ICodeRunnerProps): React.ReactElement => {
    // eslint-disable-next-line no-new-func
    const f = new Function(value)
    const v = f()
    return <span data-type="jsx">{ v }</span>
  }

  const code = `
    const a = 1 + 2;
    return a * a
  `

  const wrapper = (
    <CodeEmbed
      lang="jsx"
      value={ code }
      CodeRenderer={ JsxRenderer }
    />
  )
  ```

### Props

|    Name     |           Type           | Required | Default | Description                  |
| :---------: | :----------------------: | :------: | :-----: | :--------------------------- |
| `className` |         `string`         | `false`  |    -    | Root css class               |
|   `meta`    | `Record<string, unknown` |  `true`  |    -    | Interpreter for the codes    |
|   `lang`    |         `string`         |  `true`  |    -    | Language of the source codes |
|  `runner`   |       `CodeRunner`       |  `true`  |    -    | Interpreter for the codes    |
|   `style`   |  `React.CSSProperties`   | `false`  |    -    | Root css style               |
|   `value`   |         `string`         |  `true`  |    -    | source codes                 |

- `className`: The root element of this component will always bind with the CSS class
  `'yozora-code-embed'`.

### CSS variables

|              Name              | Default value |
| :----------------------------: | :-----------: |
| `--yozora-colors-border-error` |     `red`     |

## Related

- [@yozora/ast][]
- [@yozora/react-code][]
- [@yozora/react-code-embed][]
- [@yozora/react-code-highlighter][]
- [@yozora/react-code-live][]
- [@yozora/react-code-runners][]
- [@yozora/react-markdown][]
- [@yozora/tokenizer-indented-code][]
- [@yozora/tokenizer-fenced-code][]
- [Code | Mdast][mdast]

[@yozora/ast]: https://www.npmjs.com/package/@yozora/ast#code
[@yozora/react-code]: https://www.npmjs.com/package/@yozora/react-code
[@yozora/react-code-embed]: https://www.npmjs.com/package/@yozora/react-code-embed
[@yozora/react-code-highlighter]: https://www.npmjs.com/package/@yozora/react-code-highlighter
[@yozora/react-code-live]: https://www.npmjs.com/package/@yozora/react-code-live
[@yozora/react-code-runners]: https://www.npmjs.com/package/@yozora/react-code-runners
[@yozora/react-markdown]: https://www.npmjs.com/package/@yozora/react-markdown
[@yozora/tokenizer-indented-code]: https://www.npmjs.com/package/@yozora/tokenizer-indented-code
[@yozora/tokenizer-fenced-code]: https://www.npmjs.com/package/@yozora/tokenizer-fenced-code
[mdast]: https://github.com/syntax-tree/mdast#code
