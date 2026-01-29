import { useState } from "react";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    gap: "8px",
  },
  box: {
    position: "relative" as const,
    width: "100%",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid black",
    outline: "none",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
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
  groupTitle: {
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

const ServiceSearch = () => {
  const [locationOpen, setLocationOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div style={styles.container}>
      {/* Location Search */}
      <div style={styles.box}>
        <input
          style={styles.input}
          placeholder="search location..."
          onFocus={() => setLocationOpen(true)}
          onBlur={() => setTimeout(() => setLocationOpen(false), 150)}
        />

        {locationOpen && (
          <div style={styles.dropdown}>
            <div style={styles.groupTitle}>Suggestions</div>
            <div
              style={styles.item}
              onMouseDown={() => console.log("Kathmandu")}
            >
              Kathmandu
            </div>
            <div style={styles.item} onMouseDown={() => console.log("Pokhara")}>
              Pokhara
            </div>
            <div
              style={styles.item}
              onMouseDown={() => console.log("Biratnagar")}
            >
              Biratnagar
            </div>
          </div>
        )}
      </div>

      {/* Doctor / Hospital Search */}
      <div style={styles.box}>
        <input
          style={styles.input}
          placeholder="search doctor, hospitals..."
          onFocus={() => setSearchOpen(true)}
          onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
        />

        {searchOpen && (
          <div style={styles.dropdown}>
            <div style={styles.groupTitle}>Hospital Suggestions</div>
            <div style={styles.item}>Nobel Hospital</div>
            <div style={styles.item}>Birat Medical</div>
            <div style={styles.item}>Koshi Hospital</div>

            <div style={styles.groupTitle}>Doctor Suggestions</div>
            <div style={styles.item}>Dr. Rohan</div>
            <div style={styles.item}>Dr. Arjun</div>
            <div style={styles.item}>Dr. Ajay</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSearch;
