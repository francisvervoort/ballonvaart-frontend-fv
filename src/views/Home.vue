<template>
  <div class="pt-24 gradient">
    <header
      class="container mx-auto px-3 pb-3 mt-2 md:mt-6 flex flex-wrap flex-col md:flex-row items-center text-white"
    >
      <div
        class="w-full md:w-3/5 flex order-first md:order-2 justify-center md:justify-end"
      >
        <img
          class="h-56 md:h-auto md:w-3/5"
          src="@/assets/ballon-hero.svg"
          alt="Hero afbeelding van ballon"
        />
      </div>
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase w-full mt-4 md:mt-0">De ballonvaart van je leven</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Verken België vanuit de lucht
        </h1>
        <p class="text-2xl mb-8">
          Boek een onvergetelijke reis door de wolken!
        </p>
        <router-link
          tag="button"
          class="mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-2 py-4 px-8 shadow-lg"
          :to="{ name: 'boeken' }"
        >
          BOEKEN
        </router-link>
      </div>
    </header>
    <main>
      <section class="bg-white border-b py-4 md:py-8">
        <div class="container max-w-5xl mx-auto">
          <h1
            class="my-2 text-5xl font-bold leading-tight text-center text-gray-800"
          >
            Wie zijn wij?
          </h1>

          <div class="flex flex-wrap items-center">
            <!-- Linkerkolom -->
            <div class="sm:w-1/2 p-6">
              <h3
                class="text-3xl text-gray-800 font-bold leading-none text-center md:text-left"
              >
                Professionele ballonvaarders
              </h3>
              <p class="text-gray-600 mt-5">
                Ballonvaart zit in ons bloed. Drie generaties van ballonvaarders
                staan klaar om jou en je gezelschap een onvergetelijke
                ballonvaart te geven.
              </p>
            </div>
            <div class="w-full sm:w-1/2 md:p-6 flex justify-end">
              <img class="h-64" src="@/assets/ballon-1.jpg" />
            </div>
          </div>

          <!-- Rechterkolom -->
          <div class="flex flex-wrap items-center">
            <div class="sm:w-1/2 p-6 md:order-last">
              <h3
                class="text-3xl text-gray-800 font-bold leading-none text-center md:text-left"
              >
                Kwaliteit en veiligheid
              </h3>
              <p class="text-gray-600 mt-5">
                Ons team zet in op absolute veiligheid voor, tijdens en na de
                ballonvaart. Onze ballonnen zijn uitgerust met de nieuwste
                snufjes voor maximale stabiliteit.
              </p>
            </div>
            <div class="w-full sm:w-1/2 md:p-6">
              <img class="h-64" src="@/assets/ballon-2.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray-100 border-b py-4 md:py-8">
        <h2 class="mb-4 text-5xl font-bold text-center text-gray-800">
          Aanbod
        </h2>
        <div class="container mx-auto w-full px-4 md:px-none">
          <!-- Kaarten -->
          <ul
            class="w-full px-2 flex flex-col md:flex-row flex-wrap justify-around"
          >
            <li
              class="md:w-1/3 lg:w-1/4 px-2 py-2 flex"
              v-for="vaart of ballonvaarten"
              :key="vaart.titel"
            >
              <ballon-card class="flex-grow" :inhoud="vaart">
                <router-link
                  tag="button"
                  class="button-gradient my-6"
                  :to="getLink(vaart.type)"
                >
                  BOEKEN
                </router-link>
              </ballon-card>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import BallonCard from "@/components/BallonCard";

export default {
  name: "home",
  components: {
    BallonCard
  },
  data() {
    return {
      ballonvaarten: [
        {
          titel: "Classic",
          type: "classic",
          beschrijving:
            "Geniet met vrienden en kennissen van een ballonvlucht met ambiance en prachtige zichten.",
          afbeeldingNaam: "classic.jpg",
          prijs: 200
        },
        {
          titel: "Ontbijt",
          type: "ontbijt",
          beschrijving:
            "Ga de lucht in bij zonsopgang en geniet van een lekker ontbijt.",
          afbeeldingNaam: "ontbijt.jpg",
          prijs: 240
        },
        {
          titel: "Luxe",
          type: "luxe",
          beschrijving:
            "Kies voor een luxe ballonvlucht met bubbels en snacks!",
          afbeeldingNaam: "luxe.jpg",
          prijs: 280
        }
      ]
    };
  },
  methods: {
    getLink(type) {
      return {
        name: "boeken",
        query: {
          type
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
