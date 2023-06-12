import { ref } from 'vue';
import { api } from 'src/boot/axios';

export function getDataFromDb(uri) {
  const fetchedData = ref(null);
  const errorMessage = ref(null);

  api.get(uri)
    .then(response => {
      fetchedData.value = response.data['hydra:member'][0]['pages'];
    })
    .catch(error => {
      errorMessage.value = error.message;
    });

  return {
    fetchedData,
    errorMessage
  };
}
