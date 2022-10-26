import { render } from 'preact'
import { App } from './app'
import { setup } from '@twind/preact'
setup({ props: {} })

render(<App />, document.getElementById('app') as HTMLElement)
