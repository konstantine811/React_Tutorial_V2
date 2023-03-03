let count = 0;
const Simple = ({ parentCount }) => {
  count++;
  return (
    <div>
      <div className="text-2xl">Rerender simple : {count}</div>
      <div className="text-sm">Count prop from parent: {parentCount}</div>
    </div>
  );
};

export default Simple;
