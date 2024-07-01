import "./heading.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title-container">
        <h1 className="Title-heading">Darko Faraidun Ahmed</h1>
      </div>
      <hr className="full-width-line"></hr>
      <hr className="full-width-line"></hr>

      <div className="nav">
        <p className="date">16-1-2002 </p>
        <h2>Front end developer</h2>
        <p className="phoneNumber">Phone number: 0770 416 5116</p>
      </div>
      <hr className="full-width-line"></hr>
      <hr className="full-width-line"></hr>
    </div>
  );
}
