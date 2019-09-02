  <template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <h3>{{count}}</h3>
    <button @click="addAsync">+</button>
    <button @click="reduceAsync">-</button>
  </div>
</template>

<script>
import store from '@/store/store'
import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'
export default {
  data() {
    return {
      msg:'Hello Vuex'
    }
  },
  // computed:{
  //   count() {
  //     return this.$store.state.count     //方法一
  //   }
  // }
  // computed:mapState({                                         
  //   count:state => state.count   /**  ===   */    computed:{...mapState({count:state => state.count})}
  // })
  computed:{...mapState(['count']),/** count() {return this.$store.getters.count} */...mapGetters(['count'])},
  methods:{
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions([
      'addAsync',
      'reduceAsync'
    ])
  }
  }

</script>

<style>

</style>
