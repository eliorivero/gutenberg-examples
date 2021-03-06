/**
 * Hello World: Step 3
 *
 * Editable "Hello World" text.  Introduces the concept of attributes and
 * extracting them, and the default text formatting added by Editable.
 */
( function( blocks, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
	var Editable = blocks.Editable;
	var children = blocks.query.children;

	blocks.registerBlockType( 'gutenberg-examples/03-editable', {
		title: __( 'Example: Editable', 'gutenberg-examples' ),
		icon: 'universal-access-alt',
		category: 'layout',

		attributes: {
			content: children( 'p' ),
		},

		edit: function( props ) {
			var content = props.attributes.content;
			var focus = props.focus;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el(
				Editable,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
					focus: focus,
					onFocus: props.setFocus
				}
			);
		},

		save: function( props ) {
			return el( 'p', {}, props.attributes.content );
		},
	} );
} )(
	window.wp.blocks,
	window.wp.i18n,
	window.wp.element
);
