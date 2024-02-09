import { ChevronRight } from "lucide-react";

const LandingButton = () => {
  return (
    <button className="px-6 py-2 flex gap-2 items-center bg-coral-red rounded-full text-white">
      Shop now <ChevronRight className="w-4 h-4 bg-slate-50 rounded-full text-coral-red"/>
    </button>
  );
};

export default LandingButton;
