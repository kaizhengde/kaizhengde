import ListContent from '@/components/content/list-content';
import Item from '@/components/item/item';
import Items from '@/components/item/items';
import Content from '@/components/content/content';
import ReadingSection from '@/components/section/reading-section';

const OneStepContents = () => {
  return (
    <>
      <section className="content">
        <div className="layer-text">
          <Content
            title="1 Step"
          >
            <p>{"1 Step is the app that genuinely got me into iOS engineering, which I built back in 2020. It was during the designing and development process that I started getting myself deep into the material and discovered my passion for coding and designing."}</p>
            <img width="100%" src="/one-step/os-thumbnail.jpg" alt="Thumbnail" />
            <video width="100%" autoPlay loop muted playsInline poster="">
              <source src="https://res.cloudinary.com/kaizheng-de/video/upload/v1654801869/1_Step_bxgi6a.mov" type="video/mp4" />
            </video>
          </Content>

          <ListContent
            title="Overview"
            listItems={[
              <video width="100%" autoPlay loop muted playsInline poster="">
                <source src="https://res.cloudinary.com/kaizheng-de/video/upload/v1654860204/1_Step_Details_t28yqd.mov" type="video/mp4" />
              </video>
            ]}
          />
        </div>
      </section>

      <ReadingSection>
        <Content
          title={<Items itemProps={[
            { type: "h5", label: "24.02.2021" },
            { type: "h5", label: "Zürich" },
          ]} />}
        >
          <h3>Reflexion</h3>

          <h4>Things I learned (iOS Development)</h4>

          <ul>
            <li>Using the MVVM design pattern on the SwiftUI framework</li>
            <li>Learning to write scalable code and structuring a large code base</li>
            <li>Building user interfaces with AlignmentGuides, PreferenceKeys and custom Paths</li>
            <li>Building and managing complex custom animations, gestures and overlays</li>
            <li>Handling dynamic app icons, app appearances along with color themes and text localization</li>
            <li>Working with the NSPersistentCloudKitContainer for CoreData with iCloud synchronization, synchronizing NSManagedObjectContext operations</li>
            <li>Managing persistent user data with UserDefaults that are synched with CloudKit</li>
            <li>Displaying repeating UserNotifications and handling the authentication logic</li>
            <li>Running UnitTests for important algorithms</li>
            <li>Integrating Firebase Analytics and Crashlytics</li>
            <li>Working with StoreKit and managing user purchases</li>
            <li>Publishing and managing the app with App Store Connect and TestFlight</li>
            <li>Actively taking part in the StackOverflow community, answering and writing many questions</li>
          </ul>

          <h4>Things I learned (Design)</h4>

          <ul>
            <li>Planning and designing app user interfaces</li>
            <li>Working with Sketch and creating working prototypes</li>
            <li>Creating vector graphics, custom icons and rendering design mock ups</li>
            <li>Researching user experience</li>
            <li>Making and integrating tutorial gifs for new users</li>
          </ul>

          <h4>Technologies I used</h4>

          <ul>
            <li>Swift</li>
            <li>SwiftUI and Combine</li>
            <li>CoreData and CloudKit</li>
            <li>Firebase Analytics and Crashlytics</li>
            <li>Xcode</li>
            <li>Sketch</li>
            <li>Miro</li>
            <li>Procreate</li>
            <li>Adobe Photoshop</li>
            <li>Final Cut Pro X</li>
          </ul>
        </Content>
      </ReadingSection>

      <section className="content">
        <div className="layer-text">
          <Content
            title="Tutorial"
          >
            <video width="100%" autoPlay loop muted playsInline poster="">
              <source src="https://res.cloudinary.com/kaizheng-de/video/upload/v1654845155/1_Step_Tutorial_mfqjsr.mov" type="video/mp4" />
            </video>
          </Content>

          <Content
            title="Object diagram of CoreData entities"
          >
            <img width="100%" src="/one-step/os-object-diagram.png" alt="Object Diagram" />
          </Content>

          <Content
            title="Links"
          >
            <Item label="GitHub" href="https://github.com/Mofawaw/1-StepPublic" />
          </Content>
        </div>
      </section>
    </>
  )
}

export default OneStepContents;