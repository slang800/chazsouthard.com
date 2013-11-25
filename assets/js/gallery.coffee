# get the libraries and then call the function
define ['jquery', 'backbone', 'uuid'], ($, Backbone) ->
	
	# this is a model that represents a single photo... it's basically just used to hold the slug, name, and if it is selected or not 
	class Photo extends Backbone.Model
		defaults:
			title: ''
			url: ''
			thumb_url: ''
			caption: ''
			slug: ''
			group_id: ''
			description: ''

		sync: ->
			false # changes to Photos don't get stored anywhere

		initialize: ->
			_.bindAll @

	class PhotoView extends Backbone.View
		tagName: 'figure'
		render: ->
			@el.innerHTML = """
			<a class="fancybox" rel="#{@model.get('group_id')}" href="#{@model.get('url')}" title="#{@model.get('title')}">
				<img src="#{@model.get('thumb_url')}" alt="" />
				<figcaption>
				<em>#{@model.get('title')}</em>
				#{@model.get('description')}
				</figcaption>
			</a>
			"""

		initialize: ->
			_.bindAll @
			@model.view = @
			@render()

	class GalleryView extends Backbone.View
		className: 'gallery'
		initialize: ->
			_.bindAll @

	class Gallery extends Backbone.Collection
		model: Photo

		added_photo: (photo_model) ->
			#used to create the view for a photo after it has been added
			photo_model.set('group_id', @group_id)
			@view.$el.append(new PhotoView(model: photo_model).el)

		initialize: ->
			_.bindAll @
			@group_id = Math.uuid()
			@on("add", @added_photo)
			@view = new GalleryView model: @

	return process_galleries = () ->
		gallery = []
		$('.gallery').each((i, element) ->
			gallery[i] = new Gallery()
			$(element).find('a').each((e) ->
				url = $(@).attr('href')
				img = attachment_index[url]
				gallery[i].add(
					title: img['title']
					url: url
					thumb_url: img['images']['thumbnail']['url']
					caption: img['caption']
					description: img['description']
					slug: img['slug']
				)
			).promise().done( ->
				$(element).replaceWith(gallery[i].view.el)
			)
		)