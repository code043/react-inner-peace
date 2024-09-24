import style from "./Title.module.css";
type HeadingProp = {
  styleHeading: string;
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
};

const Title = ({ styleHeading, children, tag: Tag = "h1" }: HeadingProp) => {
  return <Tag className={style[styleHeading]}> {children}</Tag>;
};

export default Title;
