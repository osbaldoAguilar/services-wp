/**
 * Block dependencies
 */
import icons from './icons';
import './editor.scss';
import './style.css';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const {
    registerBlockType,
} = wp.blocks;
const {
    Editable,
    MediaUpload,
    MediaUploadCheck,
    BlockControls,
    InspectorControls,
    RichText,
    URLInput,
    PanelColorSettings,
    InnerBlocks,
} = wp.blockEditor;
const {
    Button,
    SelectControl,
    RadioControl,
    Panel,
    PanelBody,
    PanelRow,
    TextControl,
    TextareaControl,
} = wp.components;
const { Fragment } = wp.element;

/**
 * Register example block
 */
export default registerBlockType(
    'cgb/clb-icon-reveal-card',
    {
        title: __( 'Icon Reveal Card', 'clb-icon-reveal-card' ),
        description: __( 'Add an icon card to your grid ', 'clb-icon-reveal-card'),
        category: 'common',
        parent: ['cgb/icon-card-grid'],
	   icon: {
             foreground: '#555d66',
	        background: 'transparent',
	        src: 'media-video',
	   },
        keywords: [ __( 'icon' ), __( 'card' ), __( 'grid' ) ],
        attributes: {
          iconCardTitle: {
			source: 'html',
			selector: '.clb_card__title',
			// default: __( 'Card Title' ),
		},
          iconCardLink: {
                type: 'string',
                selector: '.clb_reveal_card_slug',
            },
          backgroundColor: {
              type: 'string',
              default: '#555d66'
          },
          icon: {
               type: 'string',
               default: 'info-circle'
          },
          iconSize: {
               type: 'string',
               default: '3x'
          },
          iconStyle: {
               type: 'string',
               default: 'far'
          },
        },
        edit: props => {
            const { attributes: { iconCardTitle, iconCardLink, icon, iconSize, iconStyle, backgroundColor },
                className, setAttributes, isSelected } = props;

           const slugify = text => {
                return text.toString().toLowerCase().trim()
              	.normalize('NFD') 				 // separate accent from letter
              	.replace(/[\u0300-\u036f]/g, '') // remove all separated accents
              	.replace(/\s+/g, '-')            // replace spaces with -
              	.replace(/&/g, '-and-')          // replace & with 'and'
              	.replace(/[^\w\-]+/g, '')        // remove all non-word chars
              	.replace(/\-\-+/g, '-')          // replace multiple '-' with single '-'
              }

            const onChangeIconCardTitle = iconCardTitle => {
                 setAttributes( { iconCardTitle } );
                 setAttributes( { iconCardLink : slugify(iconCardTitle) });
            };
            const onChangeIcon = icon => { setAttributes( { icon } ) };
            const onChangeIconSize = iconSize => { setAttributes( { iconSize } ) };
            const onChangeIconStyle = iconStyle => { setAttributes( { iconStyle } ) };

            return (
			  <Fragment>
                 <InspectorControls>
                   <PanelBody
                       title={ __( 'Icon Card Settings', 'clb-icon-reveal-card' ) }
                   >
                   <TextControl
                       label={ 'Icon' }
                       help={ 'Copy the icon text from fontawesome.com/icons. Eg: lightbulb-on' }
                       value={ icon }
                       onChange={ onChangeIcon }
                   />
                   <SelectControl
                       label={ 'Icon Size' }
                       help={ 'Select the size of your icon. See: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons' }
                       value={ iconSize }
                       onChange={ onChangeIconSize }
                       options={[
                        { label: "xs", value: "xs" },
                        { label: "sm", value: "sm" },
                        { label: "lg", value: "lg" },
                        { label: "2x", value: "2x" },
                        { label: "3x", value: "3x" },
                        { label: "4x", value: "4x" },
                        { label: "5x", value: "5x" },
                        { label: "6x", value: "6x" },
                        { label: "7x", value: "7x" },
                        { label: "8x", value: "8x" }
                      ]}
                   />
                   <SelectControl
                       label={ 'Icon Style' }
                       help={ 'Select the size of your icon. See: https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons' }
                       value={ iconStyle }
                       onChange={ onChangeIconStyle }
                       options={[
                        { label: "Solid", value: "fas" },
                        { label: "Regular", value: "far" },
                        { label: "Light", value: "fal" },
                        { label: "Duotone", value: "fad" },
                        { label: "Thin", value: "fat" },
                        { label: "Brand", value: "fab" }
                      ]}
                   />
                       <PanelRow>
                            <PanelColorSettings
                            title={'Highlight Color'}
                            colorSettings={[
                              {
                               label: "Color Picker",
                               value: backgroundColor,
                               onChange: backgroundColor => {
                                  setAttributes({ backgroundColor });
                               }
                              }
                            ]}
                         />
                       </PanelRow>
                   </PanelBody>
               </InspectorControls>

               <div className={ className } >
               { isSelected ? (

                    <div className ={ className + "-selected" } >
                        <TextControl
                            className='clb_card__title'
                            label={ 'Icon Card Title' }
                            value={ iconCardTitle }
                            placeholder={ 'Your Headline Here' }
                            onChange={ onChangeIconCardTitle }
                       />
                       <InnerBlocks />
                         </div>
                    ) : (

                       <div className="clb-icon-reveal-card-static" style={{ "--clb-accent-color" : backgroundColor }}>
                           <strong>{iconCardTitle}</strong>
                           <InnerBlocks />
                      </div>

                            ) }

                            </div>
                         </Fragment>
                    )},

        save: props => {

            const { iconCardTitle, iconCardLink, icon, iconSize, iconStyle, backgroundColor } = props.attributes;

            function getContrastYIQ(hexcolor){

                   var r = parseInt(hexcolor.substr(1,2),16);
                   var g = parseInt(hexcolor.substr(3,2),16);
                   var b = parseInt(hexcolor.substr(5,2),16);
                   var yiq = ((r*299)+(g*587)+(b*114))/1000;
                   return (yiq >= 128) ? 'dark' : 'light';
               }

            return (
                 <Fragment>
                 <div className={ `clb-icon-reveal-card clb-icon-card-area ` + iconCardLink } style={{ "--clb-accent-color" : backgroundColor }} >
                      <a href={"#" + iconCardLink} className="clb-icon-card-link">
                               <div className="clb-card-icon"><i className={ `${iconStyle} fa-${icon} fa-${iconSize}` }></i></div>
                               <h3 className="clb_card__title">{iconCardTitle}</h3>

                         </a>
                    </div>
                    <div id={iconCardLink} className={iconCardLink + " clb-icon-reveal-card-contents clb-hide"} style={{ "--clb-accent-color" : backgroundColor }}>
                         <InnerBlocks.Content />
                    </div>
               </Fragment>

            );
        },
    },
);
