import {
  CommunityIcon,
  MenuIcon,
  NewChatIcon,
  StatusIcon,
} from "../assets/icons";

const iconData = [
  { icon: <CommunityIcon />, label: "Community chat" },
  { icon: <StatusIcon />, label: "Status" },
  { icon: <NewChatIcon />, label: "New Chat" },
  { icon: <MenuIcon />, label: "Menu" },
];

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div>
        <img
          className="h-10 w-10 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwZmVtYWxlJTIwaGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Image profile"
        />
      </div>
      <div>
        <ul className="flex items-center space-x-6 text-[#54656f]">
          {iconData.map((item, index) => (
            <li key={index}>{item.icon}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
