<header>
  <h1 align="center">
    <a href="https://github.com/yozorajs/yozora-react/tree/release-2.x.x/packages/react-common-copy-button#readme">@yozora/react-common-copy-button</a>
  </h1>
  <div align="center">
    <a href="https://www.npmjs.com/package/@yozora/react-common-copy-button">
      <img
        alt="Npm Version"
        src="https://img.shields.io/npm/v/@yozora/react-common-copy-button.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-common-copy-button">
      <img
        alt="Npm Download"
        src="https://img.shields.io/npm/dm/@yozora/react-common-copy-button.svg"
      />
    </a>
    <a href="https://www.npmjs.com/package/@yozora/react-common-copy-button">
      <img
        alt="Npm License"
        src="https://img.shields.io/npm/l/@yozora/react-common-copy-button.svg"
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
        src="https://img.shields.io/node/v/@yozora/react-common-copy-button"
      />
    </a>
    <a href="https://github.com/facebook/react">
      <img
        alt="React version"
        src="https://img.shields.io/npm/dependency-version/@yozora/react-common-copy-button/peer/react"
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

Render a simple copy button.

## Install

- npm

  ```bash
  npm install --save @yozora/react-common-copy-button
  ```

- yarn

  ```bash
  yarn add @yozora/react-common-copy-button
  ```

## Usage

- Basic:

  ```tsx
  import React from 'react'
  import CopyButton from '@yozora/react-common-copy-button'

  const wrapper = (<CopyButton value="waw" style={ { color: 'orange' } } />)
  ```

### Props

|      Name       |               Type                | Required |  Default  | Description                                      |
| :-------------: | :-------------------------------: | :------: | :-------: | :----------------------------------------------- |
|   `className`   |             `string`              | `false`  |     -     | Root css class                                   |
| `statusNodeMap` | `Record<string, React.ReactNode>` | `false`  | See below | Map of copy status and displaying text.          |
|     `style`     |       `React.CSSProperties`       | `false`  |     -     | Root css style                                   |
|     `value`     |             `string`              |  `true`  |     -     | The literal texture content that waiting to copy |

- `className`: The root element of this component will always bind with the CSS class
  `'yozora-common-copy-button'`.

- `statusNodeMap`:

  ```typescript
  export const defaultStatusNodeMap: Record<CopyStatus, React.ReactNode> = {
    waiting: 'copy',
    copying: 'copying..',
    failed: 'failed!',
    succeed: 'copied!',
  }
  ```

## Related
