<template>
  <div
    class="gradient flex-1 flex items-center justify-center px-2 sm:px-0 pt-24"
  >
    <div class="w-full sm:w-1/3 sm:border rounded-lg shadow p-6 bg-white">
      <h2 class="text-2xl text-gray-900 font-bold">Jouw boeking</h2>
      <div class="mt-4 flex flex-col sm:flex-row">
        <form @submit.prevent="boeken" class="w-full">
          <div class="mt-4 sm:flex sm:-mx-4">
            <div class="flex-1 sm:mx-4">
              <label for="datum" class="block text-gray-800 text-sm font-bold">
                Datum
              </label>
              <DatePicker
                class="mt-1 w-full"
                input-class="h-10 w-full appearance-none border bg-white border-gray-400 text-gray-800 py-2 px-4 pr-8 rounded  focus:outline-none focus:border-gray-500"
                :input-attr="{ id: 'datum' }"
                v-model="$v.datum.$model"
                format="DD-MM-YYYY"
                :disabled-date="dagBezet"
              ></DatePicker>
            </div>
            <div class="flex-1 mt-4 sm:mt-0 sm:mx-4">
              <label for="moment" class="block text-gray-800 text-sm font-bold">
                Moment
              </label>
              <Dropdown
                class="mt-1 h-10"
                :items="['ochtend', 'avond']"
                id="moment"
                v-model="$v.moment.$model"
              />
            </div>
          </div>
          <div class="mt-4 sm:flex sm:-mx-4 items-center">
            <div class="flex-1 sm:mx-4">
              <label for="type" class="block text-gray-800 text-sm font-bold">
                Type vlucht
              </label>
              <Dropdown
                class="mt-1 h-10"
                :items="types.map(t => t.titel)"
                id="type"
                v-model="$v.type.$model"
              />
            </div>
            <div class="flex-1 mt-4 sm:mt-0 sm:mx-4">
              <label
                for="aantalpersonen"
                class="block text-gray-800 text-sm font-bold"
              >
                Aantal personen
              </label>
              <Dropdown
                class="mt-1 h-10"
                :items="aantalPersonenItems"
                id="aantalpersonen"
                v-model="$v.aantalPersonen.$model"
              />
            </div>
          </div>
          <div class="mt-4">
            <span class="block text-gray-900 font-bold"
              >Prijs: €{{ prijs }}</span
            >
          </div>
          <div class="mt-6 flex justify-between items-center">
            <button
              ref="buttonBoeken"
              class="button-gradient font-bold rounded-full py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline"
            >
              Boeken
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import Dropdown from "@/components/Dropdown";
import "vue2-datepicker/index.css";
import {
  required,
  integer,
  minValue,
  maxValue
} from "vuelidate/lib/validators";
import dayjs from "dayjs";

export default {
  name: "Boeken",
  components: {
    DatePicker,
    Dropdown
  },
  data() {
    return {
      types: [
        {
          titel: "classic",
          prijs: 200
        },
        {
          titel: "ontbijt",
          prijs: 240
        },
        {
          titel: "luxe",
          prijs: 280
        }
      ],
      datum: new Date(),
      moment: "ochtend",
      type: "classic",
      aantalPersonen: 1,
      maxAantalPersonen: 10,
      geboekteData: []
    };
  },
  validations() {
    return {
      datum: {
        required,
        minValue: minValue(new Date())
      },
      moment: {
        required,
        geldigMoment(value) {
          return ["ochtend", "avond"].includes(value);
        }
      },
      type: {
        required,
        geldigType(value) {
          return this.types.map(t => t.titel).includes(value);
        }
      },
      aantalPersonen: {
        required,
        integer,
        minValue: minValue(1),
        maxValue: maxValue(this.maxAantalPersonen)
      }
    };
  },
  computed: {
    aantalPersonenItems() {
      return Array.from({ length: this.maxAantalPersonen }, (v, i) => ++i);
    },
    prijs() {
      return this.types.find(t => t.titel === this.type).prijs;
    }
  },
  methods: {
    dagBezet(datum) {
      if (
        dayjs(datum).isBefore(
          dayjs()
            .add(7, "day")
            .startOf()
        )
      ) {
        return true;
      }

      const datumKort = dayjs(datum).format("YYYY-MM-DD");
      const data = this.geboekteData.filter(d => d.datum === datumKort);
      return data.length > 1;
    },
    async boeken() {
      try {
        await this.$axios.post("/boekingen", {
          datum: dayjs(this.datum).format("YYYY-MM-DD"),
          moment: this.moment,
          type: this.type,
          aantalPersonen: this.aantalPersonen
        });
        this.$router.push({ name: "home" });
      } catch (err) {
        this.$toasted.error("Fout bij het boeken. Probeer later opnieuw.");
      }
    }
  },
  async created() {
    const { data } = await this.$axios.get("/boekingen/geboektedata");
    this.geboekteData = data;
  }
};
</script>

<style lang="scss" scoped></style>
