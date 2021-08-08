import cn from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import './style.styl'

export interface BreakProps {
  /**
   * Root css class of the component.
   */
  className?: string
  /**
   * Root css style.
   */
  style?: React.CSSProperties
}

/**
 * Render yozora `Break`.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#break
 * @see https://www.npmjs.com/package/@yozora/tokenizer-break
 */
export const Break: React.FC<BreakProps> = props => {
  const { className, style } = props
  return <br className={cn('yozora-break', className)} style={style} />
}

Break.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Break.displayName = 'YozoraBreak'
export default Break
