import ListContent from './components/list-content.tsx';

const App = () => {
  return (
    <section className="section-content">
      <div className="div-layer-text">
        <ListContent title="Books 2023" listItems={["The Everything Store, Brad Stone", "The Way of the Superior Man, David Deida"]} />
      </div>
    </section>
  )
}

export default App;
