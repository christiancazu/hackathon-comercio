<template>
  <div class="row justify-center q-my-xl">
    <q-form class="col-12 col-md-10 bg-white q-mb-xl shadow-1">
      <div class="row justify-center q-mb-lg">
        <div class="col-12">
          <q-card class="my-card">
            <q-parallax
              src="statics/images/denuncia.jpg"
              :max-height="200"
            >
              <div
                class="absolute-bottom text-subtitle1 text-center q-py-lg"
                style="background-color: rgba(0, 0, 0, .5)">
                <p class="text-h4 text-white">{{ $t('complaint_record') }}</p>
              </div>
            </q-parallax>

            <q-card-section>
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
                  <q-input
                    v-model="fechaNac"
                    disable
                    label="Fecha de nacimiento"
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
                  <q-select
                    v-model="tipo"
                    :options="tiposRoboOptions"
                    label="Tipo de robo"
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
                    :label="`${$t('register')}`"
                    class="full-width"
                    push glossy
                    @click="onSubmit"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { axiosInstance } from '@/boot/axios'
import Swal from 'sweetalert2'

export default {
  data () {
    return {
      tipoDocumentoOptions: ['DNI', 'CE'],
      sexoOptions: [],
      tiposRoboOptions: [ 'simple', 'agrabado' ],
      lenguaOptions: [],
      lenguaMaterna: '',
      tipo: '',
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
          sexo: this.sexo[0],
          tipo: this.tipo
        })
        console.log('result', result)
      } catch (error) {
        console.log('error', error)
      } finally {
        this.isBusy = false
        Swal.fire({
          position: 'center',
          type: 'success',
          title: `<h6 class="q-ma-none text-justify text-h6">
                    ${this.$t('complaint.success')}
                  </h6>`,
          showConfirmButton: true
        })
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
