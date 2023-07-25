import { css } from '@emotion/css'
import { CommonTokenNames, TokenNames } from '@yozora/core-react-constant'

export const vars = {
  border: `1px solid var(${TokenNames.colorBorderCodeLineno}, hsla(0deg, 0%, 80%, 0.8))`,
  highlightBackground: `var(${TokenNames.colorBgCodeHighlight}, hsla(30deg, 90%, 50%, 0.3))`,
  fontSizeCode: `var(${CommonTokenNames.fontSizeCode}, 14px)`,
  lineHeightCode: `var(${CommonTokenNames.lineHeightCode}, 1.6)`,
}

export const classes = {
  container: css({
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    display: 'flex',
    alignItems: 'stretch',
    overflow: 'hidden',
    width: '100%',
    fontSize: vars.fontSizeCode,
    lineHeight: vars.lineHeightCode,
    padding: 0,
    transition: 'max-height 0.5s ease-in-out',
    tabSize: 2,
    fontSmooth: 'always',
    whiteSpace: 'pre',
    wordBreak: 'keep-all',
    wordSpacing: 'normal',
    wordWrap: 'normal',
  }),
  line: css({
    boxSizing: 'border-box',
    display: 'flex',
    minWidth: 'fit-content',
    width: '100%',
    padding: '0 6px',
    letterSpacing: 'inherit',
    fontSize: vars.fontSizeCode,
    lineHeight: vars.lineHeightCode,
    height: vars.lineHeightCode,
    overflowWrap: 'inherit',
    tabSize: 'inherit',
    textIndent: 'inherit',
    textRendering: 'inherit',
    textTransform: 'inherit',
    whiteSpace: 'inherit',
    wordBreak: 'inherit',
    wordSpacing: 'inherit',
    wordWrap: 'inherit',
  }),
  linenoLine: css({
    justifyContent: 'flex-end',
    padding: '0 4px',
  }),
  highlightLine: css({
    background: vars.highlightBackground,
    borderColor: 'transparent',
  }),
  lineno: css({
    flex: '0 0 auto',
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '0.5rem 0',
    cursor: 'default',
    fontSize: vars.fontSizeCode,
    lineHeight: vars.lineHeightCode,
    userSelect: 'none',
    textAlign: 'right',
    borderRight: vars.border,
  }),
  codes: css({
    flex: '1 1 auto',
    overflow: 'overlay',
    boxSizing: 'border-box',
    padding: '0.5rem 0',
    fontSize: vars.fontSizeCode,
    lineHeight: vars.lineHeightCode,
  }),
  codeWrapper: css({
    minWidth: '100%',
    width: 'fit-content',
  }),
  codeLine: css({
    boxSizing: 'border-box',
    padding: '0 12px',
  }),
}
