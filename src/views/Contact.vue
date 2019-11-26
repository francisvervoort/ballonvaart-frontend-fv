<template>
  <div class="pt-24 max-w-4xl mx-auto flex flex-wrap">
    <div class="flex items-center w-full md:w-1/2 md:order-1 md:px-6 ">
      <img src="@/assets/contact.svg" alt="Afbeelding contactformulier" />
    </div>
    <form class="w-full md:w-1/2 p-8" @submit.prevent="verzenden">
      <h2 class="text-2xl text-center md:text-left text-gray-900">
        Contacteer ons
      </h2>
      <div class="mt-4">
        <label class="block text-gray-800 text-sm font-bold" for="naam"
          >Naam
        </label>
        <input
          v-model.trim="$v.naam.$model"
          class="w-full mt-1 py-2 px-3 border rounded text-gray-800 shadow focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': $v.naam.$error }"
          :disabled="verzonden"
          type="text"
          id="naam"
          placeholder="Je naam..."
        />
        <p class="text-red-500 mt-1 text-xs italic" v-visible="$v.naam.$error">
          Vul je naam in.
        </p>
      </div>
      <div class="mt-4">
        <label class="block text-gray-800 text-sm font-bold" for="email"
          >E-mail
        </label>
        <input
          v-model.trim.lazy="$v.email.$model"
          class="w-full mt-1 py-2 px-3 border rounded text-gray-800 shadow focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': $v.email.$error }"
          :disabled="verzonden"
          type="email"
          id="email"
          placeholder="mijn@adres.be"
        />
        <p class="text-red-500 mt-1 text-xs italic" v-visible="$v.email.$error">
          Vul een geldig e-mailadres in.
        </p>
      </div>
      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block text-gray-800 text-sm font-bold" for="bericht"
            >Bericht
          </label>
          <span class="text-xs">
            {{ bericht.length }} / {{ berichtMaxLengte }} karakters
          </span>
        </div>
        <textarea
          v-model.trim="$v.bericht.$model"
          class="w-full mt-1 py-2 px-3 resize-none border rounded text-gray-800 shadow focus:outline-none focus:shadow-outline"
          :disabled="verzonden"
          :class="{ 'border-red-500': $v.bericht.$error }"
          id="bericht"
          placeholder="Wat wil je ons vragen?"
          rows="6"
        ></textarea>
        <p
          class="text-red-500 mt-1 text-xs italic"
          v-visible="$v.bericht.$dirty && !$v.bericht.required"
        >
          Vul een bericht in.
        </p>
        <p
          class="text-red-500 mt-1 text-xs italic"
          v-visible="$v.bericht.$dirty && !$v.bericht.maxLength"
        >
          Het bericht is te lang!
        </p>
      </div>
      <div class="flex justify-center my-4">
        <button
          v-if="!verzonden"
          class="px-8 py-4 gradient font-bold rounded-full shadow opacity-75 focus:outline-none focus:shadow-outline"
          :class="{ 'animated shake fast': shake }"
          type="submit"
        >
          Verzenden
        </button>
        <p v-else class="py-4">Bedankt voor het bericht!</p>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, maxLength } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data() {
    return {
      berichtMaxLengte: 150,
      shake: false,
      verzonden: false,
      naam: "",
      email: "",
      bericht: ""
    };
  },
  validations() {
    return {
      naam: {
        required
      },
      email: {
        required,
        email
      },
      bericht: {
        required,
        maxLength: maxLength(this.berichtMaxLengte)
      }
    };
  },
  methods: {
    async verzenden() {
      this.$v.$touch();
      if (this.$v.$anyError) {
        this.shake = true;
        setInterval(() => {
          this.shake = false;
        }, 2000);
      } else {
        try {
          await this.$axios.post("/berichten", {
            naam: this.naam,
            email: this.email,
            bericht: this.bericht
          });
          this.$toasted.show("Bericht verzonden!", {
            theme: "bubble",
            type: "success",
            position: "bottom-center",
            duration: 2000
          });
          this.verzonden = true;
        } catch (err) {
          this.$toasted.show("Bericht versturen mislukt!", {
            theme: "bubble",
            type: "error",
            position: "bottom-center",
            duration: 2000
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
