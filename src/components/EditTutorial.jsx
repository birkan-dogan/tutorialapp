import React, { useEffect } from "react";
import { useState } from "react";

const EditTutorial = ({ editTutorial, editedItem }) => {
  const { id, title: newTitle, description } = editedItem;
  const [title, setTitle] = useState(newTitle);
  const [desc, setDesc] = useState(description);
  const handleSave = (e) => {
    e.preventDefault();
    editTutorial(id, title, desc);
  };
  useEffect(() => {
    // componentDidUpdate to set new title and description
    setTitle(newTitle);
    setDesc(description);
  }, [newTitle, description]);
  return (
    <div className="modal" tabIndex={-1} id="edit-modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
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
              value={title || ""}
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
              value={desc || ""}
              required
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleSave}
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
