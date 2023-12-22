import { Box, Center, Img, Text, calc, transform } from "@chakra-ui/react";
import Ring from ".././Assets/RingSVG.svg";
import InnerRing from ".././Assets/RoundSVG.svg";
import { useEffect } from "react";

const ApeFestCircle = () => {
  useEffect(() => {
    const ApeFestRound = document.querySelectorAll(".ApeFestRound");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      ApeFestRound.forEach((e) => {
        e.style.transform = `rotateZ(${scrollY * 0.05}deg)`;
      });
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Box
        position={"fixed"}
        zIndex={"99"}
        right={"100px"}
        width={"135px"}
        bottom={"170px"}
      >
        <Img
          src={Ring}
          position={"absolute"}
          zIndex={1}
          className="ApeFestRound"
        />
        <Img
          src={InnerRing}
          position={"absolute"}
          zIndex={2}
          top={"20px"}
          left={"20px"}
        />
      </Box>
    </>
  );
};
export default ApeFestCircle;
