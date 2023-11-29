import NextLink, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";

const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  className,
  target,
}) => (
  <NextLink
    as={as}
    href={href}
    passHref={passHref}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    target={target}
    className={`flex items-center justify-center p-1 px-3 gap-2 border border-black dark:border-white hover:!border-transparent rounded-lg hover:bg-orange-400 dark:hover:bg-orange-800 ${className}`}
  >
    {children}
  </NextLink>
);

export default LinkButton;
