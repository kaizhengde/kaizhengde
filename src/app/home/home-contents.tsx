import ListContent from '@/components/list-content.tsx';

const HomeContents = () => {
  return (
    <section className="section-content">
      <div className="div-layer-text">
        <ListContent
          title="CURRENTLY"
          listItems={[
            <a href="">Linear Algebra (HS23 G-08)</a>,
            <a href="">BSc Thesis</a>,
          ]}
        />

        <ListContent
          title="NICE QUOTE"
          listItems={[
            "You have power over your mind—not outside events. Realize this, and you will find strength.*"
          ]}
          footnote="Marcus Aurelius, Roman emperor (121-180 AD)"
        />

        <ListContent
          title="WRITINGS"
          listItems={[

          ]}
        />

        <ListContent
          title="NICE BOOKS"
          listItems={[
            "Meditations, Marcus Aurelius",
            "赢家法则, 博多舍费尔",
            "Trotzdem Ja zum Leben sagen, Viktor E. Frankl",
            <a href="">Books 2024</a>,
            <a href="">Books 2023</a>,
          ]}
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