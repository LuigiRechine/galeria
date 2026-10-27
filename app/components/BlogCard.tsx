
type BlogCardProps = {
  category: string;
  title: string;
  date: string;
  comments: number;
  image: string;
};

export default function BlogCard({
  category,
  title,
  date,
  comments,
  image,
}: BlogCardProps) {
  return (
    <article>
      <img
        src={image}
        alt={title}
        className="h-36 w-full rounded-md object-cover"
      />

      <div className="pt-3">
        <span className="text-xs font-medium text-blue-500">
          {category}
        </span>

        <h2 className="mt-1 text-sm font-semibold leading-5 text-black">
          {title}
        </h2>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[10px] text-gray-500">
          <span>▦ {date}</span>
          <span>•</span>
          <span>◉ {comments}</span>
        </div>
      </div>
    </article>
  );
}
