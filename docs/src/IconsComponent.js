import React from "react";
import * as Icons from "@prenda-school/prenda-icons";

const IconGallery = () => {
  return (
    <div style={styles.grid}>
      {Object.entries(Icons).map(([iconName, IconComponent]) => (
        <div key={iconName} style={styles.iconWrapper}>
          <div title={iconName} style={styles.iconContainer}>
            <IconComponent />
          </div>
          <div style={styles.iconName}>{iconName}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
    gap: "90px",
    padding: "80px",
  },
  iconWrapper: {
    textAlign: "center",
  },
  iconContainer: {
    display: "inline-block",
    cursor: "pointer",
  },
  iconName: {
    marginTop: "8px",
    fontSize: "0.8rem",
    color: "#555",
  },
};

export default IconGallery;
