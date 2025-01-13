import type { MetaFunction } from "@remix-run/node";
import { System } from "~/ui";
import { Button, COLORS, Link } from "~/ui/system";
import { ALIGNMENT, FONT_WEIGHT } from "~/ui/system/Typography";
import {
  ExperienceCard,
  QualityCharterItem,
  PortfolioCard,
  HomeSection,
  ServiceSection,
} from "~/ui/component";
import { PulseBorder, TypingAnimation } from "~/ui/animation";
import {
  AlchemyIcon,
  ArrowRightCircleIcon,
  CalendarIcon,
  CommitmentIcon,
  FlexibilityIcon,
} from "~/ui/icons";
import { github, linkedin, malt, profile } from "~/ui/img";
import { getPortfolioHome } from "~/.server/portfolio";
import { getStackList } from "~/.server/stack";
import { useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

export const loader = async () => {
  const portfolioList = await getPortfolioHome();
  const stackList = await getStackList();
  return { portfolioList, stackList };
};

export const meta: MetaFunction = () => {
  return [
    { title: "Stanislas Cuenat - Fullstack freelance developer" },
    {
      name: "Home page",
      content:
        "Stanislas Cuenat - Fullstack developer enjoying Functional programming, TDD and DDD. Building robust Web and Mobile applications from best practices with a dedication to understand your business.",
    },
    {
      property: "org:image",
      content: profile,
    },
  ];
};

export default function Index() {
  const { portfolioList, stackList } = useLoaderData<typeof loader>();
  return (
    <div className="w-screen">
      <div className="flex flex-col z-10">
        <header className="flex flex-row px-4  md:px-6 lg:px-52 py-12 md:py-20">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <System.Typography
                type={System.TYPOGRAPHY.H1}
                color={System.COLORS.BLACK}
                weight={FONT_WEIGHT.EXTRA_BOLD}
              >
                Stanislas Cuenat
              </System.Typography>

              <TypingAnimation
                text="Fullstack Freelance Engineer"
                withParent={(children) => (
                  <System.Typography
                    type={System.TYPOGRAPHY.H2}
                    color={System.COLORS.BLACK}
                    weight={FONT_WEIGHT.REGULAR}
                  >
                    {children}
                  </System.Typography>
                )}
              />
            </div>
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
              className="max-w-[600px]"
            >
              Fullstack engineer enjoying Functional programming with{" "}
              <TypingAnimation
                text="TDD and DDD"
                withParent={(children) => (
                  <System.Typography
                    type={System.TYPOGRAPHY.EMPHASE}
                    color={System.COLORS.BLACK}
                    weight={FONT_WEIGHT.EXTRA_BOLD}
                  >
                    {children}
                  </System.Typography>
                )}
              />
              . Building{" "}
              <TypingAnimation
                text="robust"
                withParent={(children) => (
                  <System.Typography
                    type={System.TYPOGRAPHY.EMPHASE}
                    color={System.COLORS.BLACK}
                    weight={FONT_WEIGHT.EXTRA_BOLD}
                  >
                    {children}
                  </System.Typography>
                )}
              />{" "}
              Web and Mobile applications from best practices with a dedication
              to{" "}
              <TypingAnimation
                text="understand your business."
                withParent={(children) => (
                  <System.Typography
                    type={System.TYPOGRAPHY.EMPHASE}
                    color={System.COLORS.BLACK}
                    weight={FONT_WEIGHT.EXTRA_BOLD}
                  >
                    {children}
                  </System.Typography>
                )}
              />
            </System.Typography>
            <div className="flex flex-row gap-x-8">
              <div className="flex flex-col">
                <System.Typography
                  color={COLORS.BLACK}
                  type={System.TYPOGRAPHY.H1}
                  weight={FONT_WEIGHT.EXTRA_BOLD}
                  alignment={ALIGNMENT.LEFT}
                >
                  +6
                </System.Typography>
                <System.Typography
                  color={COLORS.GREY}
                  type={System.TYPOGRAPHY.CONTENT}
                  weight={FONT_WEIGHT.LIGHT}
                  alignment={ALIGNMENT.LEFT}
                >
                  Years of experience
                </System.Typography>
              </div>
              <div className="flex flex-col">
                <System.Typography
                  color={COLORS.BLACK}
                  type={System.TYPOGRAPHY.H1}
                  weight={FONT_WEIGHT.EXTRA_BOLD}
                  alignment={ALIGNMENT.LEFT}
                >
                  +9
                </System.Typography>
                <System.Typography
                  color={COLORS.GREY}
                  type={System.TYPOGRAPHY.CONTENT}
                  weight={FONT_WEIGHT.LIGHT}
                  alignment={ALIGNMENT.LEFT}
                >
                  Projects completed
                </System.Typography>
              </div>
              <div className="flex flex-col">
                <System.Typography
                  color={COLORS.BLACK}
                  type={System.TYPOGRAPHY.H1}
                  weight={FONT_WEIGHT.EXTRA_BOLD}
                  alignment={ALIGNMENT.LEFT}
                >
                  +7
                </System.Typography>
                <System.Typography
                  color={COLORS.GREY}
                  type={System.TYPOGRAPHY.CONTENT}
                  weight={FONT_WEIGHT.LIGHT}
                  alignment={ALIGNMENT.LEFT}
                >
                  Worldwide customers
                </System.Typography>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <PulseBorder className="rounded-full" colors={[]}>
                <Link
                  rel="noreferrer"
                  target="_blank"
                  to="https://linkedin.com/in/stanislas-cuenat-8939b3110"
                  className="no-underline"
                >
                  <Button color={COLORS.BLACK} className="z-20">
                    Contact me
                  </Button>
                </Link>
              </PulseBorder>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://malt.fr/profile/stanislascuenat"
                className="w-[40px] h-[40px] rounded-full cursor-pointer z-10"
              >
                <img
                  src={malt}
                  className="object-contain rounded-full grayscale hover:grayscale-0 duration-200"
                  alt="malt profile page"
                />
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://linkedin.com/in/stanislas-cuenat-8939b3110"
                className="w-[40px] h-[40px] duration-200 cursor-pointer rounded-full z-10"
              >
                <img
                  src={linkedin}
                  className="object-fit grayscale hover:grayscale-0 duration-200"
                  alt="linkedin profile page"
                />
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://github.com/StanleyCuenat"
                className="w-[40px] h-[40px] duration-200 cursor-pointer rounded-full z-10"
              >
                <img
                  src={github}
                  className="object-fit grayscale hover:grayscale-0 duration-200"
                  alt="github profile page"
                />
              </Link>
            </div>
          </div>
        </header>
        <HomeSection className="bg-main-yellow">
          <ServiceSection />
        </HomeSection>
        <HomeSection>
          <div className="flex flex-col gap-4">
            <System.Typography
              type={System.TYPOGRAPHY.H2}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              Quality Charter for my delivery
            </System.Typography>
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
              className="max-w-[600px]"
            >
              Building trust with my clients is fundamental to my approach. I
              believe that trust is earned through consistency, transparency,
              and dedication.
            </System.Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-y-8 z-20">
            <QualityCharterItem
              icon={<CalendarIcon className="text-main-black w-6 h-6" />}
              title="Daily Delivery"
              content="So you can see everyday almost in real time how your product
                  evolve."
            />
            <QualityCharterItem
              icon={<AlchemyIcon className="text-main-black w-6 h-6" />}
              title="Fully Tested"
              content="With TDD (Test Driven Development) your code will be totally
                  and deeply tested."
            />
            <QualityCharterItem
              icon={<FlexibilityIcon className="text-main-black w-6 h-6" />}
              title="Flexibility"
              content="On expected scopes but also on the schedule! I adapt myself to your need."
            />

            <QualityCharterItem
              icon={<CommitmentIcon className="text-main-black w-6 h-6" />}
              title="Commitment"
              content="Someone truly committed in your project, Trying before
                  everything to understand your Business domain."
            />
          </div>
        </HomeSection>
        <HomeSection direction="row">
          <div className="flex flex-col gap-4">
            <System.Typography
              type={System.TYPOGRAPHY.H2}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              My technical stack
            </System.Typography>
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
              className="max-w-[600px]"
            >
              Below is a curated list of the frameworks, tools, and technologies
              I’ve mastered, showcasing my ability to adapt and innovate across
              diverse projects.
            </System.Typography>
          </div>
          <div className="flex flex-row flex-wrap z-10 w-full lg:w-2/3 lg:ml-auto lg:justify-end">
            {stackList.map((stack) => (
              <motion.a
                key={stack.name}
                href={stack.href}
                target="_blank"
                rel="noreferrer"
                className="group relative duration-200 p-4 flex items-center justify-center border border-main-gray"
              >
                <img
                  src={stack.img}
                  alt={stack.name}
                  className="w-16 h-16 object-contain group-hover:blur-sm grayscale group-hover:grayscale-0"
                />
                <div className="absolute opacity-0 group-hover:opacity-40 bg-main-black duration-200 w-full h-full" />
                <System.Typography
                  type={System.TYPOGRAPHY.SMALL}
                  color={System.COLORS.WHITE}
                  weight={FONT_WEIGHT.BOLD}
                  className="absolute opacity-0 flex self-center group-hover:opacity-100  z-20"
                >
                  {stack.name}
                </System.Typography>
              </motion.a>
            ))}
          </div>
        </HomeSection>
        <HomeSection className="bg-main-yellow">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
            alignment={ALIGNMENT.LEFT}
          >
            Selected work
          </System.Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 z-10">
            {portfolioList.map((portfolio) => (
              <PortfolioCard
                date={portfolio.date}
                description={portfolio.description}
                key={portfolio.id}
                title={portfolio.title}
                img={portfolio.imgs[0] ?? ""}
                url={portfolio.url}
                content={portfolio.content}
              />
            ))}
          </div>
          <Link to="/portfolio" className="ml-auto z-10" target="_self">
            See more <ArrowRightCircleIcon className="h-6 w-6 ml-2" />
          </Link>
        </HomeSection>

        <HomeSection className="">
          <div className="flex flex-col-reverse md:flex-row-reverse md:justify-center items-center gap-12">
            <div className=" flex shrink-1 min-w-0 flex-col max-w-[600px] gap-6">
              <System.Typography
                type={System.TYPOGRAPHY.H2}
                color={System.COLORS.BLACK}
                weight={FONT_WEIGHT.REGULAR}
              >
                Who am I ?
              </System.Typography>
              <System.Typography
                type={System.TYPOGRAPHY.CONTENT}
                color={System.COLORS.GREY}
                weight={FONT_WEIGHT.REGULAR}
              >
                I am a French full-stack engineer based in Seoul, South Korea,
                with a Master’s degree in Computer Science and over six years of
                professional experience. <br />
                <br />
                My career has been dedicated to web and mobile development. As a
                detail-oriented developer, I strive to create robust and
                well-tested codebases. <br />
                <br />
                My ultimate goal as a developer is to deliver products that
                provide the highest level of satisfaction to users and
                customers.
              </System.Typography>
            </div>
            <div className="hidden md:flex shrink-0  rounded-full h-[150px] w-[150px] md:h-[360px] md:w-[360px]">
              <img
                src={profile}
                alt="profile picture"
                className="object-cover rounded-full h-[150px] w-[150px] md:h-[360px] md:w-[360px]"
              />
            </div>
          </div>
        </HomeSection>
        <HomeSection className="bg-main-yellow">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
          >
            Experiences
          </System.Typography>
          <div className="flex flex-col gap-7">
            <ExperienceCard
              location="Seoul - South Korea"
              title="Freelance - Fullstack engineer"
              dateStart="June 2024"
              dateEnd="Now"
              competences={[
                "React",
                "React Native",
                "Next.JS",
                "Redux",
                "Nest.JS",
                "GCP",
                "AWS",
                "Firebase",
              ]}
              link="https://www.malt.fr/profile/stanislascuenat"
            />
            <ExperienceCard
              location="Seoul - South Korea"
              title="SicPama - Fullstack engineer"
              dateStart="November 2023"
              dateEnd="June 2024"
              competences={[
                "React",
                "Next.JS",
                "Zustand",
                "Node.JS",
                "AWS",
                "PostgreSQL",
              ]}
              link="https://www.sicpama.com/en"
            />
            <ExperienceCard
              location="Seoul - South Korea"
              title="NomadHer - Head Of Tech"
              dateStart="April 2022"
              dateEnd="November 2023"
              competences={[
                "React Native",
                "Redux",
                "Nest.JS",
                "GCP",
                "Firebase",
                "ElasticSearch",
              ]}
              link="https://nomadher.com/"
            />
            <ExperienceCard
              location="Seoul - South Korea"
              title="Innosonian - Frontend engineer"
              dateStart="September 2020"
              dateEnd="April 2022"
              competences={[
                "React",
                "Redux",
                "Web Bluetooth",
                "WebRTC",
                "MySQL",
                "Swift",
              ]}
              link="https://innosonian.global/"
            />
            <ExperienceCard
              location="Lyon - France"
              title="Freelance - Fullstack engineer"
              dateStart="September 2018"
              dateEnd="September 2020"
              competences={["React", "Redux", "AWS", "Node.JS", "PostgreSQL"]}
              link="https://www.malt.fr/profile/stanislascuenat"
            />
          </div>
        </HomeSection>
        <HomeSection className="justify-center">
          <System.Typography
            type={System.TYPOGRAPHY.SUB}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
            alignment={ALIGNMENT.CENTER}
          >
            Have a Project ?
          </System.Typography>
          <System.Typography
            type={System.TYPOGRAPHY.H1}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
            alignment={ALIGNMENT.CENTER}
          >
            Let's talk with me !
          </System.Typography>
          <Link
            rel="noreferrer"
            target="_blank"
            to="https://linkedin.com/in/stanislas-cuenat-8939b3110"
            className="no-underline flex basis-auto shrink-1 grow-1 items-center justify-center mt-6"
          >
            <Button color={COLORS.BLACK} className="z-20">
              Contact me
            </Button>
          </Link>
        </HomeSection>
      </div>
    </div>
  );
}
