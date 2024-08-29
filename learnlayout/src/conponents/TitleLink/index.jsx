import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink = ({ isHighLight, title, link }) => {
  if (!link) {
    return (
      <div
        className={`${isHighLight ? "text-primaryAccent" : "text-primaryTitle "}`}>
        {title}
      </div>
    );
  }

  return (
    <div
      className={`${isHighLight ? "text-primaryAccent" : "text-primaryTitle "}`}
    >
      <a href={link} target="_blank">
        {title}
        <FontAwesomeIcon
          className={`${isHighLight ? "translate-x-1 -translate-y-1" : ""
            } duration-300 ease-out -rotate-45 text-sm`}
          icon={faArrowRight}
        />
      </a>
    </div>
  );
};

export default TitleLink;
