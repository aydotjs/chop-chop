import Friends from "./Friends";


export default function FriendList({friends}) {
    return (
      <ul>
        {friends.map((friend) => (
          <Friends friend={friend} key={friend.id} />
        ))}
      </ul>
    );
  }