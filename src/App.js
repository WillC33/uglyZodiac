import './App.css';
import NightmareBdayPicker from "./NightmareBdayPicker";
import StarSignCard from "./StarSignCard";
import DateHeader from "./DateHeader";

function App() {
  return (
      <>
        <div className="container">
          <NightmareBdayPicker />
          <DateHeader />
          <StarSignCard />
        </div>
        <p>Thanks for viewing this experience in ugly UI and poor UX 🤮 🤮 🤮</p>
      </>
  );
}

export default App;
