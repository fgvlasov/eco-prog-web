import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Cta } from '@/components/Cta';


export default function Invitation() {
  return (
    <Container>
      <SectionTitle
        preTitle="Eco-programming Benefits"
        title="We are pleased to announce the establishment of a new public movement aimed at supporting and promoting an environmentally responsible approach to programming — the Eco-Programming Alliance (EPA)."
      >
        <p>Dear Colleagues,</p>
        <p>
          Eco-programming is a programming paradigm based on the idea that any
          software product is ultimately useless and harmful to humanity, except
          for software that can be quickly and inexpensively reprogrammed
          (modified, updated) to work with new data in new conditions. We are
          proud to announce that the Eco-Programming Alliance (EPA) already
          includes three foundational methodologies:
        </p>
        <ul>
          <li>Automata-Based Programming</li>
          <li>
            <a href="https://medium.com/@vrakitine/introduction-to-v-agent-oriented-programming-vaop-4eca0f96d86b">
              V-Agent Oriented Programming (VAOP)
            </a>
          </li>
          <li>Model-Driven Engineering</li>
        </ul>
        <p>
          These methodologies are already operating within the new{' '}
          <a href="https://medium.com/@vrakitine/introduction-to-eco-programming-paradigm-9f7f2c972acd">
            eco-programming paradigm
          </a>
          , emphasizing sustainability and environmental responsibility in
          software development.
        </p>
        These methodologies are already operating within the new eco-programming
        paradigm, emphasizing sustainability and environmental responsibility in
        software development.
        <p>Call to Action:</p>
        <p>
          We invite all interested organizations and individuals who have
          developed technologies or programming methodologies that align with
          the principles of eco-programming to join us. Joining the
          Eco-Programming Alliance will provide you with a platform for
          knowledge exchange, collaboration, and the promotion of
          environmentally responsible practices in programming.
        </p>
        <p>Goals and Objectives of the Alliance:</p>
        <ul>
          <li>
            - Raise Awareness: Spread the ideas of eco-programming among
            developers and companies.
          </li>
          <li>
            - Promote Best Practices: Facilitate the adoption of methodologies
            and technologies that support eco-programming principles.
          </li>
          <li>
            - Build a Community: Unite like-minded individuals for knowledge,
            experience, and resource sharing.
          </li>
          <li>
            - Education and Development: Conduct seminars, courses, and training
            to disseminate environmentally responsible practices.
          </li>
          <li>
            - Influence the Industry: Impact companies and developers to
            implement sustainable practices.
          </li>
        </ul>
        <p>Join Us!</p>
      </SectionTitle>

      <Cta />
    </Container>
  );
}
