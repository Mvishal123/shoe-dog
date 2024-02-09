import Navbar from "./components/navbar";
import Landing from "./sections/landing";

const App = () => {
  return (
    <div className="relative">
      <Navbar />

      <section>
        <Landing />
      </section>
    </div>
  );
};

export default App;
