<template>
  <div class="gradient flex-1 flex items-center justify-center px-2 sm:px-0">
    <div class="w-full sm:w-2/4 sm:border rounded-lg shadow p-6 bg-white">
      <h2 class="text-2xl text-gray-900 font-bold">Aanmelden</h2>
      <div class="mt-4 flex flex-col sm:flex-row">
        <form
          @submit.prevent="aanmelden"
          class="w-full sm:w-1/2 sm:pr-6 sm:border-r"
        >
          <h3 class="text-sm font-bold text-gray-900">Bestaande klant</h3>
          <div class="mt-4">
            <label class="block text-gray-800 text-sm font-bold" for="email">
              E-mailadres
            </label>
            <input
              v-model.trim.lazy="$v.formAanmelden.email.$model"
              class="w-full mt-1 input-standard"
              id="email"
              type="email"
              placeholder="Het e-mailadres van je account..."
            />
            <p
              v-visible="$v.formAanmelden.email.$error"
              class="text-red-500 mt-1 text-xs italic"
            >
              Vul het correcte e-mailadres van je account in.
            </p>
          </div>
          <div class="mt-4">
            <label
              class="block text-gray-800 text-sm font-bold"
              for="wachtwoord"
            >
              Wachtwoord
            </label>
            <input
              v-model.trim.lazy="$v.formAanmelden.wachtwoord.$model"
              class="w-full mt-1 input-standard"
              id="wachtwoord"
              type="password"
              placeholder="Het wachtwoord van je account"
            />
            <p
              v-visible="$v.formAanmelden.wachtwoord.$error"
              class="text-red-500 mt-1 text-xs italic"
            >
              Vul het wachtwoord van je account in.
            </p>
          </div>
          <div class="mt-6 flex justify-between items-center">
            <button
              ref="buttonAanmelden"
              class="button-gradient font-bold rounded-full py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline"
            >
              Inloggen
            </button>
            <button class="text-blue-600">
              Wachtwoord vergeten?
            </button>
          </div>
        </form>
        <form
          @submit.prevent="registreren"
          class="w-full sm:w-1/2 mt-4 sm:mt-0 sm:pl-4 border-t sm:border-0"
        >
          <h3 class="mt-4 sm:mt-0 text-sm font-bold text-gray-900">
            Nieuwe klant
          </h3>
          <small class="text-sm text-gray-700"
            >Je wordt slechts om enkele gegevens gevraagd.</small
          >
          <div class="mt-4">
            <label
              class="block text-gray-800 text-sm font-bold"
              for="email_nieuw"
            >
              E-mailadres
            </label>
            <input
              v-model.trim.lazy="$v.formRegistreren.email.$model"
              class="w-full mt-1 input-standard"
              id="email_nieuw"
              type="email"
              placeholder="Je e-mailadres..."
            />
            <p
              v-visible="$v.formRegistreren.email.$error"
              class="text-red-500 mt-1 text-xs italic"
            >
              Geef een geldig e-mailadres op.
            </p>
          </div>
          <button
            ref="buttonRegistreren"
            class="mt-4 button-gradient font-bold rounded-full py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline"
          >
            Verder
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Aanmelden",
  data() {
    return {
      formAanmelden: {
        email: "",
        wachtwoord: ""
      },
      formRegistreren: {
        email: ""
      }
    };
  },
  validations() {
    return {
      formAanmelden: {
        email: {
          required,
          email
        },
        wachtwoord: {
          required
        }
      },
      formRegistreren: {
        email: {
          required,
          email
        }
      }
    };
  },
  methods: {
    async aanmelden() {
      try {
        const data = await this.$axios.post("auth/aanmelden", {
          email: this.formAanmelden.email,
          wachtwoord: this.formAanmelden.wachtwoord
        });
        console.log(data);
      } catch (err) {
        this.$toasted.show("Fout bij aanmelden", {
          theme: "bubble",
          type: "error",
          position: "bottom-center",
          duration: 2000
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
