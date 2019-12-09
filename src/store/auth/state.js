const bestaandeGebruiker = JSON.parse(localStorage.getItem("gebruiker"));

export default {
  huidigeGebruiker: bestaandeGebruiker ? bestaandeGebruiker : null
};
