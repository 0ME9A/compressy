import NextLink, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";

const Link: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  as,
  children,
  href,
  replace,
  scroll,
  shallow,
  passHref,
  className,
}) => (
  <NextLink
    as={as}
    href={href}
    passHref={passHref}
    replace={replace}
    scroll={scroll}
    shallow={shallow}
    className={`${className}`}
  >
    {children}
  </NextLink>
);

export default Link;
