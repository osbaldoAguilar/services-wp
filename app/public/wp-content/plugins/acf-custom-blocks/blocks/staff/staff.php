<?php

/**
 * Staff Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

 // Source: https://www.advancedcustomfields.com/resources/acf_register_block_type/

$block_to_publish = null;

// Create id attribute allowing for custom "anchor" value.
$id = 'staff-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'clb-custom-staff-block';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}


// ACF stuff here
$staff_name = get_field('staff_name');
     if( $staff_name ) { $staff_name = '<h3 class="clb-staff-name">' . $staff_name . '</h3>'; }

$staff_title = get_field('staff_title');
     if( $staff_title ) { $staff_title = '<div class="clb-staff-title">' . $staff_title . '</div>'; }

$staff_email = get_field('staff_email');
     if( $staff_email ) { $staff_email = '<div class="clb-staff-email"><a href="mailto:' . $staff_email . '" target="_blank">' . $staff_email . '</a></div>'; }

$staff_photo_id = get_field('staff_photo');
$size = 'large';
     if( $staff_photo_id ) { $staff_photo = '<div class="clb-staff-photo-wrapper">' . wp_get_attachment_image( $staff_photo_id, $size ) . '</div>'; }

$staff_bio = get_field('staff_bio');
     if( $staff_bio ) { $staff_bio = '<div class="clb-staff-bio">' . $staff_bio . '</div>'; }



$block_to_publish = $staff_photo . $staff_name . '<div class="clb-staff-meta-area">' . $staff_title . $staff_email . '</div>' . $staff_bio;


// publish to the page
$block_to_publish = '<div class="' . $className . '" id="' . $id . '">' . $block_to_publish . '</div>';
echo $block_to_publish;
