import Link from 'next/link';
import Image from 'next/image';

const TeamMember = ({ team }) => {
	
  return (
    <div className="axil-team">
      <div className="inner">
        <div className="thumbnail paralax-image">
          {/* <Link href={`/team/${team.id}`}> */}

          <Image
            width={600}
            height={560}
            className="w-100"
            src={team.image}
            alt="Team Images"
          />
        </div>
        <div className="content">
          <h4 className="text-xl">
            {/* <Link href={`/team/${team.id}`}> */}
            {team.name}
          </h4>
          <p className="subtitle">{team.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
