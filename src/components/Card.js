export default function Card({ title, text, children }) {
  return (
    <div className="card">
      {children}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
        <a className="card__link" href="/">Go somewhere</a>
      </div>
    </div>
  );
}
