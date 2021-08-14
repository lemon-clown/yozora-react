import type { CodeRunnerItem } from '@yozora/react-code-live'

export type { CodeRunnerItem } from '@yozora/react-code-live'
export type { CodeRunnerProps } from '@yozora/react-code-embed'
export type { CodeRunnerScope } from '@yozora/react-code-embed'

export interface CodeProps {
  /**
   * Literal source codes.
   */
  value: string
  /**
   * Language of the source code.
   */
  lang?: string
  /**
   * Meta data of the code block.
   */
  meta?: string
  /**
   * Code runners.
   */
  runners?: ReadonlyArray<CodeRunnerItem>
  /**
   * Enable darken mode.
   */
  darken?: boolean
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
 * Meta data of the fenced-code.
 */
export interface CodeMetaData {
  /**
   * Rendering mode.
   */
  mode: 'live' | 'embed' | 'literal' | string
  /**
   * The line number of the highlighted row.
   */
  highlights: number[]
  /**
   * Maximum number of rows displayed
   * @default -1
   */
  maxlines: number
  /**
   * Code title.
   */
  title: string
  /**
   * Whether to collapse the code component.
   */
  collapsed?: boolean
  /**
   * Unknown key / value pairs.
   */
  [key: string]: unknown
}
