import ListContent from '@/components/content/list-content';
import { useNavigate } from 'react-router-dom';

const HomeContents = () => {
  const navigate = useNavigate();

  return (
    <section className="content">
      <div className="layer-text">
        <ListContent
          title="Currently"
          listItems={[
            <a href="" onClick={() => navigate("/linear-algebra")}>{"Linear Algebra (HS23 G-08)"}</a>,
            <a href="">{"BSc Thesis"}</a>,
          ]}
        />

        <ListContent
          title="Nice Quote"
          listItems={[
            "You have power over your mind—not outside events. Realize this, and you will find strength.*"
          ]}
          footnote="Marcus Aurelius, Roman emperor (121-180 AD)"
        />

        <ListContent
          title="Writings"
          listItems={[

          ]}
        />

        <ListContent
          title="Nice Books"
          listItems={[
            "Meditations, Marcus Aurelius",
            "赢家法则, 博多舍费尔",
            "Trotzdem Ja zum Leben sagen, Viktor E. Frankl",
            <a href="">{"Books 2024"}</a>,
            <a href="">{"Books 2023"}</a>,
          ]}
        />

        <ListContent
          title="Current Fascinations"
          listItems={[
            "Yoga & Calisthenics",
            "Living with 100L space for all belongings",
            "Reading about and interacting with the world",
          ]}
        />

        <ListContent
          title="I Look Up To"
          listItems={[
            "Helmut Schmidt",
            "Marcus Aurelius",
            "Viktor E. Frankl",
            "Eliud Kipchoge",
          ]}
        />

        <ListContent
          title="My Donations"
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
          title="Contact"
          listItems={[
            <a href="mailto:kai@kaizheng.de">{"kai@kaizheng.de"}</a>,
          ]}
        />
      </div>
    </section>
  )
}

export default HomeContents;