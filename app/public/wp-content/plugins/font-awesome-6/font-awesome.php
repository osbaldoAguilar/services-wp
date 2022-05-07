<?php
/*
Plugin Name: Font Awesome 6
Description: Adds Font Awesome 6 (SVG+JS version) to your WordPress website (ver 6.0.0-alpha3) - 8,000+ icons
Author: Chris Liu-Beers | Tomatillo Design
Author URI: http://www.tomatillodesign.com
Version: 6.0.0-alpha3
*/


/* Start Adding Functions Below this Line */

add_action( 'init', 'clb_enqueue_fontawesome_scripts' );
function clb_enqueue_fontawesome_scripts() {

   wp_enqueue_script( 'font-awesome-6-all', plugin_dir_url( __FILE__ ) .  '/js/all.js', array('jquery'), '1.0.0', true );

}


//
//
// require 'plugin-update-checker/plugin-update-checker.php';
// $myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
// 	'https://github.com/tomatillodesign/font-awesome-5-wordpress-plugin',
// 	__FILE__,
// 	'font-awesome-5-wordpress-plugin'
// );
//
// //Optional: If you're using a private repository, specify the access token like this:
// $myUpdateChecker->setAuthentication('7e01a3a2b254a2f86515bcac5dba74e334b7b0c6');
//
// //Optional: Set the branch that contains the stable release.
// $myUpdateChecker->setBranch('prod');
