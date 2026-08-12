import Navbar from "./components/layout/navbar";

function App() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
        "
      >
        <h1 className="display">
          New Feature Next...
        </h1>
      </main>
    </>
  );
}

export default App;