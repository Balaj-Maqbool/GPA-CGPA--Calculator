import { useState } from 'react';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaLink,
  FaShare
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import './Share.css';

const Share = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  // Replace with your actual project URL
  const projectUrl = 'https://your-project-url.com';
  const projectName = 'GPA/CGPA Calculator';

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="share-icon" />,
      action: `https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20${projectName}%20${projectUrl}`
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="share-icon" />,
      action: `https://www.facebook.com/sharer/sharer.php?u=${projectUrl}`
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="share-icon" />,
      action: `https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20${projectName}&url=${projectUrl}`
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="share-icon" />,
      action: `https://www.linkedin.com/shareArticle?mini=true&url=${projectUrl}&title=${projectName}`
    },
    {
      name: 'Email',
      icon: <MdEmail className="share-icon" />,
      action: `mailto:?subject=Check%20out%20${projectName}&body=Here's%20an%20awesome%20${projectName}:%20${projectUrl}`
    },
    {
      name: 'Copy Link',
      icon: <FaLink className="share-icon" />,
      action: 'copy'
    }
  ];

  const handleShare = (action) => {
    if (action === 'copy') {
      navigator.clipboard.writeText(projectUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } else {
      window.open(action, '_blank');
    }
  };

  return (
    <div className="share-container">
      <div className="share-message">
        <h2>Help Others Succeed! 🎓</h2>
        <p>Share this GPA/CGPA Calculator with your friends and classmates to help them track their academic progress!</p>
      </div>

      <div 
        className="share-trigger"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaShare className="share-main-icon" />
        Share Now
        <div className={`share-menu ${isMenuOpen ? 'open' : ''}`}>
          {shareOptions.map((option, index) => (
            <div 
              key={option.name}
              className="share-item"
              onClick={() => handleShare(option.action)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {option.icon}
              <span className="share-text">{option.name}</span>
            </div>
          ))}
        </div>
      </div>

      {isCopied && <div className="copy-feedback">Link copied! 📋</div>}
    </div>
  );
};

export default Share;