import "../Layout/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>©2022</li>
        <li>
          <span className="icon material-icons">
            <a href="mailto:ghmilian@googlemail.com">email</a>
          </span>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gema-hernandez-milian-a7670514/">
            <i className="icon fa-brands fa-linkedin-in fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="https://www.researchgate.net/profile/Gema-Hernandez-Milian">
            <i className="icon fa-brands fa-researchgate fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ghmilian">
            <i className="icon fa-brands fa-twitter fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="https://orcid.org/0000-0003-2729-8348">
            <i className="icon fa-brands fa-orcid fa-xl"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
