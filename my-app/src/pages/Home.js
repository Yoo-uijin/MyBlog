import Header from "../components/Header";
import Phrase from "../components/Phrase";
import { phraseList } from "../util/phrases";

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Phrase phraseList={phraseList} />
    </div>
  );
};

export default Home;
