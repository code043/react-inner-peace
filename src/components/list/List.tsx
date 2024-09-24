import style from "./List.module.css";
const items = [
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const List = ({ styleList }: { styleList: string }) => {
  return (
    <ul className={style[styleList]}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <div className="underline"></div>
            <h4>{item.content}</h4>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
