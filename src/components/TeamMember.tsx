import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';

interface Social {
  type: string;
  url: string;
}

interface Team {
  id: number;
  name: string;
  designation: string;
  image: string;
  department: string[];
  socials: Social[];
  introduction: string;
}

interface TeamMemberProps {
  team: Team;
}

const TeamMember: FC<TeamMemberProps> = ({ team }) => {
  return (
    <div className="axil-team">
      <div className="inner">
        <div className="thumbnail paralax-image">
          {/* Uncomment the Link component if needed */}
          {/* <Link href={`/team/${team.id}`}>
            <a>
          */}
          <Image
            width={600}
            height={560}
            className="w-100"
            src={team.image}
            alt="Team Images"
          />
          {/*    
            </a>
          </Link> */}
        </div>
        <div className="content">
          <h4 className="text-xl">
            {/* Uncomment the Link component if needed */}
            {/* <Link href={`/team/${team.id}`}>
              <a>
            */}
            {team.name}
            {/*    
              </a>
            </Link> */}
          </h4>
          <p className="subtitle">{team.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
