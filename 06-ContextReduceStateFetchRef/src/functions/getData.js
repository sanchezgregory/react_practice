
const URL = 'https://jsonplaceholder.typicode.com/users'

export const FetchData = {

    async getData(fetchType) {
      
      let responseData;
      
      switch(fetchType) {
        case 'async_await':
            responseData = await this.fetchDataWithAsyncAwait();
          break;
        case '.then':
            responseData = await this.fetchDataWithThen();
            break
        case 'axios':
          responseData = await this.fetchDataWithAxios();
          break;
        case 'xhr':
          responseData = await this.fetchDataWithXHR();
          break;
        default:
          throw new Error('Tipo de fetch no válido');
      }
      
      return responseData;
    },

    async fetchDataWithAsyncAwait() {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Hubo un problema con la petición Fetch:' + error.message);
        }
    },

    async fetchDataWithThen() {
        fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((res) => {
            console.log('.then ', res)
            return res;
        }) 
        .catch((error) => {
            throw new Error('Hubo un problema con la petición Fetch:' + error.message);
        })
    },
      
    async fetchDataWithAxios() {
        // Aquí iría la implementación utilizando Axios
        // Por ejemplo:
        // const response = await axios.get('https://ejemplo.com/data');
        // return response.data;
    },
      
    async fetchDataWithXHR() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://ejemplo.com/data');
            xhr.onload = function() {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            } else {
                reject(new Error('Error al obtener los datos'));
            }
            };
            xhr.onerror = function() {
            reject(new Error('Error de red'));
            };
            xhr.send();
        });
    }
}