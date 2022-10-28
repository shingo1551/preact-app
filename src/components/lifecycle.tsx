import { Component } from "preact";
import { css } from 'twind/css'

//
const button = css`
  @apply text-white bg-blue-500 p-2 m-2 rounded-lg;
`

//
interface P {
  count: number;
}

interface S {
  count: number;
}

export class Lifecycle extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { count: props.count };
  }

  componentWillMount() {
    console.log(1, "componentWillMount");
  }

  componentDidMount() {
    console.log(2, "componentDidMount");
  }

  componentWillUnmount() {
    console.log(3, "componentWillUnmount");
  }

  componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
    console.log(4, "componentWillReceiveProps", nextProps, nextContext);
  }

  shouldComponentUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ) {
    console.log(5, "shouldComponentUpdate", nextProps, nextState, nextContext);
    return this.state.count !== nextState.count;
  }

  componentWillUpdate(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ) {
    console.log(6, "componentWillUpdate", nextProps, nextState, nextContext);
  }

  componentDidUpdate(
    previousProps: Readonly<P>,
    previousState: Readonly<S>,
    snapshot: any,
  ) {
    console.log(
      7,
      "componentDidUpdate",
      previousProps,
      previousState,
      snapshot,
    );
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>Lifecycle</h1>
        <button tw={button} onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>
          Counter
        </button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
