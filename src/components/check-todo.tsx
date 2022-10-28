import { PureComponent } from "preact/compat";
import { css } from 'twind/css'

const done = css`
  text-decoration: line-through;
  color: grey;
`

//
interface Props {
  done: boolean;
  text: string;
  n: number;
  onClick: (n: number) => void;
}

export default class CheckToDo extends PureComponent<Props> {
  componentWillMount() {
    console.log(1, "componentWillMount");
  }

  componentDidMount() {
    console.log(2, "componentDidMount");
  }

  componentWillUnmount() {
    console.log(3, "componentWillUnmount");
  }

  componentWillReceiveProps(nextProps: Readonly<Props>) {
    console.log(4, "componentWillReceiveProps", nextProps);
  }

  componentWillUpdate(nextProps: Readonly<Props>) {
    console.log(6, "componentWillUpdate", nextProps);
  }

  componentDidUpdate(previousProps: Readonly<Props>) {
    console.log(7, "componentDidUpdate", previousProps);
  }

  render() {
    console.log("render", this.props);

    const props = this.props;
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={props.done}
            onClick={() => props.onClick(props.n)}
          />
          <span tw={props.done && done}>{props.text}</span>
        </label>
      </li>
    );
  }
}
