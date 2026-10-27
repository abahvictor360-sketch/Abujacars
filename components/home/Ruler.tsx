/** Speedometer-style tick ruler that slides with scroll. */
export default function Ruler() {
  return (
    <div className="ruler" data-progress aria-hidden>
      <div className="ruler__track">
        {Array.from({ length: 160 }).map((_, i) => (
          <i key={i} className={i % 10 === 0 ? "major" : i % 5 === 0 ? "mid" : ""} />
        ))}
      </div>
      <span className="ruler__needle" />
    </div>
  );
}
