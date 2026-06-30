"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setResults(data.results || []);
    setHasSearched(true);
  }

  return (
    <div className="search-bar-wrapper">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="e.g. headache, bloating, trouble sleeping..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {hasSearched && (
        <div className="search-results">
          {results.length === 0 ? (
            <p>
              No matching remedies yet — we're adding new content regularly.
            </p>
          ) : (
            <ul>
              {results.map((r) => (
                <li key={r.slug}>
                  <a href={`/remedies/${r.slug}`}>
                    <strong>{r.title}</strong>
                    <span>{r.summary}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
