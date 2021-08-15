import type { MathProps } from '@yozora/react-math'
import React from 'react'
import type { CodeRunner, ReactComponent } from './types'
import { CodeRunnerPropTypes } from './types'

/**
 * Create a formula live code runner.
 * @param MathRenderer
 * @returns
 */
export function createMathRunner(
  MathRenderer: ReactComponent<MathProps>,
): CodeRunner {
  const MathRunner: CodeRunner = props => {
    const value = props.value
      .replace(/^[\s\n]*([$]+)([\s\S]+)*\1[\s\n]*$/, '$2')
      .trim()
    return <MathRenderer value={value} />
  }

  MathRunner.displayName = 'YozoraMathRunner'
  MathRunner.propTypes = CodeRunnerPropTypes
  return MathRunner
}
