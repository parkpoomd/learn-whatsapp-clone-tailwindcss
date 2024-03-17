import { chatData } from "../chat-data";

function Chat({ name, message, date, seen, src }) {
  return (
    <div className="cursor-pointer bg-white hover:bg-[#f5f6f6] py-3">
      <img
        src={src}
        alt={name}
        className="mx-3 h-12 w-12 rounded-full object-cover"
      />
    </div>
  );
}

export default function ChatList(props) {
  return (
    <div className="flex-1 overflow-y-auto">
      {chatData.map((item, index) => (
        <Chat
          key={index}
          src={item.src}
          date={item.date}
          message={item.message}
          name={item.name}
          seen={item.seen}
        />
      ))}
    </div>
  );
}
