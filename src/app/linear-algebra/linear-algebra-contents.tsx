import ListContent from '@/components/content/list-content';

const LinearAlgebraContents = () => {
  return (
    <section className="content">
      <div className="layer-text">
        <ListContent
          title="Linear Algebra"
          listItems={[
            "This page contains all the notes and materials used in the exercise sessions G-08. Linear algebra is a course that builds upon itself; vectors and matricies, for instance, are fundamental throughout the course. But also more complex concepts like rank, span, basis, kernel, bijection, determinant, and others are key components. I have marked definitions and topics with colours indicating their importance. Make sure you:*"
          ]}
          footnote="If you are looking to have a pleasant experience with this course ^^"
        />

        <ListContent
          title="Weekly Notes"
          listItems={[
            <a href="">{"Week 0 (21.09.2023)"}</a>,
            <a href="">{"Week 1 (28.09.2023)"}</a>,
            <a href="">{"Week 2 (05.10.2023)"}</a>,
            <div className="flex-horizontal">
              <a href="">{"Week 3 (12.10.2023)"}</a>
              <span className="separator">/</span>
              <a href="">{"Diskmath"}</a>
            </div>,
            <a href="">{"Week 4 (19.10.2023)"}</a>,
            <a href="">{"Week 5 (26.10.2023)"}</a>,
            <div className="flex-horizontal">
              <a href="">{"Week 6 (02.11.2023)"}</a>
              <span className="separator">/</span>
              <a href="">{"Test 1"}</a>
            </div>,
            <a href="">{"Week 7 (09.11.2023)"}</a>,
            <a href="">{"Week 8 (16.11.2023)"}</a>,
            <div className="flex-horizontal">
              <a href="">{"Week 9 (23.11.2023)"}</a>
              <span className="separator">/</span>
              <a href="">{"Test 2"}</a>
            </div>,
            <a href="">{"Week 10 (30.11.2023)"}</a>,
            <a href="">{"Week 11 (07.12.2023)"}</a>,
            <a href="">{"Week 12 (14.12.2023)"}</a>,
            <div className="flex-horizontal">
              <a href="">{"Week Final (21.12.2023)"}</a>
              <span className="separator">/</span>
              <a href="">{"Test Final"}</a>
              <span className="separator">/</span>
              <a href="">{"Spicks"}</a>
            </div>,
          ]}
        />

        <ListContent
          title="Links"
          listItems={[
            <a href="">{"Vorlesungswebsite"}</a>,
            <a href="">{"Moodle"}</a>
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