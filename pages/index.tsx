import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const Home = () => {
  return <Range defaultValue={[20, 80]} pushable={10} />;
};

export default Home;
