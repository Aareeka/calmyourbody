import { getAllRemedies, getRemedyBySlug } from "../../../lib/remedies";
import Sprig from "../../../components/Sprig";

export async function generateStaticParams() {
  const remedies = getAllRemedies();
  return remedies.map((remedy) => ({ slug: remedy.slug }));
}

export async function generateMetadata({ params }) {
  const remedy = await getRemedyBySlug(params.slug);
  return {
    title: `${remedy.title} — Calm Your Body`,
    description: remedy.summary,
  };
}

export default async function RemedyPage({ params }) {
  const remedy = await getRemedyBySlug(params.slug);

  return (
    <div className="container article">
      <span className="category-tag">{remedy.category}</span>
      <h1>{remedy.title}</h1>
      <p className="summary">{remedy.summary}</p>

      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: remedy.contentHtml }}
      />

      <section className="remedies-list">
        <div className="section-heading">
          <Sprig className="divider-sprig" />
          <h2>Remedies to Explore</h2>
        </div>
        {remedy.remedies.map((item, idx) => (
          <div key={idx} className="remedy-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            {item.affiliateLink && (
              <a
                href={item.affiliateLink}
                className="affiliate-link"
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                Shop: {item.affiliateProductName} →
              </a>
            )}
          </div>
        ))}
      </section>

      <p className="affiliate-disclosure">
        Some links on this page are affiliate links. We may earn a commission
        at no extra cost to you if you make a purchase. This helps support
        the site.
      </p>
    </div>
  );
}
