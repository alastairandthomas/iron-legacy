import { useState } from "react";
import { useNavigate } from "react-router-dom";


import Form from '../components/Form';
import { db } from "../firebase";

function CreatePage() {
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //========== HERE THE AXIOS THAT PUSH THE NEW PROJECT

    db.collection('projects')
      .add(inputs);

    navigate('/projects');
  };

  return (
    <Form inputs={inputs} inputHandler={inputHandler} submitHandler={submitHandler} />
  )
  }
export default CreatePage;

// <div>
//     create CreatePage
//     <form onSubmit={submitHandler}>
//     <label className="assignee_label">
//     Project Title
//     <input
//       className="assignee_input"
//       name="title"
//       type="text"
//       value={inputs.title || ""}
//       onChange={inputHandler}
//     />
//   </label>
//   <label className="assignee_label">
//     Description
//     <input
//       className="assignee_input"
//       name="description"
//       type="text"
//       value={inputs.description || ""}
//       onChange={inputHandler}
//     />
//   </label>
//   <label className="assignee_label">
//     image
//     <input
//       className="assignee_input"
//       name="image"
//       type="text"
//       value={inputs.image || ""}
//       onChange={inputHandler}
//     />
//   </label>
//   <label className="assignee_label">
//     Author
//     <input
//       className="assignee_input"
//       name="author"
//       type="text"
//       value={inputs.author || ""}
//       onChange={inputHandler}
//     />
//   </label>
//     <button type="submit" className="primbtn-privaeBtn">Submit Project</button>
//     </form>
