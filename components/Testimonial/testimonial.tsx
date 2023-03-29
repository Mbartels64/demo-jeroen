export default function Testimonial() {
  return (
    <div>
      <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gray-900 py-20 px-6 shadow-xl sm:rounded-3xl sm:py-24 sm:px-10 md:px-12 lg:px-20">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
            src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
          <svg
            viewBox="0 0 1097 845"
            aria-hidden="true"
            className="absolute -top-56 -left-80 w-[68.5625rem] transform-gpu blur-3xl"
          >
            <path
              fill="url(#68eb76c4-2bc9-4928-860e-70adf05719f4)"
              fillOpacity=".45"
              d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
            />
            <defs>
              <linearGradient
                id="68eb76c4-2bc9-4928-860e-70adf05719f4"
                x1="1097.04"
                x2="-141.165"
                y1=".22"
                y2="363.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#776FFF" />
                <stop offset={1} stopColor="#FF4694" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 1097 845"
            aria-hidden="true"
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:w-[68.5625rem] md:transform-gpu md:blur-3xl"
          >
            <path
              fill="url(#68eb76c4-2bc9-4928-860e-70adf05719f4)"
              fillOpacity=".25"
              d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
            />
          </svg>
          <div className="relative mx-auto max-w-2xl lg:mx-0">
            <figure>
              <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                <p>
                  &quot;As an EMS provider Holdano B.V. is your strategic
                  partner in producing the highest quality electronics. As a
                  small company we offer great flexibility leading to the skill
                  of quickly, accurately adapting to customer needs. We have
                  short lines so that unnecessary delays are avoided.&quot;
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-white">
                <div className="font-semibold">Judith Black</div>
                <div className="mt-1">CEO of Holdano B.V.</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
