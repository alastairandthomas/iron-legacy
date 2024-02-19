import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";
import { db } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function CreatePage() {
  const [user, loading] = useAuthState(auth);

  const date = new Date();

  const [inputs, setInputs] = useState({
    author: user.displayName,
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
      inputHandler={inputHandler}
      submitHandler={submitHandler}
      task="Submit"
    />
  );
}
export default CreatePage;
