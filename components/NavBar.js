import Link from 'next/link';
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="https://www.google.co.in/webhp">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
