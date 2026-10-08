import "./App.css";
import { Counter } from "./components/Counter";
import { HabitCard } from "./components/HabitCard";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Counter />

      <HabitCard icon={"💧"} name={"Beber 2l de água"} />
    </>
  );
}

export default App;
