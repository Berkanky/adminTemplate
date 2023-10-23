<template>
<!--   <div class="myApp">
    <navBar />
    <router-view></router-view>
    <sideBar/> 
  </div> -->
<!--   <div 
    class="container-fluid bg-danger" style="height:100vh;">
      <router-view></router-view> 
  </div>  -->
 <div class="container-fluid">
  <router-view ></router-view>
 </div>
</template>

<script>
import sideBar from './components/sideBar.vue'
import navBar from './components/navBar.vue'
import {useCounterStore} from '../src/stores/store'
export default {
  components:{
    navBar,
    sideBar,
  },
  setup(){
    const store = useCounterStore()
    return{
      store
    }
  },
  data:function(){
    return{

    }
  },
  methods:{
    currentDeviceWidth(){
      const currentWidth = screen.width + 'px'
      return currentWidth
    },
    handleResize() {
      this.store.window.width = window.innerWidth;
      this.store.window.height = window.innerHeight;
      //console.log('window',this.window)
    },
    closeSideBarWithEsc(){
      const check = this.store.visible === true ? true : false
      if(check === true){
        this.store.visible = false
      }
    }
  },
  mounted(){

  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  created(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.currentDeviceWidth()

    document.onkeydown = (evt) => {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        this.closeSideBarWithEsc()
      }
    };
  },
  watch:{
    'store.window':{
      handler(newValue,oldValue){
        if(newValue.width<580){
          this.store.newHeight = 300
          this.store.mobileActive = true
          console.log('newHeight',this.store.newHeight)
          console.log('avatar',this.store.mobileActive)
        }else{
          this.store.newHeight = ''
          this.store.mobileActive = false
          console.log('avatar',this.store.mobileActive)
          console.log('newHeight',this.store.newHeight)
        }
      },
      immediate:true,
      deep:true
    },
  }
}
</script>

<style>
  .myApp{
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
  }
</style>