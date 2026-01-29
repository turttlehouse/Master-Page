"use client";
import React from "react";

export const SHOP_CATEGORIES = [
  {
    id: "1",
    name: "Health Monitors",
    image: "https://picsum.photos/300/300?random=20",
  },
  {
    id: "2",
    name: "Ayurvedic Care",
    image: "https://picsum.photos/300/300?random=21",
  },
  {
    id: "3",
    name: "Pain Relief",
    image: "https://picsum.photos/300/300?random=22",
  },
  {
    id: "4",
    name: "Baby Care",
    image: "https://picsum.photos/300/300?random=23",
  },
  {
    id: "5",
    name: "Nutritional Drinks",
    image: "https://picsum.photos/300/300?random=24",
  },
  {
    id: "6",
    name: "Adult Diapers",
    image: "https://picsum.photos/300/300?random=25",
  },
  {
    id: "7",
    name: "Vitamins",
    image: "https://picsum.photos/300/300?random=26",
  },
  {
    id: "8",
    name: "Protein Powders",
    image: "https://picsum.photos/300/300?random=27",
  },
  {
    id: "9",
    name: "Summer Essentials",
    image: "https://picsum.photos/300/300?random=28",
  },
  {
    id: "10",
    name: "Medical Supplies",
    image: "https://picsum.photos/300/300?random=29",
  },
  {
    id: "11",
    name: "Intimate Care",
    image: "https://picsum.photos/300/300?random=30",
  },
  {
    id: "12",
    name: "Skin & Hair",
    image: "https://picsum.photos/300/300?random=31",
  },
];

const styles = {
  section: {
    marginTop: "32px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "32px",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    color: "#1e293b",
  },
  button: {
    background: "none",
    border: "none",
    color: "#0284c7",
    fontWeight: 700,
    cursor: "pointer",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "16px",
  },
  card: {
    background: "#fff",
    borderRadius: "40px",
    padding: "16px",
    textAlign: "center" as const,
    border: "1px solid #f1f5f9",
    cursor: "pointer",
    transition: "box-shadow 0.3s",
    width: "calc(50% - 8px)", // mobile default
  },
  imageWrapper: {
    aspectRatio: "1 / 1",
    borderRadius: "32px",
    overflow: "hidden",
    marginBottom: "16px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    transition: "transform 0.5s",
  },
  name: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#1e293b",
    padding: "0 8px",
    lineHeight: 1.4,
  },
};

const ShopByCategory: React.FC = () => {
  return (
    <section style={styles.section}>
      {/* Header */}
      <div style={styles.header}>
        <h2 style={styles.title}>Shop By Category (12)</h2>
        <button style={styles.button}>Explore Store</button>
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {SHOP_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1)";
            }}
          >
            <div style={styles.imageWrapper}>
              <img src={cat.image} alt={cat.name} style={styles.image} />
            </div>
            <h4 style={styles.name}>{cat.name}</h4>
          </div>
        ))}
      </div>

      {/* Responsive widths */}
      <style>
        {`
          @media (min-width: 640px) {
            .shop-card {
              width: calc(33.333% - 11px);
            }
          }
          @media (min-width: 768px) {
            .shop-card {
              width: calc(25% - 12px);
            }
          }
          @media (min-width: 1024px) {
            .shop-card {
              width: calc(16.666% - 14px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ShopByCategory;
