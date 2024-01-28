import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className="content">
      <div className="layer-text">
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
