import { Link } from 'react-router-dom';
import './PlayButton.css';

export default function PlayButton() {
  return (
    <div className="play-container">
      <div className="play-button">
        <Link to="/intro">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path d="M 20,20 L 80,50 L 20,80 Z" fill="currentColor" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
