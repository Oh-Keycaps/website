import React, { useEffect } from "react";
import React from "react";


const WiringTutorialComponent = () => {

  useEffect( () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//s.imgur.com/min/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="wiring-component">    
      <article>
        <header>
          <h2>Wiring Tutorial</h2>
          <p>The Oh-Keycaps way...</p>
        </header>
        <blockquote className="imgur-embed-pub" lang="en" data-id="a/H2j1yIw"  >
          <a href="//imgur.com/a/H2j1yIw">Dactyl Manuform building tips</a>
        </blockquote>
    </article>
    </main>
  );
};

export default WiringTutorialComponent;
