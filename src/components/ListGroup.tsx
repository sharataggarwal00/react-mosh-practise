import { useState } from "react";

interface ListProps {
  heading: string,
  items: string[],
  onSelectItem: (item: string) => void,
}

export default function ListGroup(props: ListProps) {

  const venues : string[] = props.items;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{props.heading}</h1>
      {
        (venues.length)
        ? <ul className="list-group">
            {venues.map((item, index) => (
              <li
                key={item}
                className={ selectedIndex === index ? "list-group-item active" : "list-group-item"} 
                onClick={() => {
                  setSelectedIndex(index);
                  props.onSelectItem(item);
                }}
              >
                {item}
              </li>
            ))};
            </ul>
        : <p>No Items Found</p>
      }
    </>
  )
}
