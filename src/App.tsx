import BoxReveal from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  return (
    <>
      {/* LANDING */}
      <div className="w-full mx-40 my-40">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Innovera<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Hackathon for <span className="text-[#5046e6]">the innovators</span>
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6">
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
          <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
        </BoxReveal>
      </div>
    </>
  );
}

export default App;
