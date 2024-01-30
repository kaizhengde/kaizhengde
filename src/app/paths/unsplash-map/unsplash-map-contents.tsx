import ListContent from '@/components/content/list-content';
import Item from '@/components/item/item';
import Items from '@/components/item/items';
import Content from '@/components/content/content';
import ReadingSection from '@/components/section/reading-section';

const UnsplashMapContents = () => {
  return (
    <>
      <section className="content">
        <div className="layer-text">
          <Content
            title="Unsplash Map"
          >
            <p>{"UnsplashMap allows you to load random photos from Unsplash and explore their locations on a map."}</p>
            <p>{"I created the app in February 2021 to further consolidate my knowledge in UIKit. I was also looking forward to working with maps and making API calls. As always, it was an interesting and exciting journey."}</p>
            <video width="100%" autoPlay loop muted playsInline poster="">
              <source src="https://res.cloudinary.com/kaizheng-de/video/upload/v1654688811/UnsplashMap_mb311o.mov" type="video/mp4" />
            </video>
          </Content>

          <ListContent
            title="Overview"
            listItems={[
              <img width="100%" src="/unsplash-map/um-thumbnail.jpeg" alt="Thumbnail" />,
              <img width="100%" src="/unsplash-map/um-features.jpeg" alt="Features" />,
            ]}
          />
        </div>
      </section>

      <ReadingSection>
        <Content
          title="Reflexion"
        >
          <h4>Challenges</h4>

          <ol>
            <li>The first challenge I faced was to only fetch photos with location data, as I want every photo to be visible on the map. Unfourtunately it is not possible to specify the location pamameter inside the API URL.</li>
            <li>I have solved this problem by synchronously making additional API calls, as long as the retrieved photo has no location data. Fortunately, it is possible to fetch several random photos on a single request. This leads to an estimated 1.15 expected requests each time, if we assume that every third photo has location data and we fetch five photos on each request.</li>
            <li>Also challenging for me was to cluster all nearby photo markers on the map, in order to enhance performance and visibility. I found the documentation to be quite shallow so it took me some time to absorb all the necessary information from several resources.</li>
          </ol>

          <h4>Things I learned</h4>

          <ul>
            <li>More familiarity with UIKit</li>
            <li>Synchronizing API calls using DispatchSemaphore/DispatchGroup</li>
            <li>Parsing JSON response with JSONSerialization to save into CoreData database</li>
            <li>Using the NSFetchedResultsController</li>
            <li>WaterFall UICollectionView layout and custom animations with the help of CocoaPods libraries</li>
            <li>Making reusable custom Popups and MiniSheets with both UITapGestureRecognizer and UIPanGestureRecognizer</li>
            <li>Working with Google Maps SDK, custom MapStyles as well as Markers and Clustering</li>
            <li>Working with LocationManager and properly managing the authentication part</li>
          </ul>

          <h4>Technologies I used</h4>

          <ul>
            <li>Swift</li>
            <li>UIKit without storyboard</li>
            <li>CoreData</li>
            <li>Xcode</li>
            <li>GoogleMaps SDK</li>
            <li>CocoaPods</li>
            <li>Sketch</li>
            <li>Miro</li>
            <li>Adobe Photoshop</li>
          </ul>
        </Content>
      </ReadingSection>

      <section className="content">
        <div className="layer-text">
          <Content
            title="Design Prototypes"
          >
            <img width="100%" src="/unsplash-map/um-sketch.jpeg" alt="" />
          </Content>

          <Content
            title="Data Architecture Diagram"
          >
            <img width="100%" src="/unsplash-map/um-architecture-diagram.jpeg" alt="Architecture Diagram" />
          </Content>

          <Content
            title="Object Diagram"
          >
            <img width="100%" src="/unsplash-map/um-object-diagram.jpeg" alt="Object Diagram" />
          </Content>

        </div>
      </section>
    </>
  )
}

export default UnsplashMapContents;