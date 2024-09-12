import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Eco-programming Benefits"
        title="We are pleased to announce the establishment of a new public movement aimed at supporting and promoting an environmentally responsible approach to programming — the Eco-Programming Alliance (EPA)."
      >
<p>Dear Colleagues,</p>

<p>

Eco-programming is a <a href="https://medium.com/@vrakitine/introduction-to-eco-programming-paradigm-9f7f2c972acd">programming paradigm</a> based on the idea that any software product is ultimately useless and harmful to humanity, except for software that can be quickly and inexpensively reprogrammed (modified, updated) to work with new data in new conditions.

We are proud to announce that the Eco-Programming Alliance (EPA) already includes three foundational methodologies:</p>
<ul>
  <li>Automata-Based Programming</li>
  <li>V-Agent Oriented Programming (VAOP)</li>
  <li>Model-Driven Engineering</li>
</ul>

<p>These methodologies are already operating within the new eco-programming paradigm, emphasizing sustainability and environmental responsibility in software development.</p>These methodologies are already operating within the new eco-programming paradigm, emphasizing sustainability and environmental responsibility in software development.

<p>Call to Action:</p>

<p>We invite all interested organizations and individuals who have developed technologies or programming methodologies that align with the principles of eco-programming to join us. Joining the Eco-Programming Alliance will provide you with a platform for knowledge exchange, collaboration, and the promotion of environmentally responsible practices in programming.</p>
<p>Goals and Objectives of the Alliance:</p>


<ul>
  <li>- Raise Awareness: Spread the ideas of eco-programming among developers and companies.</li>
  <li>- Promote Best Practices: Facilitate the adoption of methodologies and technologies that support eco-programming principles.</li>
  <li>- Build a Community: Unite like-minded individuals for knowledge, experience, and resource sharing.</li>
  <li>- Education and Development: Conduct seminars, courses, and training to disseminate environmentally responsible practices.</li>
  <li>- Influence the Industry: Impact companies and developers to implement sustainable practices.</li>
</ul>

<p>Join Us!</p>

      </SectionTitle>

      <Benefits data={benefitOne} />
      {/* <Benefits imgPos="right" data={benefitTwo} /> */}

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our Developers said"
      >
        These testimonials reflect the real-world impact of eco-programming on
        businesses and developers, highlighting both the practical and ethical
        benefits. Let me know if you need adjustments or more examples!
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
