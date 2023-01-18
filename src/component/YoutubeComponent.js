import React, { useEffect, useState } from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function YoutubeComponent() {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);

    const styles = {
      border: 0,
      borderRadius: 3,
      color: "white",
      height: 45,
      padding: "0 30px",
      cursor: "pointer",
    };
    if (count % 2 === 0) {
      setStyle({
        ...styles,
        background: "linear-gradient(45deg, darkred 30%, red 90%)",
        boxShadow: "0 3px 5px 2px darkred",
      });
    } else {
      setStyle({
        ...styles,
        background: "linear-gradient(45deg, purple 30%, royalblue 90%)",
        boxShadow: "0 3px 5px 2px purple",
      });
    }
  }, [count]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <YouTubeIcon
          sx={{
            color: "red",
            width: 40,
            height: 40,
          }}
        />
        <div
          style={{
            margin: "10px 2px",
            fontWeight: "bold",
            color: "darkslategray",
          }}
        >
          Kang Wahyu Studio
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            sx={style}
            id="button"
            variant="extended"
            onClick={() => {
              window.location.href =
                "https://www.youtube.com/c/KangWahyuStudio";
            }}
          >
            <NavigationIcon sx={{ mr: 1 }} />
            Subscribe
          </Fab>
        </Box>
      </div>
    </>
  );
}
