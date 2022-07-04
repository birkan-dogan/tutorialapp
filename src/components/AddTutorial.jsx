import { useState } from "react";

const AddTutorial = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-primary">Add Your Tutorial</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Your Description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddTutorial;
