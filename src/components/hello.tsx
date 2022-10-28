import { RouteProps } from 'preact-router';
import { css } from 'twind/css';

const h1 = css`
  @apply text-3xl font-bold;
`

interface Props {
  path: string;
  name?: string;
}

export function Hello(props: Props) {
  return (
    <>
      <h1 tw={h1}>
        Hello {props.name}!
      </h1>
    </>
  )
}
