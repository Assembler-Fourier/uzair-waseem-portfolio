export function CoverageSketch() {
  return (
    <figure
      className="coverage-sketch"
      aria-label="Synthetic example of two overlapping shifts"
    >
      <figcaption>Synthetic scheduling example</figcaption>
      <div className="coverage-title">A conflict, made visible.</div>
      <div className="coverage-scale" aria-hidden="true">
        <span>09:00</span>
        <span>14:00</span>
        <span>17:00</span>
        <span>22:00</span>
      </div>
      <div className="coverage-row">
        <span>Existing shift · 09:00–17:00</span>
        <div className="coverage-track">
          <i className="shift-existing" />
        </div>
      </div>
      <div className="coverage-row">
        <span>Proposed shift · 14:00–22:00</span>
        <div className="coverage-track">
          <i className="shift-proposed" />
        </div>
      </div>
      <div className="coverage-result">
        <strong>3 hours overlap</strong>
        <span>Flag the conflict before suggesting cover.</span>
      </div>
      <p>
        Illustration of the public interval rules. Final cover decisions need
        human confirmation.
      </p>
    </figure>
  );
}
