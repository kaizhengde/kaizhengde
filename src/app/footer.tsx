import Items from "@/components/item/items";

const Footer = () => {
  return (
    <section className="content padding-y-0">
      <div className="layer-text background-none">
        <Items itemProps={[
          { type: "h5", label: "Last Update Jan 24" },
          { type: "h5", label: "You Are Beautiful" }
        ]} />
      </div>
    </section>
  )
}

export default Footer;
