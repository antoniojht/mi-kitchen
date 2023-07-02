import Link from 'next/link';
import Image from 'next/image';

export default function Card({
  title, src, difficult, totalTime, slug,
}) {
  return (
    <Link
      href={slug}
      className="rounded-lg drop-shadow-md"
    >
      <div className="bg-white border rounded-lg overflow-hidden">
        <Image
          src={src}
          alt={`Image for ${title}`}
          sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw"
          className="object-center object-cover w-full rounded-lg"
          fill
        />
      </div>
      <div className="z-10 relative mt-24 top-16">
        <div className="text-gray-600 font-semibold tracking-wide text-xs uppercase">
          {totalTime}
          {' '}
          minutos &bull;
          {' '}
          {difficult}
        </div>
        <div className="font-semibold text-lg leading-tight">
          {title}
        </div>
      </div>
    </Link>
  );
}
