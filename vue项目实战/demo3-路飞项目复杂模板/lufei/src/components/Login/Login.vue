<template>
  <div  ref = "Login" class="loginbox" :style="{height:clientHeight+`px`}">
      <img src="../../../static/img/Loginbg.jpg" class="bg_img" :style="{height:clientHeight+`px`}">
  </div>
</template>

<script>
export default {
    name: 'Login',
     data () {
	    return {
	     clientHeight:document.documentElement.clientHeight
	    }
	},
    mounted () {
        const that = this
        window.onresize = () => {
            return (() => {
                that.clientHeight = document.documentElement.clientHeight
            })()
        }
    },
    watch: {
	    clientHeight (val) {
	        if (!this.timer) {
                    this.clientHeight = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        that.timer = false
                    }, 400)
            }
	    }
    }
}
</script>

<style scoped>
    img{
        border:0;
    }
    .loginbox{
        margin-top:-60px;
    }
    .bg_img{
        width:100%;
    }
</style>
