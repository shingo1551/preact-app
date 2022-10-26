import { Hello } from './components/hello';

export function App() {
  return (
    <>
      <header tw={`bg-[#5851ff] text-white h-14 flex items-center shadow-inner`}>
        <h1 tw={`text-[1.4rem] font-medium text-white px-3 py-0`}>Preact App Starter</h1>
      </header>

      <main tw={`p-2.5`} class={`display: flex`}>
        <Hello />
      </main>
    </>
  )
}
