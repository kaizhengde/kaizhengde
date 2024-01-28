import ListContent from '@/components/content/list-content';
import TextContent from '@/components/content/text-content';
import Item from '@/components/item/item';
import { useNavigate } from 'react-router-dom';

const HomeContents = () => {
  const navigate = useNavigate();

  return (
    <section className="content">
      <div className="layer-text">
        <ListContent
          title="Currently"
          listItems={[
            <Item label="Linear Algebra (HS23 G-08)" onClick={() => navigate("/linear-algebra")} />,
            <Item label="BSc Thesis" onClick={() => navigate("/thesis")} />,
          ]}
        />

        <TextContent
          title="Nice Quote"
          text="You have power over your mind—not outside events. Realize this, and you will find strength.*"
          footnote="Marcus Aurelius, Roman emperor (121-180 AD)"
        />

        <ListContent
          title="Writings"
          listItems={[
            <Item label="Unsplash Map" onClick={() => navigate("/post/unsplash-map")} />,
          ]}
        />

        <ListContent
          title="Nice Books"
          listItems={[
            <Item label="Meditations, Marcus Aurelius" />,
            <Item label="赢家法则, 博多舍费尔" />,
            <Item label="Trotzdem Ja zum Leben sagen, Viktor E. Frankl" />,
            <Item label="Books 2024" href="#" />,
            <Item label="Books 2023" href="#" />,
          ]}
        />

        <ListContent
          title="Current Fascinations"
          listItems={[
            <Item label="Yoga & Calisthenics" />,
            <Item label="Living with 100L space for all belongings" />,
            <Item label="Reading about and interacting with the world" />,
          ]}
        />

        <ListContent
          title="I Look Up To"
          listItems={[
            <Item label="Helmut Schmidt" />,
            <Item label="Marcus Aurelius" />,
            <Item label="Viktor E. Frankl" />,
            <Item label="Eliud Kipchoge" />,
          ]}
        />

        <ListContent
          title="My Donations"
          listItems={[
            <Item label="Trees: 153" />,
            <Item label="Education: €25" />,
            <Item label="Ärzte ohne Grenzen, since 2022, €15/month" />,
            <Item label="Rewind University, since 2019, €5/month" />,
            <Item label="WWF Deutschland, since 2018, €5/month" />,
            <Item label="PETA Deutschland, 2017-2019, €5/month" />,
          ]}
        />

        <ListContent
          title="Contact"
          listItems={[
            <Item label="kai@kaizheng.de" href="mailto:kai@kaizheng.de" />,
          ]}
        />
      </div>
    </section>
  )
}

export default HomeContents;