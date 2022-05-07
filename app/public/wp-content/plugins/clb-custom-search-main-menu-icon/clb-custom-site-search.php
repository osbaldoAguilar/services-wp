<?php
/*
Plugin Name: Main Menu Site Search
Description: Adds site search when you use CSS class 'clb-custom-search-icon'; requires Font Awesome 5 and Bootstrap Modals
Author: Chris Liu-Beers | Tomatillo Design
Author URI: http://www.tomatillodesign.com
Version: 0.1
*/



/* Start Adding Functions Below this Line */

add_action( 'wp_enqueue_scripts', 'clb_enqueue_custom_search_scripts' );
function clb_enqueue_custom_search_scripts() {

   wp_enqueue_script( 'clb-custom-search-main-menu-icon', WP_PLUGIN_URL . '/clb-custom-search-main-menu-icon/js/clb-custom-site-search.js', array('jquery'), '1.0.0', true );

}




// Search Bar modal
add_action('genesis_after_header', 'clb_modal_search');
function clb_modal_search() {

	$blog_title = get_bloginfo();

?>

	<!-- Modal -->
	<div id="site-search" class="modal fade" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
	   <div class="modal-content">
		  <div class="modal-header">

			<h4 class="modal-title">Search <?php echo $blog_title; ?></h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">×</span>
				</button>
		  </div>

		  <div class="modal-body"><?php echo get_search_form(); ?></div>
	   </div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->

<?php

}
