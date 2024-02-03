import { PostData } from "@/cms/types/post-data";
import locationsData from "../../locations-data";
import languagesData from "../../languages-data";

export const thoughtOnAgriculturePostData: PostData = {
  id: "post-1",
  title: "Thoughts on Agriculture",
  slug: "thoughts-on-agriculture",

  date: "13.12.2022",
  location: locationsData.zurich,
  language: languagesData.en,
  original: false,

  description: "Over the past few weeks, I have been actively studying agriculture, especially regenerative agriculture. Among others, I read the book “Growing a Revolution: Bringing Our Soil Back to Life” by David R. Montgomery. In this post, I want to give a short, reflective summary.",
  content: `
    <p>Over the past few weeks, I have been actively studying agriculture, especially regenerative agriculture. Among others, I read the book “Growing a Revolution: Bringing Our Soil Back to Life” by David R. Montgomery. In this post, I want to give a short, reflective summary.</p>

    <p>I aimed to gain an objective as well as diverse first insight. With no experience in agriculture and limited knowledge, it is my curiosity and enthusiasm that I want to share and I welcome any comments. Let&#39;s learn together.</p>

    <h3>Theoretical Knowledge</h3>

    <p>A planned use of the soil to produce food (≈ agriculture) can be practiced in a variety of ways.</p>

    <h4>Conventional Agriculture</h4>

    <p>Today’s conventional (= common) agriculture accounts for about 84% of farms in Switzerland (as of 2021).</p>

    <p>Producing as much food as possible at the lowest possible prices, and having farms as large and specialized as possible — are the main characteristics. Hence not uncommon are synthetic fertilizers, pesticides as well as mass animal husbandry.</p>

    <h4>Regenerative Agriculture</h4>

    <p>Regenerative agriculture is all about soil health and regeneration. It is characterized by high soil diversity and humus content, like an intersection of organic agriculture, permaculture, and agroecology. You don&#39;t work against nature, you work with nature. The mantra:</p>

    <ol>
      <li>Work the soil as little as possible (no-till).</li>
      <li>Keep the soil covered at all times (mulch, cover crops, biochar).</li>
      <li>Rotate frequently and cultivate diversely (crop rotation).</li>
      <li><em>Rotational grazing, moving herds on the field systematically.</em></li>
    </ol>

    <h4>Basic Terminology</h4>

    <ul>
      <li><strong>Topsoil</strong>&nbsp;= the uppermost and most fertile part of the soil.</li>
      <li><strong>Humus</strong>, usually a small part of the soil, describes the totality of the dead organic matter of the soil (decomposed: autumn leaves, plant remains, …) and is therefore very rich in nutrients. The majority of the soil consists of weathered rock.</li>
      <li><strong>Mulch</strong>&nbsp;is like a blanket for the soil, it suppresses weeds and covers the soil, providing protection against erosion. Over time, mulch turns into humus.</li>
      <li><strong>Plowing</strong>&nbsp;means loosening and turning the soil. Among other things, it aerates the soil and gets rid of weeds and pests. However, plowing also disturbs good soil life and increases the risk of erosion.</li>
      <li><strong>No-till farming</strong>&nbsp;is a method of farming where the soil is not worked in beforehand (i.e. without plowing, harrowing, …).</li>
      <li><strong>Soil erosion</strong>&nbsp;degrades the topsoil, in which soil particles are carried away by wind or water. This reduces soil fertility.</li>
      <li><strong>Soil degradation</strong>&nbsp;describes a complete loss of the former topsoil mainly due to reoccurring erosion.</li>
      <li><strong>Cover crops</strong>&nbsp;are plants grown between main crops (grain, potatoes, …), usually for livestock feed or green manure. They keep the soil covered.</li>
      <li><strong>Crop rotation</strong>&nbsp;= sequential rotation of different crops on the same field over time (i.e., we rotate).</li>
    </ul>

    <h3>Key Insights</h3>

    <ul>
      <li><strong>Everything we eat comes from agriculture.</strong>&nbsp;I know, a pretty obvious sentence. But for real! In our modern society, we live disconnected from the fields. We increasingly reside in cities and metropolitan areas. We eat processed foods and buy groceries in supermarkets. And while we chew and taste, we don&#39;t think of the plants anymore. This used to be very different — we could see and observe how our food grew, how fertile the soil was, and what nutrients the plants received.</li>
      <li><strong>The essence of agriculture is the soil.</strong>&nbsp;Whether you farm conventionally, organically or regeneratively, they all have the same requirement — a piece of soil. If we have healthy, fertile topsoil, we have healthy growing plants. You can think of soil as a reservoir of nutrients for plants.</li>
      <li><strong>Across the world, we are losing our healthy soils.</strong>&nbsp;The number of soil degradations is increasing globally and the amount of fertile soil becomes more and more scarce. We are the main cause of this. Here&#39;s how you can imagine it: over the years, humus-rich soil, with a diversity of organisms and nutrients, become a kind of dry desert, in which all the life is gone.</li>
      <li><strong>Conventional agriculture ruins the soil.</strong>&nbsp;As big as possible, as much as possible, and as efficiently as possible; so we use pesticides on a massive scale and work the soil heavily. We cut down forests, overgraze and rely on monocultures.</li>
      <li><strong>A healthy soil biome is complex.</strong>&nbsp;Various soil organisms and soil microbes inhabit a healthy topsoil. Worms, for example, loosen the soil and distribute organic matter. Bacteria and mycorrhizae (tiny fungi attached to plant roots) stabilize, filter pollutants and make nutrients accessible by decomposing them. All in all, there is a crucial symbiosis; in return, the plant provides valuable nutrients back to the soil.</li>
      <li><strong>The soil is like a giant gut.</strong>&nbsp;We know about our bodies that the more diverse and healthy our gut microbiota (bacteria in our gut), the healthier we are. The same applies to the soil. The more rich and healthier the soil flora, the more productive the soil and the healthier the plants. In fact, one could compare pesticides with antibiotics, as they both kill the bad, but also the good.</li>
      <li><strong>The soil is like a big CO2 battery.</strong>&nbsp;It turns out that healthy soil stores carbon. It goes; the more fertile the soil, the more organic matter in the soil (greater humus content) and the more carbon is stored. In addition, biochar can store carbohydrates robustly and strengthen soil health. Currently, there is more than twice as much carbon stored in the soil as there is CO2 in the atmosphere.</li>
      <li><strong>No-till &gt; Organic.</strong>&nbsp;Chemicals and monoculture are not solely responsible for the increase in global soil erosion in agriculture. The decisive factor is how one works with the soil. Through massive tillage, even an organic farm can cause long-term damage to the soil and consequently to the environment. Indeed, a number of civilizations throughout history have collapsed because of the demise of their soils. As the saying goes:&nbsp;<em>the plow has become the devil of fertile soil.</em></li>
    </ul>

    <h3><strong>Open Questions</strong></h3>

    <ul>
      <li><strong>Does regenerative agriculture require more labor?</strong>&nbsp;I think compared to conventional farming, successful regenerative farming requires more work and therefore more labor and is also less scalable; after all, there is more to learn and pay attention to so that healthy soils can be guaranteed. The bottom line is that we have smaller farms and more to do?</li>
      <li><strong>Soil health = plant health = human health?</strong>&nbsp;With the decline of fertile and healthy soils, more and more plants are growing in increasingly lifeless soils. This makes me wonder — this has no impact on plant health? We are disrupting symbioses between plant and soil organisms which disrupts the natural growth of the plant. Does it make a difference what and how the plant ate?</li>
      <li><strong>Agriculture and science, education, crop insurance, subsidies, lobbyism, …?</strong>&nbsp;To be continued.</li>
    </ul>

    <h3>Sources</h3>

    <ul>
      <li><a href="https://www.goodreads.com/book/show/36236132-growing-a-revolution">Book: Growing a Revolution: Bringing Our Soil Back to Life, David R. Montgomery</a></li>
      <li><a href="https://www.youtube.com/watch?v=iaW6iWePv4M">Podcast: Farmcast</a></li>
      <li><a href="https://www.youtube.com/watch?v=fNr8TxNByLk">Podcast: querFELDein</a>&nbsp;</li>
      <li><a href="https://theproof.com/regenerative-agriculture-with-ryland-engelhart-and-finian-makepeace">Podcast: The Proof</a>&nbsp;</li>
      <li><a href="https://www.youtube.com/watch?v=Aywr5n4Fkvw">Documentation: Kiss the Ground</a></li>
      <li>Websites, etc.</li>
    </ul>
  `
}
