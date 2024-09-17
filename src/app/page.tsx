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
        preTitle="Bringing Visibility to the Unseen: Eco-Programming for a Sustainable Digital Future"
        title="We are pleased to invite in our Alliance"
      >
        Eco-programming is more than just an approach to development — it`s a
        commitment to the future. By adopting this methodology, you not only
        create efficient, adaptable software but also minimize environmental
        impact. <i>The eco-programming paradigm is poised to reshape how investors assess companies.</i>
        <div>
          <a
            href="/invitation"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mt-3 mx-auto text-lg font-medium text-center text-white bg-indigo-600 rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Invitation
          </a>
        </div>
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
