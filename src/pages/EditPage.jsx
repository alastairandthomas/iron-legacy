import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import Form from "../components/Form";

function EditPage() {
  const [user, loading] = useAuthState(auth);

  const [inputs, setInputs] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  if (!user) {
    navigate(`/`);
  }

  useEffect(() => {
    db
      .collection("projects")
      .doc(id)
      .onSnapshot((project) => setInputs(project.data()));
  }, []);

  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    db
      .collection("projects")
      .doc(id)
      .update(inputs);

    navigate(`/projectdetails/${id}`);
  };

  return (
    <Form
      inputs={inputs}
      setInputs={setInputs}
      inputHandler={inputHandler}
      submitHandler={submitHandler}
      navigate={navigate}
      task="Edit"
    />
  );
}
export default EditPage;

