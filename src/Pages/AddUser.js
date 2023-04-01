import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [pic, setPic] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [showName, setShowName] = useState("");
  const [summary, setSummary] = useState("");

  const navigate = useNavigate();

  const addUser = () => {
    const addUser = {
      id: id,
      name: name,
      species: species,
      pic: pic,
      familyName: familyName,
      showName: showName,
      summary: summary,
    };

    fetch(`${API}/users`, {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/users"));
  };
  return (
    <div className="add-user">
      <TextField
        id="outlined-basic"
        label="User id"
        variant="outlined"
        type="number"
        onChange={(event) => setId(event.target.value)}
        placeholder="Enter any id"
      />

      <TextField
        id="outlined-basic"
        label="User name"
        variant="outlined"
        type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter a name"
      />

      <TextField
        id="outlined-basic"
        label="User species"
        variant="outlined"
        type="text"
        onChange={(event) => setSpecies(event.target.value)}
        placeholder="Enter a species type"
      />

      <TextField
        id="outlined-basic"
        label="User pic"
        variant="outlined"
        type="text"
        onChange={(event) => setPic(event.target.value)}
        placeholder="Enter a pic"
      />

      <TextField
        id="outlined-basic"
        label="User Family name"
        variant="outlined"
        type="text"
        onChange={(event) => setFamilyName(event.target.value)}
        placeholder="Enter a Family name"
      />

      <TextField
        id="outlined-basic"
        label="User Show Name"
        variant="outlined"
        type="text"
        onChange={(event) => setShowName(event.target.value)}
        placeholder="Enter a Show Name"
      />

      <TextField
        id="outlined-basic"
        label="User Summary"
        variant="outlined"
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter a Summary"
      />

      <Button variant="contained" color="primary" onClick={addUser}>
        Add User
      </Button>
    </div>
  );
}
