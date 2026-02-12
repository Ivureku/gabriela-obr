import Acceptance from "./components/pages/Acceptance";
import { Button } from "./components/ui/button";
import { useLogicStore } from "./store/LogicStore";

function App() {
  const { setAnswered, answered, incrementNoClick, noClickCount, givenUp } =
    useLogicStore();

  const handleYesClick = () => {
    setAnswered(true);
  };

  const handleNoClick = () => {
    incrementNoClick();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        {answered ? (
          <Acceptance />
        ) : (
          <>
            {/* TEXT */}
            {noClickCount === 0 ? (
              <h1 className="font-pix text-[#aa4d69]">
                Are you free this Feb 14?
              </h1>
            ) : givenUp ? (
              <>
                <p className="font-pix text-[#aa4d69]">What song is this??!</p>
                <p className="font-pix text-[#aa4d69]">HINT: (answer below)</p>
              </>
            ) : (
              <h1 className="font-pix text-[#aa4d69]">nooooo</h1>
            )}

            {/* IMAGE */}
            {noClickCount === 0 ? (
              <img src="assets/emoji-pink.jpg" />
            ) : !givenUp ? (
              <img src="assets/cry-pink.jpg" className="h-70 w-70" />
            ) : (
              <img src="assets/twice.jpg" className="h-70 w-90" />
            )}

            {/* BUTTONS */}
            {givenUp ? (
              <div className="flex gap-4 mt-4 ">
                <Button
                  className="bg-transparent  rounded mt-4 hover:bg-transparent cursor-pointer font-pix text-[#aa4d69]"
                  onClick={handleYesClick}
                >
                  <img
                    src="assets/heart-spinning.gif"
                    className="h-8 w-8 scale-150"
                  />
                  Yes
                </Button>
                <p className="font-pix  mt-5 text-[#aa4d69]">or</p>

                <Button
                  className="bg-transparent  rounded mt-4 hover:bg-transparent cursor-pointer font-pix text-[#aa4d69]"
                  onClick={handleYesClick}
                >
                  <img
                    src="assets/wink-anime.gif"
                    className="h-8 w-8 scale-150"
                  />
                  Yes
                </Button>
              </div>
            ) : (
              <div className="flex gap-4 mt-4">
                <Button
                  className="bg-transparent  rounded mt-4 hover:bg-transparent cursor-pointer font-pix text-[#aa4d69]"
                  onClick={handleYesClick}
                >
                  <img
                    src="assets/heart-spinning.gif"
                    className="h-8 w-8 scale-150"
                  />
                  Yes
                </Button>
                <Button
                  className="bg-transparent  rounded mt-4 hover:bg-transparent cursor-pointer font-pix text-[#aa4d69]"
                  onClick={handleNoClick}
                >
                  <img
                    src="assets/cry-crying.gif"
                    className="h-8 w-8 scale-150"
                  />
                  No
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
