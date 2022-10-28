import { Link } from 'preact-router/match';
import { css } from 'twind/css'

//
const li = css`
  height: 26px;
  list-style-type: none;
`

const selected = css`
a {
  color: white;
  background-color: rgb(88 81 255);
}
`

const a = css`
  text-decoration: none;
  padding: 0.125rem 0.25rem;
`

//
interface Props {
  href: string;
  children: HTMLElement | string;
  selected?: boolean;
  onClick?: (e: Event) => void;
}

export default function A(props: Props) {
  return (
    <li tw={props.href === location?.pathname ? selected : li}>
      <Link href={props.href} onClick={props.onClick} tw={a}>
        {props.children}
      </Link>
    </li>
  );
}
