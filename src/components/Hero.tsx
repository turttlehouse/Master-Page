// @ts-ignore
export default function Hero(props) {
  const { title, subtitle, children } = props;
  return (
    <section
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{title}</h1>
      {subtitle && (
        <p style={{ fontSize: "1.25rem", opacity: 0.9 }}>{subtitle}</p>
      )}
      <div style={{ maxWidth: "50%", margin: "0 auto" }}>{children}</div>
    </section>
  );
}
