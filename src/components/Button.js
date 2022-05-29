export const Button = ({ handleClick, children }) => {
  console.log("Rendering button - ", children);
  return <Button onClick={handleClick}>{children}</Button>;
};
