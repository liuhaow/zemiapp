<template>
  <div class="lodings">
  	<mt-spinner type="triple-bounce" :size="60" color="#26a2ff"></mt-spinner>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
			return{
				
			}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>

  .lodings {
    height: 100%;
    width:100%;
    position: absolute;
    left:0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    span{
    	position: fixed;
    	width: 60px;
    	height: 60px;
    	top: 50%;
    	left: 50%;
    	margin-left: -30px;
    	margin-top: -30px;
    	div{
    		width: 120px;
    	height: 60px;
    		div::before{
    			background: #000;
    		}
    	}
    }
  }
</style>