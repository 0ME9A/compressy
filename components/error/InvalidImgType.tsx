import React from "react";

interface InvalidImageTypeProps {
  title?: string;
  description?: string;
  style?: string;
}

const InvalidImageType: React.FC<InvalidImageTypeProps> = ({
  title = "Invalid image type",
  description,
  style,
}) => {
  return (
    <div
      className={`bg-red-500 text-white p-4 rounded-md max-w-screen-lg mx-auto ${style}`}
    >
      <p className="font-bold pb-1">{title}</p>
      {description && <p className="font-light">{description}</p>}
    </div>
  );
};

export default InvalidImageType;
