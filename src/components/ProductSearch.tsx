"use client";
import { useState } from "react";
import { Search } from "lucide-react";

const styles = {
  wrapper: {
    position: "relative" as const,
    width: "100%",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid black",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    background: "#fff",
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
  },
  dropdown: {
    position: "absolute" as const,
    top: "100%",
    left: 0,
    right: 0,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
    marginTop: "4px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    zIndex: 10,
  },
  title: {
    fontSize: "12px",
    fontWeight: 600,
    padding: "6px 10px",
    color: "#666",
  },
  item: {
    padding: "8px 10px",
    cursor: "pointer",
  },
};

const ProductSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.inputWrapper}>
        <Search size={16} color="#555" />
        <input
          style={styles.input}
          placeholder="Search products..."
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
        />
      </div>

      {open && (
        <div style={styles.dropdown}>
          <div style={styles.title}>Product Suggestions</div>
          <div style={styles.item}>Paracetamol</div>
          <div style={styles.item}>Vitamin C Tablets</div>
          <div style={styles.item}>Blood Pressure Monitor</div>
          <div style={styles.item}>Digital Thermometer</div>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
