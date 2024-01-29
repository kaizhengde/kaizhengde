import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="content padding-y-0">
      <div className="layer-text background-none">
        <h3>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Kai Zheng
          </Link>
        </h3>
      </div>
    </section>
  )
}

export default Header;
