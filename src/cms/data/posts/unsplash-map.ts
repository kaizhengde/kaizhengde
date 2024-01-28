import { PostData } from "../../types/post-data";

const unsplashMapPostData: PostData = {
  id: "unsplash-map",
  title: "Unsplash Map",
  slug: "unsplash-map",
  date: "2019-12-20",
  location: {
    id: "zurich",
    label: "Zurich"
  },
  language: {
    id: "en",
    label: "English"
  },
  original: true,
  equivalents: [],
  description: "UnsplashMap is a simple app that allows you to load random photos from Unsplash and explore their locations on a map. I created the app in February 2021 to further consolidate my knowledge in UIKit. I was also looking forward to working with maps and making API calls. As always, it was an interesting journey and lots of fun!",
  content: `
    <p>
      UnsplashMap allows you to load random photos from Unsplash and explore their locations on a map.
    </p>
    <p>
      I created the app in February 2021 to further consolidate my knowledge in UIKit. I was also looking forward to working with maps and making API calls. As always, it was an interesting and exciting journey.
    </p>
    <video width="100%" autoplay loop muted playsinline poster="">
      <source src="https://res.cloudinary.com/kaizheng-de/video/upload/v1654688811/UnsplashMap_mb311o.mov" type="video/mp4">
    </video>
    <h3>Reflection</h3>
  `
}

export default unsplashMapPostData;