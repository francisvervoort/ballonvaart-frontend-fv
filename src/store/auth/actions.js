import axios from "@/config/axios";

export async function setGebruikerEnToken(
  { commit },
  { gebruiker, accessToken }
) {
  commit("setHuidigeGebruiker", gebruiker);
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("gebruiker", JSON.stringify(gebruiker));
}

export async function aanmelden({ dispatch }, { email, wachtwoord }) {
  const { data } = await axios.post("auth/aanmelden", {
    email,
    wachtwoord
  });
  dispatch("setGebruikerEnToken", {
    gebruiker: data.gebruiker,
    accessToken: data.accessToken
  });
}

export async function afmelden({ commit }) {
  commit("setHuidigeGebruiker", null);
  localStorage.removeItem("accessToken");
  localStorage.removeItem("gebruiker");
}
