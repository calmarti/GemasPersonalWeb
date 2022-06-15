import StyledLink from "../Layout/StyledLink";

export default function Dropdown({ submenu, dropdown }) {
  return (
    <>
      <ul className={dropdown ? "show-dropdown" : "hide-dropdown"}>
        {submenu.map((item) => (
          <li className="dropdown-item" key={item.title}>
            <StyledLink to={item.slug}>{item.title}</StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}
