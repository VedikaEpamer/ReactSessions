interface ChildProps {
  name: string;
  age: number;
  isStudent?: boolean;
  subject?: string;
}

const Child = ({ name, age, isStudent = true, subject }: ChildProps) => {
  return (
    <>
      <div>Child</div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Is Student: {isStudent ? "Yes" : "No"}</div>
    </>
  );
};

export default Child;
