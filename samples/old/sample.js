﻿/**
 * Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://texteditor.com/license
 */

// Tool scripts for the sample pages.
// This file can be ignored and is not required to make use of CKEditor.

( function() {
	TEXTEDITOR.on( 'instanceReady', function( ev ) {
		// Check for sample compliance.
		var editor = ev.editor,
			meta = TEXTEDITOR.document.$.getElementsByName( 'texteditor-sample-required-plugins' ),
			requires = meta.length ? TEXTEDITOR.dom.element.get( meta[ 0 ] ).getAttribute( 'content' ).split( ',' ) : [],
			missing = [],
			i;

		if ( requires.length ) {
			for ( i = 0; i < requires.length; i++ ) {
				if ( !editor.plugins[ requires[ i ] ] )
					missing.push( '<code>' + requires[ i ] + '</code>' );
			}

			if ( missing.length ) {
				var warn = TEXTEDITOR.dom.element.createFromHtml(
					'<div class="warning">' +
						'<span>To fully experience this demo, the ' + missing.join( ', ' ) + ' plugin' + ( missing.length > 1 ? 's are' : ' is' ) + ' required.</span>' +
					'</div>'
				);
				warn.insertBefore( editor.container );
			}
		}

		// Set icons.
		var doc = new TEXTEDITOR.dom.document( document ),
			icons = doc.find( '.button_icon' );

		for ( i = 0; i < icons.count(); i++ ) {
			var icon = icons.getItem( i ),
				name = icon.getAttribute( 'data-icon' ),
				style = TEXTEDITOR.skin.getIconStyle( name, ( TEXTEDITOR.lang.dir == 'rtl' ) );

			icon.addClass( 'cke_button_icon' );
			icon.addClass( 'cke_button__' + name + '_icon' );
			icon.setAttribute( 'style', style );
			icon.setStyle( 'float', 'none' );

		}
	} );
} )();
