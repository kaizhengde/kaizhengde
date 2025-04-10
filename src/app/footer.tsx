"use client";

import Items from "@/components/item/items";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  return (
    <section className="content padding-y-0">
      <div className="layer-text background-none">
        {isHomeRoute ? (
          <Items 
            itemProps={[
              { type: "h5", label: "Last Update Apr 25" },
            ]}
          />
        ) : (
          <Items 
            itemProps={[
              { type: "h5", label: "Back", back: true, to: "/" },
              { type: "h5", label: "Last Update Apr 25" },
            ]}
          />
        )}
      </div>
    </section>
  );
};