<style>
.myAvatar{
    align-self: center;
  }

  ::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;  
}
::-webkit-scrollbar-thumb {
  background: #FF0000;
} 

</style>

<template>
<div class="card flex justify-content-center">
    <Sidebar 
      :style="
        {
          'width':this.store.mobileActive ? '100%' : '400px'
        }
      "
      v-model:visible="this.store.visible">
      <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle mx-auto d-block" style="width: 150px;"
        alt="Avatar" />
      <div class="mx-auto row mt-3" style="width:300px;">
        <Button 
            rounded size="large"
            v-for="(data,key) in this.socialMediaOptions" :key="key"
            :icon="data.icon" text :severity="data.severity" aria-label="Filter" class="col"/>
      </div>
      <div class="mt-5" style="width:100%;">
        <Button 
            class="mt-2"
            :text="this.checkCurrentRouteNameBoolean(data) ? false : true"
            :severity="this.checkCurrentRouteName(data)"
            v-for="(data,key) in this.options" :key="key"
            :icon="data.icon" style="width:100%;border-radius:7px;" :label="data.label"  />
      </div>
      <div class="mt-5" style="width:100%;">
        <PanelMenu 
            v-model:expandedKeys="expandedKeys" 
            :model="this.items" 
            class="w-full md:w-25rem " />
      </div>
    </Sidebar>
</div> 
<div>

</div>
</template>

<script>
import 'primeicons/primeicons.css';
import Button from "primevue/button"  
import Sidebar from 'primevue/sidebar';
import PanelMenu from 'primevue/panelmenu';
import Avatar from 'primevue/avatar'
import {useCounterStore} from '../stores/store'
export default {
  components:{
    Button,
    Sidebar,
    Avatar,
    PanelMenu
  },  
  setup(){
    const store = useCounterStore()
    return{
      store
    }
  },
  data:function(){
    return{
        expandedKeys: {},
      visible:false,
      socialMediaOptions:[
        {id:1,label:'',icon:'pi pi-facebook',severity:'info'},
        {id:2,label:'',icon:'pi pi-google',severity:'danger'},
        {id:3,label:'',icon:'pi pi-twitter',severity:'info'}
      ],
      options:[
        {id:1,label:'Dashboard',icon:'pi pi-info',name:'home'},
        {id:2,label:'Networks',icon:'pi pi-megaphone',name:'about'}
      ],
      items: [
              {
                  key: '0',
                  label: 'File',
                  icon: 'pi pi-fw pi-file',
                  items: [
                      {
                          key: '0_0',
                          label: 'New',
                          icon: 'pi pi-fw pi-plus',
                          items: [
                              {
                                  key: '0_0_0',
                                  label: 'Bookmark',
                                  icon: 'pi pi-fw pi-bookmark'
                              },
                              {
                                  key: '0_0_1',
                                  label: 'Video',
                                  icon: 'pi pi-fw pi-video'
                              }
                          ]
                      },
                      {
                          key: '0_1',
                          label: 'Delete',
                          icon: 'pi pi-fw pi-trash'
                      },
                      {
                          key: '0_2',
                          label: 'Export',
                          icon: 'pi pi-fw pi-external-link'
                      }
                  ]
              },
              {
                  key: '1',
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {
                          key: '1_0',
                          label: 'Left',
                          icon: 'pi pi-fw pi-align-left'
                      },
                      {
                          key: '1_1',
                          label: 'Right',
                          icon: 'pi pi-fw pi-align-right'
                      },
                      {
                          key: '1_2',
                          label: 'Center',
                          icon: 'pi pi-fw pi-align-center'
                      },
                      {
                          key: '1_3',
                          label: 'Justify',
                          icon: 'pi pi-fw pi-align-justify'
                      }
                  ]
              },
              {
                  key: '2',
                  label: 'Users',
                  icon: 'pi pi-fw pi-user',
                  items: [
                      {
                          key: '2_0',
                          label: 'New',
                          icon: 'pi pi-fw pi-user-plus'
                      },
                      {
                          key: '2_1',
                          label: 'Delete',
                          icon: 'pi pi-fw pi-user-minus'
                      },
                      {
                          key: '2_2',
                          label: 'Search',
                          icon: 'pi pi-fw pi-users',
                          items: [
                              {
                                  key: '2_2_0',
                                  label: 'Filter',
                                  icon: 'pi pi-fw pi-filter',
                                  items: [
                                      {
                                          key: '2_2_0_0',
                                          label: 'Print',
                                          icon: 'pi pi-fw pi-print'
                                      }
                                  ]
                              },
                              {
                                  key: '2_2_1',
                                  icon: 'pi pi-fw pi-bars',
                                  label: 'List'
                              }
                          ]
                      }
                  ]
              },
              {
                  key: '3',
                  label: 'Events',
                  icon: 'pi pi-fw pi-calendar',
                  items: [
                      {
                          key: '3_0',
                          label: 'Edit',
                          icon: 'pi pi-fw pi-pencil',
                          items: [
                              {
                                  key: '3_0_0',
                                  label: 'Save',
                                  icon: 'pi pi-fw pi-calendar-plus'
                              },
                              {
                                  key: '3_0_0',
                                  label: 'Delete',
                                  icon: 'pi pi-fw pi-calendar-minus'
                              }
                          ]
                      },
                      {
                          key: '3_1',
                          label: 'Archieve',
                          icon: 'pi pi-fw pi-calendar-times',
                          items: [
                              {
                                  key: '3_1_0',
                                  label: 'Remove',
                                  icon: 'pi pi-fw pi-calendar-minus'
                              }
                          ]
                      }
                  ]
                }
      ]
    }
  },
  methods:{
    checkCurrentRouteNameBoolean(data){
        const currentRoute = this.$route.name
        const check = currentRoute === data.name ? true : false
        if(check){
            return true
        }else{
            return false
        }
    },
    checkCurrentRouteName(data){
        const currentRoute = this.$route.name
        const check = currentRoute === data.name ? true : false
        if(check){
            return 'warning'
        }else{
            return 'secondary'
        }
    }
  },
  created(){
    console.log(this.$route)
  },
  watch:{

  }
}
</script>
