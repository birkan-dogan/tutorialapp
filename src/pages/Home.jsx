import AddTutorial from "../components/AddTutorial";
import Tutorial from "../components/Tutorial";
import axios from "axios";
import { useEffect, useState } from "react";
const url = "https://axios-example-cw.herokuapp.com/api/tutorials";
const Home = () => {
  const [tutorials, setTutorials] = useState();
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);
  console.log(tutorials);

  return (
    <div>
      <AddTutorial />
      <Tutorial tutorials={tutorials} />
    </div>
  );
};
export default Home;
