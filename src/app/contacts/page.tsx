import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Cta } from '@/components/Cta';
import Contacts from '@/components/Contacts';


export default function PageContacts() {
  return (
    <Container>
      <SectionTitle
        preTitle="Eco-programming Contact Form"
        title="If you have any questions, you can ask them in this form, or contact us using the contact information below."
      />
      <div className="mx-auto max-w-2xl mb-10">
        <Contacts />
      </div>

      <Cta />
    </Container>
  );
}
