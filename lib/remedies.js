import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const remediesDirectory = path.join(process.cwd(), "content/remedies");

// Returns metadata for all remedy articles (used for index pages + future AI search)
export function getAllRemedies() {
  const fileNames = fs.readdirSync(remediesDirectory);
  const remedies = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(remediesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data };
  });

  return remedies.sort((a, b) => (a.title > b.title ? 1 : -1));
}

// Returns full content (including parsed markdown body) for a single article
export async function getRemedyBySlug(slug) {
  const fullPath = path.join(remediesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { slug, ...data, contentHtml };
}

// Naive symptom search — matches a query against title, symptoms, and category.
// This is the precursor to the AI search bar: today it's simple keyword matching
// over a curated, trusted dataset rather than free-form AI generation, which
// keeps results safe and accurate. The AI layer can later sit on top of this
// same function to do fuzzier matching / ranking.
export function searchRemediesByQuery(query) {
  const allRemedies = getAllRemedies();
  const normalizedQuery = query.toLowerCase().trim();

  return allRemedies.filter((remedy) => {
    const haystack = [
      remedy.title,
      remedy.category,
      remedy.summary,
      ...(remedy.symptoms || []),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}
