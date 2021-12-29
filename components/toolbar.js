import Link from "next/link";
import styles from '../styles/toolbar.module.css'

export const Toolbar = () => {
return (
    <div className={styles.main}>
     <Link href="/">Home</Link >
     <Link href="/feed/1">Feed</Link>
     <Link href="/eom">EOM</Link>
     <Link target ="_blank" href="https://twitter.com/portexe">TwitteLink
    </Link>
    </div>
    )
};