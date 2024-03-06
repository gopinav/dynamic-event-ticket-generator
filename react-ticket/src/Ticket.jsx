import { BuilderTicketLogo } from "./assets/BuilderLogo";

const padStartWithZero = (num = 0) => {
  return num.toString().padStart(7, "0");
};

export const Ticket = (props) => {
  const primaryColor = props.ticketInfo.primaryColorHex;
  const secondaryColor = props.ticketInfo.secondaryColorHex;
  const isPrimaryColorDark = props.ticketInfo.isPrimaryColorDark;
  const isSecondaryColorDark = props.ticketInfo.isSecondaryColorDark;
  const favicon = props.ticketInfo.url;
  const companyName = props.ticketInfo.domain;
  const ticketNo = padStartWithZero("12345");

  return (
    <div className="w-[600px]">
      <div className="flex">
        <div
          id="left"
          style={{
            backgroundColor: primaryColor,
            color: isPrimaryColorDark ? "white" : "black",
          }}
          className="rounded-l-lg border-r-0 pt-8 pb-4"
        >
          <div className="flex justify-between items-center px-12 mb-4">
            <BuilderTicketLogo isDark={isPrimaryColorDark} />
            <span
              style={{
                color: isPrimaryColorDark ? "white" : "black",
              }}
              className="text-sm"
            >
              An AI launch event <strong>accelerate.builder.io</strong>
            </span>
          </div>
          <div
            style={{
              color: isPrimaryColorDark ? "white" : "black",
            }}
            className="text-6xl px-12 mb-2"
          >
            Accelerate &gt;&gt;&gt;
          </div>
          <div className="flex items-center px-12 mb-4">
            <span className="text-lg">March 13, 2024</span>
            <span
              style={{
                color: secondaryColor,
              }}
              className="text-lg mx-3"
            >
              /
            </span>
            <span className="text-lg">10 AM PST</span>
          </div>
          <div
            style={{
              backgroundColor: secondaryColor,
              color: isSecondaryColorDark ? "white" : "black",
            }}
            className="w-4/5 flex items-center px-12 py-1"
          >
            <div className="bg-white rounded-full border border-gray-400">
              <img
                className="object-contain rounded-full"
                src={favicon}
                alt={companyName}
                width={50}
                height={50}
              />
            </div>
            <div className="pl-3">ADMIT ONE</div>
          </div>
        </div>
        <div
          style={{
            borderLeft: `8px dashed ${primaryColor}`,
          }}
          className="bg-white py-8 px-4 text-black text-center [writing-mode:vertical-rl] [text-orientation:mixed]"
        >
          <div className="text-xs">Ticket No.</div>
          <span
            style={{
              borderColor: secondaryColor,
            }}
            className={`border-l-4 text-2xl`}
          >
            #{ticketNo}
          </span>
        </div>
      </div>
    </div>
  );
};
