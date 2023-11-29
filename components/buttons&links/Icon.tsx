import { IconType } from "react-icons";
import { ReactNode } from "react";

interface iconFace {
  icon: IconType | ReactNode;
  className?: string;
}

const Icon = ({ icon, className }: iconFace) => {
  return (
    <span className={`group-hover:scale-125 block ${className}`}>
      <>{icon}</>
    </span>
  );
};

export default Icon;
