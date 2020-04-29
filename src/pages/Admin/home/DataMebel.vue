<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah Data Mebel" to="/admin/inputdatamebel" />

          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Mebel',
          align: 'left',
          field: row => row.kodemebel,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Kodetransaksi', align: 'center', label: 'Kode Transaksi', field: 'kodetransaksi', sortable: true },
        { name: 'JeniMebel', label: 'Jenis Mebel', field: 'jenismebel' },
        { name: 'TahunProduksi', label: 'tahun Produksi', field: 'tahunProduksi' },
        { name: 'HargaMebel', label: 'Harga Mebel', field: 'hargamebel' }

      ],
      data: [
        {
          kodemebel: 'K0001',
          jenismebel: 'Kursi dan Meja',
          tahunProduksi: '2020',
          hargamebel: '35000000',
          kodetransaksi: '1001'

        },
        {
          kodemebel: 'K0002',
          jenismebel: 'Kursi dan Meja',
          tahunProduksi: '2020',
          hargamebel: '45000000',
          kodetransaksi: '1002'
        },
        {
          kodemebel: 'K0003',
          jenismebel: 'Kursi dan Meja',
          tahunProduksi: '2020',
          hargamebel: '35000000',
          kodetransaksi: '1003'
        },
        {
          kodemebel: 'K0004',
          jenismebel: 'Meja Belajar',
          tahunProduksi: '2020',
          hargamebel: '20000000',
          kodetransaksi: '1004'
        },
        {
          kodemebel: 'K0005',
          jenismebel: 'Meja Belajar',
          tahunProduksi: '2020',
          hargamebel: '20000000',
          kodetransaksi: '1005'
        },
        {
          kodemebel: 'K0006',
          jenismebel: 'Meja Belajar',
          tahunProduksi: '2020',
          hargamebel: '20000000',
          kodetransaksi: '1005'
        },
        {
          kodemebel: 'K0007',
          jenismebel: 'Dipan Kayu',
          tahunProduksi: '2020',
          hargamebel: '50000000',
          kodetransaksi: '1007'
        },
        {
          kodemebel: 'K0008',
          jenismebel: 'Dipan Kayu',
          tahunProduksi: '2020',
          hargamebel: '50000000',
          kodetransaksi: '1008'
        },
        {
          kodemebel: 'K0009',
          jenismebel: 'Dipan Kayu',
          tahunProduksi: '2020',
          hargamebel: '50000000',
          kodetransaksi: '1009'
        },
        {
          kodemebel: 'K0010',
          jenismebel: 'Lemari Kayu',
          tahunProduksi: '2020',
          hargamebel: '50000000',
          kodetransaksi: '1010'
        },
        {
          kodemebel: 'K0011',
          jenismebel: 'Lemari Kayu Jati',
          tahunProduksi: '2020',
          hargamebel: '60000000',
          kodetransaksi: '1011'
        },
        {
          kodemebel: 'K0012',
          jenismebel: 'Lemari Kayu',
          tahunProduksi: '2020',
          hargamebel: '50000000',
          kodetransaksi: '1012'
        },
        {
          kodemebel: 'K0013',
          jenismebel: 'Meja Rias ',
          tahunProduksi: '2020',
          hargamebel: '40000000',
          kodetransaksi: '1013'
        },
        {
          kodemebel: 'K0014',
          jenismebel: 'Meja Rias ',
          tahunProduksi: '2020',
          hargamebel: '40000000',
          kodetransaksi: '1014'
        },
        {
          kodemebel: 'K0015',
          jenismebel: 'Meja Rias ',
          tahunProduksi: '2020',
          hargamebel: '20000000',
          kodetransaksi: '1015'
        }

      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
