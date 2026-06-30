import { getAllRemedies } from "../../lib/remedies";

export const metadata = {
  title: "All Holistic Remedies — Calm Your Body",
};

export default function RemediesIndexPage() {
  const remedies = getAllRemedies();

  return (
    <div className="container">
      <h1>All Remedies</h1>
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
    </div>
  );
}
