import Friends from "./Friends";

export default function FriendList({ friends, onSelectedFriends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          onSelectedFriends={onSelectedFriends}
        />
      ))}
    </ul>
  );
}
