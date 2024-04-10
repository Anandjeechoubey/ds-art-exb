// create a card component with a main image and a title and a description with nice animation on hover
import Link from "next/link";
import React from "react";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
};

const Card = ({ imageUrl, title, description, link }: Props) => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <Link href={link}>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          //@ts-ignore
          "&:hover": {
            transform: "scale(2.05)",
            transition: "transform 0.3s ease-in-out",
          },
        }}
        className="card"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img
          src={imageUrl}
          alt="Project Preview"
          style={{
            width: "100%",
            //   height: isHovering ? "250px" : "350px",
            height: "440px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "10px",
            transition: "height 0.3s ease-in-out",
          }}
        />
        <div
          style={{
            bottom: "0",
            left: "0",
            right: "0",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "10px",
            transition: "transform 0.3s ease-in-out",
            color: "black",
          }}
        >
          <h3 style={{ margin: "0", fontWeight: "bold", fontSize: "1.2rem" }}>
            {title}
          </h3>
          <p style={{ margin: "0", fontSize: "0.9rem", fontWeight: "lighter" }}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
