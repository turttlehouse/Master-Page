// @ts-ignore
export default function Button({ label, href }) {
  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        background: "#3b82f6",
        color: "white",
        padding: "0.75rem 1.5rem",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: 500,
        fontSize: "1rem",
      }}
    >
      {label}
    </a>
  );
}
