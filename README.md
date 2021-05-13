<header>
  <h1 align="center">
    <a href="https://github.com/guanghechen/yozora-react#readme">Yozora React</a>
  </h1>
  <div align="center">
    <a href="#license">
      <img
        alt="License"
        src="https://img.shields.io/github/license/guanghechen/yozora-react"
      />
    </a>
    <a href="https://github.com/guanghechen/yozora-react/tags">
      <img
        alt="Package Version"
        src="https://img.shields.io/github/v/tag/guanghechen/yozora-react?include_prereleases&sort=semver"
      />
    </a>
    <a href="https://github.com/guanghechen/yozora-react/search?l=typescript">
      <img
        alt="Github Top Language"
        src="https://img.shields.io/github/languages/top/guanghechen/yozora-react"
      />
    </a>
    <a href="https://github.com/nodejs/node">
      <img
        alt="Node.js Version"
        src="https://img.shields.io/node/v/@yozora/react-blockquote"
      />
    </a>
    <a href="https://github.com/guanghechen/yozora-react/actions/workflows/ci.yml">
      <img
        alt="CI Workflow"
        src="https://github.com/guanghechen/yozora-react/workflows/Build/badge.svg?branch=master"
      />
    </a>
    <a href="https://github.com/facebook/react">
      <img
        alt="React version"
        src="https://img.shields.io/npm/dependency-version/@yozora/react-blockquote/peer/react"
      />
    </a>
    <a href="https://github.com/styled-components/styled-components">
      <img
        alt="Styled-Components version"
        src="https://img.shields.io/npm/dependency-version/@yozora/react-blockquote/peer/styled-components"
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

A monorepo contains react components render [yozora tokens][yozora/autolink]. See https://yozora.guanghechen.com for details.

Use [@yozora/react-markdown][] to render the [@yozora/ast][].

## Overview

### Markdown components

Component Name                          | Token Name
:--------------------------------------:|:--------------------------------------
[@yozora/react-admonition][]            | [admonition][yozora/admonition]
[@yozora/react-blockquote][]            | [blockquote][yozora/blockquote]
[@yozora/react-break][]                 | [break][yozora/break]
[@yozora/react-code][]                  | [code][yozora/code]
[@yozora/react-delete][]                | [delete][yozora/delete]
[@yozora/react-emphasis][]              | [emphasis][yozora/emphasis]
[@yozora/react-footnote-definitions][]  | [footnoteDefinition][yozora/footnote-definition]
[@yozora/react-footnote-reference][]    | [footnoteReference][yozora/footnote-reference]
[@yozora/react-heading][]               | [heading][yozora/heading]
[@yozora/react-image][]                 | [image][yozora/image], [imageReference][yozora/image-reference]
[@yozora/react-inline-code][]           | [inlineCode][yozora/inline-code]
[@yozora/react-inline-math][]           | [inlineMath][yozora/inline-math]
[@yozora/react-link][]                  | [link][yozora/link], [linkReference][yozora/link-reference]
[@yozora/react-list][]                  | [list][yozora/list]
[@yozora/react-list-item][]             | [listItem][yozora/list-item]
[@yozora/react-math][]                  | [math][yozora/math]
[@yozora/react-paragraph][]             | [paragraph][yozora/paragraph]
[@yozora/react-strong][]                | [strong][yozora/emphasis]
[@yozora/react-table][]                 | [table][yozora/table], [tableCell][yozora/table-cell], [tableRow][yozora/table-row]
[@yozora/react-text][]                  | [text][yozora/text]
[@yozora/react-thematic-break][]        | [thematic-break][yozora/thematic-break]


### Other components

Component Name                    | Description
:--------------------------------:|:----------------------------------
[@yozora/react-code-editor]       | A simple code editor.
[@yozora/react-code-embed]        | A simple code editor online.
[@yozora/react-code-highlighter]  | Highlight codes.
[@yozora/react-code-literal]      | Render literal code block.
[@yozora/react-code-live]         | A live code editor, be similar to [react-live].
[@yozora/react-code-renderer-jsx] | A component for renderer jsx directly in browser.
[@yozora/react-markdown]          | A component for render markdown content with above Markdown Components.


[react-live]: https://github.com/FormidableLabs/react-live

<!-- yozora component links -->
[@yozora/react-admonition]: https://github.com/guanghechen/yozora-react/tree/master/packages/admonition#readme
[@yozora/react-blockquote]: https://github.com/guanghechen/yozora-react/tree/master/packages/blockquote#readme
[@yozora/react-break]: https://github.com/guanghechen/yozora-react/tree/master/packages/break#readme
[@yozora/react-code]: https://github.com/guanghechen/yozora-react/tree/master/packages/code#readme
[@yozora/react-code-editor]: https://github.com/guanghechen/yozora-react/tree/master/packages/code-editor#readme
[@yozora/react-code-embed]: https://github.com/guanghechen/yozora-react/tree/master/packages/code-embed#readme
[@yozora/react-code-highlighter]: https://github.com/guanghechen/yozora-react/tree/master/packages/code-highlighter#readme
[@yozora/react-code-literal]: https://github.com/guanghechen/yozora-react/tree/master/packages/code-literal#readme
[@yozora/react-code-live]: https://github.com/guanghechen/yozora-react/tree/master/packages/code-live#readme
[@yozora/react-code-renderer-jsx]: https://github.com/guanghechen/yozora-react/tree/master/packages/code-renderer-jsx#readme
[@yozora/react-delete]: https://github.com/guanghechen/yozora-react/tree/master/packages/delete#readme
[@yozora/react-emphasis]: https://github.com/guanghechen/yozora-react/tree/master/packages/emphasis#readme
[@yozora/react-footnote-reference]: https://github.com/guanghechen/yozora-react/tree/master/packages/footnote-reference#readme
[@yozora/react-footnote-definitions]: https://github.com/guanghechen/yozora-react/tree/master/packages/footnote-definitions#readme
[@yozora/react-heading]: https://github.com/guanghechen/yozora-react/tree/master/packages/heading#readme
[@yozora/react-image]: https://github.com/guanghechen/yozora-react/tree/master/packages/image#readme
[@yozora/react-inline-code]: https://github.com/guanghechen/yozora-react/tree/master/packages/inline-code#readme
[@yozora/react-inline-math]: https://github.com/guanghechen/yozora-react/tree/master/packages/inline-math#readme
[@yozora/react-link]: https://github.com/guanghechen/yozora-react/tree/master/packages/link#readme
[@yozora/react-list]: https://github.com/guanghechen/yozora-react/tree/master/packages/list#readme
[@yozora/react-list-item]: https://github.com/guanghechen/yozora-react/tree/master/packages/list-item#readme
[@yozora/react-math]: https://github.com/guanghechen/yozora-react/tree/master/packages/math#readme
[@yozora/react-paragraph]: https://github.com/guanghechen/yozora-react/tree/master/packages/paragraph#readme
[@yozora/react-strong]: https://github.com/guanghechen/yozora-react/tree/master/packages/strong#readme
[@yozora/react-table]: https://github.com/guanghechen/yozora-react/tree/master/packages/table#readme
[@yozora/react-text]: https://github.com/guanghechen/yozora-react/tree/master/packages/text#readme
[@yozora/react-thematic-break]: https://github.com/guanghechen/yozora-react/tree/master/packages/thematic-break#readme
[@yozora/react-markdown]: https://github.com/guanghechen/yozora-react/tree/master/packages/markdown#readme

[yozora/ast]: https://www.npmjs.com/package/@yozora/ast
[yozora/admonition]: https://www.npmjs.com/package/@yozora/ast#admonition
[yozora/blockquote]: https://www.npmjs.com/package/@yozora/ast#blockquote
[yozora/break]: https://www.npmjs.com/package/@yozora/ast#break
[yozora/code]: https://www.npmjs.com/package/@yozora/ast#code
[yozora/delete]: https://www.npmjs.com/package/@yozora/ast#delete
[yozora/emphasis]: https://www.npmjs.com/package/@yozora/ast#emphasis
[yozora/footnote-definition]: https://www.npmjs.com/package/@yozora/ast#footnotedefinition
[yozora/footnote-reference]: https://www.npmjs.com/package/@yozora/ast#footnotereference
[yozora/heading]: https://www.npmjs.com/package/@yozora/ast#heading
[yozora/html]: https://www.npmjs.com/package/@yozora/ast#html
[yozora/image]: https://www.npmjs.com/package/@yozora/ast#image
[yozora/image-reference]: https://www.npmjs.com/package/@yozora/ast#imagereference
[yozora/inline-code]: https://www.npmjs.com/package/@yozora/ast#inlinecode
[yozora/inline-math]: https://www.npmjs.com/package/@yozora/ast#inlinemath
[yozora/link]: https://www.npmjs.com/package/@yozora/ast#link
[yozora/link-reference]: https://www.npmjs.com/package/@yozora/ast#linkreference
[yozora/definition]: https://www.npmjs.com/package/@yozora/ast#definition
[yozora/list]: https://www.npmjs.com/package/@yozora/ast#list
[yozora/list-item]: https://www.npmjs.com/package/@yozora/ast#listitem
[yozora/math]: https://www.npmjs.com/package/@yozora/ast#math
[yozora/paragraph]: https://www.npmjs.com/package/@yozora/ast#paragraph
[yozora/setext-heading]: https://www.npmjs.com/package/@yozora/ast#setextheading
[yozora/table]: https://www.npmjs.com/package/@yozora/ast#table
[yozora/table-cell]: https://www.npmjs.com/package/@yozora/ast#tablecell
[yozora/table-row]: https://www.npmjs.com/package/@yozora/ast#tablerow
[yozora/text]: https://www.npmjs.com/package/@yozora/ast#text
[yozora/thematic-break]: https://www.npmjs.com/package/@yozora/ast#thematicbreak
