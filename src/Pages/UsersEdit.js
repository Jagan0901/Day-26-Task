import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../api";
import { Loading } from "../Components/Loading";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function UsersEdit() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const getUser = () => {
    fetch(`${API}/users/${userId}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  useEffect(() => getUser());

  return user ? <EditForm user={user} /> : <Loading />;
}

function EditForm({ user }) {
  const [name, setName] = useState(user.name);
  const [species, setSpecies] = useState(user.species);
  const [pic, setPic] = useState(user.pic);
  const [familyName, setFamilyName] = useState(user.familyName);
  const [showName, setShowName] = useState(user.showName);
  const [summary, setSummary] = useState(user.summary);

  const navigate = useNavigate();

  const editUser = () => {
    const updatedUser = {
      name: name,
      species: species,
      pic: pic,
      familyName: familyName,
      showName: showName,
      summary: summary,
    };

    fetch(`${API}/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
  };
  return (
    <div className="add-user">
      <TextField
        id="outlined-basic"
        label="User name"
        variant="outlined"
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
        placeholder="Enter a name"
      />

      <TextField
        id="outlined-basic"
        label="User species"
        variant="outlined"
        type="text"
        onChange={(event) => setSpecies(event.target.value)}
        value={species}
        placeholder="Enter a species type"
      />

      <TextField
        id="outlined-basic"
        label="User pic"
        variant="outlined"
        type="text"
        onChange={(event) => setPic(event.target.value)}
        value={pic}
        placeholder="Enter a pic"
      />

      <TextField
        id="outlined-basic"
        label="User Family name"
        variant="outlined"
        type="text"
        onChange={(event) => setFamilyName(event.target.value)}
        value={familyName}
        placeholder="Enter a Family name"
      />

      <TextField
        id="outlined-basic"
        label="User Show Name"
        variant="outlined"
        type="text"
        onChange={(event) => setShowName(event.target.value)}
        value={showName}
        placeholder="Enter a Show Name"
      />

      <TextField
        id="outlined-basic"
        label="User Summary"
        variant="outlined"
        type="text"
        onChange={(event) => setSummary(event.target.value)}
        value={summary}
        placeholder="Enter a Summary"
      />

      <Button variant="contained" color="success" onClick={editUser}>
        SAVE
      </Button>
    </div>
  );
}
