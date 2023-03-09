import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import CodeHighlighter from '../src'

describe('basic rendering case', () => {
  test('lineno change', () => {
    function Wrapper(): React.ReactElement {
      const [code, setCode] = useState<string>('let a: number = 1 + 2;')

      useEffect(() => {
        const nextCode =
          'let a = 1, b = 2\n' +
          Array.from(new Array(100))
            .map((x, i) => '// ' + i)
            .join('\n') +
          "\nlet c = 3\nconsole.log('c:', c)"
        setCode(nextCode)
      }, [])

      return (
        <pre data-line-count={code.split(/\r\n|\n|\r/g).length}>
          <CodeHighlighter lang="typescript" value={code} />
        </pre>
      )
    }

    const view = render(<Wrapper />)
    expect(view.baseElement).toHaveAttribute('data-line-count', String(103))
  })

  test('snapshot', () => {
    const view = render(
      <pre>
        <CodeHighlighter lang="typescript" value="let a: number = 1 + 2;" />
      </pre>,
    )
    expect(view.asFragment()).toMatchSnapshot()
  })
})
