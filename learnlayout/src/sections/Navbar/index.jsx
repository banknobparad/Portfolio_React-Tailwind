import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4 font-semibold">
      <div>
        <FontAwesomeIcon className="mr-2" icon={faArrowRight} /> About
      </div>
      <div>Project</div>
      <div>Article</div>
      <div>Certification</div>
    </div>
  );
};

export default Navbar;
