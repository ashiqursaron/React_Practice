import Card from "./Card.jsx";
import profilePic1 from "./assets/pp-1.jpg";
import profilePic2 from "./assets/pp-2.jpg";
import profilePic3 from "./assets/pp-3.jpg";

function Test() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        background: "#111",
        padding: "40px",
      }}
    >
      <Card
        name="Ashiqur Rahman Saron"
        image={profilePic1}
        description="An AI Engineer passionate about deep learning, robotics, and intelligent systems."
      />
      <Card
        name="Niloy"
        image={profilePic2}
        description="Frontend designer crafting seamless user interfaces and experiences."
      />
      <Card
        name="Sifat"
        image={profilePic3}
        description="Backend developer focusing on scalable architectures and APIs."
      />
    </div>
  );
}

export default Test;
