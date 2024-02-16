import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Form from '../components/Form';

function EditPage() {

    const [inputs, setInputs] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    const API_URL = "https://ironhackprojects-backend.adaptable.app";

    useEffect(() => {

        axios
            .get(`${API_URL}/projects/${id}`)
            .then(response => setInputs(response.data))
            .catch(err => console.log(err));

    },[])
  



  

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //========== HERE THE AXIOS THAT PUSH THE NEW PROJECT

    axios.put(`${API_URL}/projects/${id}`, inputs);
    console.log(id)
    navigate(`/projectdetails/${id}`);
    setInputs({});
  };

  return (
    <Form inputs={inputs} inputHandler={inputHandler} submitHandler={submitHandler} navigate={navigate}/>
  )
  }
export default EditPage;

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
