<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Mebel</span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="Kode Mebel"
            lazy-rules
            color="teal"
            v-model="kodeMebel"
            :rules="[
           val => val !== null && val !== '' || 'Kode Mebel Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>

          <q-input
            label="Kode Transaksi"
            lazy-rules
            color="teal"
            v-model="kodetransaksi"
            :rules="[
           val => val !== null && val !== '' || 'Kode Transaksi Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>

          <q-input
            label="Jenis Mebel"
            lazy-rules
            color="teal"
            v-model="jenismebel"
            :rules="[
           val => val !== null && val !== '' || 'Jenis Mebel Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Tahun Produksi"
            lazy-rules
            color="teal"
            v-model="tahunproduksi"
            :rules="[
           val => val !== null && val !== '' || 'Tahun Produksi Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>

          <q-input
            label="Harga Mebel"
            lazy-rules
            color="teal"
            v-model="hargamebel"
            :rules="[
           val => val !== null && val !== '' || 'Harga Mebel Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Poktan"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      kodemebel: null,
      kodetransaksi: null,
      jenismebel: null,
      tahunproduksit: null,
      hargamebel: null

    }
  }
}
</script>

<style scoped>

</style>
