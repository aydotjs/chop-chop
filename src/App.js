import { useState } from "react";
import FriendList from "./components/FriendList.Js";

const initialFriends = [
  {
    id: 118836,
    name: "Boye",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Tayo",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  function handleDisplayAddForm() {
    setShowAddFriendForm((show) => !show);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriendForm && <AddFriendForm />}
        <Button onClick={handleDisplayAddForm}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}





function AddFriendForm() {
  return (
    <form className="form-add-friend">
      <label>🧑🏻‍❤️‍🧑🏽Add Friend</label>
      <input type="text" />
      <label>🖼️Image URL</label>
      <input type="text" />
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label>💸Bill Value</label>
      <input type="text" />
      <label>🧑Your expense</label>
      <input type="text" />
      <label>🧑‍🦰Friend's expense</label>
      <input type="text" disabled />
      <label>🤔Whos's paying</label>
      <select>
        <option>You</option>
        <option>Your friend</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
