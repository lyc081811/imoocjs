<script>
import {get, showSucess} from './util'
export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(res)
    showSucess('获取成功！')
  }
}
</script>
<style>

</style>
