import Items from "@/components/item/items";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';

  return (
    <section className="content padding-y-0">
      <div className="layer-text background-none">
        {isHomeRoute &&
          <Items itemProps={[
            { type: "h5", label: "Last Update Jan 24" },
            { type: "h5", label: "You Are Beautiful" }
          ]} />
        }
        {!isHomeRoute &&
          <Items itemProps={[
            { type: "h5", label: "Back", back: true, to: "/" },
            { type: "h5", label: "Last Update Jan 24" },
            { type: "h5", label: "You Are Beautiful" },
          ]} />
        }
      </div>
    </section>
  )
}

export default Footer;
