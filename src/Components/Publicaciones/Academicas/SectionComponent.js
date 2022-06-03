export default function Section({
  type,
  authors,
  title,
  year,
  publisher,
  href,
  doi,
}) {
  const reBoldAuthor = /Hernandez-Milian, G./; /* | Hernandez, G. */
  // const boldAuthor = "Hernandez-Milian, G."

  const boldAuthor = authors.match(reBoldAuthor)[0];
  const indexBoldAuthor = authors.search(reBoldAuthor);

  console.log("Name: ", boldAuthor);

  const boldAuthorElement = <strong>{boldAuthor}</strong>;

  let beforeBoldAuthor = "";
  let afterBoldAuthor = "";

  if (authors.includes(boldAuthor)) {
    if (authors.startsWith(boldAuthor)) {
      afterBoldAuthor = authors.slice(boldAuthor.length);
    } else if (authors.endsWith(boldAuthor)) {
      beforeBoldAuthor = authors.slice(0, indexBoldAuthor);
      console.log(beforeBoldAuthor);
    } else {
      beforeBoldAuthor = authors.slice(0, indexBoldAuthor);
      afterBoldAuthor = authors.slice(indexBoldAuthor + boldAuthor.length);
    }
  }

  switch (type) {
    case "papers":
      return (
        <div className="publication-container">
          <p className="publication-item">
            <span className="authors">
              {beforeBoldAuthor}
              {boldAuthorElement}
              {afterBoldAuthor}
            </span>
            <span className="title">
              <em>{title}</em>.&nbsp;
            </span>
            <span className="year">{year}</span>
            <span className="publisher">{publisher}</span>
            <a href={href} className="metadata" target="_blank">
              {doi}
            </a>
          </p>
        </div>
      );
    case "reports":
      return (
        <div className="publication-container">
          <p className="publication-item">
            <span className="authors">
              {beforeBoldAuthor}
              {boldAuthorElement}
              {afterBoldAuthor}
            </span>
            <span className="title">
              <em>{title}</em>.&nbsp;
            </span>
            <span className="year">{year}</span>
            <span className="publisher">{publisher}</span>
            {/* <a href={href} className="metadata" target="_blank">
              {doi}
            </a> */}
          </p>
        </div>
      );
    case "other":
      return null;
    default:
      return "Section with no items yet";
  }
}
