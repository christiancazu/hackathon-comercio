<template>
  <q-form ref="myForm">
    <div class="row justify-center q-gutter-md q-my-lg">
      <div class="col-10 col-md-4">
        <q-select
          v-model="tipoDocumento"
          :options="options"
          label="Tipo de documento"
        />
      </div>
      <div class="col-10 col-md-5">
        <q-input
          type="number"
          v-model="dni"
          label="Nº Documento"
          :dense="dense"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-sm q-my-lg">
      <div class="col-10 col-md-3">
        <q-input
          v-model="nombre"
          disable
          label="Nombres"
          :dense="dense"
        />
      </div>
      <div class="col-10 col-md-3">
        <q-input
          v-model="apellidoMaterno"
          disable
          label="Apellido paterno"
          :dense="dense"
        />
      </div>
      <div class="col-10 col-md-3">
        <q-input
          v-model="apellidoPaterno"
          disable
          label="Apellido materno"
          :dense="dense"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-sm q-my-lg">
      <div class="col-10 col-md-3">
        <q-select
          v-model="sexo"
          disable
          :options="sexoOptions"
          label="Sexo"
        />
      </div>
      <div class="col-10 col-md-3">
        <q-select
          v-model="estadoCivil"
          disable
          :options="sexoOptions"
          label="Estado civil"
        />
      </div>
      <div class="col-10 col-md-3">
        <q-select
          v-model="lenguaMaterna"
          disable
          :options="lenguaOptions"
          label="Lengua materna"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-sm q-my-lg">
      <div class="col-10">
        <q-input
          v-model="descripcion"
          type="textarea"
          label="Descripción"
        />
      </div>
    </div>
  </q-form>
</template>

<script>
export default {
  data () {
    return {
      model: null,
      options: ['DNI', 'CE']
    }
  }
}
</script>
