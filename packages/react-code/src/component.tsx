import { css, cx } from '@emotion/css'
import isEqual from '@guanghechen/fast-deep-equal'
import { tokens } from '@yozora/core-react-theme'
import CodeEmbed from '@yozora/react-code-embed'
import CodeLiteral from '@yozora/react-code-literal'
import CodeLive from '@yozora/react-code-live'
import JsxRenderer from '@yozora/react-code-renderer-jsx'
import type { ICodeRunnerItem, ICodeRunnerProps } from '@yozora/react-code-runners'
import PropTypes from 'prop-types'
import React from 'react'
import type { ICodeMetaData, ICodeProps } from './types'
import { parseCodeMeta } from './util'

export const defaultRunners: ICodeRunnerItem[] = [
  {
    title: 'jsx',
    pattern: /^jsx$/,
    runner: function JsxRunner(props: ICodeRunnerProps): React.ReactElement {
      const { value, scope, onError, meta = {} } = props
      const inline = meta.jsxmode == null || meta.jsxmode === 'inline'
      return <JsxRenderer code={value} inline={inline} scope={scope} onError={onError} />
    },
  },
]

interface IState {
  meta: ICodeMetaData
}

/**
 * Render yozora `code`.
 *
 * @see https://www.npmjs.com/package/@yozora/ast#code
 * @see https://www.npmjs.com/package/@yozora/tokenizer-indented-code
 * @see https://www.npmjs.com/package/@yozora/tokenizer-fenced-code
 * @see https://www.npmjs.com/package/@yozora/react-code
 * @see https://www.npmjs.com/package/@yozora/react-code-embed
 * @see https://www.npmjs.com/package/@yozora/react-code-live
 */
export class Code extends React.Component<ICodeProps, IState> {
  public static readonly displayName = 'YozoraCode'
  public static readonly propTypes = {
    lang: PropTypes.string,
    meta: PropTypes.string,
    runners: PropTypes.array,
    value: PropTypes.string.isRequired,
    darken: PropTypes.bool,
    preferLineNo: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
  }

  constructor(props: ICodeProps) {
    super(props)
    this.state = {
      meta: parseCodeMeta(props.meta ?? '', { preferLineNo: props.preferLineNo ?? true }),
    }
  }

  public override shouldComponentUpdate(
    nextProps: Readonly<ICodeProps>,
    nextState: Readonly<IState>,
  ): boolean {
    const props = this.props
    const state = this.state
    return (
      !isEqual(state.meta, nextState.meta) ||
      props.lang !== nextProps.lang ||
      props.meta !== nextProps.meta ||
      props.runners !== nextProps.runners ||
      props.value !== nextProps.value ||
      props.darken !== nextProps.darken ||
      props.preferLineNo !== nextProps.preferLineNo ||
      props.className !== nextProps.className ||
      props.style !== nextProps.style
    )
  }

  public override render(): React.ReactElement {
    const { lang, value, runners = defaultRunners, darken, style } = this.props
    const { meta } = this.state

    const { highlights, maxlines, title, collapsed, showlineno } = meta
    const className = cx(cls, this.props.className)
    const mode = lang ? meta._yozoracodemode ?? 'literal' : 'literal'

    if (lang) {
      switch (mode) {
        case 'live': {
          return (
            <CodeLive
              lang={lang as string}
              value={value}
              meta={meta}
              runners={runners}
              title={title}
              maxLines={maxlines}
              collapsed={collapsed}
              showLineNo={showlineno}
              darken={darken}
              className={className}
              style={style}
            />
          )
        }
        case 'embed': {
          const runner = runners.find(item => item.pattern.test(lang as string))
          if (runner != null) {
            return (
              <CodeEmbed
                lang={lang as string}
                value={value}
                meta={meta}
                runner={runner.runner}
                className={className}
                style={style}
              />
            )
          }
        }
      }
    }

    return (
      <CodeLiteral
        lang={lang}
        value={value}
        title={title}
        highlightLinenos={highlights}
        maxLines={maxlines}
        collapsed={collapsed}
        showLineNo={showlineno}
        darken={darken}
        className={className}
        style={style}
      />
    )
  }

  public override componentDidUpdate(prevProps: ICodeProps): void {
    const props: ICodeProps = this.props
    if (props.meta !== prevProps.meta || props.preferLineNo !== prevProps.preferLineNo) {
      this.setState({
        meta: parseCodeMeta(props.meta ?? '', { preferLineNo: props.preferLineNo ?? true }),
      })
    }
  }
}

const cls = cx(
  'yozora-code',
  css({
    margin: tokens.marginBlockNode,
  }),
)
