import Image from "next/image";
import statsImage from "@/public/images/kominar-maly.jpg";

const stats = [
  { value: "3", label: "kominári v tíme" },
  { value: "2", label: "revízni technici" },
  { value: "1", label: "cechmajster kraja" },
  { value: "20 m", label: "komínová kamera" },
];

export function Stats() {
  return (
    <section className="flex flex-col items-center bg-ink px-gutter py-16">
      <div className="flex w-full max-w-content items-center gap-12">
        <div className="relative h-[180px] flex-1 overflow-hidden rounded-button">
          <Image
            src={statsImage}
            alt="Malý kominár s rebríkom a kefou"
            fill
            placeholder="blur"
            sizes="400px"
            className="object-cover"
          />
        </div>

        <dl className="flex flex-2 items-start gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col items-start gap-3">
              <dt className="order-1 text-body text-sand">{stat.label}</dt>
              <dd className="text-stat text-page">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
