import Link from "next/link";

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
          <img src={item.image} className="h-[200px] w-full object-cover rounded" />
          <h2 className="text-lg font-bold mt-2">{item.title.slice(0, 80)}...</h2>
          <p className="text-sm text-gray-500 mt-1">{item.pubDate}</p>
        </div>
      </Link>
    );
  }
  