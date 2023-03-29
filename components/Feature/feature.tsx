import {
  ClipboardDocumentCheckIcon,
  CpuChipIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { IFeature } from "@/entities/entities";

const features: IFeature[] = [
  {
    name: "PCB Assembly",
    description:
      "Looking for reliable and efficient PCB assembly services? Our experienced team has you covered, delivering high-quality results that meet your unique needs and specifications.",
    icon: CpuChipIcon,
  },
  {
    name: "Procurement",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    name: "Final assembly",
    description:
      "Looking for a partner for your final assembly needs? Look no further than our experienced team. We offer fast and accurate assembly services that ensure your products are finished to the highest standards of quality and performance.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Optical inspection",
    description:
      "Understanding the Basics of Visual Inspection and Quality Control.",
    icon: MagnifyingGlassIcon,
  },
];

export default function Feature() {
  return (
    <div>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Holdano B.V.
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Our Comprehensive Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our wide range of services can help your business thrive - from
            procurement and assembly to final production, we have you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
