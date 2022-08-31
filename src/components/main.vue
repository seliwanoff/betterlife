<template>
<transition name="slide">

    <div  :class="showme?'container' : 'secondContainer'">
        <div class="col-xl">
            <div class="bal-col" :class="showme?'' : 'top'">
                <div class="card-info">
                    <div class="cards">
                        <div class="icon-tran">
                            <img src="https://img.icons8.com/ios/50/000000/user--v1.png"/>
                        </div>
                        <div class="info-trans">
                            <h4>Total Registered Users</h4>
                             <span>20000</span>
                        </div>
                    </div>
                    <div class="cards">
                        <div class="icon-tran">
                        <img src="https://img.icons8.com/pastel-glyph/64/40C057/briefcase--v2.png"/>
                        </div>
                        <div class="info-trans">
                            <h4>Total Transaction</h4>
                             <span>20000</span>
                        </div>
                    </div>
                   <div class="cards">
                        <div class="icon-tran">
                            <img src="https://img.icons8.com/dotty/80/000000/get-revenue--v1.png"/>
                        </div>
                        <div class="info-trans">
                            <h4>Total Income</h4>
                            <span>20000</span>
                        </div>
                    </div>
                </div>
                <div class="table-content">
                    <div class="info-content">
                        <h2 class="user-info">User Information</h2>

                        <div class="search-cover">
                        <label for="search">
                            Search: <input type="search" placeholder="Search users">
                        </label>
                        
                        </div>
                        <div class="table-cover">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th class="hide1">First Name</th>
                                        <th class="hide2">Last Name</th>
                                        <th class="hide3">Phone Number</th>
                                        <th class="hide4">Balance</th>
                                         <th>Status</th>
                                        <th>Action</th>
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>seliwanoff</td>
                                        <td class="hide1">Olagunju</td>
                                        <td class="hide2">Selim</td>
                                        <td class="hide3">08145938104</td>
                                        <td class="hide4">20000</td>
                                        <td>Verified</td>
                                        <td>
                                           <button class="btn-router">
                                            Details
                                           </button>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                    <td>
                                  
                                    </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
     
    </div>
</transition>

</template>
<script>
//import axios from'axios'
import moment from 'moment'

export default {
    name:'Balance2-app',
  
  
    data() {
        return {
           
            transactions:[],
            moment:moment,
            schedules:[],
             selected:'Transaction',
            
             
           
        }
    },
    
    props:[
        'balance',
        'showme'
    ],
    methods:{
        clickmeCheck(){
            alert('me')
        },
         setSelected(tab){
        this.selected= tab;
      },
    
    },
   
  
  /* async mounted(){
            const data  = JSON.parse(localStorage.getItem('user'));
            this.token = data.data.token
            try{
                const transaction = await axios.get(`${process.env.VUE_APP_BASE_URL}api/gettransaction`,{
                    headers:{
                        Authorization:"Bearer "+ this.token
                    }
                })
               
                this.transactions = transaction.data.data
            }
            catch(e){
                e
            }
             try{
                const schedule = await axios.get(`${process.env.VUE_APP_BASE_URL}api/getscheadule`,{
                    headers:{
                        Authorization:"Bearer "+ this.token
                    }
                })
               console.log(schedule)
                this.schedules = schedule.data.data
            }
            catch(e){
                e
            }
    }
   */
    
}
</script>
<style scoped>
.container{
   float:right;
    padding:10px;
    min-width:calc(100% - 286px);
    margin-top:50px;
  
    
}
.secondContainer{
     
    padding:10px;
    padding:10px;
   
}

.bal-col{
    float: left;
   
    padding:10px;
   width:100%;
   box-sizing:border-box
   
}

.trc-cl{
    min-width:35%
}
.bal-con{
    background: #0A1AA8;
    padding:10px;
    border:1px solid #0A1AA8;
    border-radius:10px ;
    margin-top:30px;
    font-size:1.2rem;
    color:#fff;
     margin-bottom: 40px;
}

.item-col{
        
        font-size: 1.2rem;
        background: #fff ;
        border: 1px solid #fff ;
        border-radius: 10px;
        padding:10px;
        box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
}
    .hl-depo{
        height:60px;
        margin:10px;
        padding:10px;
       
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
    .bal-tp{
        font-size: 1rem;
        color:#ccc;
    }
    button{
        padding:5px;
        outline:none;
        color:#0A1AA8;
        font-weight: 600;
    }
    .fa-paper-plane{
        color:#0A1AA8 !important
    }
    .service-col{
        display: flex;
        justify-content: space-between;
        margin:10px;
        padding:10px;
       
    }
    .ech-ser{
        padding:10px;
        border:1px solid #ccc;
        border-radius: 20px;
        min-height:70px;
        width:100%;
        margin:5px
    }
    .icon-ch{
        align-content: center;
        display: flex;
       
        place-content: center;
        padding:10px;
        line-height: 2;
        
    }
    .text-ch{
        font-size: 0.9rem;
        text-align: center;
        margin-top:5px
    }
     @media screen  and (max-width:490px){
    .xl-plc{
        display: none;
    }
    .shw-lft-col{
        width:100%
    }
    .text-ch{
        font-size:0.7rem
    }
    
  }
  .recent-transac{
    margin-top:30px;
    font-size:1.2rem;
    background: #0A1AA8;
    color:#fff !important;
    padding: 10px;
    border-radius: 10px !important;
    justify-content:space-between;
    display:flex;

  }
  .recent-transac h2{
    font-size:1rem
  }
  .table-co{
   
    overflow-y:auto ;
    overflow-x: auto;
    padding:10px;
    background:#fff;
   
    max-height:400px;
    border-radius:10px;
    
  }
  
  table{
   background:#fff;
    font-size:1rem;
    width:100%;
    

 
  }
  tr td{
       border-bottom:1px solid #ccc;
      font-size:1rem;
  }
  .hf-tb{
    background: #ddd;
    padding:5px;
    font-size:1rem
  }
  .mg-tbP{
     padding:10px
  }
   @media screen and (max-width:1100px) {
        .col-xl {
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
        }
        .bl-ct,.kt-lv{
            width:100%;
            box-sizing: border-box;
        
        }

    }
  @media screen and (max-width:755px) {
    .col-xl{
      
        display: block;
    }
   .bl-ct,.kt-lv{
    width:100%;
    box-sizing: border-box;
   
   }
   .tcx-l{
     margin-top:-20px !important;
   }
   .table-co {
        max-height:700px;
   }
}
.txt-p{
    color:#fff;
    font-size:0.8rem
}
.table-co::-webkit-scrollbar{
    width:5px;

}
.top{
    margin-top:50px
}

   .ech-transt-info-col{
   
    background:#fff;
    
    margin-top:20px
   }
   .md-lb-info{
     padding:10px;
     
     height:45px;
     justify-content: space-between;
     display: flex;
   }
   .right-inf-sid{
    width:100%;
    display: grid;
    
   }
   .dwn-tpg{
    display:flex;
    justify-content: space-between;
 
    box-sizing:border-box;
   }
   .dwn-tpg span{
    color:#000;
    font-weight:800;
    font-size:0.8rem;
   }
    a{
        max-width:100px !important;
    }
    .slide-enter-active{
    transition: all 0.3s ease-out;
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
}
.slide-leave-active{
    transition: all 0.3s ease-out;
     transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
}
.slide-enter-from,
.slide-leave-to{
    opacity: 0;
    transform: translate(20px);
     transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
}
.card-info{
   
    display: flex;
    justify-content: space-between;
    padding:10px
}
.cards{
    background: #fff;
    padding:10px;
    width:100%;
    margin:10px;
    max-width: 400px;
    box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
    border-radius:10px;
   
}

.info-trans{
    font-size: 1rem;
   
    align-items: center;
   
}
 h4{
    font-size:1rem !important;
    font-weight:700 !important;
}
.table-content{
    
    padding:10px;

}
.info-content{
    background:#fff;
    border-radius: 10px;
    padding:10px;
    box-shadow: 0px 1px 15px 1px rgb(62 57 107 / 7%);
}
.user-info{
    font-size:1rem;
    font-weight:600;
    margin-left:30px;
    padding:5px
}
.search-cover{
  
    padding:10px;
    margin:10px;
    display: flex;
    justify-content: flex-end;
}
label{
    display: inline-block;
    align-content: center;
    font-size:.9rem;

}
input{
    padding:10px;
    outline:none;
    border:1px solid #ccc
}
.table-cover{
    padding:10px;
    margin:10px auto;
    overflow: auto;
  
    min-height:300px;
    max-width: 1500px;
   box-sizing: border-box;
}
table{
    border-width: 1px;
    color:#ccc;
    border:1px solid #ccc;
    border-top: 3px solid #ccc;
    border-bottom: 3px solid #ccc;
    border-spacing: 0px;
    border-width: 1px;
}
table thead tr th{
    padding: 0.65rem 1.5rem;
    border:1px solid #ccc;
    font-weight: 600;
    word-spacing: normal;
    
}
tbody tr td{
     padding: 0.25rem .8rem;
    border:1px solid #ccc;
   font-size:0.8rem;
    word-spacing: normal;
    text-align: center;
}
.btn-router{
    border-radius: 100%;
    padding:10px;
  
    background: none;
    cursor: pointer;

}
@media screen and (max-width:740px){
    .card-info{
        display: inline-block;
        width:100%;
    }
    .cards{
        width:46%;
        margin:10px;
        float:left;
        box-sizing: border-box;
    }
   .info-trans h4{
        font-size:.9rem !important;
    }
    img{
        width: 30px !important;
        height: 30px !important;
    }
    table thead tr th{
    padding: 0.45rem 1.1rem;
    border:1px solid #ccc;
    font-weight: 600;
    word-spacing: normal;
    font-size:.8rem
    
}
tbody tr td{
     padding: 0.35rem .8rem;
    border:1px solid #ccc;
   font-size:0.8rem;
    word-spacing: normal;
    text-align: center;
}
}
@media screen and (max-width:558px){
    .card-info{
        display: flex;
        width:100%;
       justify-content: center;
        border:1px solid black;
        flex-direction: column;
        box-sizing: border-box;
    }
    .cards{
        width:100% !important;
        margin:10px;
    }
   .info-trans h4{
        font-size:.7rem !important;
    }
     img{
        width: 25px !important;
        height: 25px !important;
    }
}
img{
    width:50px;
    height:50px;
}
</style>