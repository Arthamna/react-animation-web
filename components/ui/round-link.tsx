import Link from "next/link";
import { Magnetic } from "./magnetic";

type Props = { href: string; children: React.ReactNode; className?: string; external?: boolean };

export function RoundLink({ href, children, className = "", external = false }: Props) {
  const styles = `round-link group ${className}`;
  const content = <span className="relative z-10">{children}</span>;

  return (
    <Magnetic className="w-fit">
      {external ? (
        <a className={styles} href={href} target="_blank" rel="noreferrer">{content}</a>
      ) : (
        <Link className={styles} href={href}>{content}</Link>
      )}
    </Magnetic>
  );
}
