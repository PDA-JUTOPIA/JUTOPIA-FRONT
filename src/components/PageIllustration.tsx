import Image from "next/image";

export default function PageIllustration() {
  return (
    <>
      {/* Stripes illustration */}
      <div
        className="animate-fadeIn pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-20"
          src="/bgimage.jpg"
          width={1920}
          height={675}
          alt=""
          priority
        />
      </div>
      {/* Circles */}
    </>
  );
}
