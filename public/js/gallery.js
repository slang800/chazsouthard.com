(function(){var t={}.hasOwnProperty,e=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e};define(["jquery","backbone","uuid"],function(t,n){var i,r,o,u,l,p,s,c,a;return o=function(t){function n(){return p=n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.defaults={title:"",url:"",thumb_url:"",caption:"",slug:"",group_id:"",description:""},n.prototype.sync=function(){return!1},n.prototype.initialize=function(){return _.bindAll(this)},n}(n.Model),u=function(t){function n(){return s=n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.tagName="figure",n.prototype.render=function(){return this.el.innerHTML='<a class="fancybox" rel="'+this.model.get("group_id")+'" href="'+this.model.get("url")+'" title="'+this.model.get("title")+'">\n	<img src="'+this.model.get("thumb_url")+'" alt="" />\n	<figcaption>\n	<em>'+this.model.get("title")+"</em>\n	"+this.model.get("description")+"\n	</figcaption>\n</a>"},n.prototype.initialize=function(){return _.bindAll(this),this.model.view=this,this.render()},n}(n.View),r=function(t){function n(){return c=n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.className="gallery",n.prototype.initialize=function(){return _.bindAll(this)},n}(n.View),i=function(t){function n(){return a=n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.model=o,n.prototype.added_photo=function(t){return t.set("group_id",this.group_id),this.view.$el.append(new u({model:t}).el)},n.prototype.initialize=function(){return _.bindAll(this),this.group_id=Math.uuid(),this.on("add",this.added_photo),this.view=new r({model:this})},n}(n.Collection),l=function(){var e;return e=[],t(".gallery").each(function(n,r){return e[n]=new i,t(r).find("a").each(function(){var i,r;return r=t(this).attr("href"),i=attachment_index[r],e[n].add({title:i.title,url:r,thumb_url:i.images.thumbnail.url,caption:i.caption,description:i.description,slug:i.slug})}).promise().done(function(){return t(r).replaceWith(e[n].view.el)})})}})}).call(this);