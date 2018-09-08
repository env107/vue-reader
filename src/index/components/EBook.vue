<template>
    <div class="Ebook-container">
        <div class="ebook-header" v-show="showMask">
            <div class="header-title">Reader</div>
            <div class="header-item">
                <span class="icon-home"></span>
            </div>
            <div class="header-item">
                <span class="icon-cart"></span>
            </div>
            <div class="header-item">
                <span class="icon-user"></span>
            </div>
        </div>
        <div class="ebook-content">
            <div id="read"></div>
            <div class="page-mask" >
                <div class="mask-left" @click="changePage('prev')"></div>
                <div class="mask-center" @click="changePage()"></div>
                <div class="mask-right" @click="changePage('next')"></div>
            </div>
        </div>
        <transition name="menu">
        <div class="ebook-menu" v-show="showMask">
            <div class="menu-item">
                <span class="icon-align-left"></span>
            </div>
            <div class="menu-item">
                <span class="icon-brightness-up"></span>
            </div>
            <div class="menu-item">
                <span class="icon-view-carousel"></span>
            </div>
            <div class="menu-item">
                <span class="icon-translate"></span>
            </div>    
        </div>
        </transition>
    </div>
</template>

<script>
import epub from "epubjs";
import '@/index/assets/style/icon.css';
const ebook_url = '/resource/111858.epub';
export default {
    name:"ebook",
    data(){
      return { 
          book:null,
          showMask:false
      };  
    },
    mounted(){
        this.renderEpub();
    },
    methods:{
        renderEpub(){
            const Epub = epub(ebook_url);  

            this.book = Epub.renderTo('read',{
                width:'100%',
                height:'100%'
            });
     
            this.book.display();
        },
        changePage(type){
            if(type == 'prev'){
                this.book.prev();
            }else if(type == 'next'){
                this.book.next();
            }else{
                this.showMask = ! this.showMask;
            }
        }
    }
}
</script>

<style lang="less" scoped >
    .ebook-header{
        height: 1.3rem;
        width: 100%;
        box-shadow: 0 .15rem .15rem rgba(10,10,10,.2);
        position:fixed;
        top:0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 100;
        background: rgba(255,255,255,.8);
    }
    .header-title{
        width: 100%;
        display: flex;
        position: absolute;
        left: 0;
        justify-content: center;
        font-size: .6rem;
    }
    .header-item{
        width: 1rem;
        height: 1rem;
        font-size:.5rem;
        color:#666;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ebook-menu{
        height: 1.3rem;
        width: 100%;
        position: fixed;
        bottom:0;
        box-shadow: 0 -.15rem .3rem rgba(10,10,10,.1);
        z-index: 100;
        display: flex;
        align-items: center;
        font-size:.5rem;
        background: rgba(255,255,255,.8);;
    }
    .menu-item{
        flex:1;
        text-align: center;
    }
    .ebook-menu:before{
        position: absolute;
        content: "";
        width: 100%;
        background: #d2d2d2;
        height: 1px;
        top:0;
        
    }
    .ebook-content{
        height: 100%;
        width: 100%;
        position: absolute;
        top:0;
        left:0;
        background: #fff9f0;
    }
    .page-mask{
        position: absolute;
        left:0;
        top:0;
        z-index: 110;
        width:100%;
        height:100%;
        display: flex;
        .mask-left,.mask-right{
            flex:0 0 2rem;
        }
        .mask-center{
            flex:1;
        }
    }
    /* *-enter *-enter-to *-enrter-active  */
    /* *-leave *-leave-to *-leave-active  */
    .menu-enter,.menu-leave-to{
        transform: 0 0 0;
    }
    .menu-enter-to{
        background:red;
    }

    // .menu-enter-active {
    //     transition: all .3s ease;
    // }
    // .menu-leave-active {
    //     transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    // }
    // .menu-enter, .menu-leave-to
    // {
    //     transform: translateX(10px);
    //     opacity: 0;
    // }
</style>
