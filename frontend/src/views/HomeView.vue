<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Container wrapper -->
  <div class="container-fluid">
    <!-- Toggle button -->
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
      <button class="btn btn-outline-secondary" type="button" v-on:click="this.store.visible =! this.store.visible">
        <span class="material-symbols-outlined">
          menu
        </span>
      </button>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">
      <!-- Icon -->
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>

      <!-- Notifications -->
      <div class="dropdown">
        <a class="text-reset me-3 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
          role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <!-- Avatar -->
      <div class="dropdown">
        <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
          id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown"
          aria-expanded="false">
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle"
            height="25" alt="Black and White Portrait of a Man" loading="lazy" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
      <!-- Sidebar -->
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-dark text-white" v-if="this.store.visible">
<!--         <div class="" style="margin-left:20px;">
          <button type="button" class="btn btn-outline-secondary">          
            <i class="material-symbols-outlined">
              arrow_left
            </i>
          </button>
        </div> -->
      <div class="text-center">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style="width: 170px;"
          alt="Avatar" />

        <div class="mt-2">
          bekoKymaz@gmail.com
        </div>
      </div>
      <div style="border:0.1px solid rgb(133, 133, 133);" class="mt-2"></div>
    <div  class="position-sticky ">
      <div class="list-group list-group-flush mx-3 mt-4 listGroup">
        <a 
          style="border-radius:4px;"
          :class="this.checkMouseOnData(data) ? 'bg-white text-dark' : 'bg-dark text-white'"
          v-on:mouseover="mouseOn(data)"
          v-on:mouseleave="mouseLeave(data)"
          v-for="(data,key) in this.sideBarOptions" :key="key"
          href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
          <div class="row">
            <i class="material-symbols-outlined fa-fw me-3 col-2">
            {{ data.icon }}
            </i><span class="col">{{ data.label }}</span>
            <i class="material-symbols-outlined col-2">
              arrow_right
            </i>
          </div>
        </a>
      </div>
    </div>
  </nav>
<div
  class="bg-light" style="height: 100vh;">
  <div class="row">
    <div class="col-12 col-md-9 col-sm-9">
    <div class="row">
      <div class="input-group mb-3">
      <button class="btn btn-outline-secondary" type="button" id="button-addon1">
        <i class="material-symbols-outlined">
          search
        </i>
      </button>
      <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
    </div>
    </div>
    <div class="row">
      <div class="col-3" v-for="(data,key) in 4" :key="key">
        <div id="chart">
          <apexchart type="area" height="300" :options="chartOptions" :series="series"></apexchart>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <pieGraph />
      </div>
      <div class="col-6">
        <barGraph />
      </div>
    </div>
  </div>
  <div class="col-3">
    <div>
      <div 
        style="border: none;"
        class="card bg-light text-dark text-center p-3">
        <div class="card-body row">
          <div class="col-3">
<!--             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
              <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            </svg> -->
            <span 
              style="color:rgb(117, 115, 115);"
              class="material-symbols-outlined">
              calendar_month
            </span>
          </div>
          <div class="col text-left" style="text-weight:bold;">
            Calendar
          </div>
          <div class="col-4 text-right">
            <span 
              style="color:rgb(117, 115, 115);"
              class="material-symbols-outlined">
              settings
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="card" style="border:0px;">
        <ol 
          style="border-radius:7px;"
          class="list-group list-group-light">
          <li 
            style="border:none;background-color:rgb(243, 243, 243);"
            v-for="(data,key) in 10" :key="key"
            class="list-group-item d-flex justify-content-between align-items-start p-3">
            <div>
              <span style="color: rgb(180, 180, 180);" class="material-symbols-outlined">
                expand_circle_right
              </span>
            </div>
            <div class="ms-2 me-auto">
              <div class="fw-bold" style="color:rgb(143, 141, 141);">Subheading</div>
              <!-- Content for list item -->
            </div>
            <span class="badge badge-primary rounded-pill"></span>
          </li>
        </ol>
      </div>
    </div>
  </div>
  </div>

</div>
</template>

<script>
import barGraph from "../components/barGraph.vue";
import pieGraph from "../components/pieGraph.vue";
import VueApexCharts from "vue3-apexcharts";
import { useCounterStore } from '../stores/store';
export default {
  components:{
    apexchart: VueApexCharts,
    pieGraph,
    barGraph
  },
  setup(){
    const store = useCounterStore()
    return{
      store
    }
  },
  data:function(){
    return{
      sideBarOptions:[
        {id:1,label:'Main Dashboard',icon:'analytics'},
        {id:2,label:'Profile',icon:'person'},
        {id:3,label:'Settings',icon:'settings'}
      ],
      mouseOnOption:{},
      series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
      }
  },
  methods:{
    checkMouseOnData(data){
      const check = this.mouseOnOption.id === data.id ? true : false
      return check
    },
    mouseOn(data){
      this.mouseOnOption = data
    },
    mouseLeave(data){
      this.mouseOnOption = {}
    }
  },
  created(){

  },
  mounted(){

  },
  watch:{
  }
}
</script>

<style>
 /* Sidebar */
.sidebar {
position: fixed;
top: 0;
bottom: 0;
left: 0;
padding: 58px 0 0; /* Height of navbar */
box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
width: 340px;
z-index: 600;
}

@media (max-width: 991.98px) {
.sidebar {
width: 100%;
}
}
.sidebar .active {
border-radius: 5px;
box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
}

.sidebar-sticky {
position: relative;
top: 0;
height: calc(100vh - 48px);
padding-top: 0.5rem;
overflow-x: hidden;
overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

</style>