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
          title="We are excited to announce the establishment of a new initiative dedicated to promoting environmentally responsible programming practices - the Eco-Programming Alliance (EPA)."
        />
        <div className="mx-auto max-w-4xl">
          <h3>Dear Colleagues,</h3>
          <p>
          About Eco-Programming Alliance: Eco-programming is a paradigm that emphasizes the importance of developing software that can be easily and inexpensively reprogrammed to adapt to new data and conditions, thereby minimizing its environmental impact. We believe that only such adaptive and sustainable software can serve humanity effectively in the long term.
          </p>
          <p>
          Foundational Methodologies: We are proud to include the following methodologies as the foundation of the Eco-Programming Alliance:
          </p>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Automata-based_programming_(Shalyto's_approach)">Automata-based programming (Shalyto’s approach)</a>
            </li>
            <li>
              <a href="https://medium.com/@vrakitine/introduction-to-v-agent-oriented-programming-vaop-4eca0f96d86b">V-Agent Oriented Programming (VAOP)</a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Model-driven_engineering">Model-Driven Engineering</a>
            </li>
          </ul>
          <p>
            These methodologies are already operating within the {' '}
            <a href="https://medium.com/@vrakitine/introduction-to-eco-programming-paradigm-9f7f2c972acd">
              eco-programming paradigm
            </a>
            , emphasizing sustainability and environmental responsibility in
            software development.
          </p>

          <h3>Alignment with {' '}<a href="https://codes.global">CODES</a> and Our Initial Focus</h3>
          <p>Aligned with the objectives of the CODES initiative, our initial focus is on Enabling Alignment—connecting the vision, values, and objectives of digitalization with sustainable development. Our aim is to bridge the gap between digital and sustainability sectors by fostering interdisciplinary collaboration.</p>
          <p>To achieve this, we will work on:</p>
          <ul>
            <li><b>Building Digital Competencies:</b> Empowering software engineers and developers to understand the environmental impact of their work while designing innovative, sustainable solutions.</li>
            <li><b>Harnessing Science and Systems Thinking:</b> Promoting a systems-based approach to evaluate how digital technologies affect sustainability and how these technologies can be aligned to promote sustainable outcomes.</li>
          </ul>
          
          
          
          <h3>Call to Action:</h3>
          <p>
          We invite all interested organizations and individuals who have developed technologies or programming methodologies aligned with the principles of eco-programming to join us. By joining the Eco-Programming Alliance, you will have the opportunity to collaborate, share knowledge, and promote environmentally responsible practices in programming.
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

          <p>Join Us! If you share our values and want to contribute to creating a sustainable future for software, please contact us to learn more about how you can become part of the Eco-Programming Alliance.</p>
          <p>&nbsp;</p>
          <p>Sincerely,</p>
          <p><a href="https://www.linkedin.com/in/valrakitine/">Valeri Rakitine</a></p>
          <p>Founder and Initiator</p>
          <p>Eco-Programming Alliance (EPA)</p>
        </div>

        <Cta />
      </Container>
    );
}
