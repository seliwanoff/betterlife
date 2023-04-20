import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/admin/dashboard.vue'
import Transactions from '../views/admin/transaction.vue'

import Login from '../views/admin/login.vue'
import Cable from '../views/services/cable.vue'
import Bill from '../views/services/bill.vue'
import Transfer from '../views/services/transfer.vue'
import Airtime from '../views/services/airtime.vue'
import Airtime2cash from '../views/services/airtime2cash.vue'

import Data from '../views/services/data.vue'
import UserbyID from '../views/services/userbyid.vue'

import Deposit from '../views/services/fund-deposit.vue'
import UserTransaction from '../views/services/userdetailtransaction.vue'

import Settings from '../views/settings/admin-settings.vue'
import UpdatePassword from '../views/settings/password.vue'
import Verify from '../views/settings/verify.vue'
import Broadcast from '../views/settings/broadcast.vue'
import Refer from '../views/refer/refer.vue'
import Refer_details from '../views/refer/refer_details.vue'
import Network from '../views/settings/network.vue'
import Reset from '../views/forget/reset.vue'
import MTN from '../views/plan/mtn.vue'
import Airtel from '../views/plan/airtel.vue'
import Mobile from '../views/plan/mobile.vue'
import GLO from '../views/plan/glo.vue'
import DSTV from '../views/tv/dstv.vue'
import GOTV from '../views/tv/gotv.vue'
import Startimes from '../views/tv/startimes.vue'
import Showmax from '../views/tv/showmax.vue'

import ResetPassword from '../views/forget/resetpassword.vue'
import Merchant from '../views/services/merchantupgrade.vue'


const routes = [{
        path: '/admin/dashboard',
        name: 'Better Life | Dashboard',
        component: Dashboard
    },
    {
        path: '/admin/transaction',
        name: 'Better Life | Transaction',
        component: Transactions
    },
    {
        path: '/',
        name: 'Better Life | Admin Login',
        component: Login
    },
    {
        path: '/service/cable',
        name: 'Better Life | Cable Transaction',
        component: Cable
    },
    {
        path: '/service/bill',
        name: 'Better Life | Bill Transaction',
        component: Bill
    },
    {
        path: '/service/Transfer',
        name: 'Better Life | Transfer Transaction',
        component: Transfer
    },
    {
        path: '/service/airtime',
        name: 'Better Life | Airtime Transaction',
        component: Airtime
    },
    {
        path: '/service/airtime2cash',
        name: 'Better Life | Airtime2cah Transaction',
        component: Airtime2cash
    },
    {
        path: '/service/data',
        name: 'Better Life | Data Transaction',
        component: Data
    },
    {
        path: '/plan/mtn',
        name: 'Tapit | MTN settings',
        component: MTN
    },
    {
        path: '/plan/airtel',
        name: 'Tapit | Airtel settings',
        component: Airtel
    },
    {
        path: '/plan/mobile',
        name: 'Tapit | mobile settings',
        component: Mobile
    },
    {
        path: '/tv/dstv',
        name: 'Tapit | DSTV settings',
        component: DSTV
    },
    {
        path: '/tv/gotv',
        name: 'Tapit | GOTV settings',
        component: GOTV
    },
    {
        path: '/tv/startimes',
        name: 'Tapit | Startimes settings',
        component: Startimes
    },
    {
        path: '/tv/showmax',
        name: 'Tapit | Showmax settings',
        component: Showmax
    },
    {
        path: '/plan/glo',
        name: 'Tapit | GLO settings',
        component: GLO
    },
    {
        path: '/plan/mtn',
        name: 'Tapit | MTN settings',
        component: MTN
    },
    {
        path: '/plan/airtel',
        name: 'Tapit | Airtel settings',
        component: Airtel
    },
    {
        path: '/plan/mobile',
        name: 'Tapit | mobile settings',
        component: Mobile
    },
    {
        path: '/tv/dstv',
        name: 'Tapit | DSTV settings',
        component: DSTV
    },
    {
        path: '/tv/gotv',
        name: 'Tapit | GOTV settings',
        component: GOTV
    },
    {
        path: '/tv/startimes',
        name: 'Tapit | Startimes settings',
        component: Startimes
    },
    {
        path: '/tv/showmax',
        name: 'Tapit | Showmax settings',
        component: Showmax
    },
    {
        path: '/plan/glo',
        name: 'Tapit | GLO settings',
        component: GLO
    },
    {
        path: '/service/fund-deposit',
        name: 'Better Life | Fund Deposit',
        component: Deposit 
    },
    {
        path: '/settings/admin-settings',
        name: 'Better Life | Admin Settings',
        component: Settings
    },
    {
        path: '/settings/password',
        name: 'Better Life | Reset Password',
        component: UpdatePassword
    },
    {
        path: '/settings/verify',
        name: 'Better Life | Verify',
        component: Verify
    },
    {
        path: '/settings/broadcast',
        name: 'Better Life | Broadcast',
        component: Broadcast
    },
    {
        path: '/refer/refer',
        name: 'Better Life | Refer',
        component: Refer
    },
    {
        path: '/refer/refer_details/:username',
        name: 'Better Life | Refer_details',
        component: Refer_details
    },
    {
        path: '/settings/network',
        name: 'Better Life | Network',
        component:Network
    },
     {
        path: '/forget/reset',
        name: 'Better Life | Forget Password',
        component: Reset
    },
    {
        path: '/forget/resetpassword',
        name: 'Better Life | Reset Password',
        component: ResetPassword
    },
    {
        path: '/settings/password',
        name: 'Better Life | Update Password',
        component: UpdatePassword
    },
    {
        path: '/service/merchantupgrade',
        name: 'Better Life | Merchant',
        component: Merchant
    },
    {
        path: '/service/userbyid/:id',
        name: 'Better Life | User Transaction',
        component: UserbyID
    },
    {
        path: '/userdetailtransaction/:id/:ref',
        name: 'Better Life | User Transaction Details',
        component: UserTransaction
    },
    

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})



router.beforeEach((to, from, next) => {

    document.title = `${ to.name}`
    next()


    // to and from are both route objects. must call `next`.
})



  
 
export default router