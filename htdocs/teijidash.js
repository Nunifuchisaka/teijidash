;(function($, window, document, undefined){
"use strict";
$(function(){
  
  
  new PX2VW({
    el: "#px2vw"
  });
  
  
});



/*
## 
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
    const px = this.$px.val(),
          maxWidth = this.$maxWidth.val(),
          vw = Math.round(px * 100 / maxWidth * 100) / 100;
    
    this.$vw.val(vw + "vw").select();
    document.execCommand("copy");//クリップボードにコピー
    this.$px.focus();
  }
});



})(jQuery, this, this.document);