<template>
  <div class="row justify-center q-my-xl">
    <q-form class="col-12 col-md-10 bg-white q-mb-xl shadow-1">
      <div class="row justify-center q-mb-lg">
        <div class="col-12">
          <q-card class="my-card">
            <q-parallax
              src="statics/images/find.webp"
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
                    <div class="sem-red text-h5"><div class="s-red"></div>Archivado</div>
                </div>
                <div class="col-md-4 color-content">
                    <div class="sem-orange text-h5"><div class="s-orange"></div>En proceso</div>
                </div>
                <div class="col-md-4 color-content">
                    <div class="sem-green text-h5"><div class="s-green"></div>Recibido</div>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="row justify-center">
                <div class="col-4">
                  <q-input
                    label="Indique su DNI"
                  />
                </div>
                <div class="col-4">
                  <q-btn
                    color="primary"
                    class="full-width"
                    label="Mostrar mis denuncias"
                    @click="showDenuncias()"
                  >
                  </q-btn>
                </div>
              </div>
            </q-card-section>

            <q-card-section v-if="canShowDenuncias">
              <div class="row">
                <q-card
                  class="my-card text-white col-4 bg-red"
                >
                  <q-card-section>
                    <div class="text-h6">Código denuncia 1</div>
                    <div class="text-subtitle2">Robo leve</div>
                  </q-card-section>

                  <q-card-section>
                    el día 17 de marzo me robaron el celular
                  </q-card-section>
                </q-card>
                <q-card
                  class="my-card text-white col-4 bg-orange"
                >
                  <q-card-section>
                    <div class="text-h6">Código denuncia 11</div>
                    <div class="text-subtitle2">Robo agravado</div>
                  </q-card-section>

                  <q-card-section>
                     me robaron con pistola a la mano alrededor de las 7 pm
                  </q-card-section>
                </q-card>
                <q-card
                  class="my-card text-white col-4 bg-red"
                >
                  <q-card-section>
                    <div class="text-h6">Código denuncia 66</div>
                    <div class="text-subtitle2">Robo agravado</div>
                  </q-card-section>

                  <q-card-section>
                    asaltado por 2 personas el día 25 de septiembre
                  </q-card-section>
                </q-card>
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

export default {
  data () {
    return {
      canShowDenuncias: false
    }
  },
  async mounted () {
    const result = await axiosInstance.get(process.env.BACKEND_API + '/usuario/')
    console.log('result :', result)
  },
  methods: {
    showDenuncias () {
      this.canShowDenuncias = true
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
