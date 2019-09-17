var swiper = new Swiper(".global-promotion", {
    // slidesPerView: 1.12,
    // slidesOffsetAfter: .115 * document.body.clientWidth,
    watchSlidesProgress: !0,
    on: {
        touchMove: function () {
        //     document.querySelector('.current').style.width=this.progress*100+'%'
        //     if(this.progress<0)this.progress=0
        //    document.querySelector('.progress-num').innerText= Math.round(this.progress*100)+'%'

        },
        setTransition: function (a) {
            document.querySelector('.current').style.width=this.progress*100+'%'
            if(this.progress<0)this.progress=0
            document.querySelector('.progress-num').innerText= Math.round(this.progress*100)+'%'
           // console.log(this.progress);

        }
    }
});