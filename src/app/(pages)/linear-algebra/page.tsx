import ListContent from '@/components/content/list-content';
import Item from '@/components/item/item';
import Items from '@/components/item/items';
import Content from '@/components/content/content';
import PriorityRectangle from '@/components/priority/priority-rectangle';
import styles from './styles.module.css';

export const metadata = {
  title: "Linear Algebra",
  description: "This page contains all the notes and materials used in the exercise sessions G-08.",
}

export default function LinearAlgebra() {
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
            <Item key="week-0" label="Week 0, 21.09.2023" to="/app/linear-algebra/week-0.pdf" external={true} />,
            <Item key="week-1" label="Week 1, 28.09.2023" to="/app/linear-algebra/week-1.pdf" external={true} />,
            <Item key="week-2" label="Week 2, 05.10.2023" to="/app/linear-algebra/week-2.pdf" external={true} />,
            <Items key="week-3" itemProps={[
              { label: "Week 3, 12.10.2023", to: "/app/linear-algebra/week-3.pdf", external: true },
              { label: "Diskmath", to: "https://polybox.ethz.ch/index.php/s/0TsTRfZBH4AMn9n", external: true }
            ]} />,
            <Item key="week-4" label="Week 4, 19.10.2023" to="/app/linear-algebra/week-4.pdf" external={true} />,
            <Item key="week-5" label="Week 5, 26.10.2023" to="/app/linear-algebra/week-5.pdf" external={true} />,
            <Items key="week-6" itemProps={[
              { label: "Week 6, 02.11.2023", to: "/app/linear-algebra/week-6.pdf", external: true },
              { label: "Test 1", to: "https://polybox.ethz.ch/index.php/s/AFvREyE0gDQzBZn", external: true }
            ]} />,
            <Item key="week-7" label="Week 7, 09.11.2023" to="/app/linear-algebra/week-7.pdf" external={true} />,
            <Item key="week-8" label="Week 8, 16.11.2023" to="/app/linear-algebra/week-8.pdf" external={true} />,
            <Items key="week-9" itemProps={[
              { label: "Week 9, 23.11.2023", to: "/app/linear-algebra/week-9.pdf", external: true },
              { label: "Test 2", to: "https://polybox.ethz.ch/index.php/s/AFvREyE0gDQzBZn", external: true }
            ]} />,
            <Item key="week-10" label="Week 10, 30.11.2023" to="/app/linear-algebra/week-10.pdf" external={true} />,
            <Item key="week-11" label="Week 11, 07.12.2023" to="/app/linear-algebra/week-11.pdf" external={true} />,
            <Item key="week-12" label="Week 12, 14.12.2023" to="/app/linear-algebra/week-12.pdf" external={true} />,
            <Items key="week-final" itemProps={[
              { label: "Week Final, 21.12.2023", to: "/app/linear-algebra/week-final.pdf", external: true },
              { label: "Test Final", to: "https://polybox.ethz.ch/index.php/s/AFvREyE0gDQzBZn", external: true },
              { label: "Scripts", to: "https://polybox.ethz.ch/index.php/s/9sG2ce0UyC6Ot6m", external: true },
            ]} />,
          ]}
        />

        <ListContent
          title="Links"
          listItems={[
            <Item key="vorlesungswebsite" label="Vorlesungswebsite" to="https://ti.inf.ethz.ch/ew/courses/LA23/index.html" external={true} />,
            <Item key="moodle" label="Moodle" to="https://moodle-app2.let.ethz.ch/course/view.php?id=20361" external={true} />,
          ]}
        />

        <ListContent
          title="Overview"
          listItems={[
            <img key="overview-content" width="100%" src="/app/linear-algebra/overview-content.png" alt="Overview Content" />,
            <img key="overview-plan" width="100%" src="/app/linear-algebra/overview-plan.png" alt="Overview Plan" />,
          ]}
        />
      </div>
    </section>
  )
}