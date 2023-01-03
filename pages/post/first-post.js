import styles from "../../styles/FirstPost.module.css";
import utilsStyles from "../../styles/Utils.module.css";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import ImageLayout from "../../components/ImageLayout";
import Layout from "../../components/Layout";

export default function FirstPost() {
    return (
        <Layout className={styles.container}>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <main>
                <div className={styles.card}>
                    <h1 className={utilsStyles.heading2Xl}>First Post</h1>
                    <ImageLayout></ImageLayout>
                    <p>Lets make group call by entering room name</p>
                    <Link href="/">
                        &larr;back to home
                    </Link>
                </div>
            </main>
        </Layout>);
}

