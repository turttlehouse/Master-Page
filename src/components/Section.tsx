
// @ts-ignore
export default function Section({ children, id, className }) {
  return (
    <section
      id={id}
      className={className}
      style={{
        padding: "3rem 1.5rem",
        margin: "0 auto",
        backgroundColor: "#f9fafb",
      }}
    >
      {children}
    </section>
  );
}