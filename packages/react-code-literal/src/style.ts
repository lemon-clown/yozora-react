import { css } from '@emotion/css'

const vars = {
  border: '1px solid var(--yozora-colors-border-code, #d3d3d3)',
  background: 'var(--yozora-colors-background-code, #f5f5f5)',
  caretColor: 'var(--yozora-colors-caret-code, #ed6c60)',
  codeFontFamily: `var(--yozora-fonts-family-code, Consolas, 'Source Code Pro', 'Roboto Mono', monospace, sans-serif)`,
  codeFontSize: 'var(--yozora-fonts-size-code, 1rem)',
  selectionBackground: 'var(--yozora-colors-selection-code, hsla(200deg, 30%, 70%, 0.3))',
  titleFontFamily: `var(--yozora-fonts-family-heading, 'Comic Sans MS', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif)`,
  titleFontColor: 'var(--yozora-colors-text-codeTitle, hsla(0deg, 0%, 30%, 0.8))',
}

const copyBtnCls: string = css({
  position: 'absolute',
  right: '1rem',
  visibility: 'hidden',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
  background: vars.background,
  userSelect: 'none',
})

export const classes = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    border: vars.border,
    background: vars.background,
    caretColor: vars.caretColor,
    '&:hover': {
      [`.${copyBtnCls}`]: {
        visibility: 'visible',
        opacity: 1,
      },
    },
  }),
  toolbar: css({
    flex: '0 0 auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
    width: '100%',
    borderBottom: vars.border,
    background: vars.background,
    cursor: 'default',
  }),
  title: css({
    marginLeft: '1rem',
    fontFamily: vars.titleFontFamily,
    fontSize: '0.9em',
    color: vars.titleFontColor,
    userSelect: 'none',
  }),
  content: css({
    overflow: 'auto',
    padding: 0,
    border: 'none',
    margin: 0,
    fontFamily: vars.codeFontFamily,
    fontSize: vars.codeFontSize,
    background: 'inherit',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
    wordSpacing: 'normal',
    wordBreak: 'break-all',
    wordWrap: 'break-word',
    letterSpacing: 1,
    lineHeight: 'inherit',
    tabSize: 2,
    '> pre': {
      margin: 0,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      '&::selection': {
        background: vars.selectionBackground,
      },
    },
    span: {
      lineHeight: 'inherit',
    },
    code: {
      padding: 0,
      margin: 0,
      lineHeight: 'inherit',
      background: 'transparent',
    },
    '& ::selection': {
      background: vars.selectionBackground,
    },
  }),
  copyBtn: copyBtnCls,
}
