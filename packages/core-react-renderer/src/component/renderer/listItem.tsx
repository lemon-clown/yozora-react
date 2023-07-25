import { css, cx } from '@emotion/css'
import type { ListItem } from '@yozora/ast'
import React from 'react'
import { NodesRenderer } from '../NodesRenderer'

/**
 * Render yozora `listItem`.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#listitem
 * @see https://www.npmjs.com/package/@yozora/tokenizer-list-item
 */
export class ListItemRenderer extends React.Component<ListItem> {
  public override shouldComponentUpdate(nextProps: Readonly<ListItem>): boolean {
    const props = this.props
    return props.children !== nextProps.children
  }

  public override render(): React.ReactElement {
    const childNodes = this.props.children
    return (
      <li className={cls}>
        <NodesRenderer nodes={childNodes} />
      </li>
    )
  }
}

const cls = cx(
  'yozora-list-item',
  css({
    position: 'relative',
    padding: 0,
    margin: 0,
    '> :last-child': {
      marginBottom: 0,
    },
  }),
)
