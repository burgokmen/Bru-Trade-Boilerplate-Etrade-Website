import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const TestPage = () => {
  return (
    <div>
      TestPage
      <FontAwesomeIcon icon={faAngleRight} className="text-neutral text-base" />
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-secondary text-base"
      />
    </div>
  );
};

export default TestPage;
