export interface HelloProps {
  name: string;
}

const Hello = ({ name }: HelloProps) => <div>Hello {name}</div>;

export default Hello;
