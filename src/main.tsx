import { render } from 'preact'
import { App } from './app'
import { setup } from '@twind/preact'
setup({ props: {} })

render(<App />, document.body as HTMLElement)
