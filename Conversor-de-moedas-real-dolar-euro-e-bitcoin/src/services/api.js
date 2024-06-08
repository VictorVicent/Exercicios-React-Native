import axios from 'axios';

export const getConversionRate = async (moedaOrigem, moedaDestino) => {
  const url = `https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`;
  const response = await axios.get(url);
  const taxa = response.data[`${moedaOrigem}${moedaDestino}`].ask;
  return parseFloat(taxa);
};
