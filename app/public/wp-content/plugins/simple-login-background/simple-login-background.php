<?php
/*
Plugin Name: Simple Login Background
Description: A simple, lightweight plugin for adding a custom background image to the WP login screen
Author: Chris Liu-Beers | Tomatillo Design
Author URI: http://www.tomatillodesign.com
Version: 1.1
*/



/**
 * Image sanitization callback example.
 *
 * Checks the image's file extension and mime type against a whitelist. If they're allowed,
 * send back the filename, otherwise, return the setting default.
 *
 * - Sanitization: image file extension
 * - Control: text, WP_Customize_Image_Control
 *
 * @see wp_check_filetype() https://developer.wordpress.org/reference/functions/wp_check_filetype/
 *
 * @param string               $image   Image filename.
 * @param WP_Customize_Setting $setting Setting instance.
 * @return string The image filename if the extension is allowed; otherwise, the setting default.
 */
function theme_slug_sanitize_image( $image, $setting ) {
	/*
	 * Array of valid image file types.
	 *
	 * The array includes image mime types that are included in wp_get_mime_types()
	 */
	$mimes = array(
		'jpg|jpeg|jpe' => 'image/jpeg',
		'gif'          => 'image/gif',
		'png'          => 'image/png',
		'bmp'          => 'image/bmp',
		'tif|tiff'     => 'image/tiff',
		'ico'          => 'image/x-icon'
	);

	$file = wp_check_filetype( $image, $mimes ); // Return an array with file extension and mime_type.
	return ( $file['ext'] ? $image : $setting->default ); // If $image has a valid mime_type, return it; otherwise, return the default.
}



/**
 * Theme Options Customizer Implementation.
 *
 * @link http://ottopress.com/2012/how-to-leverage-the-theme-customizer-in-your-own-themes/
 *
 * @param WP_Customize_Manager $wp_customize Object that holds the customizer data.
 */

function clb_register_theme_customizer( $wp_customize ){

	/*
	 * Failsafe is safe
	 */
	if ( ! isset( $wp_customize ) ) {
		return;
	}

	/**
	 * Add 'Login Screen' Section.
	 */
	$wp_customize->add_section(
		'clb_section_login_screen', // $id
		array( // $args
			'title'			=> __( 'Login Screen', 'theme-slug' ),
			// 'description'	=> __( 'Some description for the options in the Login Screen section', 'theme-slug' ),
		)
	);

	/**
	 * Add 'Login Screen Background Image' Setting.
	 */
	$wp_customize->add_setting(
		'clb_login_screen_background_image', // $id
		array( // $args
			'default'		=> plugin_dir_url( __FILE__ ) . '/images/login-screen-default.jpg',
			'sanitize_callback'	=> 'theme_slug_sanitize_image',
			'transport'		=> 'postMessage'
		)
	);

	/**
	 * Add 'Login Screen Background Image' image upload Control.
	 */
	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize, // $wp_customize object
			'clb_login_screen_background_image', // $id
			// $args
			array(
				'settings'		=> 'clb_login_screen_background_image',
				'section'		=> 'clb_section_login_screen',
				'label'			=> __( 'Login Screen Background Image', 'theme-slug' ),
				'description'	=> __( 'Select the image to be used for the login screen background', 'theme-slug' )
			)
		)
	);

}

// Settings API options initilization and validation.
add_action( 'customize_register', 'clb_register_theme_customizer' );


// Activate custom CSS for the login screen
add_action( 'login_enqueue_scripts', 'clb_register_plugin_styles' );
function clb_register_plugin_styles() {

	wp_enqueue_style('simple-login-background', plugin_dir_url( __FILE__ ) . 'css/simple-login-background.css' );

}


//Replace WP logo with name of website wrapped in H1 tags
function clb_custom_login_title() {

	$blog_title = get_bloginfo();
	$message = '<div id="custom-login-title"><h1>' . $blog_title . '</h1></div>';
	return $message;

}
add_filter('login_message', 'clb_custom_login_title');



//Use CSS to add the new custom background image
function clb_custom_background_css() {

	$login_screen_background_image_url = get_theme_mod( 'clb_login_screen_background_image' );
	if(!$login_screen_background_image_url) : $login_screen_background_image_url = plugin_dir_url( __FILE__ ) . 'images/login-screen-default.jpg'; endif;

     echo '<style type="text/css">

     	body.login {
			background-image: url("' . $login_screen_background_image_url . '");
			background-repeat: no-repeat;
			background-attachment: fixed;
			background-position: center;
			background-size: cover;
		}

     </style>';
}
//add_action('login_head', 'clb_custom_background_css');


add_action('login_head', 'clb_add_typekit_fonts');
function clb_add_typekit_fonts() {
	echo '<link rel="stylesheet" href="https://use.typekit.net/pbt3vee.css">';
}
