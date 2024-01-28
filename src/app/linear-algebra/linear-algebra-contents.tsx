import TextContent from '@/components/content/text-content';
import ListContent from '@/components/content/list-content';
import Item from '@/components/item/item';
import Items from '@/components/item/items';

const LinearAlgebraContents = () => {
  return (
    <section className="content">
      <div className="layer-text">
        <TextContent
          title="Linear Algebra"
          text="This page contains all the notes and materials used in the exercise sessions G-08. Linear algebra is a course that builds upon itself; vectors and matricies, for instance, are fundamental throughout the course. But also more complex concepts like rank, span, basis, kernel, bijection, determinant, and others are key components. I have marked definitions and topics with colours indicating their importance. Make sure you:*"
          footnote="If you are looking to have a pleasant experience with this course ^^"
        >
        </TextContent>

        <ListContent
          title="Weekly Notes"
          listItems={[
            <Item label="Week 0 (21.09.2023)" href="linear-algebra/week-0.pdf" />,
            <Item label="Week 1 (28.09.2023)" href="linear-algebra/week-1.pdf" />,
            <Item label="Week 2 (05.10.2023)" href="linear-algebra/week-2.pdf" />,
            <Items itemProps={[
              { label: "Week 3 (12.10.2023)", href: "linear-algebra/week-3.pdf" },
              { label: "Diskmath", href: "linear-algebra/diskmath.pdf" }
            ]} />,
            <Item label="Week 4 (19.10.2023)" href="linear-algebra/week-4.pdf" />,
            <Item label="Week 5 (26.10.2023)" href="linear-algebra/week-5.pdf" />,
            <Items itemProps={[
              { label: "Week 6 (02.11.2023)", href: "linear-algebra/week-6.pdf" },
              { label: "Test 1", href: "linear-algebra/test-1.pdf" }
            ]} />,
            <Item label="Week 7 (09.11.2023)" href="linear-algebra/week-7.pdf" />,
            <Item label="Week 8 (16.11.2023)" href="linear-algebra/week-8.pdf" />,
            <Items itemProps={[
              { label: "Week 9 (23.11.2023)", href: "linear-algebra/week-9.pdf" },
              { label: "Test 2", href: "linear-algebra/test-2.pdf" }
            ]} />,
            <Item label="Week 10 (30.11.2023)" href="linear-algebra/week-10.pdf" />,
            <Item label="Week 11 (07.12.2023)" href="linear-algebra/week-11.pdf" />,
            <Item label="Week 12 (14.12.2023)" href="linear-algebra/week-12.pdf" />,
            <Items itemProps={[
              { label: "Week Final (21.12.2023)", href: "linear-algebra/week-final.pdf" },
              { label: "Test Final", href: "linear-algebra/test-final.pdf" },
              { label: "Test Final", href: "#" },
            ]} />,
          ]}
        />

        <ListContent
          title="Links"
          listItems={[
            <Item label="Vorlesungswebsite" href="#" />,
            <Item label="Moodle" href="#" />,
          ]}
        />

        <ListContent
          title="Overview"
          listItems={[
          ]}
        />
      </div>
    </section>
  )
}

export default LinearAlgebraContents;