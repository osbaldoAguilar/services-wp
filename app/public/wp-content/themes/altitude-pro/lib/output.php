<?php
/**
 * Altitude Pro.
 *
 * This file adds the required CSS to the frontend when customized to the Altitude Pro Theme.
 *
 * @package Altitude Pro
 * @author  StudioPress
 * @license GPL-2.0-or-later
 * @link    https://my.studiopress.com/themes/altitude/
 */

add_action( 'wp_enqueue_scripts', 'altitude_css' );
/**
 * Checks the settings for the images and background colors for each image.
 * If any of these value are set the appropriate CSS is output.
 *
 * @since 1.0
 */
function altitude_css() {

	$appearance = genesis_get_config( 'appearance' );

	$link_color   = get_theme_mod( 'altitude_link_color', $appearance['default-colors']['primary'] );
	$accent_color = get_theme_mod( 'altitude_accent_color', $appearance['default-colors']['secondary'] );

	$opts = apply_filters( 'altitude_images', [ '1', '3', '5', '7' ] );

	$settings = [];

	$css = '';

	foreach ( $opts as $opt ) {
		$settings[ $opt ]['image'] = preg_replace( '/^https?:/', '', get_option( $opt . '-altitude-image', sprintf( '%s/images/bg-%s.jpg', get_stylesheet_directory_uri(), $opt ) ) );
	}

	foreach ( $settings as $section => $value ) {

		$background = $value['image'] ? sprintf( 'background-image: url(%s);', $value['image'] ) : '';

		if ( is_front_page() ) {
			$css .= ( ! empty( $section ) && ! empty( $background ) ) ? sprintf( '.front-page-%s { %s }', $section, $background ) : '';
		}
	}

	$css .= ( $appearance['default-colors']['secondary'] !== $accent_color ) ? sprintf(
		'

		.image-section a:focus,
		.image-section a:hover,
		.image-section .featured-content .entry-title a:focus,
		.image-section .featured-content .entry-title a:hover,
		.site-footer a:focus,
		.site-footer a:hover {
			color: %1$s;
		}

		.image-section button,
		.image-section input[type="button"],
		.image-section input[type="reset"],
		.image-section input[type="submit"],
		.image-section .widget .button {
			background-color: %1$s;
			color: %2$s;
		}

		.image-section button,
		.image-section input[type="button"],
		.image-section input[type="reset"],
		.image-section input[type="submit"],
		.image-section .button,
		.front-page .image-section input:focus,
		.front-page .image-section textarea:focus,
		.image-section .widget .button {
			border-color: %1$s;
		}
		',
		$accent_color,
		altitude_color_contrast( $accent_color )
	) : '';

	$css .= ( $appearance['default-colors']['primary'] !== $link_color ) ? sprintf(
		'

		a,
		.entry-title a:focus,
		.entry-title a:hover {
			color: %1$s;
		}

		button,
		input[type="button"],
		input[type="reset"],
		input[type="submit"],
		.archive-pagination li a:focus,
		.archive-pagination li a:hover,
		.archive-pagination .active a,
		.button,
		.footer-widgets,
		.site-container div.wpforms-container-full .wpforms-form input[type="submit"],
		.site-container div.wpforms-container-full .wpforms-form button[type="submit"],
		.widget .button {
			background-color: %1$s;
			color: %2$s;
		}

		button,
		input[type="button"],
		input[type="reset"],
		input[type="submit"],
		.button,
		.front-page input:focus,
		.front-page textarea:focus,
		.site-container div.wpforms-container-full .wpforms-form input[type="submit"],
		.site-container div.wpforms-container-full .wpforms-form button[type="submit"],
		.widget .button {
			border-color: %1$s;
		}

		.footer-widgets a,
		.footer-widgets .wrap a {
			background: transparent;
			border-color: %2$s;
			color: %2$s;
		}

		.footer-widgets .wrap a:focus,
		.footer-widgets .wrap a:hover {
			color: %3$s;
		}

		',
		$link_color,
		altitude_color_contrast( $link_color ),
		altitude_change_brightness( $link_color )
	) : '';

	$css .= ( $appearance['default-colors']['primary'] !== $link_color ) ? sprintf(
		'

		.footer-widgets .widget button,
		.footer-widgets .widget input[type="button"],
		.footer-widgets .widget input[type="reset"],
		.footer-widgets .widget input[type="submit"],
		.footer-widgets .widget a.button {
			background-color: %1$s;
			border-color: %1$s;
			color: %2$s;
		}

		.footer-widgets .widget a.button.clear {
			border-color: %1$s;
			color: %1$s;
		}

		.footer-widgets .widget button:focus,
		.footer-widgets .widget button:hover,
		.footer-widgets .widget input[type="button"]:focus,
		.footer-widgets .widget input[type="button"]:hover,
		.footer-widgets .widget input[type="reset"]:focus,
		.footer-widgets .widget input[type="reset"]:hover,
		.footer-widgets .widget input[type="submit"]:focus,
		.footer-widgets .widget input[type="submit"]:hover,
		.footer-widgets .widget a.button:focus,
		.footer-widgets .widget a.button:hover,
		.footer-widgets .widget a.button.clear:focus,
		.footer-widgets .widget a.button.clear:hover {
			background-color: %3$s;
			border-color: %3$s;
			color: %2$s;
		}
		',
		altitude_color_contrast( $link_color ),
		altitude_color_contrast( altitude_color_contrast( $link_color ) ),
		altitude_change_brightness( $link_color )
	) : '';

	if ( $css ) {
		wp_add_inline_style( genesis_get_theme_handle(), $css );
	}

}
