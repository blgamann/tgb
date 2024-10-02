import { FC } from "react";
import Image from "next/image";

const Logo: FC<{ width: number }> = ({ width }) => (
  <div className="flex-shrink-0 md:ml-4">
    <Image
      src="/logo.svg"
      alt="Logo"
      width={width}
      height={40}
      className="md:w-auto w-[calc(100%-10px)] max-w-[140px]"
    />
  </div>
);

export default Logo;
