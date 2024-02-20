import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";
import { db } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function CreatePage() {
  const [user, loading] = useAuthState(auth);
  
  useEffect(() => {

      fetch(`https://api.github.com/user/${auth.currentUser.providerData[0].uid}`, {
        method: "GET",
        headers: {
          'Authorization': 'Basic ' + btoa(`bb86a00d59b7ecf4fcda` + ':' + `a18f8f792049c9e824fc1e712f7a2d780007f655`)
        }
      })
    .then(response => response.json())
    .then(result => setInputs((prev) => ({ ...prev, authorHandle: result.login})))
    .catch(err => console.log(err));

  },[])

  const date = new Date();

  const [inputs, setInputs] = useState({
    authorName: user.displayName,
    userId: user.uid,
    userPhoto: user.photoURL,
    FavBy: [],
    uploadDate: date.toString().slice(4, 15),
  });

  const navigate = useNavigate();
  
  if (!user) {
    navigate(`/`);
  }

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    

    db.collection("projects").add(inputs);

    navigate("/projects");
  };

  return (
    <Form
      inputs={inputs}
      setInputs={setInputs}
      inputHandler={inputHandler}
      submitHandler={submitHandler}
      task="Submit"
    />
  );
}
export default CreatePage;
