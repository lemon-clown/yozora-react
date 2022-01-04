import Highlight, { Prism } from 'prism-react-renderer'
import type { PrismTheme } from 'prism-react-renderer'
import PropTypes from 'prop-types'
import React from 'react'
import HighlighterContent from './content'
import vscDarkTheme from './theme/vsc-dark'
import vscLightTheme from './theme/vsc-light'
import type { ICodeHighlighterProps } from './types'

export const CodeHighlighter: React.FC<ICodeHighlighterProps> = props => {
  const {
    lang,
    value: code,
    darken = true,
    highlightLinenos,
    maxLines,
    lineHeight,
    collapsed,
    showLinenos,
    codesRef,
    onLinenoWidthChange,
  } = props

  const theme: PrismTheme =
    props.theme == null ? (darken ? vscDarkTheme : vscLightTheme) : props.theme

  return (
    <Highlight Prism={Prism} code={code} theme={theme} language={lang as any}>
      {({ tokens, getLineProps, getTokenProps, className, style }) => (
        <HighlighterContent
          codesRef={codesRef}
          highlightLinenos={highlightLinenos}
          lineHeight={lineHeight}
          maxLines={maxLines}
          collapsed={collapsed}
          showLinenos={showLinenos}
          tokens={tokens}
          getLineProps={getLineProps}
          getTokenProps={getTokenProps}
          onLinenoWidthChange={onLinenoWidthChange}
          className={className}
          style={style}
        />
      )}
    </Highlight>
  )
}

CodeHighlighter.displayName = 'YozoraCodeHighlighter'
export default CodeHighlighter

CodeHighlighter.propTypes = {
  codesRef: PropTypes.any,
  collapsed: PropTypes.bool,
  darken: PropTypes.bool,
  highlightLinenos: PropTypes.arrayOf(PropTypes.number) as React.Validator<
    number[] | null | undefined
  >,
  lang: PropTypes.string,
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLines: PropTypes.number,
  onLinenoWidthChange: PropTypes.func,
  showLinenos: PropTypes.bool,
  theme: PropTypes.any,
  value: PropTypes.string.isRequired,
}
