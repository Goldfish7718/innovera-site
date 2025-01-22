import { Dot } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const Footer = () => {
  const navigate = (url: string) => {
    window.location.href = url;
  };

  return (
    <footer className="bg-[#5046e6] p-8 text-white">
      <h1 className="text-5xl font-bold">Innovera.</h1>

      <div className="grid grid-cols-2 grid-rows-3 gap-8 mt-12">
        <p
          className="hover:underline hover:cursor-pointer decoration-[2px] decoration-white"
          onClick={() => navigate("https://www.kkwagh.edu.in/")}>
          KKWIEER
        </p>
        <p className="hover:underline hover:cursor-pointer decoration-[2px] decoration-white">
          FAQs
        </p>
        <TnCDialog>
          <p className="hover:underline hover:cursor-pointer decoration-[2px] decoration-white">
            Terms & Conditions
          </p>
        </TnCDialog>
        <p className="hover:underline hover:cursor-pointer decoration-[2px] decoration-white">
          Sponsors
        </p>
        <p className="hover:underline hover:cursor-pointer decoration-[2px] decoration-white">
          Organising team
        </p>
      </div>

      <div className="mt-8">
        {/* <p className="text-xl">&copy; 2025 Innovera. All rights reserved.</p>
        <p className="text-neutral-200">Created by Tejas Nanoti.</p> */}
        <p className="text-neutral-200">Coming soon.</p>
      </div>
    </footer>
  );
};

const TnCDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms & Condtions</DialogTitle>
        </DialogHeader>
        <div className="p-4">
          <p className="text-neutral-600">
            Here are the terms and conditions for using this website. Please
            read them carefully before using any features or services provided.
          </p>

          <div className="my-4">
            <span className="text-neutral-600 flex items-center">
              <Dot size={24} /> All information is for educational purposes
              only.
            </span>
            <span className="text-neutral-600 flex items-center">
              <Dot size={24} /> Content must not be used for any illegal
              activities.
            </span>
            <span className="text-neutral-600 flex items-center">
              <Dot size={24} /> Respect intellectual property and copyright
              rules.
            </span>
            <span className="text-neutral-600 flex items-center">
              <Dot size={24} /> For any concerns, contact our support team.
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Footer;
