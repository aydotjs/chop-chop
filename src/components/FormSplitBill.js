import Button from "./Button";
export default function FormSplitBill({friend}) {
    return (
      <form className="form-split-bill">
        <h2>Split a bill with {friend.name}</h2>
        <label>💸Bill Value</label>
        <input type="text" />
        <label>🧑Your expense</label>
        <input type="text" />
        <label>🧑‍🦰{`${friend.name}'s`} expense</label>
        <input type="text" disabled />
        <label>🤔Whos's paying</label>
        <select>
          <option>You</option>
          <option>{`${friend.name}`}</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    );
  }