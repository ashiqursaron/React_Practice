import Card from "./Card.jsx";
import profilePic1 from "./assets/pp-1.jpg";
import profilePic2 from "./assets/pp-2.jpg";
import profilePic3 from "./assets/pp-3.jpg";

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "2px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Card
        name="Niloy"
        image={profilePic1}
        description="AI researcher and full-stack developer."
      />
      <Card
        name="Saron"
        image={profilePic2}
        description="Creative front-end engineer."
      />
      <Card
        name="Chayti"
        image={profilePic3}
        description="Backend and DevOps enthusiast."
      />
    </div>
  );
}

export default App;
