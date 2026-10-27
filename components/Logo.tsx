import Link from "next/link";

export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <path d="M2 7.5C9 4.6 23 4.6 30 7.5L28.6 9.4C22 7.4 10 7.4 3.4 9.4Z" fill="currentColor" />
      <path d="M16 9.6 25.5 29h-4.1L16 17.4 10.6 29H6.5Z" fill="currentColor" />
      <path d="M12.4 23.4h7.2l1.2 2.5h-9.6Z" fill="var(--red)" />
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Abujacars home">
      <LogoMark />
      <span className="logo__word">ABUJACARS</span>
    </Link>
  );
}
