// @ts-ignore
export default function Feature({ title, description }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        borderRadius: "0.75rem",
        background: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        marginBottom: "1.5rem",
      }}
    >
      <h3 style={{ margin: 0, fontSize: "1.25rem", color: "#111827" }}>
        {title}
      </h3>
      <p style={{ marginTop: "0.5rem", color: "#4B5563", fontSize: "1rem" }}>
        {description}
      </p>
    </div>
  );
}
