export type Reason = {
  image: string;
  title: string;
};

export function ReasonCard({ image, title }: Reason) {
  return (
    <article className="bg-white rounded-xl overflow-hidden hover-lift h-full">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
      </div>
      <h3 className="font-medium text-slate-700 text-center text-sm px-4 py-4">
        {title}
      </h3>
    </article>
  );
}
