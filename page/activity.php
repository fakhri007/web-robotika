<div id="base_activity" >
	<div class="animation-element base_title">
		<h1>Activity</h1>
	</div>
	<div id="activity_gap">
	</div>
	<?php
	/* function:  generates thumbnail */
	function make_thumb($src,$dest,$desired_width) {
		/* read the source image */
		$source_image = imagecreatefromjpeg($src);
		$width = imagesx($source_image);
		$height = imagesy($source_image);
		/* find the "desired height" of this thumbnail, relative to the desired width  */
		$desired_height = floor($height*($desired_width/$width));
		/* create a new, "virtual" image */
		$virtual_image = imagecreatetruecolor($desired_width,$desired_height);
		/* copy source image at a resized size */
		imagecopyresized($virtual_image,$source_image,0,0,0,0,$desired_width,$desired_height,$width,$height);
		/* create the physical thumbnail image to its destination */
		imagejpeg($virtual_image,$dest);
	}

	/* function:  returns files from dir */
	function get_files($images_dir,$exts = array('jpg')) {
		$files = array();
		if($handle = opendir($images_dir)) {
			while(false !== ($file = readdir($handle))) {
				$extension = strtolower(get_file_extension($file));
				if($extension && in_array($extension,$exts)) {
					$files[] = $file;
				}
			}
			closedir($handle);
		}
		return $files;
	}

	/* function:  returns a file's extension */
	function get_file_extension($file_name) {
		return substr(strrchr($file_name,'.'),1);
	}
?>
	<div id="gallery" class="animation-element" style="display:none;">
		<?php
		/** settings **/
		$images_dir = 'images/big/';
		$thumbs_dir = 'images/thumbs/';
		$thumbs_width = 400;
		$images_per_row = 3;

		/** generate photo gallery **/
		$image_files = get_files($images_dir);
		if(count($image_files)) {
			$index = 0;
			foreach($image_files as $index=>$file) {
				$index++;
				$thumbnail_image = $thumbs_dir.$file;
				if(!file_exists($thumbnail_image)) {
					$extension = get_file_extension($thumbnail_image);
					if($extension) {
						make_thumb($images_dir.$file,$thumbnail_image,$thumbs_width);
					}
				}
				echo '
				<a href="',$images_dir.$file,'">
					<img alt="',$file,'"
						 src="',$thumbnail_image,'"
						 data-image="',$images_dir.$file,'"
						 data-description="',$file,'"
						 style="display:none">
				</a>
				';
				if($index % $images_per_row == 0) {}
			}
		}
		else {}
		?>
		
		<a href="http://unitegallery.net">
		<img alt="Lemon Slice"
		     src="images/thumbs/tile1.jpg"
		     data-image="images/big/tile1.jpg"
		     data-description="This is a Lemon Slice"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Peppers"
		     src="images/thumbs/tile2.jpg"
		     data-image="images/big/tile2.jpg"
		     data-description="Those are peppers"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Keys"
		     src="images/thumbs/tile3.jpg"
		     data-image="images/big/tile3.jpg"
		     data-description="Those are keys"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Friuts in cup"
		     src="images/thumbs/tile4.jpg"
		     data-image="images/big/tile4.jpg"
		     data-description="Those are friuts in a cup"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Yellow Flowers"
		     src="images/thumbs/tile5.jpg"
		     data-image="images/big/tile5.jpg"
		     data-description="Those are yellow flowers"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Butterfly"
		     src="images/thumbs/tile6.jpg"
		     data-image="images/big/tile6.jpg"
		     data-description="This is butterfly"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Boat"
		     src="images/thumbs/tile7.jpg"
		     data-image="images/big/tile7.jpg"
		     data-description="This is a boat"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Woman"
		     src="images/thumbs/tile8.jpg"
		     data-image="images/big/tile8.jpg"
		     data-description="This is a woman"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Cup Of Coffee"
		     src="images/thumbs/tile9.jpg"
		     data-image="images/big/tile9.jpg"
		     data-description="This is cup of coffee"
		     style="display:none">
		</a>
		
		<a href="http://unitegallery.net">
		<img alt="Iphone Back"
		     src="images/thumbs/tile10.jpg"
		     data-image="images/big/tile10.jpg"
		     data-description="This is iphone back"
		     style="display:none">
		</a>
		<a href="http://unitegallery.net">
		<img alt="Lemon Slice"
		     src="images/thumbs/tile1.jpg"
		     data-image="images/big/tile1.jpg"
		     data-description="This is a Lemon Slice"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Peppers"
		     src="images/thumbs/tile2.jpg"
		     data-image="images/big/tile2.jpg"
		     data-description="Those are peppers"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Keys"
		     src="images/thumbs/tile3.jpg"
		     data-image="images/big/tile3.jpg"
		     data-description="Those are keys"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Friuts in cup"
		     src="images/thumbs/tile4.jpg"
		     data-image="images/big/tile4.jpg"
		     data-description="Those are friuts in a cup"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Yellow Flowers"
		     src="images/thumbs/tile5.jpg"
		     data-image="images/big/tile5.jpg"
		     data-description="Those are yellow flowers"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Butterfly"
		     src="images/thumbs/tile6.jpg"
		     data-image="images/big/tile6.jpg"
		     data-description="This is butterfly"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Boat"
		     src="images/thumbs/tile7.jpg"
		     data-image="images/big/tile7.jpg"
		     data-description="This is a boat"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Woman"
		     src="images/thumbs/tile8.jpg"
		     data-image="images/big/tile8.jpg"
		     data-description="This is a woman"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Cup Of Coffee"
		     src="images/thumbs/tile9.jpg"
		     data-image="images/big/tile9.jpg"
		     data-description="This is cup of coffee"
		     style="display:none">
		</a>

		<a href="http://unitegallery.net">
		<img alt="Iphone Back"
		     src="images/thumbs/tile10.jpg"
		     data-image="images/big/tile10.jpg"
		     data-description="This is iphone back"
		     style="display:none">
		</a>
	
	</div>
	
	<script type="text/javascript">

		jQuery(document).ready(function(){
			jQuery("#gallery").unitegallery({
				gallery_theme: "tiles",
				tile_enable_textpanel:true,
				tile_textpanel_title_text_align: "center",
				tile_enable_image_effect:true,
				tile_image_effect_reverse:true,
				tile_image_effect_type: "blur",
				tile_textpanel_source: "desc_title",
				//tiles_justified_space_between:0,
				tiles_space_between_cols: 3,
				//tiles_space_between_cols_mobile: 0,
				tiles_type: "nested"				
			});
		});		
	</script>
	
</div>