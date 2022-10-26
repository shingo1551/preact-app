import { css } from 'twind/css'

//
const h1 = css`
  @apply text-3xl font-bold;
`

//
export function Hello() {
  return (
    <>
      <h1 tw={h1}>
        Hello world!
      </h1>
    </>
  )
}
