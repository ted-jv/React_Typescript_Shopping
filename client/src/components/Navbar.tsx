import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
        </ul>
      </nav>
      <button>쇼핑 카트</button>
    </div>
  );
};

export default Navbar;
