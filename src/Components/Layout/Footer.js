import "../Layout/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>©2022</li>
        <li>
          <span class="material-icons">
            <a href="mailto:ghmilian@googlemail.com">email</a>
          </span>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-linkedin-in fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-brands fa-researchgate fa-xl"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ghmilian">
            <i class="fa-brands fa-twitter fa-xl"></i>
          </a>
        </li>
        <li><a href=""><i class="fa-brands fa-orcid fa-xl"></i></a></li>
      </ul>
    </div>
  );
}
