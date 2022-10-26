import { Hello } from './components/hello';
import { css } from 'twind/css'

//
const header = css`
  @apply bg-[#5851ff] text-white;
  @apply h-14 flex items-center;
  @apply shadow-inner;
`

const h1 = css`
  @apply text-[1.4rem] font-medium text-white;
  @apply px-3 py-0;
`

const main = css`
  @apply p-2.5;
  {
    display: flex;
  }
`

//
export function App() {
  return (
    <>
      <header tw={header}>
        <h1 tw={h1}>Preact App Starter</h1>
      </header>

      <main tw={main}>
        <Hello />
      </main>
    </>
  )
}
