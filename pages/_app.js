import '../styles/globals.scss'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
    return (
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0,
                duration: 1
            },
            pageAnimate: {
                opacity: 1,
                duration: 1
            }
        }}>
            <Component {...pageProps} />
        </motion.div>
    )
}

export default MyApp
