import Image from "next/image";

export default function Feature() {
  return (
    <div className="overflow-hidden pt-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 xl:px-8">
        <div className="flex flex-col items-center xl:flex-row">
          <div className="xl:w-1/2">
            <Image
              src={"/img/chiefprincess.webp"}
              alt="Chief & Princess"
              width={600}
              height={600}
              className="rounded-lg shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
          <div className="pt-12 xl:w-1/2 xl:pl-8 xl:pt-0">
            <div className="text-center">
              <h2 className="text-5xl font-bold">Halito!</h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                Greetings from the Choctaw Indian Reservation. We invite you to
                join us July 12-15 for our 73rd annual Choctaw Indian Fair. The
                fair takes place on our centuries-old homeland in beautiful
                Choctaw, Mississippi. We gather each July to celebrate our
                heritage and share our beautiful and vibrant culture with our
                friends and neighbors. This year’s fair theme is:
              </p>
              <p className="my-8 text-4xl font-bold">
                “The Choctaw Spirit Lives On”
              </p>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                Fairgoers will experience the magnificent journey of our people
                through historical and cultural displays, social dancing, tribal
                arts & crafts, Choctaw stickball – the granddaddy of all field
                sports – as well as the Choctaw Indian Princess Pageant and
                traditional Choctaw food. The fair also offers carnival rides
                and games for the young and old alike, Shawi’s Discovery Zone
                and chart-topping musical acts each night. There’s something for
                everyone at the Choctaw Indian Fair – we’ll see you soon!
              </p>
              <p className="mt-8 text-5xl font-bold">Yakoki!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
