function Card({ name, image, description }) {
  function handleFollow() {
    alert(`You followed ${name}!`);
  }

  return (
    <div className="Card">
      <div className="glass-card">
        <img src={image} alt="profile picture" className="profile-pic" />
        <img src={image} alt="blur" className="glass-blur" />
        <div className="content-overlay">
          {/* 🔹 Name + Follow in one line */}
          <div className="header-row">
            <div className="name-container">
              <h2 className="title-text">{name}</h2>
              <svg
                className="verified-icon"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              
            </div>

            <button className="follow-button" onClick={handleFollow}>
              Follow
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M12 4v16m-8-8h16"
                />
              </svg>
            </button>
          </div>

          
          <p className="user-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
