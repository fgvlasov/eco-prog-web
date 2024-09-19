import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: 'Eco-Programming Alliance: Seven Core Principles',
  desc: 'As members of the Eco-Programming Alliance, we pledge to uphold and follow these guiding principles to create a sustainable and eco-conscious future in software development:',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Sustainability First',
      desc: 'We commit to prioritizing the reduction of environmental impact in every phase of software development, from design through deployment.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Energy Efficiency',
      desc: 'We pledge to develop and adopt algorithms and technologies that minimize energy consumption and carbon emissions.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Code Efficiency',
      desc: 'We promise to write clear, efficient, and maintainable code that avoids unnecessary complexity, ensuring minimal resource waste.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Long-Term Focus',
      desc: 'We vow to design software that is easy to maintain, update, and extend, reducing the need for resource-intensive redevelopment.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Modularity and Reusability',
      desc: 'We commit to building modular and reusable components to maximize adaptability and reduce redundant development efforts.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Education and Advocacy',
      desc: 'We dedicate ourselves to promoting education on sustainable programming practices and advocating for eco-friendly technology adoption across the industry.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Collaborative Progress',
      desc: 'We are committed to collaborating with developers, companies, and organizations to establish and promote standards that enhance environmental responsibility in software development.',
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const teamList = {
  team: [
    {
      id: 1,
      name: 'Valeri Rakitine',
      image: '/img/team/val_850_850.jpg',
      designation: 'Founder and Initiator',
      department: ['Management'],
      socials: [
        { type: 'facebook', url: '#' },
        { type: 'twitter', url: '#' },
        { type: 'pinterest', url: '#' },
        { type: 'linkedin', url: '#' },
        { type: 'instagram', url: '#' },
        { type: 'vimeo', url: '#' },
        { type: 'dribble', url: '#' },
        { type: 'behance', url: '#' },
      ],
      introduction:
        'Phasellus in libero et nunc malesuada tincidunt. Morbi auctor tristique semper. Nunc condimentum dapibus felis, non volutpat ligula dapibus non. Quisque varius massa magna, eget iaculis ipsum tincidunt sed. Sed tempus magna id nunc posuere auctor. Morbi aliquam a justo eget cursus. Donec at quam id ex mollis dapibus eget ac sem. Maecenas pharetra bibendum massa, ut tincidunt lectus.',
    },
    {
      id: 2,
      name: 'Fedor Vlasov ',
      image: '/img/team/ted.jpg',
      designation: 'CEO',
      department: ['Management', 'Frontend'],
      socials: [
        { type: 'facebook', url: '#' },
        { type: 'twitter', url: '#' },
        { type: 'pinterest', url: '#' },
        { type: 'linkedin', url: '#' },
        { type: 'instagram', url: '#' },
        { type: 'vimeo', url: '#' },
        { type: 'dribble', url: '#' },
        { type: 'behance', url: '#' },
      ],
      introduction:
        'Phasellus in libero et nunc malesuada tincidunt. Morbi auctor tristique semper. Nunc condimentum dapibus felis, non volutpat ligula dapibus non. Quisque varius massa magna, eget iaculis ipsum tincidunt sed. Sed tempus magna id nunc posuere auctor. Morbi aliquam a justo eget cursus. Donec at quam id ex mollis dapibus eget ac sem. Maecenas pharetra bibendum massa, ut tincidunt lectus.',
    },
    {
      id: 3,
      name: 'Iryna Pyl ',
      image: '/img/user1.jpg',
      designation: 'ESG specialist',
      department: ['Management', 'App Developer'],
      socials: [
        { type: 'facebook', url: '#' },
        { type: 'twitter', url: '#' },
        { type: 'pinterest', url: '#' },
        { type: 'linkedin', url: '#' },
        { type: 'instagram', url: '#' },
        { type: 'vimeo', url: '#' },
        { type: 'dribble', url: '#' },
        { type: 'behance', url: '#' },
      ],
      introduction:
        'Phasellus in libero et nunc malesuada tincidunt. Morbi auctor tristique semper. Nunc condimentum dapibus felis, non volutpat ligula dapibus non. Quisque varius massa magna, eget iaculis ipsum tincidunt sed. Sed tempus magna id nunc posuere auctor. Morbi aliquam a justo eget cursus. Donec at quam id ex mollis dapibus eget ac sem. Maecenas pharetra bibendum massa, ut tincidunt lectus.',
    },
  ],
};


export {benefitOne, benefitTwo, teamList};
