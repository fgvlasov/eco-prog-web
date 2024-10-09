import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Cta } from '@/components/Cta';

export default function CaseToStudy() {
  return (
    <Container>
      <SectionTitle
        preTitle="Case To Study "
        title="Case studies and examples of eco-technologies."
      />
      <div className="mx-auto max-w-4xl pb-8">
        <p>
          At the Eco-Programming Alliance, we recognize the importance of
          analyzing real-world examples of how programming technologies can
          impact the environment. Through careful study and the application of
          eco-conscious methodologies, developers can drive sustainable
          innovation and reduce the environmental footprint of software. This
          section presents case studies and examples of eco-technologies, such
          as algorithm-centric programming, which prioritize sustainability,
          efficiency, and long-term adaptability. By exploring these
          technologies and their applications, we aim to demonstrate the
          significant role programmers can play in fostering an eco-friendly
          digital future.
        </p>
        <h3>Block 1: Algorithm-Centric Technologies</h3>
        <p>
          <strong>Introduction:</strong>
		       Model-Driven Engineering Automata-based programming (Shalyto`s
          approach) V-Agent Oriented Programming (VAOP)
        </p>

        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Model-driven_engineering"
              target="_blank"
            >
              Model-Driven Engineering
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Automata-based_programming_(Shalyto's_approach)"
              target="_blank"
            >
              Automata-based programming (Shalyto`s approach)
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@vrakitine/introduction-to-v-agent-oriented-programming-vaop-4eca0f96d86b"
              target="_blank"
            >
              V-Agent Oriented Programming (VAOP)
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Functional_programming"
              target="_blank"
            >
              Functional Programming
            </a>
          </li>
        </ul>
      </div>

      <Cta />
    </Container>
  );
}
