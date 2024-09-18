import { motion } from 'framer-motion';
import { slide } from '../../anim'
import styles from './style.module.scss'
import NextLink from 'next/link';

export default function index({data}) {
  return (
    <motion.div custom={data.index} variants={slide} animate="enter" exit="exit" initial="initial" className={styles.link}>
      <NextLink href={data.href}>
          {data.title}
      </NextLink>
    </motion.div>
  )
}
