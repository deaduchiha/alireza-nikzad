import FifthPage from "../elements/fifth-page/FifthPage";
import FirstPage from "../elements/first-page/first-page";
import FourthPage from "../elements/fourth-page/fourth-page";
import SecondPage from "../elements/second-page/second-page";
import ThirdPage from "../elements/third-page/third-page";

const Landing = () => {
  return (
    <div style={{ position: "relative", zIndex: 100, userSelect: "none" }}>
      {/* make it to show */}
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FifthPage />
      <FourthPage />
    </div>
  );
};
export default Landing;
