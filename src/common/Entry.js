
export default Entry = function ({ authors, year, title, publisher, href, doi }) {
  return (
    <p>
      {authors}
      <span>{year}</span>
      <span>{title}</span>
      <span>{publisher}</span>
      <a>{href}</a>
      <a>{doi}</a>
    </p>
  );
};

//TODO: sombreado condicional donde ponga GHM

// <span>
// <strong>Hernandez-Milian, G.</strong>
// </span>
// , Lusher, A. MacGabban, S y Rogan, E. 2019.
// <em>
// Microplastics in seal intestines: are they associated with
// parasite aggregations?
// </em>{" "}
// Marine Pollution Bulletin. 146, 349-354.
// <a href="https://www.sciencedirect.com/science/article/abs/pii/S0025326X1930459X">
// {" "}
// Doi: 10.1016/j.marpolbul.2019.06.014
// </a>
