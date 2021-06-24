import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go to the market to get this work done"
    },
    {
      sno: 2,
      title: "Go to Lab",
      desc: "You need to go to the Lab to get this work done2"
    },
    {
      sno: 3,
      title: "Go to School",
      desc: "You need to go to the School to get this work done3"
    }
  ]
  return (
    <>
      <Header title="My Header component" searchBar={true} />
      <Todos todos={todos} />
      <Footer/>
    </>
  );
}

export default App;
