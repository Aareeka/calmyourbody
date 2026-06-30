import "../styles/globals.css";

export const metadata = {
  title: "Calm Your Body — Holistic Remedies",
  description:
    "Find natural, holistic approaches to everyday discomforts like headaches, bloating, and sleep trouble.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a href="/" className="logo">
            calmyourbody
          </a>
          <nav>
            <a href="/remedies">Remedies</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            calmyourbody.com provides educational content only and is not a
            substitute for professional medical advice, diagnosis, or
            treatment. Always consult a qualified healthcare provider.
          </p>
          <a href="/disclaimer">Full Disclaimer</a>
        </footer>
      </body>
    </html>
  );
}
