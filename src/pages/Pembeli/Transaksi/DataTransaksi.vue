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
          <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Data Transaksi</span>
      </span>
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
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'NamaPembli', align: 'center', label: 'Nama Pembeli', field: 'namapembeli', sortable: true },
        { name: 'JenisMebel', align: 'center', label: 'Jenis Mebel', field: 'JenisMebel' },
        { name: 'HargaMebel', align: 'center', label: 'Harga Mebel', field: 'hargamebel' },
        { name: 'JumblahBeliBarang', align: 'center', label: 'Jumblah Beli Barang', field: 'jumblahbelibarang' },
        { name: 'Total', align: 'center', label: 'Total', field: 'total' }

      ],
      data: [
        {
          kodetransaksi: 'Trans-001',
          namapembeli: 'Amelia Wulan',
          JenisMebel: 'Kursi Meja',
          hargamebel: '35000000',
          jumblahbelibarang: '2',
          total: '7000000'

        },
        {
          kodetransaksi: 'Trans-002',
          namapembeli: 'Amelia Wulan',
          JenisMebel: 'Lemari',
          hargamebel: '3000000',
          jumblahbelibarang: '1',
          total: '3000000'

        },
        {
          kodetransaksi: 'Trans-003',
          namapembeli: 'Amelia Wulan',
          JenisMebel: 'Dipan kasur',
          hargamebel: '50000000',
          jumblahbelibarang: '2',
          total: '100000000'

        },

        {
          kodetransaksi: 'Trans-003',
          namapembeli: 'Amelia Wulan',
          JenisMebel: 'Dipan kasur',
          hargamebel: '50000000',
          jumblahbelibarang: '2',
          total: '100000000'

        },
        {
          kodetransaksi: 'Trans-004',
          namapembeli: 'Icuttt',
          JenisMebel: 'Dipan kasur',
          hargamebel: '50000000',
          jumblahbelibarang: '1',
          total: '500000000'

        },
        {
          kodetransaksi: 'Trans-005',
          namapembeli: 'Nanda',
          JenisMebel: 'Dipan kasur',
          hargamebel: '50000000',
          jumblahbelibarang: '1',
          total: '500000000'

        },
        {
          kodetransaksi: 'Trans-006',
          namapembeli: 'Totokk',
          JenisMebel: 'Meja Belajar',
          hargamebel: '40000000',
          jumblahbelibarang: '2',
          total: '800000000'

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
