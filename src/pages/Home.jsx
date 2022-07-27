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
  // console.log(tutorials);

  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials(); // read data after creating item to update Tutorial component
  };

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials(); // read api after deleting item to update Tutorial component
  };

  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({
        title: title,
        description: desc,
      }));
    try {
      await axios.put(`${url}/${id}`, filtered[0]);
    } catch (error) {
      console.log(error);
    }
    getTutorials(); // read api after editing item to update Tutorial component
  };
  return (
    <div>
      <AddTutorial addTutorial={addTutorial} />
      <Tutorial
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </div>
  );
};
export default Home;
