import Link from "next/link";
import type { IconType } from "react-icons";

interface Props {
  title: string;
  address: string;
  Icon: IconType;
}

function MenuItem({ title, address, Icon }: Props) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-2" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
