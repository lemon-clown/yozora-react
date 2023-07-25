import { css, cx } from '@emotion/css'
import type { Heading } from '@yozora/ast'
import { tokens } from '@yozora/core-react-constant'
import React from 'react'
import { NodesRenderer } from '../NodesRenderer'

type IHeading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface IProps extends Heading {
  linkIcon?: React.ReactNode
}

/**
 * Render `heading` content.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#heading
 * @see https://www.npmjs.com/package/@yozora/tokenizer-heading
 */
export class HeadingRenderer extends React.Component<IProps> {
  public override shouldComponentUpdate(nextProps: Readonly<IProps>): boolean {
    const props = this.props
    return (
      props.depth !== nextProps.depth ||
      props.identifier !== nextProps.identifier ||
      props.children !== nextProps.children ||
      props.linkIcon !== nextProps.linkIcon
    )
  }

  public override render(): React.ReactElement {
    const { depth, identifier, children, linkIcon = '¶' } = this.props

    const id = identifier == null ? undefined : encodeURIComponent(identifier)
    const h: IHeading = ('h' + depth) as IHeading
    const H: any = h as keyof JSX.IntrinsicElements

    const cls = cx(
      'yozora-heading',
      !!identifier && 'yozora-heading--toc',
      classes.yozoraHeading,
      classes[h],
    )

    return (
      <H id={id} className={cls}>
        <p className={classes.yozoraHeadingContent}>
          <NodesRenderer nodes={children} />
        </p>
        {identifier && (
          <a className={classes.yozoraHeadingAnchor} href={'#' + id}>
            {linkIcon}
          </a>
        )}
      </H>
    )
  }
}

const $classes = {
  yozoraHeadingAnchor: css({
    flex: '0 0 3rem',
    paddingLeft: '0.5rem',
    color: tokens.colorLink,
    opacity: 0,
    transition: 'color 0.2s ease-in-out, opacity 0.2s ease-in-out',
    userSelect: 'none',
    textDecoration: 'none',
    '> svg': {
      overflow: 'hidden',
      display: 'inline-block',
      verticalAlign: 'middle',
      fill: 'currentColor',
    },
  }),
  yozoraHeadingContent: css({
    flex: '0 1 auto',
    minWidth: 0,
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre-wrap',
    lineHeight: 1.7,
  }),
}

const classes = {
  yozoraHeading: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    margin: tokens.marginBlockNode,
    marginBottom: '1em',
    lineHeight: 1.25,
    fontFamily: tokens.fontFamilyHeading,
    color: tokens.colorHeading,
    [`&:active .${$classes.yozoraHeadingAnchor}`]: {
      opacity: 0.8,
      color: tokens.colorLinkActive,
    },
    [`&&:hover .${$classes.yozoraHeadingAnchor}`]: {
      opacity: 0.8,
      color: tokens.colorLinkHover,
    },
  }),
  yozoraHeadingAnchor: $classes.yozoraHeadingAnchor,
  yozoraHeadingContent: $classes.yozoraHeadingContent,
  h1: css({
    padding: '0.3rem 0',
    borderBottom: `1px solid ${tokens.colorBorderHeading}`,
    fontSize: '2rem',
    fontStyle: 'normal',
    fontWeight: 500,
  }),
  h2: css({
    padding: '0.3rem 0',
    borderBottom: `1px solid ${tokens.colorBorderHeading}`,
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: 500,
    marginBottom: '0.875rem',
  }),
  h3: css({
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: 500,
  }),
  h4: css({
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
  }),
  h5: css({
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: 500,
  }),
  h6: css({
    fontSize: '0.85rem',
    fontStyle: 'normal',
    fontWeight: 500,
  }),
}
