import "./Hero.css";

export default function Hero() {
  return (
    <div className="support-wrapper">
      <div className="support-header">
        <h1>Support Portal</h1>
        <button className="tickets-btn">My tickets</button>
      </div>

      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
        />
      </div>
    </div>
  );
}
