import Link from "next/link";

export default function NotFound() {
  return (
    <section className="notfound">
      <div>
        <h1>404</h1>
        <p style={{ color: "var(--muted)", margin: "10px 0 24px" }}>This road leads nowhere. The car may have been sold.</p>
        <Link href="/inventory" className="btn btn--red">Browse Inventory</Link>
      </div>
    </section>
  );
}
