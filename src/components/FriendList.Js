import Friends from "./Friends";
export default function FriendList() {
    return (
      <ul>
        {initialFriends.map((friend) => (
          <Friends friend={friend} key={friend.id} />
        ))}
      </ul>
    );
  }