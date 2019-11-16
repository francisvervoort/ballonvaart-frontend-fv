<template>
  <div is="li" class="flex flex-col max-w-sm shadow-md md:shadow-xl">
    <img
      class="w-full h-64 object-cover"
      :src="
        inhoud.afbeeldingNaam
          ? require(`@/assets/cards/${inhoud.afbeeldingNaam}`)
          : ''
      "
      :alt="`Afbeelding van ${inhoud.titel} vlucht`"
    />
    <div class="flex flex-col flex-grow px-6 py-4">
      <h3 class="text-gray-800 font-bold text-xl">{{ inhoud.titel }}</h3>
      <p class="text-gray-600 mt-2 flex-grow">{{ inhoud.beschrijving }}</p>
      <p class="text-gray-900 font-bold mt-2">{{ inhoud.prijs }}</p>
    </div>
    <div class="flex justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BallonCard",
  props: {
    inhoud: {
      type: Object,
      default: () => {
        return {
          titel: "Titel",
          beschrijving: "Lorem ipsum...",
          afbeeldingNaam: "",
          prijs: 0
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
