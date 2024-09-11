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
  title: 'Benefits of our Methodology',
  desc: 'Traditional software practices often result in unnecessary resource consumption and short-lived solutions. Eco-programming ensures your code is sustainable, scalable, and aligned with a greener digital future. The world is moving towards sustainability—your software should too.',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Sustainability',
      desc: 'Develop software that reduces waste and maximizes efficiency throughout its lifecycle, contributing to a greener planet.',
      icon: <FaceSmileIcon />,
    },
    {
      title: 'Future-Proof',
      desc: 'Eco-programming prioritizes long-lasting, adaptable code, lowering maintenance costs and reducing the need for frequent updates.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'Long-Term Savings',
      desc: 'Eco-programming prioritizes long-lasting, adaptable code, lowering maintenance costs and reducing the need for frequent updates.',
      icon: <ChartBarSquareIcon />,
    },
    {
      title: 'ESG Alignment',
      desc: 'Meet and exceed Environmental, Social, and Governance (ESG) standards, positioning your organization as a leader in sustainable tech.',
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


export {benefitOne, benefitTwo};
