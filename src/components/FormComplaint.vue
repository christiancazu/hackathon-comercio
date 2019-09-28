<template>
  <q-form ref="myForm">
    <div class="row justify-center q-gutter-md q-my-lg">
      <div class="col-8 col-md-4">
        <q-select
          v-model="tipoDocumento"
          :options="tipoDocumentoOptions"
          label="Tipo de documento"
        />
      </div>
      <div class="col-8 col-md-4">
        <q-input
          type="number"
          v-model="dni"
          label="Nº Documento"
          @input="onInputDni"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-md q-my-lg">
      <div class="col-8">
        <q-input
          v-model="nombre"
          disable
          label="Nombres"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-md q-my-lg">
      <div class="col-8 col-md-4">
        <q-input
          v-model="apellidoPaterno"
          disable
          label="Apellido paterno"
        />
      </div>
      <div class="col-8 col-md-4">
        <q-input
          v-model="apellidoMaterno"
          disable
          label="Apellido materno"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-md q-my-lg">
      <div class="col-8 col-md-4">
        <q-select
          v-model="sexo"
          disable
          :options="sexoOptions"
          label="Sexo"
        />
      </div>
      <div class="col-8 col-md-4">
        <q-select
          v-model="estadoCivil"
          disable
          :options="estadoCivilOptions"
          label="Estado civil"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-md q-my-lg">
      <div class="col-8 col-md-4">
        <q-select
          v-model="lenguaMaterna"
          disable
          :options="lenguaOptions"
          label="Lengua materna"
        />
      </div>
      <div class="col-8 col-md-4">
        <q-input
          v-model="fechaNac"
          disable
          label="Fecha de nacimiento"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-lg q-my-lg">
      <div class="col-8">
        <q-input
          v-model="descripcion"
          type="textarea"
          autogrow
          label="Descripción"
        />
      </div>
    </div>
    <div class="row justify-center q-gutter-lg q-my-lg">
      <div class="col-8">
        <q-btn
          color="primary"
          label="Descripción"
          class="full-width"
          @click="onSubmit"
        />
      </div>
    </div>
  </q-form>
</template>

<script>
import { axiosInstance } from '@/boot/axios'

export default {
  data () {
    return {
      tipoDocumentoOptions: ['DNI', 'CE'],
      sexoOptions: [],
      estadoCivilOptions: [],
      lenguaOptions: [],
      lenguaMaterna: '',
      estadoCivil: '',
      tipoDocumento: '',
      sexo: '',
      dni: '',
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNac: '',
      descripcion: ''
    }
  },
  methods: {
    async onInputDni () {
      if (this.dni.length > 7) {
        const { data } = await axiosInstance.get(process.env.SIOJ_API + this.dni)
        // eslint-disable-next-line no-eval
        const dataJson = eval(data)[0]
        console.log('result ', dataJson)
        this.nombre = dataJson.NOMBRE
      }
    },
    async onSubmit () {
      const { data } = await axiosInstance.post(process.env.BACKEND_API, {
        nombre: this.nombre,

      }) 
      console.data
    }
  }
}
</script>
