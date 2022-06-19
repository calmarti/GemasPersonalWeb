export default function Item({
  type,
  authors,
  title,
  year,
  publisher,
  href,
  doi,
  project,
  sponsor,
  pages,
  institution,
  workshop,
  tipo,
  conference,
  curso,
  lugar,
  // spanish,
}) {
  /*   const regexEn = /Hernandez-Milian, G./i;

  if (spanish) {
  const regexSp = /Hernández Milián, G./i;
  } */

  const matched =
    authors.match(/Hernandez-Milian, G./i) ||
    authors.match(/Hernández Milián, G./i) ||
    authors.match(/Hernández-Milián, G./i) ||
    authors.match(/Hernandez Milian, G./) ||
    authors.match(/Hernández, G./i) ||
    authors.match(/Hernandez, G./i);
  console.log("matched", matched);

  const boldAuthor = matched[0];
  const indexBoldAuthor = authors.search(boldAuthor);

  console.log("Authors", authors);
  console.log("Name: ", boldAuthor);

  const boldAuthorElement = <strong>{boldAuthor}</strong>;

  let beforeBoldAuthor = "";
  let afterBoldAuthor = "";

  if (authors.includes(boldAuthor)) {
    if (authors.startsWith(boldAuthor)) {
      afterBoldAuthor = authors.slice(boldAuthor.length);
      console.log("first her and after", afterBoldAuthor);
    } else if (authors.endsWith(boldAuthor)) {
      beforeBoldAuthor = authors.slice(0, indexBoldAuthor);
      console.log("before and then her", beforeBoldAuthor);
    } else {
      beforeBoldAuthor = authors.slice(0, indexBoldAuthor);
      afterBoldAuthor = authors.slice(indexBoldAuthor + boldAuthor.length);
      console.log("before in the middle", beforeBoldAuthor);
      console.log("in the middle after", afterBoldAuthor);
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
              {href}.{" "}
              {/*eliminar el href condicionado a que exista en el item */}
            </a>
            &nbsp;
            <span className="project">{project}.</span>
            &nbsp;
            <span className="sponsor">{sponsor}.</span>
            <span className="pages">{pages}</span>
          </p>
        </div>
      );
    case "books":
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
            <span className="institution">{institution}.</span>
          </p>
        </div>
      );
    case "workshops":
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
            <span className="workshop">{workshop}.</span>
            &nbsp;
            {tipo &&  <span className="tipo">{tipo}.</span> }
           
          </p>
        </div>
      );
    case "conferences":
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
            <span className="workshop">{conference}.</span>
            &nbsp;
            <span className="tipo">{tipo}</span>
          </p>
        </div>
      );
    case "divulgacion":
      return (
        <div className="publication-container">
          <p className="publication-item">
            <span className="authors">
              {beforeBoldAuthor}
              {boldAuthorElement}
              {afterBoldAuthor}
            </span>
            &nbsp;
            <span className="title">
              <em>{title}.</em>
            </span>
            &nbsp;
            <span className="year">{year}.</span>
            &nbsp;
            <span className="curso">{curso}.</span>
            &nbsp;
            <span className="lugar">{lugar}.</span>
            &nbsp;
            <span className="tipo">{tipo}</span>
          </p>
        </div>
      );
    default:
      return "Section with no items yet";
  }
}
