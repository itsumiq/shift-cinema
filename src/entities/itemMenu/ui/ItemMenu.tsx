import Link from "next/link";

interface ItemMenuProps {
  link: string;
  title: string;
  children: React.ReactNode;
}

export const ItemMenu = ({ title, link, children }: ItemMenuProps): JSX.Element => {
  return (
    <Link href={link} className="flex gap-x-4">
      {children}
      <p className="text-1 text-text-secondary font-medium lowercase first-letter:uppercase">
        {title}
      </p>
    </Link>
  );
};
