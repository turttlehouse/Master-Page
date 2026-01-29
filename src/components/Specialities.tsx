"use client";
import React from "react";

export const SPECIALITIES = [
  { id: "1", name: "Stomach Ache", icon: "🍲", color: "bg-emerald-50" },
  { id: "2", name: "Period Issue", icon: "♈", color: "bg-rose-50" },
  { id: "3", name: "Acne / Pimples", icon: "👤", color: "bg-sky-50" },
  { id: "4", name: "Fever", icon: "🌡️", color: "bg-amber-50" },
  { id: "5", name: "Depression", icon: "🧠", color: "bg-indigo-50" },
  { id: "6", name: "Diabetes", icon: "🩸", color: "bg-red-50" },
  { id: "7", name: "Cough", icon: "🗣️", color: "bg-cyan-50" },
  { id: "8", name: "Hairfall", icon: "👩", color: "bg-orange-50" },
  { id: "9", name: "Gastritis", icon: "💧", color: "bg-blue-50" },
  { id: "10", name: "Body Pain", icon: "⚡", color: "bg-violet-50" },
];

const styles = {
  section: {
    marginTop: "32px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "24px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#1e293b",
  },
  subtitle: {
    marginTop: "1px",
    color: "#64748b",
    fontSize: "14px",
  },
  viewAll: {
    background: "none",
    border: "none",
    color: "#0284c7",
    fontWeight: 700,
    cursor: "pointer",
  },
  slider: {
    display: "flex",
    gap: "16px",
    overflowX: "auto" as const,
    paddingBottom: "8px",
    scrollSnapType: "x mandatory" as const,
    WebkitOverflowScrolling: "touch" as const,
  },
  card: {
    minWidth: "200px",
    padding: "24px",
    borderRadius: "32px",
    cursor: "pointer",
    position: "relative" as const,
    flexShrink: 0,
    scrollSnapAlign: "start" as const,
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  cardInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#334155",
  },
  iconWrapper: {
    width: "40px",
    height: "40px",
    background: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

const SpecialitiesSlider: React.FC = () => {
  return (
    <section style={styles.section}>
      {/* 🔽 Inline CSS just for scrollbar */}
      <style>
        {`
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE & Edge */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari */
          }
        `}
      </style>

      {/* Header */}
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>Specialities</h2>
          <p style={styles.subtitle}>
            Select a symptom for immediate consultation
          </p>
        </div>
        <button style={styles.viewAll}>View All</button>
      </div>

      {/* Slider */}
      <div style={styles.slider} className="hide-scrollbar">
        {SPECIALITIES.map((symptom) => (
          <div
            key={symptom.id}
            style={{
              ...styles.card,
              background: symptom.color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={styles.cardInner}>
              <span style={styles.name}>{symptom.name}</span>
              <div style={styles.iconWrapper}>{symptom.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialitiesSlider;
