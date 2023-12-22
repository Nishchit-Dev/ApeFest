import { Box, Center, Img, Text, calc, transform } from "@chakra-ui/react";
import BG from "../../Assets/BG.webp";
import Front from "../../Assets/front.webp";
import ApeFestHongKong from "../../Assets/ApeFestHongKong.svg";
import { useEffect, useState, useRef } from "react";
import Ring from "../../Assets/RingSVG.svg";
import InnerRing from "../../Assets/RoundSVG.svg";

const LandingScene = () => {
  return (
    <Box scrollBehavior={"smooth"}>
      <Initiate />
    </Box>
  );
};

const Initiate = () => {
  const [yValue, setYvalue] = useState(0);
  useEffect(() => {
    const ParallexElement = document.querySelectorAll(".shift");
    const ParallexReverseElement = document.querySelectorAll(".shiftReverse");
    const ParallexReverseElementTest = document.querySelectorAll(".shiftTest");
    const ApeFestRound = document.querySelectorAll(".ApeFestRound");


    console.log(ParallexElement);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      ParallexReverseElementTest.forEach((element) => {
        element.style.transform = `translateY(calc(${
          (scrollY * 0.25) / 8
        }px)) perspective(1200px)`;
        element.style.transition = `transfrom 830ms ease-in-out`;
      });
      ParallexElement.forEach((element) => {
        element.style.transform = `translateY(${
          (scrollY * 0.5) / 3
        }px) perspective(1200px)`;
        element.style.transition = `transfrom 5000ms ease-in-out`;
      });
      ParallexReverseElement.forEach((element) => {
        element.style.transform = `translateY(-${
          (scrollY * 0.8) / 8
        }px) perspective(1200px) scale(${0.65 + scrollY * 0.00009})`;
      });
      ApeFestRound.forEach(e=>{
        e.style.transform = `rotateZ(${scrollY*0.05}deg)`
      })

      console.log("Y -> ", scrollY);
      // console.log("X -> ", scrollX);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ApeFestCircle />

      <Box
        overflow={"hidden"}
        top={"-400px"}
        position={"relative"}
        height={"unset"}
        aspectRatio={1 / 2}
      >
        <Box
          className="shift"
          overflowY={""}
          // className="shiftTets"
          inset={"0px"}
          overflow={"visible"}
          position={"absolute"}
          height={"200vh"}
        >
          <Img
            src={BG}
            width={"100%"}
            transform={"scale(1.2)"}
            backgroundAttachment={"scroll"}
            objectPosition={"center center"}
            objectFit={"cover"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"block"}
            position={"absolute"}
          />
        </Box>
        <Box
          top={"550px"}
          width={"100%"}
          position={"absolute"}
          className="shiftReverse"
        >
          <Center justifyContent={"center"} alignItems={"center"}>
            <Img src={ApeFestHongKong} />
          </Center>
        </Box>
        <Box
          height={"unset"}
          position={"absolute"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          className="shiftTest"
        >
          <Center>
            <Img
              src={Front}
              position={"relative"}
              top="620px"
              width={"50%"}
              backgroundAttachment={"scroll"}
              objectPosition={"center center"}
              objectFit={"cover"}
              backgroundPosition={"center"}
              backgroundSize={"cover"}
            />
          </Center>
        </Box>
        <Box
          position={"absolute"}
          top={"190vh"}
          height={"100vh"}
          backgroundColor={"black"}
          w={"100%"}
        ></Box>
        <Box
          position={"absolute"}
          top={"300vh"}
          height={"100vh"}
          backgroundColor={"white"}
          w={"100%"}
        ></Box>
      </Box>
    </>
  );
};

const ApeFestCircle = () => {
  return (
    <>
      <Box position={"fixed"} zIndex={"99"} right={"100px"}  width={"135px"} bottom={"170px"}>
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

export default LandingScene;
