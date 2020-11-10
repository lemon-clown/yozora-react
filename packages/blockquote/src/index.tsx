import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { defaultBlockquoteTheme, getBlockquoteStyle } from './theme'
export * from './theme'


/**
 * Props for creating Blockquote
 */
export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLDivElement> {
  /**
   * Blockquote content
   */
  children: React.ReactNode
}


const Container = styled.blockquote`
  color: ${ getBlockquoteStyle('color') };
  padding: ${ getBlockquoteStyle('padding') };
  border-left: 0.25em solid ${ getBlockquoteStyle('borderColor') };
  margin: ${ getBlockquoteStyle('margin') };
  background:  ${ getBlockquoteStyle('background') };
`


Container.defaultProps = {
  theme: { yozora: { blockquote: defaultBlockquoteTheme } }
}


/**
 * Render Blockquote content
 *
 * @param props
 */
export const Blockquote = React.forwardRef<HTMLDivElement, BlockquoteProps>(
  (props, forwardRef): React.ReactElement => {
    return (
      <Container { ...props } ref={ forwardRef } />
    )
  }
)


Blockquote.displayName = 'Blockquote'


Blockquote.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Blockquote
