import React, { useState } from "react";
// import { SERVICE_PROVIDERS } from "../constants";
export const SERVICE_PROVIDERS = [
  {
    id: 1,
    name: "Nobel Hospital",
    address: "123 Health Ave, New York, NY",
    rating: 4.5,
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/15.jpg",
  },
  {
    id: 2,
    name: "CarePlus Medical Center",
    address: "45 Wellness Blvd, San Francisco, CA",
    rating: 4.7,
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/32.jpg",
  },
  {
    id: 3,
    name: "St. Mary’s Clinic",
    address: "78 Healing St, Austin, TX",
    rating: 4.3,
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/female/512/45.jpg",
  },
  {
    id: 4,
    name: "Lifeline Hospital",
    address: "210 Care Road, Seattle, WA",
    rating: 4.6,
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/28.jpg",
  },
  {
    id: 5,
    name: "Unity Health Center",
    address: "89 Harmony Lane, Chicago, IL",
    rating: 4.4,
    image:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/52.jpg",
  },
];

const ServiceProviderSlider = () => {
  return (
    <section>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 32,
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#1e293b",
            }}
          >
            Top Service Providers
          </h2>
          <p style={{ color: "#64748b", marginTop: 4 }}>
            Vetted and verified medical facilities
          </p>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {["←", "→"].map((arrow) => (
            <button
              key={arrow}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid #e2e8f0",
                background: "#fff",
                cursor: "pointer",
              }}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          paddingBottom: 24,
          paddingLeft: 16,
          paddingRight: 16,
          marginLeft: -16,
          marginRight: -16,
        }}
      >
        {SERVICE_PROVIDERS.map((provider) => (
          <Card key={provider.id} provider={provider} />
        ))}
      </div>
    </section>
  );
};

// @ts-ignore
const Card = ({ provider }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        minWidth: 300,
        backgroundColor: "#ffffff",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid #f1f5f9",
        boxShadow: hover
          ? "0 20px 30px rgba(0,0,0,0.12)"
          : "0 1px 3px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <div
        style={{
          height: 192,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={provider.image}
          alt={provider.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hover ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.7s ease",
          }}
        />

        {/* Rating */}
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
          ⭐ {provider.rating}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 24 }}>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#1e293b",
            marginBottom: 4,
          }}
        >
          {provider.name}
        </h3>

        <p
          style={{
            fontSize: 14,
            color: "#64748b",
            marginBottom: 16,
          }}
        >
          {provider.address}
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
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ServiceProviderSlider;
