  import logo from './logo.svg';
  import './App.css';
  import cart from './assets/cart.png';

  import './App.css';

  function App() {
    const shareLink = async () => {
      // Replace with the actual URL of your hosted image
      const mainUrl = "https://example.com"; // Replace with your main URL

      if (navigator.share) {
        try {
          await navigator.share({
            title: "Check this out!",
            text: "List Name Here",
            url: mainUrl, // Share the main URL
            files: [
              new File(
                [await fetch(cart).then((res) => res.blob())],
                "cart.png",
                { type: "image/png" }
              ),
            ], // For supported browsers
          });

          console.log("Share successful");
        } catch (error) {
          console.error("Error sharing:", error);
        }
      } else {
        console.log("Web Share API not supported in this browser.");
      }
    };

    return (
      <>
        <div className="d-flex justify-content-center mt-5">
          <h1>Web Share API</h1>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p>invoking system share tab using web share api</p>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-primary" onClick={shareLink}>
            Share
          </button>
        </div>

        <input id="cardNumber"  inputMode="numeric"  ></input>
      </>
    );
  }

  export default App;
