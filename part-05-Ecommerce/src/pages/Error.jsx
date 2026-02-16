import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist.</p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  code: {
    fontSize: "80px",
    margin: "0",
    color: "#ff4d4f",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#000",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Error;
