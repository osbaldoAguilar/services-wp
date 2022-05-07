<?php
/*
Plugin Name: Code the Dream - Osbaldo
Description: Site-specific functionality and custom code for Auto Repair & Services 
Author: Chris Liu-Beers, Tomatillo Design
Author URI: http://www.tomatillodesign.com
Version: 1.1
License: GPL v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/


/* Start Adding Functions Below this Line */



// Enqueue custom scripts & styles
add_action( 'wp_enqueue_scripts', 'ctd_osbaldo_enqueue_custom_scripts_styles', 100 );
function ctd_osbaldo_enqueue_custom_scripts_styles() {

     // custom JS
     wp_enqueue_script( 'ctd-custom-scripts-osbaldo', plugin_dir_url( __FILE__ ) . 'js/ctd-custom-scripts-osbaldo.js', array( 'jquery' ), '', true );

     // custom front-end CSS
     wp_enqueue_style( 'ctd-custom-styles-osbaldo', plugin_dir_url( __FILE__ ) . 'css/ctd-custom-styles-osbaldo.css', array(), '1.0.0', 'all');

}




// Update CSS within in Admin
function ctd_osbaldo_custom_admin_styles() {

     wp_enqueue_style('custom-admin-styles', plugin_dir_url( __FILE__ ) . 'css/ctd-custom-admin-styles-osbaldo.css');

}
add_action('admin_enqueue_scripts', 'ctd_osbaldo_custom_admin_styles');
