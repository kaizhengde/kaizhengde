import postsData from '@/cms/data/posts-data';
import ListContent from '@/components/content/list-content';
import TextContent from '@/components/content/text-content';
import Item from '@/components/item/item';
import Items from '@/components/item/items';

export default function Home() {
  return (
    <section className="content">
      <div className="layer-text">
        <TextContent
          title="Nice Quote"
          text="You have power over your mind—not outside events. Realize this, and you will find strength.*"
          footnote="Marcus Aurelius, Roman emperor (121-180 AD)"
        />

        <ListContent
          title="Writings"
          listItems={
            Object.entries(postsData).map(([, postDataArray]) => {
              if (postDataArray.length === 1) {
                const postData = postDataArray[0];
                return <Item key="post" label={postData.title} to={`/post/${postData.slug}`} />;
              }
              else {
                const itemsProps = postDataArray.map(postData => ({ label: postData.title, to: `/post/${postData.slug}` }));
                return <Items key="posts" itemProps={itemsProps} />;
              }
            })
          }
        />

        <ListContent
          title="Projects & Teaching"
          listItems={[
            <Item key="gencast" label="Gencast, iOS App" to="https://minuteforai.com/gencast" external={true} />,
            <Items key="thesis" itemProps={[
              { label: "Bachelor Thesis, Web App", to: "https://thesis.kaizheng.de", external: true },
              { label: "PDF", to: "/app/thesis/thesis-kai-zheng.pdf", external: true }
             ]} />,
            <Item key="linear-algebra" label="Linear Algebra, Teaching Materials" to="/linear-algebra" />,
            <Item key="1-step" label="1 Step, iOS App" to="/1-step" />,
            <Item key="unsplash-map" label="Unsplash Map, iOS App" to="/unsplash-map" />,
          ]}
        />

        <ListContent
          title="Nice Books"
          listItems={[
            <Item key="meditations" label="Meditations, Marcus Aurelius" />,
            <Item key="what-it-takes" label="What It Takes, Stephen A. Schwarzman" />,
            <Item key="trotzdem-ja-zum-leben-sagen" label="Trotzdem Ja zum Leben sagen, Viktor E. Frankl" />,
            <Item key="die-gesetze-der-gewinner" label="Die Gesetze der Gewinner, Bodo Schäfer" />,
            <Item key="the-power-of-now" label="The Power of Now, Eckhart Tolle" />,
          ]}
        />

        <ListContent
          title="I Look Up To"
          listItems={[
            <Item key="helmut-schmidt" label="Helmut Schmidt" />,
            <Item key="robert-habeck" label="Robert Habeck" />,
            <Item key="marcus-aurelius" label="Marcus Aurelius" />,
            <Item key="viktor-e-frankl" label="Viktor E. Frankl" />,
            <Item key="eliud-kipchoge" label="Eliud Kipchoge" />,
          ]}
        />

        <ListContent
          title="My Donations"
          listItems={[
            <Item key="trees" label="Trees: 153" />,
            <Item key="education" label="Education: €25" />,
            <Item key="aerzte-ohne-grenzen" label="Ärzte ohne Grenzen, since 2022, €15/month" />,
            <Item key="rewildu" label="Rewild University, since 2019, €10/month" />,
            <Item key="wwf" label="WWF Deutschland, since 2018, €5/month" />,
            <Item key="peta" label="PETA Deutschland, 2017-2019, €5/month" />,
          ]}
        />

        <ListContent
          title="Contact"
          listItems={[
            <Item key="cal" label="Let's talk!" to="https://cal.com/kaizheng" external={true} />,
            <Item key="mail" label="kai@kaizheng.de" to="mailto:kai@kaizheng.de" external={true} />,
            <Item key="linkedin" label="LinkedIn" to="https://www.linkedin.com/in/kai-zheng-8342371b3" external={true} />,
          ]}
        />
      </div>
    </section>
  )
}