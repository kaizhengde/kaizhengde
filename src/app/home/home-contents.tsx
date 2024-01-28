import ListContent from '@/components/list-content.tsx';

const HomeContents = () => {
  return (
    <section className="section-content">
      <div className="div-layer-text">
        <ListContent
          title="NICE BOOKS"
          listItems={[

          ]}
          footnote="currently reading"
        />

        <ListContent
          title="CURRENT FASCINATIONS"
          listItems={[
            "Yoga & Calisthenics",
            "Living with 100L space for all belongings",
            "Reading about and interacting with the world",
          ]}
        />

        <ListContent
          title="I LOOK UP TO"
          listItems={[
            "Helmut Schmidt",
            "Marcus Aurelius",
            "Viktor E. Frankl",
            "Eliud Kipchoge",
          ]}
        />

        <ListContent
          title="MY DONATIONS"
          listItems={[
            "Trees: 153",
            "Education: €25",
            "Ärzte ohne Grenzen, since 2022, €15/month",
            "Rewind University, since 2019, €5/month",
            "WWF Deutschland, since 2018, €5/month",
            "PETA Deutschland, 2017-2019, €5/month",
          ]}
        />

        <ListContent
          title="CONTACT"
          listItems={[
            <a href="mailto:kai@kaizheng.de">kai@kaizheng.de</a>,
          ]}
        />
      </div>
    </section>
  )
}

export default HomeContents;