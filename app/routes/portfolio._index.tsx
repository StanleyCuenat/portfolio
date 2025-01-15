import { useLoaderData } from "@remix-run/react";
import { getPortfolioList } from "~/.server/portfolio";
import { System } from "~/ui";
import { ALIGNMENT, FONT_WEIGHT } from "~/ui/system/Typography";
import { motion } from "framer-motion";
import { MetaFunction } from "@remix-run/node";
import { profile } from "~/ui/img";
import { PortfolioListItem } from "~/ui/component";

export const meta: MetaFunction = () => {
  return [
    { title: "Stanislas Cuenat - Portfolio" },
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

export const loader = async () => {
  const portfolioList = await getPortfolioList();
  return { portfolioList };
};

const PortfolioPage = () => {
  const { portfolioList } = useLoaderData<typeof loader>();
  return (
    <div className="w-screen bg-main-yellow">
      <div className="flex flex-col">
        <motion.header
          className="flex flex-col gap-10 px-4 md:px-6 lg:px-52 py-6 md:py-28 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
          viewport={{ once: true }}
        >
          <System.Typography
            type={System.TYPOGRAPHY.H1}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.BOLD}
            alignment={ALIGNMENT.CENTER}
          >
            Journey through my customers and projects
          </System.Typography>
          <System.Typography
            type={System.TYPOGRAPHY.SUB}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.LIGHT}
            alignment={ALIGNMENT.CENTER}
          >
            Discover a showcase of creative projects that merge innovation with
            practicality, from web to cutting-edge mobile app development!
          </System.Typography>
        </motion.header>
        <div className="flex flex-col justify-center items-center gap-16 mx-4 my-28">
          {portfolioList.map((portfolio) => (
            <PortfolioListItem portfolio={portfolio} key={portfolio.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
