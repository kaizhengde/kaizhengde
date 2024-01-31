import Items from '@/components/item/items';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';

  return (
    <section className="content padding-y-0">
      <div className="layer-text background-none">
        {isHomeRoute &&
          <Items itemProps={[
            { type: "h3", label: "Kai Zheng" },
          ]} />
        }
        {!isHomeRoute &&
          <Items itemProps={[
            { type: "h3", label: "Kai Zheng", onClick: () => navigate("/") },
            { type: "h3", label: `${title}`, grey: true }
          ]} />
        }
      </div>
    </section>
  )
}

export default Header;
