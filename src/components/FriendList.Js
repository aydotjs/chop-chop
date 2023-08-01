import Friends from "./Friends";
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

export default function FriendList() {
    return (
      <ul>
        {initialFriends.map((friend) => (
          <Friends friend={friend} key={friend.id} />
        ))}
      </ul>
    );
  }