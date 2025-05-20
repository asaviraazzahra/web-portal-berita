import { useRouter } from "next/router";
import Image from "next/image";

export default function Detail() {
  const router = useRouter();
  const { title, image, pubDate, content } = router.query;

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-md rounded mt-10">
      <h1 className="text-2xl font-bold">{title}</h1>
      {image && (
        <div className="relative w-full h-[300px] mt-4">
          <Image 
            src={image}
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded"
            alt={title || "News detail image"}
            unoptimized={!image.startsWith('/')} // Unoptimized for external URLs
          />
        </div>
      )}
      <p className="text-sm text-gray-500 mt-2">{pubDate}</p>
      <p className="mt-6 leading-relaxed">{content}</p>
    </div>
  );
}