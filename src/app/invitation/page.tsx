import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Cta } from '@/components/Cta';
import TeamMember from '@/components/TeamMember';
import {teamList} from '@/components/data';

export default function Invitation() {
	
	  return (
      <Container>
        <SectionTitle
          preTitle="Eco-programming Invitation"
          title="We are pleased to announce the establishment of a new public movement"
        />
        <div className="mx-auto max-w-4xl">
          <h3>Dear Colleagues,</h3>
          <p>
            Eco-programming is a programming paradigm based on the idea that any
            software product is ultimately useless and harmful to humanity,
            except for software that can be quickly and inexpensively
            reprogrammed (modified, updated) to work with new data in new
            conditions. We are proud to announce that the Eco-Programming
            Alliance (EPA) already includes three foundational methodologies:
          </p>
          <ul>
            <li>Automate-Based Programming</li>
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
          These methodologies are already operating within the new
          eco-programming paradigm, emphasizing sustainability and environmental
          responsibility in software development.
          <h3>Call to Action:</h3>
          <p>
            We invite all interested organizations and individuals who have
            developed technologies or programming methodologies that align with
            the principles of eco-programming to join us. Joining the
            Eco-Programming Alliance will provide you with a platform for
            knowledge exchange, collaboration, and the promotion of
            environmentally responsible practices in programming.
          </p>
          <h4>Goals and objectives of the Alliance:</h4>
          
          <ul>
            <li>
              Raise Awareness: Spread the ideas of eco-programming among
              developers and companies.
            </li>
            <li>
              Promote Best Practices: Facilitate the adoption of methodologies
              and technologies that support eco-programming principles.
            </li>
            <li>
              Build a Community: Unite like-minded individuals for knowledge,
              experience, and resource sharing.
            </li>
            <li>
              Education and Development: Conduct seminars, courses, and training
              to disseminate environmentally responsible practices.
            </li>
            <li>
              Influence the Industry: Impact companies and developers to
              implement sustainable practices.
            </li>
          </ul>
        </div>

        <Cta />
      </Container>
    );
}
