<template>
  <div class="row justify-center">

    <section-title :text="$t('complaint_record')" class="col-12 q-mt-xl"/>

    <q-form
      class="col-10 col-md-8 bg-white q-mb-xl">

      <div class="row justify-center q-my-lg">
        <div class="col-8 text-center">
          <q-badge color="primary">
            <div class="text-h6">Datos del denunciante</div>
          </q-badge>
        </div>
      </div>
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
          <q-input
            v-model="direccion"
            disable
            label="Direccion"
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
            label="Indique su denuncia"
          />
        </div>
      </div>
      <div class="row justify-center q-gutter-lg q-my-lg">
        <div class="col-8">
          <q-btn
            :loading="isBusy"
            color="primary"
            label="Registrar"
            class="full-width"
            push glossy
            @click="onSubmit"
          />
        </div>
      </div>
    </q-form>
  </div>
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
      descripcion: '',
      direccion: '',
      isBusy: false
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
        this.apellidoPaterno = dataJson.APP
        this.apellidoMaterno = dataJson.APM
        this.sexo = dataJson.sexo
        this.estadoCivil = dataJson.estadoc
        this.fechaNac = dataJson.fechanac
        this.edad = dataJson.edad
        this.direccion = dataJson.nomb_dire
      }
    },
    async onSubmit () {
      this.isBusy = true
      try {
        const result = await axiosInstance.post(process.env.BACKEND_API + '/denunciante/', {
          nombre: this.nombre,
          dni: this.dni,
          apellidos: this.apellidoPaterno + ' ' + this.apellidoMaterno,
          edad: this.getAge(this.fechaNac),
          sexo: this.sexo[0]
        })
        console.log('result', result)
      } catch (error) {
        console.log('error', error)
      } finally {
        this.isBusy = false
      }
    },
    getAge (dateString) {
      var today = new Date()
      var birthDate = new Date(dateString)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return parseInt(age)
    }
  }
}
</script>
