import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import EditTutorial from "./EditTutorial";
import { useState } from "react";

const Tutorial = ({ tutorials, deleteTutorial, editTutorial }) => {
  const [editedItem, setEditedItem] = useState("");
  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr className="text-success">
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {tutorials?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <th>{title}</th>
                <th>{description}</th>
                <td className="text-center">
                  <FaEdit
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    size={20}
                    className="me-3 text-warning cursor-pointer"
                    // onClick={() => editTutorial(id, title, desc)}
                    onClick={() => setEditedItem(item)}
                  />
                  <AiFillDelete
                    size={22}
                    className="text-danger cursor-pointer"
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditTutorial editTutorial={editTutorial} editedItem={editedItem} />
    </div>
  );
};
export default Tutorial;
