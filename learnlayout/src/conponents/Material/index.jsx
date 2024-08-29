import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ isHighLight, icon, link }) => {
  return (

    <a
      href={link}
      target="__blank"
      className="hover:scale-110"
    >
      <FontAwesomeIcon
        className={` ${isHighLight ? "text-primaryAccent" : "text-primaryBase"
          }`}
        icon={icon}
      />
    </a>

  );
};

export default Material;
