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
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      });
    } else {
      setStyle({
        ...styles,
        background:
          "linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
        boxShadow: "0 3px 5px 2px gb(33, 203, 243)",
      });
    }
  }, [count]);

  return (
    <>
      <div
        className="App"
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
        <div style={{ margin: "10px 2px", fontWeight: "bold" }}>
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
