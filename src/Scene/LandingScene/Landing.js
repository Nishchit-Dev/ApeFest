import { Box, Center, Img, Text, calc, transform } from "@chakra-ui/react";
import BG from "../../Assets/BG.webp";
import Front from "../../Assets/front.webp";
import ApeFestHongKong from "../../Assets/ApeFestHongKong.svg";
import { useEffect, useState, useRef } from "react";
const LandingScene = () => {
  return (
    <Box>
      <Initiate />
    </Box>
  );
};

const Initiate = () => {
  const [yValue, setYvalue] = useState(0);
  useEffect(() => {
    const ParallexElement = document.querySelectorAll(".shift");
    const ParallexReverseElement = document.querySelectorAll(".shiftReverse");

    console.log(ParallexElement);
    const handleScroll = () => {
      const scrollY = window.scrollY;

      ParallexElement.forEach((element) => {
        element.style.transform = `translateY(calc(${scrollY * 1.2}px)) `;
      });
      ParallexReverseElement.forEach((element) => {
        element.style.transform = `translateY(calc(${
          scrollY * 0.2
        }px)) scale(1) perspective(1200px)`;
      });

      console.log("Y -> ", scrollY);
      setYvalue(scrollY);
      // console.log("X -> ", scrollX);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        overflow={"hidden"}
        top={"-400px"}
        position={"relative"}
        height={"unset"}
        aspectRatio={1 / 2}
      >
        <Box
          inset={"0px"}
          className="shift"
          // height={"100vh"}

          overflow={"hidden"}
          position={"absolute"}
        >
          <Img
            src={BG}
            width={"100%"}
            transform={"scale(1.3)"}
            // backgroundAttachment={"scroll"}
            objectPosition={"center center"}
            objectFit={"cover"}
            backgroundPosition={"center"}
            backgroundSize={"cover"}
            display={"block"}
          />
        </Box>
        <Box
          top={"550px"}
          width={"100%"}
          position={"absolute"}
          className="shiftReverse"
        >
          <Center justifyContent={"center"} alignItems={"center"}>
            <Img src={ApeFestHongKong} width={"60%"} height={"50%"} />
          </Center>
        </Box>
        <Box
          height={"unset"}
          position={"absolute"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          className="shift"
        >
          <Center>
            <Img
              src={Front}
              position={"relative"}
              top="550px"
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
          top={"200vh"}
          height={"100vh"}
          backgroundColor={"black"}
          w={"100%"}
        ></Box>
         {/* <Box
          position={"absolute"}
          top={"300vh"}
          height={"100vh"}
          backgroundColor={"white"}
          w={"100%"}
        ></Box> */}
      </Box>
    </>
  );
};

export default LandingScene;
