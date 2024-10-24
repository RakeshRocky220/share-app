import logo from './logo.svg';
import './App.css';

function App() {
  const shareLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check this out!',
        text: 'List Name',
        url: 'https://example.com', // Replace with your URL
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.error('Error sharing:', error));
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
