import { EncryptedIcon, GeneralIcon } from "./assets/icons";
import ChatList from "./components/chat-list";
import Header from "./components/header";
import SearchPanel from "./components/search-panel";

function App() {
  return (
    <div className="flex h-screen bg-[#f0f2f5]">
      <div className="w-96 flex-shrink-0 flex flex-col">
        <Header />
        <SearchPanel />
        <ChatList />
      </div>
      <div className="relative flex-1 flex flex-col items-center justify-center border-b-[6px] border-[#43c960]">
        <GeneralIcon />
        <div className="pt-8 text-center">
          <h1 className="text-4xl font-light text-gray-900">Whatsapp Web</h1>
          <p className="text-sm text-gray-900 mt-4">
            Send and receive messages without keeping your phone online. <br />{" "}
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
        <div className=" absolute bottom-10 mt-10 flex items-center space-x-2 text-[#8696a0]">
          <EncryptedIcon />
          <p className="text-sm font-medium">End-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}

export default App;
