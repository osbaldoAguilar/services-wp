/**
 * Block dependencies
 */
import icon from './icon';
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
    'cgb/staff',
    {
        title: __( 'Staff Card', 'clb_staff' ),
        description: __( 'Add a staff Card to your content ', 'clb_staff'),
        category: 'common',
        parent: ['cgb/staffcollection'],
	   icon: {
	        foreground: '#fff',
	        background: '#3883d6',
	        src: icon,
	   },
        keywords: [ __( 'card' ), __( 'staff' ), __( 'employee' ) ],
        attributes: {
            imgURL: {
                type: 'string',
            },
            imgID: {
                type: 'number',
            },
            imgAlt: {
                type: 'string',
                source: 'attribute',
                attribute: 'alt',
                selector: 'img',
           },
           cardType: {
 			type: 'string',
 			default: 'basic',
 		},
          cardName: {
			source: 'html',
			selector: '.clb-card__name',
		},
          cardTitle: {
			source: 'html',
			selector: '.clb-card__title',
			// default: __( 'Card Title' ),
		},
          cardPhone: {
			source: 'html',
			selector: '.clb-card__phone',
		},
          cardEmail: {
			source: 'html',
			selector: '.clb-card__email',
		},
        },
        edit: props => {
            const { attributes: { imgID, imgURL, imgAlt, cardType, cardTitle, cardName, cardEmail, cardPhone, cardEmailActiveLink },
                className, setAttributes, isSelected } = props;
            const onSelectImage = img => {
                setAttributes( {
                    imgID: img.id,
                    imgURL: img.url,
                    imgAlt: img.alt,
                } );
            };
            const onRemoveImage = () => {
                setAttributes({
                    imgID: null,
                    imgURL: null,
                    imgAlt: null,
                });
            }

            const onChangeCardType = cardType => { setAttributes( { cardType } ) };
            const onChangeName = cardName => { setAttributes( { cardName } ) };
            const onChangeTitle = cardTitle => { setAttributes( { cardTitle } ) };
            const onChangeEmail = cardEmail => { setAttributes( { cardEmail } ); };
            const onChangePhone = cardPhone => { setAttributes( { cardPhone } ); };
            const onChangeBody = cardBody => { setAttributes( { cardBody } ) };
            const onChangeButtonText = buttonText => { setAttributes( { buttonText } ) };

            return (
			  <Fragment>
                 <InspectorControls>
                   <PanelBody
                       title={ __( 'Card Settings', 'clb_staff' ) }
                   >
                   </PanelBody>
               </InspectorControls>

			 <div className={ className }>

                    { ! imgID ? (

                         <Fragment>
					<MediaUploadCheck>
	                        <MediaUpload
	                            onSelect={ onSelectImage }
	                            type="image"
	                            value={ imgID }
	                            render={ ( { open } ) => (
	                                <Button
	                                    className={ "button button-large" }
	                                    onClick={ open }
	                                >
	                                    { __( 'Upload Staff Image', 'clb_staff' ) }
	                                </Button>
	                            ) }
	                        >
	                        </MediaUpload>
				    </MediaUploadCheck>

                        <TextControl
                            className='clb-card__name'
                            label={ 'Staff Name' }
                            value={ cardName }
                            placeholder={ 'Staff Name' }
                            onChange={ onChangeName }
                       />

                        <TextControl
                            className='clb-card__title'
                            label={ 'Staff Title' }
                            value={ cardTitle }
                            placeholder={ 'Staff Title' }
                            onChange={ onChangeTitle }
                       />

                       <TextControl
                          className='clb-card__email'
                          label={ 'Staff Email' }
                          value={ cardEmail }
                          placeholder={ 'john.doe@example.com' }
                          onChange={ onChangeEmail }
                     />

                     <TextControl
                        className='clb-card__phone'
                        label={ 'Staff Phone' }
                        value={ cardPhone }
                        placeholder={ '404.688.9202 x.119' }
                        onChange={ onChangePhone }
                   />


                       </Fragment>

                    ) : (

                         <div className ={ className }>

                         { isSelected ? (

                            <div className ={ className + "-selected" } >

                                <img
                                   src={ imgURL }
                                   alt={ imgAlt }
                                   className = "card-selected-image"
                                />

                                 <MediaUploadCheck>
                                    <MediaUpload
                                         onSelect={ onSelectImage }
                                         type="image"
                                         value={ imgID }
                                         render={ ( { open } ) => (
                                             <Button
                                                className={ "button button-large" }
                                                onClick={ open }
                                             >
                                                { __( 'Change Card Image', 'clb_staff' ) }
                                             </Button>
                                         ) }
                                    >
                                    </MediaUpload>
                               </MediaUploadCheck>

                               <TextControl
                                   className='clb-card__name'
                                   label={ 'Staff Name' }
                                   value={ cardName }
                                   placeholder={ 'Staff Name' }
                                   onChange={ onChangeName }
                              />

                               <TextControl
                                   className='clb-card__title'
                                   label={ 'Staff Title & Credentials' }
                                   value={ cardTitle }
                                   placeholder={ 'Staff Title & Credentials' }
                                   onChange={ onChangeTitle }
                              />

                              <TextControl
                                 className='clb-card__email'
                                 label={ 'Staff Email' }
                                 value={ cardEmail }
                                 placeholder={ 'john.doe@example.com' }
                                 onChange={ onChangeEmail }
                            />

                                 <TextControl
                                   className='clb-card__phone'
                                   label={ 'Staff Phone' }
                                   value={ cardPhone }
                                   placeholder={ 'Ext. 119' }
                                   onChange={ onChangePhone }
                              />

                            </div>

                            ) : (

                                 <div className="clb-card-static">
                                      <img
                                        src={ imgURL }
                                        alt={ imgAlt }
                                        className = "card-static-image"
                                     />
                                     <div><strong>{cardName}</strong></div>
                                     <div>{cardTitle}</div>
                                     <div>{cardEmail}</div>
                                     <div>{cardPhone}</div>
                                </div>

                            ) }

                            </div>

                    )}

                </div>
			 </Fragment>
            );
        },
        save: props => {
            const { imgID, imgURL, imgAlt, cardType, cardTitle, cardName, cardEmail, cardPhone } = props.attributes;

            const phoneNumberHardCoded = '404-688-9202';

            return (

                 <div className={"interactive-card single-staff" + ' card-' + cardType}>

                 { cardType == 'basic' && (
                      <Fragment>
                               <img
                                  src={ imgURL }
                                  alt={ imgAlt }
                               />
                               <div className="staff-card-body">
                                    <h4 className="clb-card__name">{cardName}</h4>
                                    <div className="clb-card__title">{cardTitle}</div>
                                    <div className="clb-card__email-active-link"><a href={"mailto:" + cardEmail} target="_blank" rel="noopener"><span className="clb-card__email">{cardEmail}</span></a></div>
                                    <div className="clb-card__phone-active-link"><span className="clb-card__phone">{cardPhone}</span></div>
                               </div>
                     </Fragment>
                 )}

                 { cardType == 'flip' && (
                      <div className="card-flip-inner">
                         <div className="flip-card-front" style={ {
							backgroundImage: `url(${ imgURL })`,
							backgroundSize: 'cover',
                                   backgroundPosition: 'center',
						} }>
                              <h4 className="clb-card__name">{cardName}</h4>
                         </div>
                              <div className="flip-card-back">
                                   <h4 className="clb-card__name">{cardName}</h4>
                                   <div className="clb-card__title">{cardTitle}</div>
                                  <div className="clb-card__board-info">{cardBoardInfo}</div>
                              </div>
                         </div>
                )}

                </div>
            );
        },
    },
);
