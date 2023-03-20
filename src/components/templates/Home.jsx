import DefaultTemplate from "../organisms/DefaultTemplate";
import MainContent from "../molecules/MainContent";

const Home = () => {
  return (
    <DefaultTemplate title="TaskTracker">
      <MainContent />
    </DefaultTemplate>
  );
};

export default Home;
