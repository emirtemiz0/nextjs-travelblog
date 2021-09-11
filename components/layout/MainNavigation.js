import classes from './MainNavigation.module.css';
import Link from 'next/link'

function MainNavigation() {

  return (
    <header className={classes.header}>
      <Link href="/">
      <div className={classes.logo}>Traveler</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/'>Gezi Rehberi</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Yeni Gezi Ekle</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;