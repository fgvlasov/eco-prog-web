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
  desc: 'As members of the Eco-Programming Alliance, we pledge to uphold and follow these guiding principles to create a sustainable and eco-conscious future in software development. In this endeavor, we also recognize the growing role of artificial intelligence (AI) in shaping our technological landscape. Therefore, we must take on the responsibility of ensuring that the AI systems we create or interact with operate under eco-ethical guidelines. Since AI lacks moral judgment, it is up to developers to act as ethical stewards, ensuring that AI systems are designed, deployed, and used in ways that prioritize sustainability and ethical decision-making. With this commitment, we present our Seven Core Principles:',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Sustainability First',
      desc: 'We commit to prioritizing the reduction of environmental impact in every phase of software development, from design through deployment, ensuring AI systems align with these goals to promote sustainability across all areas of technology.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Energy Efficiency',
      desc: 'We pledge to develop and adopt algorithms and technologies that minimize energy consumption and carbon emissions, including those driving AI systems. AI tools must operate within eco-friendly parameters to reduce their environmental footprint.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Code Efficiency',
      desc: 'We promise to write clear, efficient, and maintainable code that avoids unnecessary complexity, ensuring minimal resource waste. In addition, AI models and tools should be implemented in alignment with these principles to ensure that they are part of the solution, not the problem.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Long-Term Focus',
      desc: 'We vow to design software and AI systems that are easy to maintain, update, and extend, reducing the need for resource-intensive redevelopment. Our focus is on creating adaptable, long-lasting solutions that ensure AI’s role in sustainability is enduring and resilient.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Modularity and Reusability',
      desc: 'We commit to building modular and reusable components for both software and AI systems. This maximizes adaptability, reduces redundant development efforts, and promotes environmentally conscious AI solutions that can be leveraged across projects.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Education, Advocacy, and AI Ethics',
      desc: 'We dedicate ourselves to promoting education on sustainable programming practices, eco-friendly technology adoption, and the ethical use of AI across the industry. Programmers must guide AI systems in ways that respect environmental sustainability, while upholding moral and ethical considerations.',
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: 'Collaborative Progress with AI',
      desc: 'We are committed to collaborating with developers, companies, and organizations to establish and promote standards that enhance environmental responsibility in software development. At the same time, we must ensure that AI tools and systems contribute positively to these efforts and are integrated into sustainable development strategies.',
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
      image: '/img/team/val_3.jpg',
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
      image: '/img/team/ted_4.jpg',
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
      image: '/img/team/pyl_3.jpg',
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
