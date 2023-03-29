export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Partner with us for top-quality electronics production
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Trust our experienced team and cutting-edge equipment for
              high-quality electronics production. From prototyping to
              large-scale manufacturing, we have you covered. Partner with us
              today.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://res.cloudinary.com/dzg1ekme7/image/upload/v1680011553/WhatsApp_Image_2023-03-28_at_11.20.52_v0hsbz.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/dzg1ekme7/image/upload/v1680113177/Jeroen/WhatsApp_Image_2023-03-28_at_11.20.52_2_ttucp7.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/dzg1ekme7/image/upload/v1680113154/Jeroen/WhatsApp_Image_2023-03-28_at_11.26.31_cmfbcy.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/dzg1ekme7/image/upload/v1680113176/Jeroen/WhatsApp_Image_2023-03-28_at_11.20.52_w8x7gm.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/dzg1ekme7/image/upload/v1680113176/Jeroen/WhatsApp_Image_2023-03-28_at_11.20.35_chzprj.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/dzg1ekme7/image/upload/v1680113154/Jeroen/WhatsApp_Image_2023-03-28_at_11.26.32_2_upl6fh.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://res.cloudinary.com/dzg1ekme7/image/upload/v1680113154/Jeroen/WhatsApp_Image_2023-03-28_at_11.26.32_3_ih6aw8.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
