import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { HyperText } from "@/components/ui/hyper-text";
import { WarpBackground } from "@/components/ui/warp-background";
import { Dot } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";
import rules from "@/data/rules.json";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import timeline from "@/data/timeline.json";
import { AuroraText } from "@/components/ui/aurora-text";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

function Landing() {
  const isNotSmall = useMediaQuery("(min-width: 640px)");
  const colors = [
    "#FF0000",
    "#0000FF",
    "#00FF00",
    "#CCCC00",
    "#00CCCC",
    "#FF00FF",
  ];

  const scrollToElement = (
    id: string,
    block: ScrollLogicalPosition = "center"
  ) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: block });
    }
  };

  return (
    <>
      <main className="w-fit h-fit mx-4">
        {/* LANDING */}
        <div className="h-[100dvh] w-fit flex flex-col justify-center mx-8 sm:mx-40">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Innovera<span className="text-[#5046e6]">.</span>
              <HyperText duration={1} className="text-neutral-600">
                Hack. Create. Innovate.
              </HyperText>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              Hackathon for{" "}
              <span className="text-[#5046e6]">the innovators</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6 ml-4 sm:ml-0">
              <p>
                -&gt; Hackathon begins on
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  2nd march
                </span>{" "}
                at
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  KK Wagh Institute of Engineering, Education & Research
                </span>
                <br />
                -&gt; Stay tuned for further updates. <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="z-10 flex items-center justify-start mt-4">
              <div
                className={cn(
                  "group rounded-full border border-neutral-300 bg-neutral-200 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-300"
                )}>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-neutral-500 hover:duration-300">
                  <span>✨ Registration starts soon</span>
                </AnimatedShinyText>
              </div>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button
              className="mt-[1.6rem] bg-[#5046e6]"
              onClick={() => scrollToElement("about", "start")}>
              Explore
            </Button>
          </BoxReveal>
        </div>

        {/* ABOUT */}
        {isNotSmall ? (
          <WarpBackground>
            <AboutSection />
          </WarpBackground>
        ) : (
          <AboutSection />
        )}

        {/* RULES AND REGS */}
        <section className="sm:mx-8">
          <h1 className="text-neutral-700 text-5xl text-center font-semibold my-12">
            <AuroraText>Rules & Regulations</AuroraText>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rules.map((rule, index) => (
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: colors[index] }}></div>

                <Card className="relative z-10 hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300 hover:cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle
                      className="font-semibold"
                      style={{ color: colors[index] }}>
                      {rule.title}
                    </CardTitle>
                  </CardHeader>
                  <div className="px-8 pb-8">
                    <p className="text-neutral-600">{rule.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* EVENT TIMELINE */}
        <section>
          <div className="mx-12">
            <AuroraText className="text-5xl font-semibold my-12">
              Event Timeline
            </AuroraText>

            <p className="text-neutral-600 text-xl">
              Here&apos;s how everything is going to unfold
            </p>
          </div>
          <EventTimeline />
        </section>
      </main>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

const AboutSection = () => {
  return (
    <section
      className="flex flex-col gap-16 bg-white p-4 sm:p-8 rounded-lg border-neutral-200 border"
      id="about">
      <div className="flex flex-col gap-8">
        <p className="text-3xl sm:text-5xl font-semibold">
          What is <span className="text-[#5046e6]">Innovera?</span>
        </p>

        <p className="text-neutral-600 text-xl">
          Innovera is a dynamic hackathon designed to bring together innovative
          minds to solve real-world challenges. It's a platform for tech
          enthusiasts, developers, and creators to showcase their skills and
          create impactful solutions.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-3xl sm:text-5xl font-semibold">
          Who can participate in
          <span className="text-[#5046e6]"> Innovera?</span>
        </p>

        <p className="text-neutral-600 text-xl">
          Innovera is open to all! Whether you're a student, professional, or
          tech enthusiast, you're welcome to participate individually or as part
          of a team.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-3xl sm:text-5xl font-semibold">
          What are the themes for{" "}
          <span className="text-[#5046e6]">Innovera?</span>
        </p>

        <p className="text-neutral-600 text-xl flex flex-col gap-4">
          Participants can explore diverse themes, such as:
          <br />
          <span className="flex items-center">
            <Dot size={24} />
            Artificial Intelligence and Machine Learning
          </span>
          <span className="flex items-center">
            <Dot size={24} />
            Blockchain and Web3 Internet of Things &#40;IoT&#41;
          </span>
          <span className="flex items-center">
            <Dot size={24} />
            Internet of Things &#40;IoT&#41;
          </span>
          <span className="flex items-center">
            <Dot size={24} />
            Sustainability and Green Tech Open Innovation
          </span>
          <span className="flex items-center">
            <Dot size={24} />
            &#40;Your own ideas!&#41;
          </span>
        </p>
      </div>
    </section>
  );
};

const EventTimeline = () => {
  const colors = [
    "#FF0000",
    "#0000FF",
    "#00FF00",
    "#CCCC00",
    "#00CCCC",
    "#FF00FF",
    "#FF0000",
    "#0000FF",
    "#00FF00",
    "#CCCC00",
  ];

  const lightenedColors = [
    "#FFCCCC", // Very Light red
    "#CCCCFF", // Very Light blue
    "#CCFFCC", // Very Light green
    "#FFFFCC", // Very Light yellow
    "#CCFFFF", // Very Light cyan
    "#FFCCFF", // Very Light magenta
    "#FFCCCC", // Very Light red (duplicate)
    "#CCCCFF", // Very Light blue (duplicate)
    "#CCFFCC", // Very Light green (duplicate)
    "#FFFFCC", // Very Light yellow (duplicate)
  ];

  const darkenedColors = [
    "#990000", // Darker red
    "#000099", // Darker blue
    "#009900", // Darker green
    "#999900", // Darker yellow
    "#009999", // Darker cyan
    "#990099", // Darker magenta
    "#990000", // Darker red (duplicate)
    "#000099", // Darker blue (duplicate)
    "#009900", // Darker green (duplicate)
    "#999900", // Darker yellow (duplicate)
  ];

  const data = timeline.map((timelineItem, index) => ({
    title: timelineItem.timelineDate,
    content: (
      <div
        className="relative overflow-hidden p-8 rounded-xl border"
        style={{ borderColor: darkenedColors[index] }}>
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full"
          squareSize={8}
          gridGap={6}
          color={colors[index]}
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <div className="relative">
          <div className="absolute inset-0 bg-white z-0"></div>
          <div
            style={{
              backgroundColor: lightenedColors[index],
              color: darkenedColors[index],
            }}
            className="relative p-4 rounded-xl z-10">
            <h1 className="font-mono text-4xl uppercase font-bold">
              {timelineItem.timelineTitle}
            </h1>

            <p className="text-xl">{timelineItem.timelineDescription}</p>
          </div>
        </div>
      </div>
    ),
  }));

  return <Timeline data={data} />;
};

export default Landing;
