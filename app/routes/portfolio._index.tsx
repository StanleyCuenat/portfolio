import { Link, useLoaderData } from "@remix-run/react";
import { getPortfolioList, PortfolioItem } from "~/.server/portfolio";
import { System } from "~/ui";
import { ALIGNMENT, FONT_WEIGHT } from "~/ui/system/Typography";
import { motion } from "framer-motion";
import { COLORS } from "~/ui/system";
type PortfolioItemProps = {
  portfolio: PortfolioItem;
};

const PortfolioListItem = (props: PortfolioItemProps) => {
  return (
    <motion.section
      className="flex flex-col  gap-10 px-4 md:px-6 lg:px-52 py-12 md:py-16"
      initial={{ opacity: 0, marginTop: 200 }}
      whileInView={{ opacity: 1, marginTop: 0 }}
      transition={{ duration: 0.5, delay: 0, ease: "easeIn" }}
      viewport={{ once: true }}
    >
      <img
        src={props.portfolio.imgs[0]}
        className="object-cover rounded-xl max-h-[400px]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="flex flex-col gap-7">
          <System.Typography
            type={System.TYPOGRAPHY.H2}
            color={System.COLORS.BLACK}
            weight={FONT_WEIGHT.REGULAR}
          >
            {props.portfolio.title}
          </System.Typography>
          <System.Typography
            type={System.TYPOGRAPHY.CONTENT}
            color={System.COLORS.GREY}
            weight={FONT_WEIGHT.REGULAR}
          >
            {props.portfolio.intro}
          </System.Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
          <div className="flex flex-col">
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              Client
            </System.Typography>
            <System.Typography
              type={System.TYPOGRAPHY.SUB}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              {props.portfolio.title}
            </System.Typography>
          </div>
          <div className="flex flex-col ">
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              Work type
            </System.Typography>
            <System.Typography
              type={System.TYPOGRAPHY.SUB}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              {props.portfolio.type}
            </System.Typography>
          </div>
          <div className="flex flex-col">
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              Dates
            </System.Typography>
            <System.Typography
              type={System.TYPOGRAPHY.SUB}
              color={System.COLORS.BLACK}
              weight={FONT_WEIGHT.REGULAR}
            >
              {props.portfolio.date}
            </System.Typography>
          </div>

          <div className="flex flex-col">
            <System.Typography
              type={System.TYPOGRAPHY.CONTENT}
              color={System.COLORS.GREY}
              weight={FONT_WEIGHT.REGULAR}
            >
              Link
            </System.Typography>
            <Link to={props.portfolio.url}>
              <System.Typography
                className="mr-12"
                type={System.TYPOGRAPHY.SUB}
                color={System.COLORS.BLACK}
                weight={FONT_WEIGHT.REGULAR}
              >
                Website
              </System.Typography>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Link to={`/portfolio/${props.portfolio.id}`}>
            <System.Button color={COLORS.BLACK}>View detail</System.Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export const loader = async () => {
  const portfolioList = await getPortfolioList();
  return { portfolioList };
};

const PortfolioPage = () => {
  const { portfolioList } = useLoaderData<typeof loader>();
  return (
    <div className="w-screen bg-main-yellow">
      <div className="flex flex-col ">
        <motion.header
          className="flex flex-col gap-10 px-4 md:px-6 lg:px-52 py-6 md:py-12"
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
            weight={FONT_WEIGHT.REGULAR}
            alignment={ALIGNMENT.CENTER}
          >
            Discover a showcase of creative projects that merge innovation with
            practicality, from web to cutting-edge mobile app development!
          </System.Typography>
        </motion.header>
        {portfolioList.map((portfolio) => (
          <PortfolioListItem portfolio={portfolio} key={portfolio.id} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
