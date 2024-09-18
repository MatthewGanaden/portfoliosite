import styles from './style.module.scss'
import { menuSlide } from '../anim'
import Link from 'next/link';
import { motion } from 'framer-motion';
import Curve from './curve/index';

export default function Nav() {

    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "About",
            href: "/about",
        },
    ]
  
    return (
        <motion.div variants={menuSlide} animate="enter" exit="exit" initial="initial" className={styles.menu}>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                        {
                            navItems.map((item, index) => (
                                <Link key={index} href={item.href}>
                                    {item.title}
                                </Link>
                            ))
                        }
                    <div className={styles.footer}>
                        <a>LinkedIn</a>
                        <a>Github</a>
                    </div>
                </div>
            </div>
            <Curve/>
        </motion.div>
    )
}
