;(function($, window, document, undefined){
'use strict';
$(function(){
  
  $('#px2vw li').each(function(){
    new PX2VW({
      el: this
    });
  });
  
  $('#multiplication li').each(function(){
    new Multiplication({
      el: this
    });
  });
  
});



/*
## 掛け算
*/

const Multiplication = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'render');
    
    this.$val1 = this.$('[name=val1]');
    this.$val2 = this.$('[name=val2]');
    this.$result = this.$('[name=result]');
    
    this.$val1.on('input paste', this.render);
    this.$val2.on('input paste', this.render);
  },
  render: function(){
    const self = this;
    const val1 = this.$val1.val(),
          val2 = this.$val2.val(),
          result = Math.round(val1 * val2);
    
    this.$result.val(result);
    
    setTimeout(function(){
      self.$result.select();
      document.execCommand('copy');//クリップボードにコピー
      self.$val1.focus();
    }, 10);
  }
});



/*
## PX to VW
*/

const PX2VW = Backbone.View.extend({
  initialize: function(){
    _.bindAll(this, 'render');
    
    this.$px = this.$('[name=px]');
    this.$maxWidth = this.$('[name=max-width]');
    this.$vw = this.$('[name=vw]');
    
    this.$px.on('input paste', this.render);
    this.$maxWidth.on('input paste', this.render);
  },
  render: function(){
    const self = this;
    const px = this.$px.val(),
          maxWidth = this.$maxWidth.val(),
          vw = Math.round(px * 100 / maxWidth * 100) / 100;
    
    console.log('px', px);
    
    this.$vw.val(vw + 'vw');
    
    setTimeout(function(){
      self.$vw.select();
      document.execCommand('copy');//クリップボードにコピー
      self.$px.focus();
    }, 10);
  }
});



})(jQuery, this, this.document);