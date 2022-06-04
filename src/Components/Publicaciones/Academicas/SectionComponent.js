export default function Section({
  type,
  authors,
  title,
  year,
  publisher,
  href,
  doi,
  project,
  sponsor,
  pages
}) {
  const regex = /Hernandez-Milian, G./i; /* | Hernandez, G. */
  // const boldAuthor = "Hernandez-Milian, G."

  const boldAuthor = authors.match(regex)[0];
  const indexBoldAuthor = authors.search(regex);
  console.log('index', indexBoldAuthor)

  console.log("Name: ", boldAuthor);
  
  const boldAuthorElement = <strong>{boldAuthor}</strong>;

  let beforeBoldAuthor = "";
  let afterBoldAuthor = "";

  if (authors.includes(boldAuthor)) {
    if (authors.startsWith(boldAuthor)) {
      afterBoldAuthor = authors.slice(boldAuthor.length);
      console.log('after', afterBoldAuthor)
    } else if (authors.endsWith(boldAuthor)) {
      beforeBoldAuthor = authors.slice(0, indexBoldAuthor);
      console.log('before', beforeBoldAuthor);
    } else {
      beforeBoldAuthor = authors.slice(0, indexBoldAuthor);
      console.log('before', beforeBoldAuthor);
      afterBoldAuthor = authors.slice(indexBoldAuthor + boldAuthor.length);
      console.log('after', afterBoldAuthor)
    }
  }

  switch (type) {
    case "journals":
      return (
        <div className="publication-container">
          <p className="publication-item">
            <span className="authors">
              {beforeBoldAuthor}
              {boldAuthorElement}
              {afterBoldAuthor}.
            </span>
            &nbsp;
            <span className="title">
              <em>{title}</em>.
            </span>
            &nbsp;
            <span className="year">{year}.</span>
            &nbsp; 
            <span className="publisher">{publisher}.</span>
            &nbsp;
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
              {afterBoldAuthor}.
            </span>
            &nbsp;
            <span className="title">
              <em>{title}.</em>
            </span>
            &nbsp;
            <span className="year">{year}.</span>
            &nbsp;
            <span className="publisher">{publisher}.</span>
            &nbsp;
            <a href={href} className="metadata" target="_blank">
              {href}. {/*eliminar el href condicionado a que exista en el item */}
            </a>
            &nbsp;
            <span className="project">{project}.</span>
            &nbsp;
            <span className="sponsor">{sponsor}.</span>
            <span className="pages">{pages}</span>
          </p>
        </div>
      );
    case "other":
      return null;
    default:
      return "Section with no items yet";
  }
}
