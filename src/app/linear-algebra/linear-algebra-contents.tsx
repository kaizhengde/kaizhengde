import ListContent from '@/components/content/list-content';
import Item from '@/components/item/item';
import Items from '@/components/item/items';
import Content from '@/components/content/content';
import PriorityRectangle from '@/components/priority/priority-rectangle';
import styles from './linear-algebra.module.css';

const LinearAlgebraContents = () => {
  return (
    <section className="content">
      <div className="layer-text">
        <Content
          title="Linear Algebra"
          footnote="If you are looking to have a pleasant experience with this course ^^"
        >
          <p>{"This page contains all the notes and materials used in the exercise sessions G-08. Linear algebra is a course that builds upon itself; vectors and matricies, for instance, are fundamental throughout the course. But also more complex concepts like rank, span, basis, kernel, bijection, determinant, and others are key components. I have marked definitions and topics with colours indicating their importance. Make sure you:*"}</p>
          <div className={styles.divPriority}>
            <div className={styles.divPriority}>
              <PriorityRectangle color="red" />
              <p className="footnote">{"Know in Sleep"}</p>
            </div>
            <div className={styles.divPriority}>
              <PriorityRectangle color="black" />
              <p className="footnote">{"Know Confidently"}</p>
            </div>
            <div className={styles.divPriority}>
              <PriorityRectangle color="green" />
              <p className="footnote">{"Know it Exists"}</p>
            </div>
          </div>
        </Content>

        <ListContent
          title="Weekly Notes"
          listItems={[
            <Item label="Week 0 (21.09.2023)" href="/linear-algebra/week-0.pdf" />,
            <Item label="Week 1 (28.09.2023)" href="/linear-algebra/week-1.pdf" />,
            <Item label="Week 2 (05.10.2023)" href="/linear-algebra/week-2.pdf" />,
            <Items itemProps={[
              { label: "Week 3 (12.10.2023)", href: "/linear-algebra/week-3.pdf" },
              { label: "Diskmath", href: "https://polybox.ethz.ch/index.php/s/0TsTRfZBH4AMn9n" }
            ]} />,
            <Item label="Week 4 (19.10.2023)" href="/linear-algebra/week-4.pdf" />,
            <Item label="Week 5 (26.10.2023)" href="/linear-algebra/week-5.pdf" />,
            <Items itemProps={[
              { label: "Week 6 (02.11.2023)", href: "/linear-algebra/week-6.pdf" },
              { label: "Test 1", href: "https://polybox.ethz.ch/index.php/s/AFvREyE0gDQzBZn" }
            ]} />,
            <Item label="Week 7 (09.11.2023)" href="/linear-algebra/week-7.pdf" />,
            <Item label="Week 8 (16.11.2023)" href="/linear-algebra/week-8.pdf" />,
            <Items itemProps={[
              { label: "Week 9 (23.11.2023)", href: "/linear-algebra/week-9.pdf" },
              { label: "Test 2", href: "https://polybox.ethz.ch/index.php/s/AFvREyE0gDQzBZn" }
            ]} />,
            <Item label="Week 10 (30.11.2023)" href="/linear-algebra/week-10.pdf" />,
            <Item label="Week 11 (07.12.2023)" href="/linear-algebra/week-11.pdf" />,
            <Item label="Week 12 (14.12.2023)" href="/linear-algebra/week-12.pdf" />,
            <Items itemProps={[
              { label: "Week Final (21.12.2023)", href: "/linear-algebra/week-final.pdf" },
              { label: "Test Final", href: "https://polybox.ethz.ch/index.php/s/AFvREyE0gDQzBZn" },
              { label: "Scripts", href: "https://polybox.ethz.ch/index.php/s/9sG2ce0UyC6Ot6m" },
            ]} />,
          ]}
        />

        <ListContent
          title="Links"
          listItems={[
            <Item label="Vorlesungswebsite" href="https://ti.inf.ethz.ch/ew/courses/LA23/index.html" />,
            <Item label="Moodle" href="https://moodle-app2.let.ethz.ch/course/view.php?id=20361" />,
          ]}
        />

        <ListContent
          title="Overview"
          listItems={[
            <img width="100%" src="/linear-algebra/overview-content.png" alt="Overview Content" />,
            <img width="100%" src="/linear-algebra/overview-plan.png" alt="Overview Plan" />,
          ]}
        />
      </div>
    </section>
  )
}

export default LinearAlgebraContents;