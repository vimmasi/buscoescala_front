<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';


// Para as requisições GET
const escalas = ref([]);

// Para as requisições POST
const patente = ref('');
const nome = ref('');
const escala_id = ref('');
const dia_servico = ref([]);

// Requisitando todas as escalas da API com Axios
onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5000/escala/escalas');
    escalas.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

// Cadastrando um novo militar
const submit = async () => {
  try {
    await axios.post('http://127.0.0.1:5000/militar/militares', {
      patente: patente.value,
      nome: nome.value,
      escala_id: escala_id.value
    });
    alert('Militar cadastrado com sucesso!');
    console.log(patente);
    console.log(nome);
    console.log(escala_id);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <main>
    <div class="militar-container">
      <div class="militar-subcontainer">
        <h2 class="militar-titulo">CADASTRAR NOVO MILITAR</h2>
        <form @submit.prevent="submit" id="enviarMilitar" class="flex-col">
          <div class="flex justify-between">
            <label for="patente">Patente: </label>
            <select v-model="patente" name="patente" id="patente" class="form-input">
              <option selected disabled hidden></option>
              <option value="Soldado" class="">Soldado</option>
              <option value="Cabo">Cabo</option>
              <option value="Sargento">Sargento</option>
              <option value="Tenente">Tenente</option>
            </select>
          </div>
          <div class="flex justify-between">
            <label for="nome">Nome: </label>
            <input id="nome" v-model="nome" class="form-input">
          </div>
          <div class="flex justify-between">
            <p>Adicionar à escala: </p>
            <select v-model="escala_id" class="form-input">
              <option selected disabled hidden>selecione</option>
              <option v-for="escala in escalas" :key="escala.id" :value="escala.id">
                {{ escala.mes }}
              </option>
            </select>
          </div>
          <div class="flex justify-center w-full">
            <button form="enviarMilitar" type="submit" class="botao">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>