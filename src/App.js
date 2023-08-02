import { useState } from "react";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import AddFriendForm from "./components/AddFriendForm";
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
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleDisplaySplitForm(friend) {
    setSelectedFriend((selectedFriend) => friend);
  }
  function handleDisplayAddForm() {
    setShowAddFriendForm((show) => !show);
  }
  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectedFriends={handleDisplaySplitForm}
        />
        {showAddFriendForm && <AddFriendForm onAddFriend={handleAddFriends} />}
        <Button onClick={handleDisplayAddForm}>
          {showAddFriendForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend} />}
    </div>
  );
}
