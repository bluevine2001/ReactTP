import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header>
      <div>
        <h2>My-App</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
