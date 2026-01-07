import React from "react";

interface Props {
  className: string;
}

// this works too
//export const Button = (props: Props) => {
export const Button = (props: { className: string}) => {
  return <button className={props.className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
