import { useAuth } from "../admin/auth";
import logo from "../images/logo.jpg";

function Header() {
  const auth = useAuth();

  return (
    <header>
      <div className="header-2">
        <div id="menu" className="fas fa-bars"></div>
        <a href="/">
          <img src={logo} alt="" href="/" />
        </a>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/gallery">gallery</a>
            </li>
            <li>
              <a href="/courses">courses</a>
            </li>
            <li>
              <a href="/lectures">lectures</a>
            </li>
            <li>
              <a href="/books">books</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
            <li>
              <a href="/quranquiz">Quiz</a>
            </li>
            {auth.user ? null : (
              <li>
                <a href="/login">login</a>{" "}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
