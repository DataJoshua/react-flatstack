import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <Header projectName="TaskTracker" />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;