import type { Text } from '@yozora/ast'
import React from 'react'

/**
 * Render yozora `text`.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#text
 * @see https://www.npmjs.com/package/@yozora/tokenizer-text
 */
export class TextRenderer extends React.Component<Text> {
  public override shouldComponentUpdate(): boolean {
    return false
  }

  public override render(): React.ReactElement {
    return <React.Fragment>{this.props.value}</React.Fragment>
  }
}
