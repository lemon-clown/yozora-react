import { cx } from '@emotion/css'
import CodeEditor from '@yozora/react-code-editor'
import CodeEmbed from '@yozora/react-code-embed'
import CopyButton from '@yozora/react-common-copy-button'
import LightButtons from '@yozora/react-common-light-buttons'
import PropTypes from 'prop-types'
import React from 'react'
import { classes } from './style'
import type { ICodeLiveProps } from './types'
import { debounce } from './util'

/**
 * Render yozora `code` in live mode.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#code
 * @see https://www.npmjs.com/package/@yozora/tokenizer-indented-code
 * @see https://www.npmjs.com/package/@yozora/tokenizer-fenced-code
 * @see https://www.npmjs.com/package/@yozora/react-code
 * @see https://www.npmjs.com/package/@yozora/react-code-embed
 * @see https://www.npmjs.com/package/@yozora/react-code-live
 */
export const YozoraCodeLive: React.FC<ICodeLiveProps> = props => {
  const {
    runners,
    lang,
    value: _value,
    meta,
    scope,
    title,
    maxLines,
    collapsed: _collapsed = false,
    showLinenos,
    className,
    style,
    darken,
    theme,
    autoFocus,
    centerPreviewer = true,
  } = props

  const [vertical] = React.useState<boolean>(true)
  const [value, setValue] = React.useState<string>(_value)

  const [collapsed, setCollapsed] = React.useState<boolean>(_collapsed)
  const handleChange = React.useMemo(() => debounce(setValue, 300), [])

  const countOfLines = collapsed ? value.split(/\r|\n|\n\r/g).length : null
  const runner = runners.find(item => item.pattern.test(lang))

  return (
    <div className={cx('yozora-code-live', classes.container, className)} style={style}>
      <div
        key="toolbar"
        className={classes.toolbar}
        onDoubleClick={e => {
          e.stopPropagation()
          e.preventDefault()
          setCollapsed(v => !v)
        }}
      >
        <LightButtons
          key="light-buttons"
          onMinimize={() => setCollapsed(true)}
          onMaximize={() => setCollapsed(false)}
        />
        <span key="title" className={classes.title} title={title}>
          {title}&nbsp;
          {title && countOfLines && ' | ' + countOfLines + ' lines.'}
        </span>
        <span key="copy-btn" className={classes.copyBtn} onClick={e => e.stopPropagation()}>
          <CopyButton value={value} />
        </span>
      </div>
      <div key="main" className={cx(classes.main, { [classes.mainVertical]: vertical })}>
        <div key="editor" className={classes.editor}>
          <CodeEditor
            lang={lang}
            code={value}
            onChange={handleChange}
            darken={darken}
            theme={theme}
            collapsed={collapsed}
            showLinenos={showLinenos}
            maxLines={maxLines}
            autoFocus={autoFocus}
          />
        </div>
        {runner != null && (
          <div
            key="previewer"
            className={cx(classes.previewer, { [classes.previewerCenter]: centerPreviewer })}
          >
            <CodeEmbed lang={lang} value={value} meta={meta} scope={scope} runner={runner.runner} />
          </div>
        )}
      </div>
    </div>
  )
}

YozoraCodeLive.propTypes = {
  autoFocus: PropTypes.bool,
  centerPreviewer: PropTypes.bool,
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  darken: PropTypes.bool,
  lang: PropTypes.string.isRequired,
  maxLines: PropTypes.number,
  meta: PropTypes.any,
  runners: PropTypes.array.isRequired,
  scope: PropTypes.any,
  showLinenos: PropTypes.bool,
  style: PropTypes.object,
  theme: PropTypes.any,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
}

YozoraCodeLive.displayName = 'YozoraCodeLive'
