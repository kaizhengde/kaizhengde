import { PostData } from "@/cms/types/post-data";
import locationsData from "../../locations-data";
import languagesData from "../../languages-data";

export const gedankenZurLandwirtschaftPostData: PostData = {
  id: "post-1",
  title: "Gedanken zur Landwirtschaft",
  slug: "gedanken-zur-landwirtschaft",

  date: "13.12.2022",
  location: locationsData.zurich,
  language: languagesData.de,
  original: true,

  description: "Gedanken zur Landwirtschaft",
  content: `
    <p>In den vergangenen Wochen habe ich mich aktiv mit der Landwirtschaft befasst, insbesondere mit der regenerativen Landwirtschaft. Dabei habe ich unter anderem das Buch &quot;Growing a Revolution: Bringing Our Soil Back to Life&quot; von David R. Montgomery gelesen. In diesem Post möchte ich eine kleine, reflektierte Zusammenfassung schreiben.</p>

    <p>Mein Ziel war es, einen möglichst objektiven sowie diversen ersten Einblick zu erhalten. Erfahrungen in der Landwirtschaft habe ich keine und mein Wissen ist ziemlich beschränkt. Es ist meine Neugierde und Begeisterung, die ich teilen möchte und ich freue mich über jeden Input. Lass uns gemeinsam lernen.</p>

    <h3>Theoriewissen</h3>

    <p>Ein planmäßiges Nutzen des Bodens, um Nahrungsmittel zu erzeugen (≈ Landwirtschaft), kann auf verschiedenster Weise betrieben werden.</p>

    <h4>Die konventionelle Landwirtschaft</h4>

    <p>Die heutige konventionelle (= allgemein übliche) Landwirtschaft macht in der Schweiz etwa 84% (Stand 2021) der Betriebe aus.</p>

    <p>Möglichst viele Nahrungsmittel zu möglichst geringen Preisen produzieren, möglichst große und spezialisierte Betriebe - das sind die Hauptmerkmale. Daher keine Seltenheit, sind synthetische Düngemittel, Pestizide sowie Massentierhaltungen.</p>

    <h4>Die regenerative Landwirtschaft</h4>

    <p>Bei der regenerativen Landwirtschaft dreht sich alles um die Gesundheit und Regeneration des Bodens. Sie zeichnet sich durch eine hohe Bodendiversität und Humusanteil aus und ist wie eine Schnittmenge aus ökologischer Landwirtschaft, Permakultur und Agrarökologie. Man arbeitet nicht gegen, sondern mit der Natur. Das Mantra:</p>

    <ol>
      <li>Den Boden so wenig wie möglich bearbeiten (Direktsaat).</li>
      <li>Den Boden stets bedeckt halten (Mulch, Zwischenfrüchte, Pflanzenkohle).</li>
      <li>Häufig rotieren und vielfältig anbauen (Fruchtfolge).</li>
      <li><em><em>Weidenrotation, systematisches Bewegen von Herden auf dem Acker.</em></em>&nbsp;</li>
    </ol>

    <h4>Fachbegriffe</h4>

    <ul>
      <li><strong>Mutterboden/Oberboden</strong>&nbsp;= oberste und fruchtbarste Teil des Bodens.</li>
      <li><strong>Humus</strong>, meist ein kleiner Teil vom Boden, beschreibt die Gesamtheit der abgestorbenen organischen Bodensubstanz des Bodens (zersetzt: Herbstlaub, Pflanzenreste, ...) und ist demnach sehr nährstoffreich. Der Großteil des Bodens besteht aus verwittertem Gestein.</li>
      <li><strong>Mulch</strong>&nbsp;ist wie eine Decke für den Boden, er unterdrückt Unkraut und bedeckt den Boden, liefert damit Schutz für Erosionen. Mulch wird mit der Zeit verwandelt in Humus.</li>
      <li><strong>Pflügen</strong>&nbsp;heißt das Lockern und Wenden des Bodens. Dabei wird der Boden durchlüftet und man wird unter anderem Unkraut und Schädlinge los. Pflügen stört jedoch auch das&nbsp;<em>gute</em>&nbsp;Bodenleben und verschärft die Gefahr von Erosionen.</li>
      <li><strong>Direktsaat</strong>&nbsp;ist eine Ackerbaumethode, wo man den Boden nicht vorher bearbeitet (d.h. ohne zu pflügen, eggen, ...).</li>
      <li><strong>Bodenerosionen</strong>&nbsp;bauen den Mutterboden ab, in dem Bodenpartikel durch Wind oder Wasser abgetragen werden. Dadurch wird die Bodenfruchtbarkeit vermindert.</li>
      <li><strong>Bodendegradation</strong>&nbsp;beschreibt einen völligen Verlust des einstigen Mutterbodens hauptsächlich durch wiederkehrende Erosionen.</li>
      <li><strong>Zwischenfrüchte</strong>&nbsp;sind Pflanzen, die zwischen Hauptfrüchten (Getreide, Kartoffeln, ...) angebaut werden, meist für Viehfutter oder Gründüngung. Diese halten den Boden bedeckt.</li>
      <li><strong>Fruchtfolge</strong>&nbsp;= zeitliche Abfolge verschiedener Pflanzen auf derselben Ackerfläche (d.h. wir rotieren).</li>
    </ul>

    <h3>Erkenntnisse</h3>

    <ul>
      <li><strong>Alles, was wir essen, kommt aus der Landwirtschaft.</strong>&nbsp;Ich weiß, ein ziemlich offensichtlicher Satz. Aber wirklich! In unserer modernen Gesellschaft leben wir getrennt von den Feldern. Wir leben zunehmend in Städten und Metropolen. Wir essen zubereitete Speisen und kaufen Lebensmittel in Supermärkten ein. Und während wir kauen und schmecken, denken wir gar nicht an die Pflanzen. Das war früher noch ganz anders - wir konnten sehen und beobachten, wie unser Essen gedeiht, wie fruchtbar der Boden ist und welche Nährstoffe die Pflanzen beziehen.</li>
      <li><strong>Die Essenz der Landwirtschaft ist der Boden.</strong>&nbsp;Egal ob man konventionell, ökologisch oder regenerativ wirtschaftet, alle haben die gleiche Voraussetzung - ein Stück Boden. Haben wir gesunden, fruchtbaren Mutterboden, so haben wir gesund wachsende Pflanzen. Man kann sich den Boden als Nährstoffvorrat für Pflanzen vorstellen.</li>
      <li><strong>Wir verlieren weltweit unsere gesunden Böden.</strong>&nbsp;Die Anzahl an Bodendegradationen global steigt und der Anteil fruchtbarer Boden wird knapper. Dabei sind wir die Hauptverursacher. So kann man sich das vorstellen: über Jahre hinweg wird aus humusreichem Boden, mit einer Vielfalt an Organismen und Nährstoffen, eine Art trockene Wüste, worin auch nichts mehr lebt.</li>
      <li><strong>Die konventionelle Landwirtschaft zerstört den Boden.</strong>&nbsp;Möglichst groß, möglichst viel und möglichst effizient; so setzen wir massenweise Pestizide ein und bearbeiten den Boden stark. Wir holzen Wälder ab, setzen auf Monokulturen und überweiden.&nbsp;</li>
      <li><strong>Ein gesunder Bodenbiom ist komplex.</strong>&nbsp;In einem lebendigen Mutterboden leben verschiedene Bodentiere und Bodenmikrobe. Würmer zum Beispiel lockern den Boden und verteilen organische Stoffe. Bakterien sowie Mykorrhiza (winzige Pilze an den Wurzeln der Pflanze) stabilisieren, filtern Schadstoffe und machen Nährstoffe zugänglich, in dem sie diese zersetzen. Insgesamt herrscht eine entscheidende Symbiose, im Gegenzug gibt die Pflanze nämlich wertvolle Nährstoffe in den Boden zurück.</li>
      <li><strong>Der Boden ist wie ein gigantischer Darm.</strong>&nbsp;Über unseren Körper wissen wir, je vielfältiger und gesünder die Darmflora (Bakterien im Darm), desto gesünder sind wir. So ähnlich verhält es sich auch im Boden. Je vielfältiger und gesünder die Bodenbakterien, desto ertragreicher der Boden und gesünder die Pflanzen. Im Übrigen könnte man dann Pestizide mit Antibiotika vergleichen, diese töten nämlich die schlechten, aber auch die guten Bakterien ab.</li>
      <li><strong>Der Boden ist wie eine große CO2-Batterie.</strong>&nbsp;Es stellt sich heraus, dass gesunder Boden Kohlenstoff speichert. Es gilt; je fruchtbarer der Boden, desto mehr organische Stoffe im Boden (größerer Humusanteil) und desto mehr Kohlenstoffe werden gespeichert. Pflanzenkohle zudem können Kohlenstoffe robust speichern und die Gesundheit der Böden stärken. Aktuell ist im Boden mehr als doppelt so viel Kohlenstoff gebunden, wie in der Atmosphäre CO2 vorhanden ist.</li>
      <li><strong>Direktsaat &gt; Ökologisch.</strong>&nbsp;Für den Anstieg der globalen Bodenerosionen in der Landwirtschaft sind nicht ausschließlich Chemikalien oder Monokulturen verantwortlich. Entscheidend ist, wie man mit dem Boden arbeitet. Auch eine ökologische Farm kann durch massive Bodenbearbeitungen den Boden und somit der Umwelt langfristig schaden. In der Tat sind in Laufe der Geschichte einige Zivilisationen untergegangen wegen des Untergangs ihrer Böden. Wie man so schön sagt:&nbsp;<em>der Pflug ist dem fruchtbaren Boden zum Verhängnis geworden</em>.&nbsp;</li>
    </ul>

    <h3>Offene Fragen</h3>

    <ul>
      <li><strong>Die regenerative Landwirtschaft erfordert mehr Arbeitskräfte?</strong>&nbsp;Ich denke, im Vergleich zur konventionellen Landwirtschaft erfordert ein erfolgreiches, regeneratives Wirtschaften mehr Arbeit und damit mehr Arbeitskräfte und ist auch weniger skalierbar; immerhin gibt es mehr zu lernen und aufzupassen, sodass gesunde Böden garantiert werden können. Unter dem Strich haben wir kleinere Höfe und mehr zu tun?</li>
      <li><strong>Bodengesundheit = Pflanzengesundheit = Menschengesundheit?</strong>&nbsp;Mit dem Rückgang der fruchtbaren und gesunden Böden wachsen mehr und mehr Pflanzen in zunehmend leblosen Böden. So stell ich mir die Frage - das hat keinen Einfluss auf die Gesundheit der Pflanze? Wir stören Symbiosen zwischen Pflanze und Bodenorganismen und damit das natürliche Ökosystem im Boden bzw. die Pflanze. Macht es einen Unterschied, was und wie die Pflanze&nbsp;<em>gegessen</em>&nbsp;hat?</li>
      <li><strong>Landwirtschaft und - Wissenschaft, Bildung, Ernteversicherungen, Subventionen, Agrarlobby, ...?</strong>&nbsp;To be continued.</li>
    </ul>

    <h3>Quellen</h3>

    <ul>
      <li><a href="https://www.goodreads.com/book/show/36236132-growing-a-revolution">Buch: Growing a Revolution: Bringing Our Soil Back to Life, David R. Montgomery</a></li>
      <li><a href="https://www.youtube.com/watch?v=iaW6iWePv4M">Podcast: Farmcast</a></li>
      <li><a href="https://www.youtube.com/watch?v=fNr8TxNByLk">Podcast: querFELDein</a>&nbsp;</li>
      <li><a href="https://theproof.com/regenerative-agriculture-with-ryland-engelhart-and-finian-makepeace">Podcast: The Proof</a>&nbsp;</li>
      <li><a href="https://www.youtube.com/watch?v=Aywr5n4Fkvw">Dokumentation: Kiss the Ground</a></li>
      <li>Websites, etc.</li>
    </ul>
  `
}
