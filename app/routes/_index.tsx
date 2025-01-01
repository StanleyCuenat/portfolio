import type { MetaFunction } from "@remix-run/node";
import { System } from "~/ui";
import { Button, COLORS, Link } from "~/ui/system";
import { ALIGNMENT, FONT_WEIGHT, Typography } from "~/ui/system/Typography";
import {
  ExperienceCard,
  GradientBg,
  QualityCharterItem,
  BlogItem,
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
  deno,
  firebase,
  gcp,
  github,
  gleam,
  hono,
  linkedin,
  malt,
  nextjs,
  react,
  reactNative,
  redux,
  reduxLogo,
  remixLogo,
  tdd,
  typescriptLogo,
} from "~/ui/img";

export const loader = async () => true;

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
  const STACK_LINK = [
    {
      name: "typescriptlang",
      img: typescriptLogo,
      href: "https://www.typescriptlang.org/",
    },
    {
      name: "gleam",
      img: gleam,
      href: "https://gleam.run/",
    },
    {
      name: "deno",
      img: deno,
      href: "https://deno.com/",
    },
    {
      name: "gcp",
      img: gcp,
      href: "https://cloud.google.com",
    },
    {
      name: "firebase",
      img: firebase,
      href: "https://firebase.google.com",
    },
    {
      name: "hono",
      img: hono,
      href: "https://hono.dev/",
    },
    {
      name: "react",
      img: react,
      href: "https://react.dev/",
    },
    {
      name: "react native",
      img: reactNative,
      href: "https://expo.dev/",
    },
    {
      name: "next.JS",
      img: nextjs,
      href: "https://nextjs.org/",
    },
    {
      name: "redux",
      img: reduxLogo,
      href: "https://redux-toolkit.js.org/",
    },
    {
      name: "remix",
      img: remixLogo,
      href: "https://remix.run/",
    },
  ];
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
                <Typography
                  color={COLORS.BLACK}
                  type={System.TYPOGRAPHY.H1}
                  weight={FONT_WEIGHT.EXTRA_BOLD}
                  alignment={ALIGNMENT.LEFT}
                >
                  +6
                </Typography>
                <Typography
                  color={COLORS.GREY}
                  type={System.TYPOGRAPHY.CONTENT}
                  weight={FONT_WEIGHT.LIGHT}
                  alignment={ALIGNMENT.LEFT}
                >
                  Year Of Experience
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  color={COLORS.BLACK}
                  type={System.TYPOGRAPHY.H1}
                  weight={FONT_WEIGHT.EXTRA_BOLD}
                  alignment={ALIGNMENT.LEFT}
                >
                  +9
                </Typography>
                <Typography
                  color={COLORS.GREY}
                  type={System.TYPOGRAPHY.CONTENT}
                  weight={FONT_WEIGHT.LIGHT}
                  alignment={ALIGNMENT.LEFT}
                >
                  Projects Completed
                </Typography>
              </div>
              <div className="flex flex-col">
                <Typography
                  color={COLORS.BLACK}
                  type={System.TYPOGRAPHY.H1}
                  weight={FONT_WEIGHT.EXTRA_BOLD}
                  alignment={ALIGNMENT.LEFT}
                >
                  +7
                </Typography>
                <Typography
                  color={COLORS.GREY}
                  type={System.TYPOGRAPHY.CONTENT}
                  weight={FONT_WEIGHT.LIGHT}
                  alignment={ALIGNMENT.LEFT}
                >
                  Worldwilde customer
                </Typography>
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
              French Freelance Engineer based in Seoul, South Korea. With more than 6 years of experiences I dedicated my career into web and mobile development. I mainly worked for startup ()
            </System.Typography>
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
          <Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
            className="max-w-[800px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
            sapien a turpis vestibulum consequat. Fusce accumsan libero vitae
            massa dapibus bibendum. Fusce condimentum dapibus lacus nec dictum.
            Phasellus sit amet urna tincidunt
          </Typography>
          <div className="flex flex-row flex-wrap gap-4 z-10 max-w-[800px] ">
            {STACK_LINK.map((stack) => (
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
            Quality Charter for my delivery
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
            />
            <ExperienceCard
              title="SicPama - Fullstack engineer"
              dateStart="November 2023"
              dateEnd="June 2024"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sapien a turpis vestibulum consequat. Fusce accumsan libero vitae massa dapibus bibendum. Fusce condimentum dapibus lacus nec dictum. Phasellus sit amet urna tincidunt, posuere turpis eget, fringilla neque. Quisque sit amet erat eros. In ac velit non tellus volutpat gravida eu nec nisl. Proin tempus erat sed sodales porta. Quisque sed tortor dui. Nunc sodales ac ante sit amet pulvinar. Aliquam id justo vestibulum, viverra quam sit amet, maximus ipsum. Aliquam lacinia nunc nec consequat porttitor."
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
            />
            <ExperienceCard
              title="NomadHer - Head Of Tech"
              dateStart="April 2022"
              dateEnd="November 2023"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sapien a turpis vestibulum consequat. Fusce accumsan libero vitae massa dapibus bibendum. Fusce condimentum dapibus lacus nec dictum. Phasellus sit amet urna tincidunt, posuere turpis eget, fringilla neque. Quisque sit amet erat eros. In ac velit non tellus volutpat gravida eu nec nisl. Proin tempus erat sed sodales porta. Quisque sed tortor dui. Nunc sodales ac ante sit amet pulvinar. Aliquam id justo vestibulum, viverra quam sit amet, maximus ipsum. Aliquam lacinia nunc nec consequat porttitor."
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
            />
            <ExperienceCard
              title="Innosonian - Lead Frontend"
              dateStart="September 2020"
              dateEnd="April 2022"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sapien a turpis vestibulum consequat. Fusce accumsan libero vitae massa dapibus bibendum. Fusce condimentum dapibus lacus nec dictum. Phasellus sit amet urna tincidunt, posuere turpis eget, fringilla neque. Quisque sit amet erat eros. In ac velit non tellus volutpat gravida eu nec nisl. Proin tempus erat sed sodales porta. Quisque sed tortor dui. Nunc sodales ac ante sit amet pulvinar. Aliquam id justo vestibulum, viverra quam sit amet, maximus ipsum. Aliquam lacinia nunc nec consequat porttitor."
              competences={[
                "React",
                "Redux",
                "Redux Saga",
                "Web Bluetooth",
                "WebRTC",
                "Realtime",
                "TDD",
                "MySQL",
                "Swift"
              ]}
            />
<ExperienceCard
              title="Freelance - Fullstack engineer"
              dateStart="September 2018"
              dateEnd="September 2020"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu sapien a turpis vestibulum consequat. Fusce accumsan libero vitae massa dapibus bibendum. Fusce condimentum dapibus lacus nec dictum. Phasellus sit amet urna tincidunt, posuere turpis eget, fringilla neque. Quisque sit amet erat eros. In ac velit non tellus volutpat gravida eu nec nisl. Proin tempus erat sed sodales porta. Quisque sed tortor dui. Nunc sodales ac ante sit amet pulvinar. Aliquam id justo vestibulum, viverra quam sit amet, maximus ipsum. Aliquam lacinia nunc nec consequat porttitor."
              competences={[
                "React",
                "Redux",
                "Redux Saga",
                "AWS",
                "Node.JS",
                "PostgreSQL",
                "Express.JS",
                "TDD",
                "Webhook"
              ]}
            />
          </div>
        </section>
      </div>
      <GradientBg position="top-[-387px] left-[-387px]" />
      <GradientBg position="top-[800px] right-[-600px] bg-custom-dot bg-[length:4px_4px]" />
      <GradientBg position="top-[1800px] left-[-387px]" />
      <GradientBg position="bottom-[200px] right-[-600px]" />
      <GradientBg position="bottom-[200px] left-[87px]" />
    </div>
  );
}
