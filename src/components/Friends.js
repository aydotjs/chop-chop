import Button from "./Button";

export default function Friends({ friend, onSelectedFriends }) {
    return (
      <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you 💲{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance < 0 && (
          <p className="red">
            you owe {friend.name} 💲{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>you are even with {friend.name}</p>}
        <Button onClick={()=>{onSelectedFriends(friend)}}>Select</Button>
      </li>
    );
  }