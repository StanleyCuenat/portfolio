import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPortfolioById } from "~/.server/portfolio";
import { profile } from "~/ui/img";
import { motion } from "framer-motion";
import { System } from "~/ui";
import { FONT_WEIGHT } from "~/ui/system/Typography";
import { HomeSection, PortfolioSpecItem } from "~/ui/component";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params["id"];
  if (id === undefined) {
    throw new Response("Portfolio id not provided", { status: 500 });
  }
  const portfolio = await getPortfolioById(id);
  if (portfolio === undefined) {
    throw new Response("Portfolio item not found", { status: 404 });
  }
  return { portfolio };
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `Stanislas Cuenat - ${data?.portfolio.title}` },
    {
      name: "Portfolio",
      content:
        "Stanislas Cuenat - Web & mobile developer enjoying Functional programming, TDD and DDD. Building robust Web and Mobile applications from best practices with a dedication to understand your business.",
    },
    {
      property: "org:image",
      content: profile,
    },
  ];
};

const PortfolioDetail = () => {
  const { portfolio } = useLoaderData<typeof loader>();
  return (
    <div className="w-screen bg-main-yellow">
      <motion.header
        className="flex flex-col gap-20 px-4 md:px-6 lg:px-52 py-6 md:py-28 bg-white 2xl:px-96"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col gap-4">
          <System.Typography
            type={System.TYPOGRAPHY.H1}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.BOLD}
          >
            {portfolio.title}
          </System.Typography>

          <System.Typography
            type={System.TYPOGRAPHY.H3}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
          >
            {portfolio.description}
          </System.Typography>
        </div>
        <img
          src={portfolio.imgs[0]}
          className="object-cover max-h-[500px] rounded-xl"
        />
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <PortfolioSpecItem title="Client" content={portfolio.title} />
            <PortfolioSpecItem title="Work type" content={portfolio.type} />
            <PortfolioSpecItem title="Dates" content={portfolio.date} />
          </div>
          <div className="flex flex-col gap-2">
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              Technical stack
            </System.Typography>
            <div className="flex flex-row flex-wrap gap-2">
              {portfolio.technologies.map((tech) => (
                <System.Typography
                  key={tech}
                  type={System.TYPOGRAPHY.CONTENT}
                  color={System.COLORS.BLACK}
                  weight={FONT_WEIGHT.REGULAR}
                  className="border border-main-black rounded-full px-3 py-1"
                >
                  {tech}
                </System.Typography>
              ))}
            </div>
          </div>
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.LIGHT}
          >
            {portfolio.intro}
          </System.Typography>
        </div>
      </motion.header>
      <HomeSection className="gap-20">
        <div className="flex flex-col gap-6">
          <System.Typography
            type={System.TYPOGRAPHY.H3}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
          >
            {"Challenge"}
          </System.Typography>
          <System.Typography
            className="whitespace-pre-wrap"
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.LIGHT}
          >
            {portfolio.challenge}
          </System.Typography>
        </div>

        <div className="flex flex-col gap-6">
          <System.Typography
            type={System.TYPOGRAPHY.H3}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
          >
            {"Work"}
          </System.Typography>
          <System.Typography
            className="whitespace-pre-wrap"
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.LIGHT}
          >
            {portfolio.work}
          </System.Typography>
        </div>
        <div className="flex flex-col gap-6">
          <System.Typography
            type={System.TYPOGRAPHY.H3}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
          >
            Result and impact
          </System.Typography>
          <ul className="list-disc ml-4">
            {portfolio.result.map((res) => (
              <li className="mb-2">
                <System.Typography
                  key={res}
                  className="whitespace-pre-wrap "
                  type={System.TYPOGRAPHY.CONTENT}
                  color={System.COLORS.BLACK}
                  weight={FONT_WEIGHT.LIGHT}
                >
                  {res}
                </System.Typography>
              </li>
            ))}
          </ul>
        </div>
      </HomeSection>
    </div>
  );
};

export default PortfolioDetail;
