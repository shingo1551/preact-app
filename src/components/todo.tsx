import { Component } from "preact";
import CheckToDo from "./check-todo";
import { css } from 'twind/css'

const todo = css`
button {
  color: white;
  background-color: #60a5fa;
  padding: 0.375rem;
  border-radius: 0.375rem;
  border: none;
  margin: 4px;
}

button:disabled {
  background-color: gray;
}
`

const ul = css`
  padding: 0;
  margin: 0 0 9px 0;
  list-style: none;
`

//
interface IToDo {
  done: boolean;
  text: string;
}

interface State {
  count: number;
  list: IToDo[];
  disabled: boolean;
}

export class ToDo extends Component<{}, State> {
  ul: HTMLUListElement | undefined | null;
  input!: HTMLInputElement;

  constructor() {
    super();

    const list = [
      { text: "lean TypeScript", done: true },
      { text: "build Stencil App", done: false },
    ];
    this.state = { count: 1, list: list, disabled: true };
  }

  count = (prev: Readonly<State>) =>
    prev.list.reduce((sum, todo) => sum + (todo.done ? 0 : 1), 0);

  changeState = () =>
    this.setState((prev) => ({
      disabled: !this.input.value,
      list: prev.list,
      count: this.count(prev),
    }));

  onPurge = (ev: Event) => {
    ev.preventDefault();

    this.setState((prev) => ({
      disabled: !this.input.value,
      list: prev.list.filter((todo) => !todo.done),
      count: this.count(prev),
    }));
  };

  onToDo = (n: number) => {
    this.state.list[n].done = !this.state.list[n].done;
    this.changeState();
  };

  onAdd = (ev: MouseEvent) => {
    ev.preventDefault();

    this.state.list.push({ text: this.input.value, done: false });
    this.input.value = "";
    this.changeState();
  };

  onInput = () => {
    this.changeState();
  };

  render() {
    return (
      <div >
        <h2>Todo</h2>
        <Purge
          count={this.state.count}
          list={this.state.list}
          onClick={this.onPurge}
        />
        <List
          count={this.state.count}
          list={this.state.list}
          onClick={this.onToDo}
        />
        <Form comp={this} />
      </div>
    );
  }
}

//
interface PurgeProps {
  count: number;
  list: IToDo[];
  onClick: (ev: Event) => void;
}

const Purge = (props: PurgeProps) => (
  <span tw={todo}>
    {props.count} of {props.list.length} remaining
    <button onClick={props.onClick}>
      purge
    </button>
  </span>
);

//
interface ListProps {
  count: number;
  list: IToDo[];
  onClick: (n: number) => void;
}

const List = (props: ListProps) => (
  <ul tw={ul}>
    {props.list.map((todo, n) => (
      <CheckToDo
        key={n}
        done={todo.done}
        text={todo.text}
        n={n}
        onClick={props.onClick}
      />
    ))}
  </ul>
);

//
const Form = ({ comp }: { comp: ToDo }) => (
  <form tw={todo} >
    <input
      type="text"
      size={30}
      placeholder="add new todo here"
      ref={(el) => (comp.input = el as HTMLInputElement)}
      onInput={comp.onInput}
    />
    <button onClick={comp.onAdd} disabled={comp.state.disabled}>add</button>
  </form>
);
