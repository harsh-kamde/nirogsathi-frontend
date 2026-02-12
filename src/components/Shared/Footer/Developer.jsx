import React from "react";

const Developer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: "#182334",
      }}
    >
      <p style={{ color: "white", fontSize: "14px", fontWeight: "500" }}>
        Developed by{" "}
        <a
          href="https://www.gitnexa.com"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          GitNexa
        </a>{" "}
        and{" "}
        <a
          href="https://www.trysoft.in"
          style={{ textDecoration: "none", color: "white" }}
          target="_blank"
        >
          Try Soft
        </a>
      </p>
    </div>
  );
};

export default Developer;
