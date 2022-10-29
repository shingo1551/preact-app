import { Component, ComponentChildren } from "preact";
import Sortable from 'sortablejs';

interface Props {
  titleText: string;
  group: string;
  children: ComponentChildren;
}

export class SimpleList extends Component<Props> {
  ul: HTMLUListElement | undefined | null;

  componentDidMount() {
    Sortable.create(this.ul as HTMLUListElement, {
      animation: 150,
      group: this.props.group,
    });
  }

  render() {
    return (
      <div tw="m-2" >
        <h4>{this.props.titleText}</h4>
        <ul tw="m-2" ref={(elm) => this.ul = elm}>
          {this.props.children}
        </ul>
      </div >
    );
  }
}
