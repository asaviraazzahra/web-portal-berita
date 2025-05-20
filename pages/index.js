import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function getServerSideProps(context) {
  const { getSession } = await import("next-auth/react");
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const [cnn, kompas, okezone] = await Promise.all([
    axios.get("https://berita-indo-api-next.vercel.app/api/cnn-news/"),
    axios.get("https://berita-indo-api-next.vercel.app/api/kompas-news/"),
    axios.get("https://berita-indo-api-next.vercel.app/api/okezone-news/"),
  ]);

  return {
    props: {
      berita: {
        cnn: cnn.data.data,
        kompas: kompas.data.data,
        okezone: okezone.data.data,
      },
      session,
    },
  };
}

export default function Home({ berita }) {
  return (
    <div className="p-8 grid gap-8 grid-cols-1 md:grid-cols-3 bg-gray-50 min-h-screen">
      {berita && Object.entries(berita).map(([portal, data]) => (
        <div key={portal}>
          <h1 className="text-xl font-bold mb-4">{portal.toUpperCase()}</h1>
          {data.slice(0, 3).map((item, index) => (
            <NewsCard item={item} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
}