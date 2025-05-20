import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ item }) {
  return (
    <Link
      href={{
        pathname: "/detail",
        query: {
          title: item.title,
          image: item.image,
          pubDate: item.pubDate,
          content: item.content,
        },
      }}
      className="block"
    >
      <div className="max-w-md bg-white shadow rounded p-4 mb-4 hover:shadow-lg transition-shadow duration-200">
        <div className="relative h-[200px] w-full">
          <Image 
            src={item.image}
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded"
            alt={item.title || "News image"}
            unoptimized={!item.image.startsWith('/')} // Unoptimized for external URLs
          />
        </div>
        <h2 className="text-lg font-bold mt-2">{item.title.slice(0, 80)}...</h2>
        <p className="text-sm text-gray-500 mt-1">{item.pubDate}</p>
      </div>
    </Link>
  );
}