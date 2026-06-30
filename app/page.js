import SearchBar from "../components/SearchBar";
import { getAllRemedies } from "../lib/remedies";

export default function HomePage() {
  const remedies = getAllRemedies();

  return (
    <div className="container">
      <section className="hero">
        <h1>Calm Your Body</h1>
        <p>
          Type what you're feeling, and find natural, holistic approaches
          worth exploring — from herbal remedies to simple lifestyle shifts.
        </p>
        <SearchBar />
      </section>

      <section className="featured">
        <h2>Popular Remedies</h2>
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
  );
}
