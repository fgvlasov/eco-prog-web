"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: 'What is Eco-Programming?',
    answer:
      'Eco-programming is a methodology that focuses on developing software in a way that minimizes environmental impact. This includes creating adaptable, efficient code that reduces resource consumption and aligns with sustainable practices throughout the software lifecycle.',
  },
  {
    question: 'How does Eco-Programming benefit my organization?',
    answer:
      'Eco-programming reduces long-term costs by focusing on sustainability and adaptability, meaning your software requires fewer updates and consumes fewer resources over time. It also helps align your business with ESG (Environmental, Social, and Governance) metrics, appealing to environmentally-conscious clients and investors.',
  },
  {
    question:
      'Is eco-programming more expensive than traditional development? ',
    answer:
      'While initial costs may be similar, eco-programming offers significant savings over time. By creating software that’s designed for the long term, you reduce the need for frequent updates, lowering maintenance costs and increasing efficiency.',
  },
  {
    question: 'How can I start using eco-programming in my projects? ',
    answer:
      'You can begin by incorporating sustainable coding practices, choosing eco-friendly technologies, and partnering with the Eco-Programming Alliance for guidance and collaboration. We offer resources and community support to help your team adopt eco-programming principles.',
  },
  {
    question:
      'Does eco-programming apply to all types of software development?',
    answer:
      'Yes! Whether you`re building web applications, mobile apps, or complex systems, eco-programming principles can be applied across all software development sectors, ensuring sustainability in any project.',
  },
];
