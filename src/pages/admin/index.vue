<template>
  <div class="row justify-center q-my-xl">
    <q-form class="col-12 col-md-10 bg-white q-mb-xl shadow-1">
      <div class="row justify-center q-mb-lg">
        <div class="col-12">
          <q-card class="my-card">
            <q-parallax
              src="statics/images/admin.jpg"
              :max-height="200"
            >
              <div
                class="absolute-bottom text-subtitle1 text-center q-py-lg"
                style="background-color: rgba(0, 0, 0, .5)">
                <p class="text-h4 text-white">{{ $t('complaint_monitor') }}</p>
              </div>
            </q-parallax>

            <q-card-section>
              <div class="row justify-between q-my-lg fix-center">
                <div class="col-md-4 color-content">
                    <div class="sem-red text-h5">
                      <div class="s-red" @click="filterColor('red')"></div>
                      Archivado
                    </div>
                </div>
                <div class="col-md-4 color-content">
                    <div class="sem-orange text-h5">
                      <div class="s-orange" @click="filterColor('orange')"></div>
                      En proceso
                    </div>
                </div>
                <div class="col-md-4 color-content">
                    <div class="sem-green text-h5">
                      <div class="s-green" @click="filterColor('green')"></div>
                      Recibido
                    </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row justify-center">
                <q-card
                  @click="showDetails(denuncia.dni)"
                  v-for="(denuncia, i) in denuncias" :key="i"
                  class="my-card text-white col-3 q-ma-sm"
                  :class="`bg-${denuncia.color}`"
                  style="cursor: pointer"
                >
                  <q-card-section>
                    <div
                      class="text-h6"
                    >Código de denuncia: {{ denuncia.id }}</div>
                    <div class="text-subtitle2">Fecha {{ denuncia.fecha }}</div>
                  </q-card-section>

                  <q-card-section>
                    {{ denuncia.descripcion }}
                  </q-card-section>
                </q-card>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="row justify-center">
                <div class="col-10">
                  <q-btn
                    label="Reiniciar denuncias"
                    color="primary"
                    class="full-width"
                    @click="resetDenuncias()"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </q-form>

    <q-dialog v-model="card">
      <q-card>
        <q-img
          :src="cardDetails.src"
          style="min-height: 28rem; min-width: 22rem" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{ cardDetails.nombre }} {{ cardDetails.apellidos }}</div>
            <div class="col-auto text-grey q-pt-md">
              <q-icon name="place" />
            </div>
          </div>

        </q-card-section>

      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { axiosInstance } from '@/boot/axios'

export default {
  data () {
    return {
      denuncias: [],
      denunciasBK: [],
      card: false,
      cardDetails: {
        src: '',
        descripcion: '',
        nombre: '',
        apellidos: ''
      }
    }
  },
  async mounted () {
    const { data } = await axiosInstance.get(process.env.BACKEND_API + '/denuncia/')
    console.log('data :', data)
    // his.denuncias = { ...data, color: 'red' }
    this.denuncias = data.map(d => ({ ...d, color: d.id % 2 ? 'red' : d.id % 3 ? 'orange' : 'green' }))
    this.denunciasBK = this.denuncias
  },
  methods: {
    filterColor (color) {
      this.denuncias = this.denuncias.filter(d => d.color === color)
    },
    resetDenuncias () {
      this.denuncias = this.denunciasBK
    },
    async showDetails (dni) {
      const { data } = await axiosInstance.get(process.env.SIOJ_API + dni)
      // eslint-disable-next-line no-eval
      const dataJson = eval(data)[0]
      console.log('dataJson :', dataJson)
      this.cardDetails.src = 'data:image/png;base64,' + dataJson.FOTO
      const currentUser = this.denuncias.filter(d => d.dni === dni)
      this.cardDetails.descripcion = currentUser.descripcion
      this.cardDetails.nombre = dataJson.NOMBRE
      this.cardDetails.apellidos = dataJson.APP + ' ' + dataJson.APM
      this.card = true
    }
  }
}
</script>

<style lang="stylus">
.sphere {
  min-height: 4rem;
  max-width: 4rem;
  border-radius: 50%;
}
.fix-center {
  display: flex;
  align-content: space-between
}
.color-content {
  display: flex;
  flex-direction: column;
  justify-self: center;
}
.sem-red, .sem-orange, .sem-green {
  text-align: center;
}
.s-red, .s-green, .s-orange {
  margin: 0 auto;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
}
.s-red {
  background-color: red;
}
.s-green {
  background-color: green;
}
.s-orange {
  background-color: orange;
}
</style>
