import { useState } from "react";
import { Ticket } from "./Ticket";

export default function App() {
  const [domain, setDomain] = useState("builder.io");
  const [ticketInfo, setTicketInfo] = useState({});
  const fetchTicketInfo = async () => {
    const response = await fetch(
      `http://localhost:3000/ticket?domain=${domain}`
    );
    const data = await response.json();
    setTicketInfo(data);
  };
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <input
        type="text"
        className="p-2 rounded mb-4"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchTicketInfo()}
      />
      {!!ticketInfo.url && <Ticket ticketInfo={ticketInfo} />}
    </div>
  );
}
