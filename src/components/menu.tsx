import { route } from 'preact-router';
import { css } from 'twind/css'
import A from "./a";

//
const ul = css`
  padding-inline-start: 8px;
  padding-inline-end: 32px;
  width: 200px;
`

//
export function Menu() {
  function onClick(e: Event) {
    route("/hello/clicked", true);
  }

  return (
    <ul tw={ul}>
      <A href="/hello">Hello</A>
      <A href="/hello/abc">Hello ABC</A>
      <A href="/hello/clicked" onClick={onClick}>Click me!</A>

      <A href="/lifecycle">Life Cycle</A>
      <A href="/todo">ToDo</A>

      <A href="/chart">Chart</A>
      <A href="/draganddrop">Drag and Drop</A>
    </ul>
  );
}
