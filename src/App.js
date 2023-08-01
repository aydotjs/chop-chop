import { useState } from "react";
import FriendList from "./components/FriendList";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import AddFriendForm from "./components/AddFriendForm";
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








