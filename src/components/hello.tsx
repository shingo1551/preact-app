import Router, { Link } from 'preact-router';
import { css } from 'twind/css';

const h1 = css`
  @apply text-3xl font-bold;
`

const div = css`
  @apply flex-row;
`

interface Props {
  path: string;
  name?: string;
}

export function Hello(props: Props) {
  return (
    <div tw={div}>
      <h1 tw={h1}>
        Hello {props.name}!
      </h1>
      <Link href="/hello/world/nested">Nested</Link>

      <Router>
        <div path="/hello/:name/nested">
          <h2>Nested Route</h2>
        </div>
      </Router>
    </div>
  )
}
