import { FC } from "react";
import Image from "next/image";

const Logo: FC = () => (
  <div className="flex-shrink-0">
    <Image src="/logo.svg" alt="Logo" width={160} height={60} />
  </div>
);

export default Logo;
