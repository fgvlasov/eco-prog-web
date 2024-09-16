import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { Cta } from '@/components/Cta';
import TeamMember from '@/components/TeamMember';
import { teamList } from '@/components/data';

export default function Invitation() {

  return (
    <Container>
      <SectionTitle
        preTitle="Eco-programming Alliance Team"
        title="We are pleased to announce our first Team members"
      />
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 mx-3 mb-6">
        {teamList.team?.map((team, teamIndex) => (
          <div
            className=" mt-[60px] sm:mt-[30px] lg:mt-[60px]"
            key={`team-${teamIndex}`}
          >
            <TeamMember team={team} />
          </div>
        ))}
      </div>

      <Cta />
    </Container>
  );
}
