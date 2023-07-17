import { BiPhoneCall } from "react-icons/bi";
import { SiZalo } from "react-icons/si";
import { useData } from "../../../Context/DataProviders";
function Hotline() {
  const { ContactData } = useData();
  return (
    <div className="fixed bottom-7 right-10 z-20 box-border flex flex-col gap-5">
      <div className="">
        <a href={`https://zalo.me/${ContactData.phone} `} target="_blank">
          <SiZalo className="text-white bg-blue-500 h-16 w-16 p-3 rounded-full" />
        </a>
      </div>
      <div className="flex items-center">
        <a href={`tel:${ContactData.phone}`} target="_blank">
          <div className="h-16 w-16 call-animation">
            <BiPhoneCall className="text-white text-[40px]" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Hotline;
