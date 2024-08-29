import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../contents/header";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-4xl font-semibold text-primaryAccent">
        {data.name}
      </div>
      <div className="font-semibold text-primaryTitle">{data.title}</div>
      <div className="w-5/6 text-primaryContent">{data.caption}</div>
      <div className="mt-3">
        <a href={data.fileExam} target="_blank">
          <span className=" rounded-md bg-primaryAccent text-primaryTitle py-2 px-4">
            <span className="-rotate-90 inline-block mr-2 text-sm">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowDown} />
            </span>
            {data.btnTextView}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
