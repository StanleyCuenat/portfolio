import type { MetaFunction } from "@remix-run/node";
import { System } from "~/ui";
import { Button, COLORS, Link } from "~/ui/system";
import { ALIGNMENT, FONT_WEIGHT } from "~/ui/system/Typography";
import {
  ExperienceCard,
  GradientBg,
  QualityCharterItem,
  BlogItem,
  PortfolioCard,
} from "~/ui/component";
import { PulseBorder, TypingAnimation } from "~/ui/animation";
import {
  AlchemyIcon,
  ArrowRightCircleIcon,
  CalendarIcon,
  CommitmentIcon,
  FlexibilityIcon,
} from "~/ui/icons";
import {
  github,
  innosonianHome,
  jobypepperHome,
  linkedin,
  malt,
  nomadherHome,
  packativeHome,
  redux,
  tdd,
} from "~/ui/img";
import { getPortfolioHome } from "~/.server/portfolio";
import { getStackList } from "~/.server/stack";
import { useLoaderData } from "@remix-run/react";

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
  ];
};

export default function Index() {
  const { portfolioList, stackList } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4 2xl:px-40">
      <div className="flex flex-col gap-24 md:gap-40 lg:my-24 z-10">
        <header className="flex flex-row">
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
                    color={System.COLORS.RED}
                    weight={FONT_WEIGHT.EXTRA_BOLD}
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
              <PulseBorder
                className="rounded-full"
                colors={["#ff4545", "#00ff99", "#006aff", "#ff0095", "#ff4545"]}
              >
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
                className="w-[40px] h-[40px] rounded-full bg-main-red duration-200 hover:shadow-md cursor-pointer z-10"
              >
                <img
                  src={malt}
                  className="object-contain rounded-full"
                  alt="malt profile page"
                />
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://linkedin.com/in/stanislas-cuenat-8939b3110"
                className="w-[40px] h-[40px] duration-200 hover:shadow-md cursor-pointer rounded-full z-10"
              >
                <img
                  src={linkedin}
                  className="object-fit"
                  alt="linkedin profile page"
                />
              </Link>
              <Link
                rel="noreferrer"
                target="_blank"
                to="https://github.com/StanleyCuenat"
                className="w-[40px] h-[40px] duration-200 hover:shadow-md cursor-pointer rounded-full z-10"
              >
                <img
                  src={github}
                  className="object-fit"
                  alt="github profile page"
                />
              </Link>
            </div>
          </div>
        </header>
        <section className="flex flex-col gap-7">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.EXTRA_BOLD}
          >
            About me
          </System.Typography>
          <div className="flex flex-col gap-3 max-w-[800px]">
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              I am a French full-stack engineer based in Seoul, South Korea,
              with a Master’s degree in Computer Science and over six years of
              professional experience. My career has been dedicated to web and
              mobile development, primarily working with startups ranging from
              early-stage ventures to Series A. As a detail-oriented developer,
              I strive to create robust and well-tested codebases. <br />
              My ultimate goal as a developer is to deliver products that
              provide the highest level of satisfaction to users and customers.
              <br />
              <br />
              Some of my notable references include:
            </System.Typography>
            <ul className="list-disc ml-4">
              <li>
                <System.Typography
                  type={System.TYPOGRAPHY.CONTENT}
                  color={System.COLORS.GREY}
                  weight={FONT_WEIGHT.REGULAR}
                >
                  <a
                    href="https://www.nomadher.com/"
                    className="text-main-black"
                  >
                    Nomadher
                  </a>{" "}
                  (published in forbes, first app for solo women travelers,
                  supported by Google with more than 200k users).
                </System.Typography>
              </li>
              <li>
                <System.Typography
                  type={System.TYPOGRAPHY.CONTENT}
                  color={System.COLORS.GREY}
                  weight={FONT_WEIGHT.REGULAR}
                >
                  <a
                    href="https://innosonian.global/"
                    className="text-main-black"
                  >
                    Innosonian
                  </a>{" "}
                  (Asian leader for connected CPR mannekin).
                </System.Typography>
              </li>
              <li>
                <System.Typography
                  type={System.TYPOGRAPHY.CONTENT}
                  color={System.COLORS.GREY}
                  weight={FONT_WEIGHT.REGULAR}
                >
                  <a
                    href="https://www.jobypepper.com/"
                    className="text-main-black"
                  >
                    JobyPepper
                  </a>{" "}
                  (French leader in student jobs).
                </System.Typography>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-7">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.EXTRA_BOLD}
          >
            My technical stack
          </System.Typography>
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
            className="max-w-[800px]"
          >
            Below is a curated list of the frameworks, tools, and technologies
            I’ve mastered, showcasing my ability to adapt and innovate across
            diverse projects. Whether it’s frontend, backend, or infrastructure,
            these are the building blocks of my expertise.
          </System.Typography>
          <div className="flex flex-row flex-wrap gap-4 z-10 max-w-[800px] ">
            {stackList.map((stack) => (
              <a
                key={stack.name}
                href={stack.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full hover:shadow-card duration-200 w-24 h-24 flex items-center justify-center"
              >
                <img
                  src={stack.img}
                  alt={stack.name}
                  className="w-20 h-20 object-contain"
                />
              </a>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-7">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.EXTRA_BOLD}
          >
            Portfolio
          </System.Typography>
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
            className="max-w-[800px]"
          >
            This section provides a curated selection of my completed projects.
            While not exhaustive, it showcases the diversity of my work and the
            commitment I bring to each endeavor. Each project reflects the
            dedication and attention to detail I strive to uphold.
          </System.Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 z-10">
            {portfolioList.map((portfolio) => (
              <PortfolioCard
                key={portfolio.id}
                title={portfolio.title}
                img={portfolio.imgs[0] ?? ""}
                url={`/portfolio/${portfolio.id}`}
              />
            ))}
          </div>
          <Link to="/portfolio" className="ml-auto" target="_self">
            See more <ArrowRightCircleIcon className="h-6 w-6 ml-2" />
          </Link>
        </section>

        <section className="flex flex-col gap-7">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.EXTRA_BOLD}
          >
            Quality Charter for my delivery
          </System.Typography>
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
            className="max-w-[800px]"
          >
            Building trust with my clients is fundamental to my approach. I
            believe that trust is earned through consistency, transparency, and
            dedication. To honor this, I hold myself accountable to the same
            quality standards outlined in this charter. For all my services, I
            commit to delivering quality work in line with the following
            charter:
          </System.Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 z-20">
            <QualityCharterItem
              icon={<CalendarIcon className="text-white w-6 h-6" />}
              title="Daily Delivery"
              content="See everyday almost in real time how your product
                  evolve."
            />
            <QualityCharterItem
              icon={<AlchemyIcon className="text-white w-6 h-6" />}
              title="Fully Tested"
              content="With TDD (Test Driven Development) your code will be totally
                  and deeply tested."
            />
            <QualityCharterItem
              icon={<FlexibilityIcon className="text-white w-6 h-6" />}
              title="Flexibility"
              content="Flexibility on expected scopes (need to pivot? No problem! An
                  emergency? We’ll change direction)."
            />

            <QualityCharterItem
              icon={<CommitmentIcon className="text-white w-6 h-6" />}
              title="Commitment"
              content="Someone truly committed in your project, Trying before
                  everything to understand your Business domain."
            />
          </div>
        </section>
        <section className="flex flex-col gap-7">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.EXTRA_BOLD}
          >
            Blog
          </System.Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BlogItem
              href="/blog/redux"
              img={redux}
              title="Redux is not about caching"
              preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex dolor, pellentesque nec odio vel, venenatis dictum lacus..."
            />
            <BlogItem
              href="/blog/tdd"
              img={tdd}
              title="Why TDD help you go fast"
              preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex dolor, pellentesque nec odio vel, venenatis dictum lacus..."
            />
            <BlogItem
              href="/blog/fp"
              img={redux}
              title="Functional programming for business logic"
              preview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex dolor, pellentesque nec odio vel, venenatis dictum lacus..."
            />
          </div>
          <Link to="/blog" className="ml-auto" target="_self">
            See more <ArrowRightCircleIcon className="h-6 w-6 ml-2" />
          </Link>
        </section>

        <section className="flex flex-col gap-7">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.EXTRA_BOLD}
          >
            Experiences
          </System.Typography>
          <div className="flex flex-col gap-5">
            <ExperienceCard
              title="Freelance - Fullstack engineer"
              dateStart="June 2024"
              dateEnd="Now"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sapien a turpis vestibulum consequat. Fusce accumsan libero vitae massa dapibus bibendum. Fusce condimentum dapibus lacus nec dictum. Phasellus sit amet urna tincidunt, posuere turpis eget, fringilla neque. Quisque sit amet erat eros. In ac velit non tellus volutpat gravida eu nec nisl. Proin tempus erat sed sodales porta. Quisque sed tortor dui. Nunc sodales ac ante sit amet pulvinar. Aliquam id justo vestibulum, viverra quam sit amet, maximus ipsum. Aliquam lacinia nunc nec consequat porttitor."
              competences={[
                "React",
                "React Native",
                "Next.JS",
                "Redux",
                "RTK",
                "Nest.JS",
                "GCP",
                "AWS",
                "Firebase",
                "Firestore",
                "ElasticSearch",
                "TDD",
              ]}
              link="https://www.malt.fr/profile/stanislascuenat"
            />
            <ExperienceCard
              title="SicPama - Fullstack engineer"
              dateStart="November 2023"
              dateEnd="June 2024"
              content="Refactoring and improving the customer-end application and the KDS (kitchen display system):
 from a half JS/TS React application to a full TS React application.
Reviewing the state managers using normalized data.
Applying basic functional programming rules for handling effects (Result and Option Monad) and reworking many core system into pure and functional ones.
Fixing more than 500 compilation warnings on both front end.
Working with the CTO, we refactored:
 the Backend to follow clean architecture and SOLID principles.
the Unit Test System trying to be as much as possible data driven and testing the business logic instead of the integration part.
Fixing bugs.
Creation and integration of a Coupon/Reward system totally data driven.
Creation and integration of a Menu management System.
Creation and integration of an Inventory System."
              competences={[
                "React",
                "Next.JS",
                "Zustand",
                "Node.JS",
                "TDD",
                "AWS",
                "FingerPrint",
                "Websocket",
                "PostgreSQL",
                "Responsive Design",
              ]}
              link="https://www.sicpama.com/en"
            />
            <ExperienceCard
              title="NomadHer - Head Of Tech"
              dateStart="April 2022"
              dateEnd="November 2023"
              content="From 500 to +200 000 users.
Managing alone a fast growing Social network.
Maintained and added new features on the React-native mobile application with Firebase suite and Typescript.
 Back-end API with Nest.JS, hosted on cloud run function (GCP), totally developed with TDD and clean architecture.
Migrated the application business logic from the Firebase mobile SDK to our backend services without any service interruption.
Refactored the GCP environment, setup IAM roles for both production environments and our CI/CD.
Reservation, ticketing and payment services with Stripe, GCP Cloud Task and Firestore.
CI/CD with Github actions.
Application releases automated on both App Store & Play Store.
ElasticSearch cluster hosted on GCP, with data indexation automated from Firestore.
Multiple Kibana dashboards with Data Views.
Refactoring our NoSQL DB architecture (data normalization & denormalization)"
              competences={[
                "React",
                "React Native",
                "Redux",
                "RTK",
                "Nest.JS",
                "GCP",
                "Firebase",
                "Firestore",
                "ElasticSearch",
                "TDD",
              ]}
              link="https://nomadher.com/"
            />
            <ExperienceCard
              title="Innosonian - Frontend engineer"
              dateStart="September 2020"
              dateEnd="April 2022"
              content="Creation of the Innosonian CPR web application with Web Bluetooth protocol, React.JS Redux-Saga and Typescript.
Online classes platform with WebRTC protocol.
Integration and communication with the REST API. 
Small maintenances on the previous old Swift mobile application."
              competences={[
                "React",
                "Redux",
                "Redux Saga",
                "Web Bluetooth",
                "WebRTC",
                "Realtime",
                "TDD",
                "MySQL",
                "Swift",
              ]}
              link="https://innosonian.global/"
            />
            <ExperienceCard
              title="Freelance - Fullstack engineer"
              dateStart="September 2018"
              dateEnd="September 2020"
              content="SmartMeUp (August 2020 - September 2020) 
Small mission where I had to create an internal KPI dashboard handling external data from connected cars. The dashboard was created with Vue.JS (2) and Python
Hetchr (October 2019 - July 2020)
First version of the Hetchr (became www.ninefive.io) SAAS application with React.JS, Redux, ExpressJS, Typescript and PostgreSQL hosted on AWS.
Deescut (January 2019 - May 2019)
First version of a debate web app. I worked on the first front end version with React.JS  Redux-saga and Typescript."
              competences={[
                "React",
                "Redux",
                "Redux Saga",
                "AWS",
                "Node.JS",
                "PostgreSQL",
                "Express.JS",
                "TDD",
                "Webhook",
              ]}
              link="https://www.malt.fr/profile/stanislascuenat"
            />
          </div>
        </section>
      </div>
      <GradientBg position="top-[-387px] left-[-387px]" />
      <GradientBg position="top-[800px] right-[-600px] bg-custom-dot bg-[length:4px_4px]" />
      <GradientBg position="top-[1800px] left-[-387px]" />
      <GradientBg position="bottom-[1600px] left-[-600px]" />
      <GradientBg position="bottom-[800px] right-[-600px]" />
      <GradientBg position="bottom-[200px] left-[87px]" />
    </div>
  );
}
