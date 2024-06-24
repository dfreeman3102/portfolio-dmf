import '../styles/nav.css';
export default function Nav({ links }) {
  return (
    <nav>
      <div>
        <div>
          <ul>
          {links.map((link, index) => (
              <li className='nav-item' key={index}>{link}</li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
