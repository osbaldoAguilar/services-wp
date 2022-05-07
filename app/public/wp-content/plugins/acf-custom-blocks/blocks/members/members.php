<?php

/**
 * Member Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

 // Source: https://www.advancedcustomfields.com/resources/acf_register_block_type/

$block_to_publish = null;

// Create id attribute allowing for custom "anchor" value.
$id = 'members-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'clb-custom-members-block';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}

$member_category_id = get_field('select_partner_type');
$args = array(
     'numberposts' => -1,
     'post_type'   => 'members',
     'tax_query' => array(
        array(
            'taxonomy' => 'member_categories',
            'field'    => 'term_id',
            'terms'    => array( $member_category_id ),
        )
   ),
   'order'          => 'ASC',
   'orderby'        => 'menu_order',
   'fields' => 'ids'
);

$member_ids = get_posts( $args );
$member_cards = null;

foreach( $member_ids as $post_id ) {

     // do stuff here
     $title = get_the_title( $post_id );
     $permalink = get_the_permalink( $post_id );
     $member_website_link = get_field('member_organization_link', $post_id);
     $member_logo = get_the_post_thumbnail( $post_id, 'large' );
     $excerpt = get_the_excerpt( $post_id );

     $member_website_link = $permalink;

     if( $member_website_link ) {
          $title = '<div class="clb-member-title"><h3><a href="' . $member_website_link . '" target="_blank">' . $title . '</a></h3></div>';
     } else {
          $title = '<div class="clb-member-title"><h3>' . $title . '</h3></div>';
     }

     if( $member_logo ) {

          if( $member_website_link ) { $member_logo = '<div class="clb-member-card-logo-wrapper"><a href="' . $member_website_link . '" target="_blank">' . $member_logo . '</a></div>'; }
          else { $member_logo = '<div class="clb-member-card-logo-wrapper">' . $member_logo . '</div>'; }

     }

     $member_cards .= '<div class="clb-single-member-card" title="' . $excerpt . '">
                              ' . $member_logo . $title . '
                         </div>';

}


// publish to the page
$block_to_publish = '<div class="' . $className . '" id="' . $id . '">' . $member_cards . '</div>';
echo $block_to_publish;
