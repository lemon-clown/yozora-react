<header>
  <h1 align="center">
    <a href="https://github.com/yozorajs/yozora-react/tree/release-2.x.x/packages/react-code-renderer-jsx#readme">@yozora/react-code-renderer-jsx</a>
  </h1>
  <div align="center">
    <a href="https://www.npmjs.com/package/@yozora/react-code-renderer-jsx">
      <img
        alt="Npm Version"
        src="https://img.shields.io/npm/v/@yozora/react-code-renderer-jsx.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-code-renderer-jsx">
      <img
        alt="Npm Download"
        src="https://img.shields.io/npm/dm/@yozora/react-code-renderer-jsx.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-code-renderer-jsx">
      <img
        alt="Npm License"
        src="https://img.shields.io/npm/l/@yozora/react-code-renderer-jsx.svg"
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
        src="https://img.shields.io/node/v/@yozora/react-code-renderer-jsx"
      />
    </a>
    <a href="https://github.com/facebook/react">
      <img
        alt="React version"
        src="https://img.shields.io/npm/dependency-version/@yozora/react-code-renderer-jsx/peer/react"
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

This package is designed to live render jsx, inspired by [react live][].

## Install

- npm

  ```bash
  npm install --save @yozora/react-code-renderer-jsx
  ```

- yarn

  ```bash
  yarn add @yozora/react-code-renderer-jsx
  ```

## Usage

- Basic:

  ```tsx
  import styled from '@emotion/styled'
  import CodeRendererJsx from '@yozora/react-code-renderer-jsx'
  import React from 'react'

  const scope = { styled }

  function JsxPreview(props: { code: string, inline: boolean }) {
    const [error, setError] = React.useState<any>(null)
    return (
      <div>
        <CodeRendererJsx
          code={props.code}
          inline={props.inline}
          scope={scope}
          onError={setError}
        />
        <pre>{error}</pre>
      </div >
    )
  }
  ```

- Inline code: Render `React.ReactNode` directly

  ```tsx
  const code = `
    (
      <div>
        <span>Hello, world</span>
      </div>
    )
  `

  const wrapper = <JsxPreview code={ code } inline={ true } >
  ```

- Block code: Call the `render()` function with `React.ReactNode` explicitly

  ```tsx
  import styled from '@emotion/styled'

  const code = `
    const Container = styled.div\`
      background: hsl(0deg, 10%, 90%);
    \`

    render(
      <Container>
        <span style={{ color: 'orange' }}>Hello, world</span>
      </Container>
    )
  `

  const scope = { styled }

  const wrapper = (
    <JsxPreview scope={scope} code={ code } inline={ false } />
  )
  ```

### Props

|   Name    |           Type            |    Required    | Default | Description                     |
| :-------: | :-----------------------: | :------------: | :-----: | :------------------------------ | -------------- |
|  `code`   |         `string`          |     `true`     |    -    | Source code                     |
| `inline`  |         `boolean`         |     `true`     |    -    | `inline` / `block` mode         |
|  `scope`  | `Record<string, unknown>` |    `false`     |  `{}`   | Additional accessible variables |
| `onError` |      `(error: string      | null) => void` | `true`  | -                               | Error callback |

## Related

- [mdast code][]
- [react live][]

[mdast code]: https://github.com/syntax-tree/mdast#code
[react live]: https://github.com/FormidableLabs/react-live
