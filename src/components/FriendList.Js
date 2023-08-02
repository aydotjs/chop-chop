import Friends from "./Friends";

export default function FriendList({ friends, onSelectedFriends, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friends
          friend={friend}
          key={friend.id}
          onSelectedFriends={onSelectedFriends}
          selectedFriend = {selectedFriend}
        />
      ))}
    </ul>
  );
}
