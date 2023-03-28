import {
  CpuChipIcon,
  MagnifyingGlassCircleIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "PCB Assembly",
    description:
      "Looking for reliable and efficient PCB assembly services? Our experienced team has you covered, delivering high-quality results that meet your unique needs and specifications.",
    href: "#",
    icon: CpuChipIcon,
  },
  {
    name: "Procurement",
    description:
      "Need to streamline your procurement process and reduce costs? Our expert team can help, offering efficient and effective procurement services that save you time and money, without sacrificing quality or reliability.",
    href: "#",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Final assembly",
    description:
      "Looking for a partner for your final assembly needs? Look no further than our experienced team. We offer fast and accurate assembly services that ensure your products are finished to the highest standards of quality and performance.",
    href: "#",
    icon: ClipboardDocumentCheckIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-blue-500 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Comprehensive Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our wide range of services can help your business thrive - from
            procurement and assembly to final production, we have you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
