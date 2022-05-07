<?php
/**
 * Breakthrough Pro
 *
 * This file handles the logic and templating for outputting the Hero Section on the Front Page in the Breakthrough Pro Theme.
 *
 * @package Breakthrough_Pro
 * @author  StudioPress
 * @license GPL-2.0+
 * @link    https://my.studiopress.com/themes/breakthrough
 */

// Sets up hero section content.
$breakthrough_title              = get_theme_mod( 'breakthrough_hero_title_text', breakthrough_get_default_hero_title_text() );
$breakthrough_button_text        = get_theme_mod( 'breakthrough_hero_button_text', breakthrough_get_default_hero_button_text() );
$breakthrough_button_url         = get_theme_mod( 'breakthrough_hero_button_url', '#' );
$breakthrough_hero_header_image  = get_theme_mod( 'breakthrough_front_page_image_1', breakthrough_get_default_front_page_image_1() );
$breakthrough_hero_image_id      = attachment_url_to_postid( $breakthrough_hero_header_image );
$breakthrough_hero_image_default = breakthrough_get_default_front_page_image_1();
$breakthrough_hero               = get_theme_mod( 'breakthrough_show_hero_section', true );

if ( $breakthrough_hero ) {

	if ( $breakthrough_title || is_active_sidebar( 'hero-section' ) ) {

		// Opens the hero-section markup.
		genesis_markup(
			[
				'open'    => '<div %s><div class="wrap">',
				'context' => 'hero-section',
			]
		);

		if ( $breakthrough_title ) {
				echo '<h2 class="hero-title">' . $breakthrough_title . '</h2>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		if ( $breakthrough_button_text ) {
				echo '<a href="' . esc_url( $breakthrough_button_url ) . '" class="button button-hero">' . $breakthrough_button_text . '</a>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		if ( $breakthrough_hero_header_image ) {
			if ( $breakthrough_hero_image_id ) {
				$breakthrough_hero_image = wp_get_attachment_image( $breakthrough_hero_image_id, 'header-image' );
			} else {
				$breakthrough_hero_image = '<img width="1600" height="420" alt="" loading="lazy" src="' . $breakthrough_hero_image_default . '" />';
			}

			echo '<div class="full-width-image">' . $breakthrough_hero_image . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		}

		// Closes the hero-section markup.
		genesis_markup(
			[
				'close'   => '</div></div>',
				'context' => 'hero-section',
			]
		);

	}
}
