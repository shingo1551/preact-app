import { SimpleList } from "../components/simple-list";

export function DragAngDrop(props: { path: string; }) {
  return (
    <div>
      <h1>Drag and Drop</h1>
      <SimpleList titleText="yet" group="g1">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </SimpleList>
      <SimpleList titleText="done" group="g1">
        <li>item 4</li>
        <li>item 5</li>
        <li>item 6</li>
      </SimpleList>
    </div>
  );
}
