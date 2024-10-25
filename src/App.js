import logo from './logo.svg';
import './App.css';
import cart from './assets/cart.png';

function App() {
  const shareLink = async () => {
    if (navigator.share) {
      // Create a Blob from the imported image
      const response = await fetch(cart);
      const blob = await response.blob();

      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'List Name',
          url: 'https://example.com', // Replace with your URL
          files: [new File([blob], 'cart.png', { type: blob.type })]
        });

        console.log('Share successful');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.log('Web Share API not supported in this browser.');
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <button className="btn btn-primary" onClick={shareLink}>Share</button>
    </div>
  );
}

export default App;
