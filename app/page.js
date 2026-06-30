import SearchBar from "../components/SearchBar";
import Sprig from "../components/Sprig";
import { getAllRemedies } from "../lib/remedies";

export default function HomePage() {
  const remedies = getAllRemedies();

  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">A field guide for everyday discomfort</span>
          <h1>
            Calm your body, <em>one remedy at a time.</em>
          </h1>
          <p>
            Type what you're feeling, and find natural, holistic approaches
            worth exploring — from herbal remedies to simple lifestyle shifts.
          </p>
          <SearchBar />
        </div>
        <Sprig className="hero-sprig" />
      </section>

      <div className="container">
      <section className="featured">
        <div className="section-heading">
          <Sprig className="divider-sprig" />
          <h2>Popular Remedies</h2>
        </div>
        <div className="remedy-grid">
          {remedies.map((remedy) => (
            <a
              key={remedy.slug}
              href={`/remedies/${remedy.slug}`}
              className="remedy-card"
            >
              <h3>{remedy.title}</h3>
              <p>{remedy.summary}</p>
              <span className="category-tag">{remedy.category}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="disclaimer-banner">
        <p>
          This site offers educational, holistic wellness information only.
          It is not medical advice. Always consult a healthcare provider for
          diagnosis or treatment.
        </p>
      </section>
      </div>
    </div>
  );
}
