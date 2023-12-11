<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


// Controlando os botões de exibição de escalas e militares
const mostrarEscalas = ref(false)
const mostrarMilitares = ref(false)

function toggleEscalas() {
  return mostrarEscalas.value = !mostrarEscalas.value
}

function toggleMilitares() {
  return mostrarMilitares.value = !mostrarMilitares.value
}


// Criando as Base_url e instanciando as variáveis para trabalhar com a API
const escalaUrl = 'http://127.0.0.1:5000/escala/escalas'
const militarUrl = 'http://127.0.0.1:5000/militar/militares'
const escalas = ref(null)
const militares = ref(null)
const escala = ref(null)

// API Escala
onMounted(() => {
  axios.get(escalaUrl)
    .then(response => {
      escalas.value = response.data
    })
    .catch(error => {
      console.error(error)
    })
})

// API Militar
onMounted(() => {
  axios.get(militarUrl)
    .then(response => {
      militares.value = response.data
    })
    .catch(error => {
      console.error(error)
    })
})

const removerMilitar = (id) => {
  axios.delete(`${militarUrl}/${id}`)
    .then(() => {
      militares.value = militares.value.filter(militar => militar.id !== id)
      alert("Militar removido com sucesso! Atualize a página para ver as atualizações.")
    })
    .catch(error => {
      console.error(error)
    })
}
</script>

<template>
  <main>
    <div class="escala-container">
      <h2 class="apresentacao">Olá, como vai? 👋</h2>
      <div class="mb-12">
        <div class="accordeon-container">
          <button @click="toggleEscalas()" class="accordeon-botao">
            <h3 class="accordeon-titulo">Escalas de serviço</h3>
            <p class="accordeon-titulo-icone">
              &#8595;</p>
          </button>
        </div>
        <div v-if="mostrarEscalas">
          <div class="flex justify-center">
            <table class="w-1/2 flex-col">
              <thead class="tabela-cabecalho">
                <tr>
                  <th>Mês</th>
                  <th>Militares</th>
                </tr>
              </thead>
              <tbody class="tabela-corpo">
                <tr v-for="escala in escalas" :key="escala.id">
                  <td class="tabela-dado">{{ escala.mes }}</td>
                  <td>
                    <ul class="tabela-dado-lista">
                      <li v-for="militar in escala.militares" :key="militar.id">
                        {{ militar.patente }} {{ militar.nome }} 
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="mb-12">
        <div class="accordeon-container">
          <button @click="toggleMilitares()" class="accordeon-botao">
            <h3 class="accordeon-titulo">Militares cadastrados</h3>
            <p class="accordeon-titulo-icone">
              &#8595;</p>
          </button>
        </div>
        <div v-if="mostrarMilitares">
          <div class="flex justify-center">
            <ul class="w-1/2">
              <li v-for="militar in militares" :key="militar.id" class="flex justify-between">
                <p>{{ militar.patente }} {{ militar.nome }}</p>
                <div>
                  <button @click="removerMilitar(militar.id)" class="botao-delete">Remover</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<!-- TODO
ajustar o layout
documentar
run build -->