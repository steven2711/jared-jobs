import Head from "next/head";
import Image from "next/image";
import image from "../public/jared-jobs.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fuck You Jared</title>
        <meta
          name="description"
          content="My name is Jared Collee and I love Apple products."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="image-box">
          <Image
            src={image}
            alt="My name is Jared Collee and I love Apple products!"
            layout="responsive"
            className="image"
          />
        </div>

        <h1>
          My name is Jared and I fucking love Apple products. I wish
          Steve Jobs was alive today to be my sugar daddy and maybe... a little
          more. Please share my love for Apple with everyone you know via this
          link.
        </h1>
      </main>
    </div>
  );
}
