import {
  faDiscord,
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="flex items-end gap-4 text-2xl">
      <div>
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryBase transition-all"
          icon={faGithub}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryBase transition-all"
          icon={faFacebook}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryBase transition-all"
          icon={faDiscord}
        />
      </div>
      <div>
        <FontAwesomeIcon
          className="hover:scale-125 hover:text-primaryBase transition-all"
          icon={faTwitter}
        />
      </div>
    </div>
  );
};

export default Contact;
