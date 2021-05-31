import PrevPageBtn from "../buttons/prev-page-button";
import NextPageBtn from "../buttons/next-page-button";
import SearchBox from "./search-box";
import LibraryTabBtn from "./library-tab-btn";

import styles from "./topnav.module.css";
import { Route } from "react-router";
import Login from "../../pages/login";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Topnav({ search = false, tabButtons = false }) {
  return (
    <nav className={styles.Topnav}>
      <div>
        <span>
          <PrevPageBtn />
          <NextPageBtn />
          {search ? <SearchBox /> : ""}
          {tabButtons ? <LibraryTabBtn /> : ""}
        </span>
        <span>
          <Link to="/login">
            <Button className={styles.ProfileBtn} href="">
              Login
            </Button>
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Topnav;
