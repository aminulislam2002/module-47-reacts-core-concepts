import logo from "./logo.svg";
import "./App.css";

const singers = [
  { name: "AAA", id: 111 },
  { name: "BBB", id: 222 },
  { name: "CCC", id: 333 },
  { name: "DDD", id: 444 },
];

function App() {
  const names = ["Aminul Islam", "Tamima Ema", "Mithun Bepari", "Miraj Mia"];
  const departments = ["CST", "Civil", "Mechanical", "Electrical", "Merin", "Electronic"];
  return (
    <div className="App">
      {departments.map((department) => (
        <Person department={department}></Person>
      ))}

      {names.map((name) => (
        <Person name={name}></Person>
      ))}

      {singers.map((singer) => (
        <Singer name={singer.name} id={singer.id}></Singer>
      ))}

      {/* <Person department="CST" roll="01" name={name[0]}></Person>
      <Person department="Civil" roll="02" name={name[1]}></Person>
      <Person department="Electrical" roll="03" name={name[2]}></Person>
      <Person department="Mecarnical" roll="04" name={name[3]}></Person> */}
    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <h3>{props.department}</h3>
      <p>{props.roll}</p>
    </div>
  );
}

function Singer(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.id}</p>
    </div>
  );
}

export default App;
