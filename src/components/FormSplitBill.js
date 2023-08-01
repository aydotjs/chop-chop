import Button from "./Button";
export default function FormSplitBill() {
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