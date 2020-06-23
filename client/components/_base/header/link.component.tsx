import { useRouter } from 'next/router';

interface ILink {
  children: JSX.Element | JSX.Element[] | string;
  href: string;
  className?: string;
}
export function Link({ children, href, className }: ILink): JSX.Element {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
