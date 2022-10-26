import { Hello } from './components/hello/hello';
import classes from './app.module.css'

export function App() {
  console.log(classes);
  return (
    <>
      <header class={classes.header}>
        <h1 class={classes.h1}>Preact App Starter</h1>
      </header>

      <main class={classes.main}>
        <Hello />
      </main>
    </>
  )
}
