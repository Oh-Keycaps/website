import React, { useEffect, useState } from "react";
import { TutorialLink, WiringService } from "services/wiringService";

const ImgurEmbedScript = (props: {dataId: string, title: string}) => {
  const {dataId, title} = props;

  useEffect( () => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = "//s.imgur.com/min/embed.js";

    document.querySelector('body')?.appendChild(script);
  }, []);

  return (
    <blockquote className="imgur-embed-pub" lang="en" data-id={`a/${dataId}`}  >
      <a href={`//imgur.com/a/${dataId}`}>{title}</a>
    </blockquote>
  )
}


const WiringTutorialComponent = () => {
  const service = new WiringService();
  const [tutorialLinks, setTutorialLinks ] = useState<TutorialLink[]>([]);

  useEffect(() => {
    service.listTutorials()
      .then(links => setTutorialLinks(links))
      .catch(err => console.log(err))
  })

  return (
    <main className="wiring-component">
      <article>
        <header>
          <h1>Wiring Tutorial</h1>
        </header>
        <section>
          {tutorialLinks.map((link, index) => <ImgurEmbedScript dataId={link.dataId} title={link.title} key={index}/>)}
        </section>
    </article>
    </main>
  );
};

export default WiringTutorialComponent;
