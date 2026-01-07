export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={1}
      // How do I figure out what type onChange expects?
      onChange={(event) => {}}

      // How do I get autocomplete with JSX?

    />
  );
};


type Example = React.FormEventHandler<HTMLDivElement> | undefined;