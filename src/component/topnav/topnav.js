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
import {useCookies} from 'react-cookie';

function Topnav({ search = false, tabButtons = false }) {
  const [cookie, removeCookie, setCookie] = useCookies(["userToken", "user"]);
  console.log(cookie)
  return (
    <nav className={styles.Topnav}>
      <div>
        <span>
          <PrevPageBtn />
          <NextPageBtn />
          {search ? <SearchBox /> : ""}
          {tabButtons ? <LibraryTabBtn /> : ""}
        </span>
        { !cookie.userToken && 
        <span>
          <Link to="/login">
            <Button className={styles.ProfileBtn} href="" style={{ marginRight: '10px' }}>
              Đăng nhập
            </Button>
          </Link>
          <Link to="/register">
            <Button className={styles.ProfileBtn} href="">
              Đăng kí
            </Button>
          </Link>
        </span>
}
{ cookie.userToken && 
  <span>
            <Button onClick={() => setCookie("userToken", "", {path: '/'})} className={styles.ProfileBtn} href="" style={{ marginRight: '10px' }}>
              Đăng xuất
            </Button>
        </span>
        }
      </div>
    </nav>
  );
}

export default Topnav;
