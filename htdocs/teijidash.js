;(function($, window, document, undefined){
"use strict";
$(function(){
  
  
  new PX2VW({
    el: "#px2vw"
  });
  
  
});



/*
## PX to VW
*/

const PX2VW = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, "render");
    
    this.$px = this.$("[name=px]");
    this.$maxWidth = this.$("[name=max-width]");
    this.$vw = this.$("[name=vw]");
    
    this.$px.on("input paste", this.render);
    this.$maxWidth.on("input paste", this.render);
  },
  render: function(){
    const self = this;
    const px = this.$px.val(),
          maxWidth = this.$maxWidth.val(),
          vw = Math.round(px * 100 / maxWidth * 100) / 100;
    
    console.log("px", px);
    
    this.$vw.val(vw + "vw");
    
    setTimeout(function(){
      self.$vw.select();
      document.execCommand("copy");//クリップボードにコピー
      self.$px.focus();
    }, 10);
  }
});



})(jQuery, this, this.document);