import { useState } from "react";

// @ts-ignore
export default function Button({ label, href }: { label?: any; href?: any }) {
  const [hover, setHover] = useState(false);
  const [imgHover, setImgHover] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 384,
        backgroundColor: "#ffffff",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid #f1f5f9",
        boxShadow: hover
          ? "0 20px 30px rgba(0,0,0,0.12)"
          : "0 1px 3px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setImgHover(false);
      }}
    >
      {/* Image section */}
      <div
        style={{
          height: 192,
          overflow: "hidden",
          position: "relative",
        }}
        onMouseEnter={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg"
          alt="Hospital"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: imgHover ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.7s ease",
          }}
        />

        {/* Rating badge */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "rgba(255,255,255,0.9)",
            backdropFilter: "blur(8px)",
            padding: "4px 12px",
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            color: "#1e293b",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          ⭐ 4.5
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24 }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: "#1e293b",
            marginBottom: 4,
          }}
        >
          Nobel Hospital
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#64748b",
            marginBottom: 16,
          }}
        >
          123 Health Ave, NY
        </p>

        <button
          style={{
            width: "100%",
            padding: "12px 0",
            backgroundColor: hover ? "#0284c7" : "#f8fafc",
            color: hover ? "#ffffff" : "#475569",
            fontWeight: 700,
            borderRadius: 16,
            border: "none",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
