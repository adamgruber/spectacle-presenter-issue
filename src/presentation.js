import React from "react";
import { Deck, Slide, Heading, Image, Notes } from 'spectacle';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const notes = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
`;

const Presentation = () => (
  <Deck>
    <Slide>
      <Notes>{notes}</Notes>
      <Image src="http://via.placeholder.com/400x300/ffffff" />
    </Slide>
    <Slide>
      <Notes>{notes}</Notes>
      <Image src="http://via.placeholder.com/1000x300/ffffff" />
    </Slide>
  </Deck>
);

export default Presentation;
